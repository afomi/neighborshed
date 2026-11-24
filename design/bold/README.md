# Bold line

NeighborShed's illustration style, chosen 2026-11-24: thick black hand-inked outlines with flat fills in muted sage green and soft dusty rose, used sparingly, with plenty of white, on white paper.
It replaced ink and wash (`../ink-and-wash/`) after a side-by-side at phone width: the bold line stays readable when small, where ink and wash's fine lines faded.
Many readers are over 50 and arrive on a phone from a Facebook feed, so reading at a glance matters most.
The first bold pass, in bright leaf green and rose pink, read as clip art; the colours were softened to match the site (`generated/shed.jpg` and friends, prompts `01` to `04`).
This folder is source material and is not published with the site (`design` is in `_config.yml`'s `exclude`).

## The style

- Thick black outlines, hand-inked, with a little print texture.
- Flat fills in two muted colours only, sage green and dusty rose, used sparingly; most of the drawing stays white.
- No text, no letters, no numbers.
- People are fine and drawn simply; hands show a loan between neighbors.
- Subjects are the thing the words talk about: tools, garden things, a fence, a porch.
  The mower is the familiar example; show the range too (ladders, shovels, post-hole diggers, hoses).

## Where it goes

- Beside a section's words, or in a hero's second column; one drawing per section at most, beside the copy, never behind it.
- On a phone the drawing follows the copy, so the words come first.
- Alt text says what is drawn, plainly.
- Markup: wrap the `<img>` in an element with the `drawing` class (`assets/css/tailwind.css`), which multiplies it onto the page and gives it a paper sheet in dark mode.

## Recipe

Every prompt is the fixed style block, then the subject, then the fixed tail.
Change only the subject and the aspect line (4:3 for a half-width hero, 1:1 for a card, 3:4 for a tall drawing, 3:2 or wider for a pair).

```text
Use your image generation tool once to generate this image. Reply with only the path of the generated file and the model you used. Landscape 4:3 if you can choose.

Image prompt:
Bold friendly illustration with thick black hand-inked outlines and flat fills in muted sage green and soft dusty rose used sparingly, with plenty of white left unfilled, gentle colours never bright or saturated, a little print texture, simple clear shapes that read well at a small size, on pure white paper. <SUBJECT>. Plain white background, no shadows. No text, no letters, no numbers.
```

Generate with the Grok CLI from this folder:

```
grok --prompt-file prompts/<name>.txt --tools image_gen --allow image_gen
```

Grok saves the image under `~/.grok/sessions/<session>/images/`; copy the keeper into `generated/`.

When two pictures must show the same object (the mower pair), ask for two side-by-side panels in one image with the object "drawn at exactly the same angle" in both, then crop each panel inside its frame.

Key the paper out and save as WebP:

```
magick generated/<name>.jpg -fuzz 6% -transparent white -trim +repage \
  -bordercolor none -border 16 -resize '1200x1000>' PNG32:/tmp/<name>.png
cwebp -q 88 -alpha_q 100 /tmp/<name>.png -o ../../assets/img/drawings/<name>.webp
```

## Drawings

| File | Subject | Prompt |
|---|---|---|
| `generated/soft-shed.jpg` → `assets/img/drawings/shed.webp` | A white shed, wooden doors open, roses around it: ladder, shovel, post-hole digger, mower, hose, watering can. Home page hero | `prompts/soft-01-shed.txt` |
| `generated/soft-mower-pair.jpg`, cropped to `soft-mower-idle.jpg` → `assets/img/drawings/mower-idle.webp` and `soft-mower-in-use.jpg` → `assets/img/drawings/mower-in-use.webp` | One mower at the same angle: idle beside a shed with a cobweb ("An item to share"), then pushed across a lawn by a neighbor in a straw sun hat ("Borrowing an Item") | `prompts/soft-03-mower-pair.txt` |
| `generated/soft-over-the-fence.jpg` → `assets/img/drawings/over-the-fence.webp` | Two hands, rose sleeve and green sleeve, passing a shovel over a rose-lined fence. Home page, Qart band | `prompts/soft-02-over-the-fence.txt` |
| `generated/soft-returned-light.jpg` → `assets/img/drawings/returned.webp` | A borrowed step ladder on a porch under a newly lit porch light, the bulb's box on its top step. Home page, closing row (desktop only) | `prompts/soft-04-returned-light.txt` |
