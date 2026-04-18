# Deployment Guide for Vercel

## Quick Steps to Deploy on Vercel

### Method 1: Using Vercel Dashboard (Recommended for Beginners)

1. **Go to Vercel**
   - Visit [https://vercel.com](https://vercel.com)
   - Sign up or log in with your GitHub account

2. **Import Project**
   - Click "Add New..." → "Project"
   - Select "Import Git Repository"
   - Choose `tishadua/fs-exp4` from your repositories
   - Click "Import"

3. **Configure Project**
   - Vercel will auto-detect it's a Vite project
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Deploy**
   - Click "Deploy"
   - Wait 1-2 minutes for deployment
   - Your app will be live at: `https://fs-exp4.vercel.app` (or similar)

### Method 2: Using Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (run from project directory)
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? fs-exp4
# - Directory? ./
# - Override settings? No

# For production deployment
vercel --prod
```

## After Deployment

Your app will be available at a URL like:
- `https://fs-exp4.vercel.app`
- `https://fs-exp4-username.vercel.app`

## Testing Locally Before Deployment

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run tests
npm test

# Build for production
npm run build

# Preview production build
npm run preview
```

## Troubleshooting

### Build Fails
- Make sure all dependencies are installed: `npm install`
- Check Node.js version (should be 16+)
- Verify build works locally: `npm run build`

### Tests Fail
- Run tests locally first: `npm test`
- Update snapshots if needed: `npm test -- -u`

### App Doesn't Load
- Check Vercel deployment logs
- Verify build output directory is `dist`
- Ensure `vercel.json` is present

## Environment Variables (if needed)

If you need environment variables:
1. Go to Vercel Dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Add variables (e.g., API keys)

## Custom Domain (Optional)

1. Go to Vercel Dashboard
2. Select your project
3. Go to Settings → Domains
4. Add your custom domain
5. Follow DNS configuration instructions

## Continuous Deployment

Once connected to GitHub:
- Every push to `main` branch automatically deploys
- Pull requests get preview deployments
- Rollback to previous deployments anytime

## Support

- Vercel Docs: [https://vercel.com/docs](https://vercel.com/docs)
- Vite Docs: [https://vitejs.dev](https://vitejs.dev)
