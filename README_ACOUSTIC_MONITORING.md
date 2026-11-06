# Acoustic monitoring case study — integration notes

This package preserves the original static portfolio and adds a separate project case study based on:

Elie Abi Raad and Michael Vorländer (2023), “Acoustic monitoring of weld strength in ultrasonic metal welding by tracking welding stages”, Journal of Manufacturing Processes 101, 1055–1064. DOI: https://doi.org/10.1016/j.jmapro.2023.06.052

## What changed

- `work/acoustic-monitoring.html` — NEW dedicated case study with links to original figures.
- `assets/images/acoustic-monitoring/` — NEW original figure assets with descriptive filenames.
- `assets/styles.css` — appended scoped responsive page styles.
- `work/usmw.html` — added a journal case-study link; existing broad doctoral narrative remains.
- `work.html` — added a small featured research deep-dive link.
- `assets/script.js` — added `aria-expanded` updates to the shared mobile navigation handler.

No build step or external dependencies are needed. Open `work/acoustic-monitoring.html` locally to preview. To publish, upload the contents of `elie-portfolio-deploy/` to the web root of the existing GitHub Pages site, preserving relative folders.

## Editorial notes

- The article evaluated a real-time-capable monitoring approach, not a deployed closed-loop production controller.
- Detection was 40/40 for stage-5 welds in experimental group 3, and 0/40 earlier-stage welds in group 1. Three group-2 welds also met the criterion; these had strengths comparable to group 3. This is not a claim of 100% production accuracy.
- Strength results are limited to the tested copper-sheet conditions.
- The publisher's figure-reuse policy should be checked before public release, even though these copies came from the author.
