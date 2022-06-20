# Frontend of Nova

The frontend of Nova. It uses React and TypeScript.
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Table of contents
- [General](#general)
- [Linting](#linting)
- [Testing](#testing)
- [E2E Testing](#e2e-testing)
- [Development](#development)
- [Production](#production)
- [Docker](#docker)
- [Learn more](#learn-more)

## General

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Linting

```bash
npm run lint

# Resolve fixable errors.
npm run lint:fix
```

## Testing
```bash
npm run test

# Test with coverage
npm run test:coverage 
```

## E2E Testing

This project uses Playwright for end to end testing. To run Playwright locally you'll need to install the browsers.
```bash
# Install default browsers
npx playwright install
```

Only install a specific browser.
```bash
npx playwright install firefox
```

For a list of supported browsers use the following command:
```bash
npx playwright install --help
```

Use environment variables to avoid hard coding secrets. By default environment variables are only available to the Node.js environment.
To expose them to the browser use the `NEXT_PUBLIC_` prefix.
Create a local .env file in the frontend folder.
```bash
touch .env.local

# Fill the .env.local file with a base URL.
# Don't run this command on an existing .env file. This command will overwrite all existing data. 
cat <<EOT > .env.local
BASE_URL=""
NEXT_AUTH_SECRET=""
NEXT_PUBLIC_API_URL=""
EOT
```

The server needs to be started before Playwright can run. 
```bash
npm run dev
```

Run the E2E tests.
```bash
npm run test:e2e
```

For more information checkout the [documentation](https://playwright.dev/docs/intro) or use the help command.
```bash
npx playwright --help
```

## Development

To run the project in development use the following command:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Production

The project needs to be build first to run the production version.
```bash
npm run build
npm run start
```

## Docker
Alternatively you can use Docker to run the project.

Build the image.
```bash
docker build -t nextjs-docker .
```

Run the container.
```bash
docker run -p 3000:3000 nextjs-docker
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
