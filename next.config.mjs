/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      new URL(
        "https://icldwokdpctaqyoqyuzg.supabase.co/storage/v1/object/public/cabin-images/**"
      ),
      new URL(
        "https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/cabin-images/**"
      ),
    ],
  },
};

export default nextConfig;
