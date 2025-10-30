// Next.js metadata route for sitemap.xml
// Docs: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/route-segment-config#sitemap

export default function sitemap() {
  const baseUrl = (process.env.NEXTAUTH_URL || 'https://wojny-laserowe.vercel.app').replace(/\/$/, '');
  const lastModified = new Date();

  const routes = [
    '/',
    '/o-nas',
    '/efekty',
    '/faq',
    '/kontakt',
    '/laserowe-usuwanie-tatuazu',
    '/scarink-regeneracja-blizn',
  ];

  return routes.map(path => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: path === '/' ? 1.0 : 0.7,
  }));
}
