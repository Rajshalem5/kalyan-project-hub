<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Architecture decisions

- The home page (`/`) is the KALYAN cinematic portfolio, implemented from the pasted "Recreate RENANDO" spec: verbatim component code in `src/portfolio/App.jsx` (+ `App.d.ts`) and verbatim CSS in `src/portfolio/styles.css`, mounted by `src/routes/index.tsx`. Why: the spec requires exact layout/motion values, kept as a self-contained module instead of being rewritten into Tailwind/shadcn.
- Portfolio assets (portrait, certificates, logos, CV, favicon) live under `public/Asset/` and are referenced by `${import.meta.env.BASE_URL}Asset/...` paths (via `const ASSET`), so the same build works at the domain root and under the GitHub Pages project path `/kalyan-project-hub/`; project/brand data in `src/data/*.json`. Why: the spec's code uses those relative asset paths.
- `src/portfolio/styles.css` ends with a small `body{background:var(--bg);color:var(--ink)}` integration rule. Why: the host app's Tailwind base layer otherwise paints the dark site white.
