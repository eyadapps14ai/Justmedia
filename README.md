# Just Media — creative homepage

Local-only, dependency-free HTML, CSS and JavaScript. No public website deployment or external runtime requests.

## Preview
Run `python3 -m http.server 4173 --bind 127.0.0.1 --directory dist` from this folder, then open http://127.0.0.1:4173.

On this Mac, the bundled Python is available at `/Users/khaledaladdin/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3`.

## Editing
- `dist/index.html`: copy, services, illustrations, navigation and contact placeholders.
- `dist/style.css`: shared color tokens, typography, responsive layout and motion.
- `dist/app.js`: menu, pause control, reduced-motion handling and local brief download.
- `dist/assets/just-media-dark.svg`: transparent gold logo for dark backgrounds.
- `dist/assets/just-media-light.svg`: transparent charcoal logo for light backgrounds.
- `dist/assets/monogram.svg`: standalone JM mark.
- `dist/assets/hero-still.svg`: static background fallback.
- `dist/assets/events.svg`, `production.svg`, `digital.svg`: original concept illustrations, not completed projects.

Both logo wordmarks use vector paths and require no fonts. The design inherits Nara's deep black #0B0B0B, champagne #C5A36A, ivory #F2EEE5 and local Cormorant Garamond / Manrope font files. BHB also uses #C5A36A and #F2EEE5. There was no existing Just Media framework or source in this workspace.

The project brief downloads to the visitor's device; it is not sent or stored on a server. Replace the clearly marked contact placeholders and connect an approved delivery channel before launch. No invented clients, awards, projects or contact details are included.

Hero motion is native SVG/CSS, with no video download or runtime dependencies. Reduced-motion preferences show the still illustration. Without JavaScript, essential content and mobile navigation remain available and continuous motion is disabled.

## Creative redesign — October 10, 2026
The current homepage replaces the original serif/wireframe concept with oversized Manrope typography, a custom folded-ribbon JM mark, and a 30-second three-scene SVG sequence: illuminated event stage, production camera, and digital installation. Violet and magenta lighting complement the black/gold foundation, with restrained cyan accents. Beams sweep continuously; scenes crossfade slowly without flashing. The pause control freezes both beams and scene transitions. Reduced motion uses the static stage fallback.

Updated logo variants (all font-independent SVG paths):
- `just-media-dark.svg`: gold symbol with ivory wordmark.
- `just-media-light.svg`: darker gold symbol with black wordmark.
- `just-media-mono.svg`: single-color black.
- `just-media-white.svg`: single-color ivory.

The service articles in `index.html` are self-contained and can be expanded independently. The original first-preview files are preserved locally in `backups/first-preview/` and excluded from Git.

### Camera and stacked logo refinement
The logo now uses a centered JM symbol above the JUST MEDIA wordmark, across all four SVG variants and the homepage header/footer. The camera leads the hero sequence, gently swaying with a slow lens-light glow and projected beam. Camera and lens animations share the existing pause and reduced-motion behavior; mobile framing keeps the lens in view.
