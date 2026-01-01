import { NextResponse } from "next/server";

const robotsTxt = `# Robots.txt for HackSync 2.0
# Comprehensive crawling and indexing rules

# Allow all search engines
User-agent: *
Allow: /
Disallow: /admin
Disallow: /.next
Disallow: /private

# Google-specific rules
User-agent: Googlebot
Allow: /
Crawl-delay: 0

# Bing
User-agent: Bingbot
Allow: /
Crawl-delay: 1

# Yandex
User-agent: YandexBot
Allow: /

# Block bad bots
User-agent: AhrefsBot
Disallow: /

User-agent: SemrushBot
Disallow: /

# Sitemaps
Sitemap: https://hacksync-2026.vercel.app/sitemap.xml
Sitemap: https://hacksync-2026.vercel.app/api/sitemap
`;

export async function GET() {
  return new NextResponse(robotsTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
