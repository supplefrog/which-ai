$ErrorActionPreference = 'Stop'
$whichAppRoot = $PSScriptRoot
$whichNodePath = (Get-Command node).Source
$whichPort = 3000
$whichAddress = "http://127.0.0.1:$whichPort/local/compare"
function Test-WhichPort {
    $whichSocket = [System.Net.Sockets.TcpClient]::new()
    try { $whichSocket.Connect('127.0.0.1', $whichPort); return $true }
    catch { return $false }
    finally { $whichSocket.Dispose() }
}
if (Test-WhichPort) {
    Write-Output "Port $whichPort is already in use. If this is WhichAI, open $whichAddress"
    exit 0
}
if (-not (Test-Path -LiteralPath (Join-Path $whichAppRoot 'node_modules/next/dist/bin/next'))) {
    Push-Location -LiteralPath $whichAppRoot
    try { & npm.cmd ci --no-audit --no-fund; if ($LASTEXITCODE -ne 0) { throw 'Dependency install failed' } }
    finally { Pop-Location }
}
$whichRuntime = Join-Path $whichAppRoot '.local-runtime'
New-Item -ItemType Directory -Path $whichRuntime -Force | Out-Null
$whichNext = Join-Path $whichAppRoot 'node_modules/next/dist/bin/next'
$whichServer = Start-Process -FilePath $whichNodePath -ArgumentList @(('"' + $whichNext + '"'), 'dev', '--webpack', '--hostname', '127.0.0.1', '--port', "$whichPort") -WorkingDirectory $whichAppRoot -WindowStyle Hidden -RedirectStandardOutput (Join-Path $whichRuntime 'server.log') -RedirectStandardError (Join-Path $whichRuntime 'server-errors.log') -PassThru
$whichServer.Id | Set-Content -LiteralPath (Join-Path $whichRuntime 'server.pid')
Start-Sleep -Milliseconds 1000
if ($whichServer.HasExited) {
    $whichFailure = Get-Content -LiteralPath (Join-Path $whichRuntime 'server-errors.log') -Raw
    throw "WhichAI could not start. $whichFailure"
}
Write-Output "WhichAI is starting locally. Open $whichAddress"
