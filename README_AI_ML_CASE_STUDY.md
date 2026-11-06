# Responsive portfolio website — AI/ML & statistics

This package is the updated **complete portfolio website**, ready to commit to the GitHub repository used for the site. It extends the supplied `Website_portfolio_acoustic_monitoring_updated.zip`; all existing pages and images have been retained.

## What's new

- `work/machine-learning.html` — the AI/ML and statistics research case study.
- `work/ml-case-study.css` and `work/ml-case-study.js` — dedicated case-study styles and figure-viewer interactions.
- `work/ml-assets/` — source-paper figures and the two PDF research references used on the page.
- A direct **AI & ML** navigation link throughout the existing portfolio, plus featured cards and contextual links from the relevant PhD, acoustic-monitoring, research-program, capability and technical-depth pages.
- Clarified dataset provenance: the classification paper analyzed the **same 120 original welds plus three additional measurements** (123 total). The two studies used different preprocessing approaches and modeling targets.
- Corrected the strength-regression terminology on `work/usmw.html`: raw R² = 0.44, adjusted R² = 0.36, compared with R² = 0.13 for the time-only baseline. These are in-sample fit metrics.
- Unified the AI/ML page with the portfolio's existing light, editorial visual theme, including the same navigation and footer.
- Rebalanced oversized headings, long text lines, section spacing and cards for desktop/laptop screens, with single-column layouts where appropriate for phones.
- Corrected research-figure sizing across the site: images preserve their original aspect ratios instead of being stretched or cropped. Acoustic-monitoring figures appear at consistent, readable widths with captions and full-resolution links.

## Commit to GitHub

1. Extract this archive.
2. Copy the **contents** of `elie-portfolio-deploy/` into the **root** of your existing website repository, retaining the paths and folders. Overwrite the matching files with these updated versions.
3. From the repository root, run:

   ```bash
   git status
   git add index.html work.html capabilities.html expertise.html about.html assets/ work/ README_AI_ML_CASE_STUDY.md
   git commit -m "Refine responsive portfolio and integrate AI/ML study"
   git push
   ```

   If your repository also tracks updated files not included in the explicit `git add` list, inspect them with `git status` and stage them separately as appropriate.

4. If your portfolio is deployed through GitHub Pages, check that the live navigation and figure assets load after the GitHub Pages build/deploy finishes.

No JavaScript build system or extra dependencies are required; the site is static HTML, CSS and JavaScript. Asset links are relative, so the file structure must be preserved.

## Where to check

- `index.html` — a featured AI/ML project card.
- `work.html` — AI/ML card and research deep dive, including its **Data & modeling** filter.
- `work/machine-learning.html` — primary case study with research figures, expandable charts and paper downloads.
- `work/acoustic-monitoring.html` — companion journal study linking back to the AI/ML methods.

The AI/ML study now shares the portfolio's light theme. For the best experience, view the full-size research graphs by clicking the figure links; the inline copies are intentionally constrained to keep the page visually balanced on smaller screens.
