# The Smokey Monkey

Website of [The Smokey Monkey](https://www.smokey-monkey.com): pub and BBQ house in Strasbourg.

Built with [Next.js](https://nextjs.org/) (App Router), Tailwind CSS v4 and react-intl (French, English).

## Requirements

### NodeJS
You must use nvm to install NodeJS (version in `.nvmrc`).
To install [nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Pnpm
Pnpm is the node package manager used on this project.
To install pnpm, please run

```bash
$ npm install -g pnpm
```

## Installation

### Clone project

```bash
$ git clone https://github.com/Lambtsa/smokey_monkey_client.git
```

### Install dependencies

```bash
$ pnpm install
```

## Getting Started

```bash
pnpm dev
```

Open [http://localhost:8080](http://localhost:8080) with your browser to see the result.

### Environment variables

Create a `.env.local` with:

| Variable | Used for |
| --- | --- |
| `MAPBOX_TOKEN` | The map on the home page, read when pages are served |
| `GTAG` | Google Analytics id (optional), read when pages are served |
| `ZOHO_ID`, `ZOHO_PASSWORD` | SMTP account used by `POST /api/v1/email` (table reservations) |
| `APP_LOG_LEVEL` | Log level (optional): `debug` in development, `info` otherwise |

## Project structure

```
src/
  app/          routes (App Router): one page.tsx per URL, the root layout and API routes
  screens/      the content of each page
  components/   shared components, one folder each (snake_case), styled with Tailwind
  stores/       zustand stores (the visitor's language)
  schemas/      zod schemas shared by the reservation form and its API route
  locales/      translations (fr-FR is the reference for the TranslationKey type)
  utils/        helpers (routes, metadata, logger, …)
  assets/       pictures
public/         files served as they are (the menu PDF, fonts, icons)
```

Colours and fonts are defined in `src/app/globals.css` (`@theme`).

The menu ("La carte" in the navigation) is `public/menu.pdf`: replace that file to update it.

## Tests and lint

```bash
pnpm test      # vitest
pnpm lint      # eslint
pnpm lint:tsc  # type-check
```

Commits follow [conventional commits](https://www.conventionalcommits.org) (checked by commitlint in a git hook).

## Releases

Versions and the changelog are managed by [release-please](https://github.com/googleapis/release-please) (`release-please-config.json`, `.release-please-manifest.json`):

1. Merge pull requests into `main` with conventional commit messages (with squash merging, the **PR title** is the commit message): `feat: …` bumps the minor version, `fix: …` the patch, `feat!: …` or a `BREAKING CHANGE:` footer the major.
2. After each push to `main`, the **Release Please** workflow opens or updates a `chore(main): release x.y.z` pull request with the new version in `package.json` and the notes in `CHANGELOG.md`.
3. Merging that pull request creates the `vx.y.z` tag and a **draft** GitHub release.
4. Review the draft (Releases → Edit), then **Publish release** to deploy it (below).

## Deployment

Publishing a GitHub release runs the **Release** workflow: tests and lint run as usual, then the `Dockerfile` builds the app (Next.js standalone) into an image pushed to `ghcr.io/lambtsa/smokey_monkey_client` with two tags: the commit SHA and `latest`.

The image has no build-time settings, so the same image runs anywhere: the environment variables above are read from the server's environment when the container runs, and the site's own address (for link previews) from each request.

**Run the production image locally:**

```bash
docker build -t smokey-monkey .
docker run --rm -p 8080:8080 --env-file .env.local smokey-monkey
```
