// Next.js metadata route for robots.txt
// Docs: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/route-segment-config#robots

export default function robots() {
  const baseUrl = process.env.NEXTAUTH_URL || 'https://wojny-laserowe.vercel.app';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${baseUrl.replace(/\/$/, '')}/sitemap.xml`,
    host: baseUrl.replace(/\/$/, ''),
  };
}
