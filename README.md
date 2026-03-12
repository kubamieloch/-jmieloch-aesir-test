# Design Tokens Package Template

This directory builds and publishes a minimal token package with:

- `dist/tokens/css/tokens.css`
- `dist/tokens/css/tokens.dark.css`
- `dist/tokens/css/tailwind.css`
- `dist/tokens/presets/vars.css`
- `dist/tokens/presets/tailwind.css`

## One-time setup

1. Push this directory as a separate GitHub repository.
2. Set package name in `package.json`:
   - use scoped name matching repository owner, e.g. `@kubamieloch/aesir-test`.
3. Keep repository default branch as `main`.

GitHub Actions included:

- `.github/workflows/ci.yml`: build + pack dry-run on push/PR
- `.github/workflows/publish.yml`: publish on tag `v*` (and manual run)

## Local usage

```bash
npm install
npm run build
npm run pack:local
```

Then consume in another app:

```css
@import '@kubamieloch/aesir-test/presets/tailwind.css';
```

or

```css
@import '@kubamieloch/aesir-test/presets/vars.css';
```

## Publish flow (GitHub Packages)

1. Bump version in `package.json`.
2. Commit and push to `main`.
3. Create tag and push:

```bash
git tag v0.1.0
git push origin v0.1.0
```

`publish.yml` will publish package to `npm.pkg.github.com`.

## Consumer setup (private package)

In consumer project `.npmrc`:

```ini
@kubamieloch:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${NPM_TOKEN}
```

In consumer `package.json`:

```json
{
	"dependencies": {
		"@kubamieloch/aesir-test": "^0.1.0"
	}
}
```
