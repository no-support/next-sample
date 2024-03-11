/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // example.com 아래의 이미지를 Image 컴포넌트에 표시하기 위해 추가한다
    domains: ["example.com"],
  },
};

module.exports = nextConfig;
