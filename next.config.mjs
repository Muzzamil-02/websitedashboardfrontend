/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "spectreco-bucket.s3.us-east-1.amazonaws.com",
      "fi.spectreco.com",
    ],
  },
};

export default nextConfig;
