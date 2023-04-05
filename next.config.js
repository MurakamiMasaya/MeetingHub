/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true }
    return config
  },
  compiler: {
    emotion: true
  },
  env: {
    DYNAMODB_ENDPOINT: process.env.DYNAMODB_ENDPOINT,
    DYNAMODB_REGION: process.env.DYNAMODB_REGION,
    DYNAMODB_ACCESS_KEY_ID: process.env.DYNAMODB_ACCESS_KEY_ID,
    DYNAMODB_SECRET_ACCESS_KEY: process.env.DYNAMODB_SECRET_ACCESS_KEY,
  },
}

module.exports = nextConfig
