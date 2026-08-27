# Axel Mhar Valdepeña Portfolio

A personal portfolio site built with Astro and Tailwind CSS for GitHub Pages.

## Overview
This project showcases my software development experience, technology stack, and contact information in a simple, modern portfolio layout.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## GitHub Pages deployment
This site is configured for GitHub Pages and uses Astro static output.

1. Push the project to GitHub.
2. Open the repository Settings.
3. Go to Pages.
4. Set Source to GitHub Actions.
5. The deployment workflow in `.github/workflows/deploy.yml` will publish the site automatically.

## Important asset note
Static files such as the profile image and favicon must live in the `public` folder so GitHub Pages can serve them correctly.

Example:

```text
public/
  images/
    F203306B-BCEA-48AC-8195-82D6A3C02728_1_105_c.jpeg
    logo.png
```

The site references these assets with paths like:

```text
/images/F203306B-BCEA-48AC-8195-82D6A3C02728_1_105_c.jpeg
/images/logo.png
```
