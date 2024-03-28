/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  images: {
    domains: ['yt3.googleusercontent.com', 'assets.vercel.com', 'codeit-images.codeit.com'],
  },
};

export default nextConfig;
