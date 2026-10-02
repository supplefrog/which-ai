# Commonplace collection specimen sheet

- Final asset: `public/local-personal-revised/collection-artifacts.png`
- Native route: built-in `image_gen__imagegen`, called through `functions.exec`, with `transparent_background: true`.
- Backend/model version: unverified; no selector or model-version metadata was provided by this native tool.
- Original generated output: `C:\Users\E\.codex\generated_images\01a0fd5f-b3ad-7332-986e-94db75914317\exec-3685935e-3fd8-41d0-89de-e9c069a98026.png`
- Dimensions: 2056 × 765 pixels; PNG with 4-channel RGBA pixels.
- SHA256: `FA8A50DEBBDD6415471F0A4CB4569ED23072761B5B4CEA634EE6348320DC2245`
- Generation count: one native generation call. No edit calls, API/CLI fallback, uploads, or external assets.
- Saved by copying the original PNG without image transformations. Original remains in place.

## Inspection

Viewed the generated image using `view_image`. Left: open botanical notebook and leaf. Middle: folded blue-grey map, coral route, and pencil. Right: green open book with coral bookmark. All objects are fully visible, with separation between the three groups and no legible text. Exact equal-third cropping should be checked in the parent composition: the middle map's left edge extends slightly past the nominal first-third boundary. No image editing was applied.

Verified alpha with the existing Sharp dependency: 818,483 fully transparent pixels, 753,252 partially transparent pixels, and 1,105 fully opaque pixels. The large partial-alpha count comes from the native output; alpha has been preserved. No rendered-page verification was performed by this asset worker.

## Final prompt

```text
Use case: product-mockup
Asset type: one transparent cutout specimen sheet for three browsable collection records on a note-taking landing page.
Composition: wide landscape image divided into three equal side-by-side horizontal lanes. Each artifact group centered comfortably inside its own third, similar visual size, generous transparent separation between groups, no overlap between artifacts or thirds, plenty of transparent margins. Entire objects visible, no cropping. Consistent gently elevated near-top-down viewpoint.
Left third: an open pocket field notebook with a small botanical sketch and a real green leaf resting on a page, for a walking observation.
Middle third: a loosely folded blue-grey city sketch map with a coral/red meandering path and a pencil, for an unfinished project.
Right third: a handsome small green cloth-bound open book with a coral bookmark, for reading notes.
Style: cohesive editorial still-life / tactile paper illustration with convincing folds, page edges, cloth grain, soft light and delicate natural object shadows; restrained coral, forest green and slate accents. Sharp useful silhouettes, elegant and material rather than cartoonish.
Background: genuinely transparent alpha, including all empty areas around and between the three groups; no scene or surface behind the objects. Shadows subtle and local to objects.
Avoid: legible words, letters, text, UI, arrows, numbers, badges, scene background, frames, slogans, hands, extra props, watermark, checkerboard rendered as pixels. The book pages may have quiet abstract non-letter marks, never readable text.
```
