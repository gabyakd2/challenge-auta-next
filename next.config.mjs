/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_API_KEY: "AIzaSyBW2fNwBHcPxvyXj2rcvuajidIXVKiZsH4",
    NEXT_PUBLIC_AUTH_DOMAIN: "challenge-auta.firebaseapp.com",
    NEXT_PUBLIC_PROJECT_ID: "challenge-auta",
    NEXT_PUBLIC_STORAGE_BUCKET: "challenge-auta.appspot.com",
    NEXT_PUBLIC_MESSAGING_SENDER_ID: "385581825242",
    NEXT_PUBLIC_APP_ID: "1:385581825242:web:d1a46b0acb26885fce79e3",
    NEXT_PUBLIC_MEASUREMENT_ID: "G-SLCDYVE8MC",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
