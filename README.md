# Shubh Somani — portfolio (shubhsomani.tech)

The canonical site at https://shubhsomani.tech is the Cloudflare Worker named `portfolio` (Workers Static Assets + a `/api/chat` module). It is a direct Wrangler upload, not a git-connected Pages project.

`new.shubhsomani.tech` is a separate Coolify app from this repo's `main` branch and can lag the apex.

## Dev

`npm install && npm run dev`

## Build

`npm run build && npm run preview`

To ship a **preview version** of the Worker (does not change production):

```
npx wrangler versions upload
```

Do not run `wrangler deploy` unless you intend to promote the new version to shubhsomani.tech.

Pushing to `main` also triggers Cloudflare Workers Builds (the GitHub check
"Workers Builds: portfolio"), which deploys production automatically.
Non-secret vars must stay in wrangler.jsonc. Do not commit HERMES_URL;
it is stored as a Worker secret so those deploys keep it.
