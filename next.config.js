/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images:{
    domains: ["raw.githubusercontent.com", "localhost", "upload.wikimedia.org"]
}
}
module.exports = nextConfig
