# Astro.js Blog Project Structure

This document outlines the key directories within a typical Astro.js blog project and their respective roles. Understanding this structure is essential for efficient development and maintenance.

## `src/pages`

*   **Role**: This directory is central to Astro's **file-based routing** mechanism.
*   **Function**: Any `.astro`, `.md`, or `.mdx` file placed within `src/pages` automatically becomes a page on your website. The file's path relative to `src/pages` dictates the final URL. For example:
    *   `src/pages/index.astro` becomes the homepage (`/`).
    *   `src/pages/about.astro` becomes the `/about` page.
    *   `src/pages/blog/[slug].astro` can be used to dynamically generate pages for blog posts, where `[slug]` is a parameter.
*   These files typically define the content and structure of individual pages, often importing layout components and UI components.

## `src/components`

*   **Role**: This directory houses reusable UI components.
*   **Function**: Components are typically `.astro` files that encapsulate a piece of UI, like a navigation bar, a footer, a card, or a button. These components can then be imported and used across multiple pages and layouts, promoting modularity and code reuse.

## `src/layouts`

*   **Role**: This directory contains layout components that define the common structure for different types of pages.
*   **Function**: Layouts are special `.astro` components that typically define the overall HTML skeleton (e.g., `<html>`, `<head>`, `<body>` tags) and provide slots for page-specific content. For example, a `BaseLayout.astro` might include the site header, navigation, and footer, with a `<slot />` where the content of individual pages is injected. Other layouts, like `PostLayout.astro`, might extend `BaseLayout.astro` to provide specific structures for blog posts.

## `src/content`

*   **Role**: This is the primary storage location for content collections, especially Markdown (`.md`) or MDX (`.mdx`) files.
*   **Function**: Astro's Content Collections feature allows you to manage and query content like blog posts, author profiles, or project descriptions. You define schemas for your collections (often in `src/content/config.ts` or `src/content/config.js`), and then store the actual content files within subdirectories of `src/content`. For example:
    *   `src/content/blog/` would store Markdown files for blog posts.
    *   `src/content/projects/` could store descriptions for project pages.
    Astro provides APIs to fetch and render this content dynamically.

## `public`

*   **Role**: This directory is for static assets that do not require any processing by Astro's build pipeline.
*   **Function**: Files placed in the `public` directory are copied directly to the root of your build output folder (usually `dist/`). This is the ideal place for:
    *   Images (`.jpg`, `.png`, `.svg`)
    *   Favicons (`favicon.ico`, `apple-touch-icon.png`)
    *   `robots.txt`
    *   Font files
    *   Any other static files that need to be accessible directly via a URL.
    For example, an image at `public/images/logo.png` will be available at `yourdomain.com/images/logo.png` after deployment.

## `src/styles`

*   **Role**: This directory is typically used for global stylesheets.
*   **Function**: You can place global CSS files (e.g., `global.css`, `tailwind.css`) here. These styles can then be imported into layout components or directly into specific pages or components to apply site-wide or section-specific styling.

## `src/utils`

*   **Role**: This directory is a common place to store utility functions or helper scripts.
*   **Function**: It can contain JavaScript or TypeScript files (`.js`, `.ts`) that provide reusable logic, such as date formatting functions, API helpers, or other custom utilities used throughout the project. This helps keep the codebase organized and DRY (Don't Repeat Yourself).

## `src/data`

*   **Role**: This directory is often used for storing site-wide configuration or static data.
*   **Function**: You might find files like `site-config.ts` or `navigation.json` here. These files can export objects or constants that define aspects of your site, such as:
    *   Site title, description, and other metadata.
    *   Navigation links.
    *   Social media URLs.
    This data can then be imported into components and pages as needed.
---

Understanding these directory conventions helps in navigating, contributing to, and scaling an Astro.js project effectively.
