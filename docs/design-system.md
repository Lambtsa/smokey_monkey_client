# Design system: "Speakeasy"

A 1920s bar after dark: bottle-green rooms, brass fittings and art deco signage, with the monkey-in-a-suit photos as the stars. Tokens live in `src/app/globals.css` (`@theme`); this page says how to use them.

## Type

| Use | Font | Notes |
| --- | --- | --- |
| Titles, the wordmark | Limelight (`font-display`) | Always weight 400. Big: 104px for the home page title, 56–80px for page and section titles |
| Everything else | Josefin Sans (`font-sans`) | 300 for body copy, 600–700 for buttons |
| Small labels | Josefin Sans, the `eyebrow` utility | 13px, uppercase, 0.3em letter spacing, brass |
| Navigation, buttons, form labels | Josefin Sans, the `caps` utility | Uppercase, 0.16em letter spacing |

## Colours

| Token | Hex | Use |
| --- | --- | --- |
| `forest` | #0A1E15 | Page background |
| `bottle` | #0F2A1D | Sections and cards set apart from the page |
| `cellar` | #07150F | The footer, the photo grid |
| `burgundy` | #4D1C1C | One warm band per page at most |
| `brass` | #C9A15B | Labels, frames, the main button, icons |
| `brass-light` | #E3C88E | Hover on brass |
| `cream` | #F3EBD8 | Titles and main text |
| `parchment` | #DCD3C0 | Body copy |
| `stone` | #CFC6B3 | Secondary text, form labels |

All text colours pass 4.5:1 on every background colour.

## Shapes and details

- **Frames, not shadows:** cards and the form sit in a 1px brass frame (`border-brass/40`) with a little padding around the photo. Corners stay square.
- **The ornament** (`Ornament` in `components/container`): two brass lines and a diamond, under centred titles only.
- **Photos** fill their half of a split section. Hero photos are toned down with `sepia-[0.35] brightness-[0.55]` and a gradient so the text reads.
- **Buttons:** `primary` is filled brass with dark text; `outline` has a cream border. Links inside text blocks are brass capitals followed by an arrow (`LinkBtn`'s default `arrow` variant).
- **Icons:** thin line icons in `components/icon`, drawn in the current text colour.

## Page structure

Every page opens with a `Hero` (photo, brass label, title, up to two buttons), then alternates `SplitScreen` sections (`bottle`, `forest`, at most one `burgundy`), and the booking pages end with the reservation section.
