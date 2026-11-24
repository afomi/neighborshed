# Ink and wash

NeighborShed's illustration style: loose black ink pen with watercolour washes in two garden pigments, on white paper.
Adapted on 2026-11-24 from Qart's ink-and-wash recipe (qart `design/ink-and-wash/README.md`, chosen there 2026-11-10).
The method is the same; the pigments and subjects are NeighborShed's own.
This folder is source material and is not published with the site (`design` is in `_config.yml`'s `exclude`).

## The style

- Black ink line, loose and hand-drawn.
- Two watercolour pigments only: a soft sap green and a pale rose pink, to match the site's `brand` and `bloom` colours.
- Lots of white paper, no background wash, no shadows.
- No faces, no text, no letters, no numbers.
  Hands are fine where they show something being shared.
  (Qart draws no people at all; hands are NeighborShed's one change, so a drawing can show a loan between neighbors.)
- The subject is the thing the words talk about, drawn plainly: tools, garden things, a fence, a doorstep.
  The mower is the familiar example; show the range too (ladders, shovels, post-hole diggers, hoses).

## Where it goes

- Beside a section's words, to show what they talk about, or in a hero's second column.
  One drawing per section at most; it sits beside the copy, never behind it.
- On a phone the drawing follows the copy, so the words come first.
- Alt text says what is drawn, plainly.
- The two colour illustrations of the red mower (`assets/img/lawnmower.jpg`, `mowing-lawn.jpg`) predate this style and stay as they are.

## 1. Write the prompt

Every prompt is the fixed style block, then a subject sentence or two.
Change only the subject and the aspect line.

```text
Use your image generation tool once to generate this image. Reply with only the path of the generated file and the model you used. Landscape 4:3 if you can choose.

Image prompt:
Loose black ink pen drawing with watercolor washes on pure white paper, two pigments only: a soft sap green and a pale rose pink. <SUBJECT>. Lots of white paper, no background wash, no shadows. No faces, no text, no letters, no numbers.
```

Aspect: 4:3 for a half-width hero, 1:1 for a card, 3:4 for a tall margin drawing.

Save each prompt in `prompts/` as `NN-<name>.txt`, and Grok's reply beside it as `NN-<name>.response.txt`.

## 2. Generate it

With the Grok CLI, which has an `image_gen` tool in headless mode, run from this folder:

```
grok --prompt-file prompts/NN-<name>.txt --tools image_gen --allow image_gen
```

Grok saves the image under `~/.grok/sessions/<session>/images/`.
Copy the one you keep into `generated/<name>.jpg`.
If an image comes back blank or off-style, run it again, and note the reject in the response file.

## 3. Key the paper out

White becomes transparent, so the pigment sits on the page:

```
magick generated/<name>.jpg -fuzz 10% -transparent white -trim +repage \
  -bordercolor none -border 20 -resize '1200x900>' PNG32:/tmp/<name>.png
cwebp -q 85 -alpha_q 100 /tmp/<name>.png -o ../../assets/img/ink-wash/<name>.webp
```

Use a lower `-fuzz` (around 8%) for a pale wash, so its edge survives.
Check the result on white: holes in a pale wash are paper showing through, which is right.
A grey box around the drawing means the white wasn't keyed.

## 4. Put it on a page

```html
<figure class="ink-wash">
  <img
    src="{{ "/assets/img/ink-wash/<name>.webp" | relative_url }}"
    alt="What the drawing shows, plainly."
    width="…"
    height="…"
    loading="lazy"
  >
</figure>
```

`.ink-wash` (in `assets/css/tailwind.css`) multiplies the drawing onto the page.
In dark mode it lays the drawing on a paper sheet (`#FBF8F2`), because black ink vanishes on a dark page.

## Drawings

| File | Subject | Prompt |
|---|---|---|
| `generated/shed.jpg` → `assets/img/ink-wash/shed.webp` | A garden shed, doors open, roses over it: ladder, shovel, post-hole digger, hose, watering can, push mower. Home page hero | `prompts/01-shed.txt` |
| `generated/over-the-fence.jpg` → `assets/img/ink-wash/over-the-fence.webp` | Two hands passing a trowel over a rose-lined picket fence (asked for a shovel; Grok drew a trowel). Home page, beside the Qart call to action | `prompts/02-over-the-fence.txt` |
| `generated/returned.jpg` → `assets/img/ink-wash/returned.webp` | A returned step ladder at a front door, flowers tied on as thanks. Home page, closing row (desktop only) | `prompts/03-returned.txt` |
