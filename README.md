# Touray Kunda Enterprise Website

Premium responsive website for Touray Kunda Enterprise / B.S.T Building Materials, Plumbing & Electricals.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. If that port is busy, Next.js will print the active local URL.

## Production Check

```bash
npm run predeploy
```

This runs linting, TypeScript checking, and a production build.

## Deployment

Recommended for Hostinger app hosting: upload the source-project zip with `package.json` at the root.

If using Hostinger's app upload screen, upload `touraykunda-hostinger-app.zip`.

Hostinger should detect this as a Next.js app.

Build command:

```bash
npm run build
```

Start command:

```bash
npm run start
```

Environment variable:

```bash
NEXT_PUBLIC_SITE_URL=https://touraykunda.gm
```

Alternative static hosting through hPanel File Manager:

1. Run the production check:

```bash
npm run predeploy
```

2. Temporarily enable `output: "export"` in `next.config.ts`.
3. Upload the contents of the generated `out` folder to the Hostinger `public_html` directory for `touraykunda.gm`.
4. In Hostinger hPanel, make sure `touraykunda.gm` points to that `public_html` directory.
5. Enable SSL for `touraykunda.gm`.
6. Visit `https://touraykunda.gm`.

Build command:

```bash
npm run build
```

Preview the static export locally:

```bash
npm run preview
```

## Content Updates

Product, category, and gallery data live in `src/lib/data.ts`.

The current logo file is `public/bst-logo.png`.

## Notes

Quote requests are currently client-side only and show a success message. To receive submissions in a dashboard or email inbox, connect the form to a backend such as Supabase, Firebase, Resend, or a custom API route.
