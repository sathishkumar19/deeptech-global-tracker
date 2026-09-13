// Static export for GitHub Pages — no server, no API routes, no ISR.
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  // Project pages are served from https://<user>.github.io/<repo>/, so the
  // build needs a basePath matching the repo name when running in CI.
  basePath: isGithubActions && repoName ? `/${repoName}` : "",
};

export default nextConfig;
