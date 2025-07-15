# GitHub Pages Deployment Workflow

This directory contains the GitHub Actions workflow for automatically deploying the Bedrock PMO application to GitHub Pages.

## How It Works

The workflow (`deploy.yml`) is configured to:

1. Trigger automatically when changes are pushed to the `main` branch
2. Build the Vite React application
3. Deploy the built files to GitHub Pages

## Setup Required

To enable GitHub Pages deployment:

1. Go to your GitHub repository settings
2. Navigate to "Pages" in the sidebar
3. Under "Build and deployment", select "GitHub Actions" as the source
4. Ensure the repository has GitHub Pages enabled

## Manual Deployment

You can also manually trigger the deployment workflow:

1. Go to the "Actions" tab in your GitHub repository
2. Select the "Deploy to GitHub Pages" workflow
3. Click "Run workflow" and select the branch you want to deploy

## Local Development

For local development, the application will still work normally with:

```bash
npm run dev
```

The base path (`/bedrock-pmo/`) is only applied during the build process for GitHub Pages deployment.
