/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Licensed destination photography uploaded to Vercel Blob (native storage)
      { protocol: "https", hostname: "*.public.blob.vercel-storage.com" },
      // Allowed during design only — replace with licensed assets before launch
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};
export default nextConfig;
