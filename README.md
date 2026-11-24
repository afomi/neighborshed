# NeighborShed

The source of [neighborshed.app](https://neighborshed.app): an open social protocol for lending and borrowing among neighbors.

The protocol itself is [`protocol.md`](protocol.md).
Each convention has a stable id (NS-1, NS-2, …); never reuse an id, and mark a retired one "withdrawn" instead of deleting it.

## Pages

- `index.html`: home
- `protocol.md`: the protocol, version in `_config.yml` (`protocol_version`)
- `implement.md`: adopting it, conformance, proposing changes, and the implementations list
- `about.md`: history, stewardship and license

## Writing conventions

- One sentence per line, in Markdown and in HTML text, for clean diffs.
- One attribute per line in HTML.

## Build

Built with Jekyll and Tailwind CSS 4.
Tailwind runs from a Jekyll plugin (`_plugins/tailwind.rb`) after each build.

```bash
npm ci
bundle install
bundle exec jekyll build
```

Pushing to `main` deploys to GitHub Pages (`.github/workflows/deploy-github-pages.yml`), the only deploy.

## Analytics

Set `ga4_measurement_id` in `_config.yml` to turn on Google Analytics (`_includes/analytics.html`).
Left empty, no analytics script is rendered.

## License

The content and the site are licensed CC BY 4.0; see [`LICENSE`](LICENSE).
There is no separate code license.
