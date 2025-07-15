# Bedrock PMO

A Project Management Office (PMO) application built with React, TypeScript, and Vite.

## Features

- Modern React application with TypeScript
- Styled with Tailwind CSS and Material UI
- Firebase integration
- Responsive design

## Development

To run the application locally:

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at http://localhost:5173/

## Building for Production

```bash
npm run build
```

This will generate optimized production files in the `dist` directory.

## GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### How It Works

When changes are pushed to the `main` branch, a GitHub Actions workflow automatically:

1. Builds the application
2. Deploys it to GitHub Pages

### Setup Required

To enable GitHub Pages deployment:

1. Go to your GitHub repository settings
2. Navigate to "Pages" in the sidebar
3. Under "Build and deployment", select "GitHub Actions" as the source
4. Ensure the repository has GitHub Pages enabled

### Manual Deployment

You can also manually trigger the deployment:

1. Go to the "Actions" tab in your GitHub repository
2. Select the "Deploy to GitHub Pages" workflow
3. Click "Run workflow" and select the branch you want to deploy

## Configuration

The application is configured to use the base path `/bedrock-pmo/` when deployed to GitHub Pages. This ensures that assets are loaded correctly.

For local development, this base path is not applied, allowing the application to run normally at the root path.
