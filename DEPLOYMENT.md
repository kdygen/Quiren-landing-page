# Deployment Guide

## Local Development

1. **Start the dev server:**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173` (or the port shown in terminal)

2. **Preview production build locally:**
   ```bash
   npm run build
   npm run preview
   ```

## Deploy to Other Platforms

### Vercel / Netlify

1. **Keep base as `/`** in `vite.config.js`
2. Connect your repository
3. Build command: `npm run build`
4. Output directory: `dist`

### Custom Domain

1. Set base to `/` in `vite.config.js`
2. Build and deploy normally

## Troubleshooting

- **Blank page locally:** Make sure `base: '/'` in `vite.config.js` for local dev
- **Blank page on GitHub Pages:** Make sure `base: '/your-repo-name/'` matches your repository name exactly
- **Assets not loading:** Check browser console for 404 errors and verify base path matches deployment location

