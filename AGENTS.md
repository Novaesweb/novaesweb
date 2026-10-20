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

- Keep the addons catalog in `src/data/plans.ts` with stable IDs and render it through `AddonCatalog`; category expansion state and WhatsApp requests use those records to avoid duplicate services or divergent quotes.
- When pushing files to GitHub through the connector gateway, create each blob with `encoding: "base64"` and build the tree from the returned blob SHAs — never put base64 in a tree entry's `content` field, because GitHub stores that string literally and the repository ends up holding encoded text instead of real files.
