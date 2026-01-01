import { NextResponse } from "next/server";

const routes = [
  {
    url: "/",
    lastmod: new Date().toISOString().split("T")[0],
    changefreq: "weekly",
    priority: "1.0",
  },
  {
    url: "#home",
    lastmod: new Date().toISOString().split("T")[0],
    changefreq: "weekly",
    priority: "0.9",
  },
  {
    url: "#about",
    lastmod: new Date().toISOString().split("T")[0],
    changefreq: "weekly",
    priority: "0.9",
  },
  {
    url: "#stats",
    lastmod: new Date().toISOString().split("T")[0],
    changefreq: "weekly",
    priority: "0.8",
  },
  {
    url: "#domains",
    lastmod: new Date().toISOString().split("T")[0],
    changefreq: "weekly",
    priority: "0.9",
  },
  {
    url: "#timeline",
    lastmod: new Date().toISOString().split("T")[0],
    changefreq: "weekly",
    priority: "0.8",
  },
  {
    url: "#gallery",
    lastmod: new Date().toISOString().split("T")[0],
    changefreq: "bi-weekly",
    priority: "0.7",
  },
  {
    url: "#sponsors",
    lastmod: new Date().toISOString().split("T")[0],
    changefreq: "monthly",
    priority: "0.7",
  },
  {
    url: "#faq",
    lastmod: new Date().toISOString().split("T")[0],
    changefreq: "weekly",
    priority: "0.8",
  },
];

function generateSiteMap(routes) {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${routes
        .map(({ url, lastmod, changefreq, priority }) => {
          const fullUrl =
            url === "/" ? "https://hacksync-2026.vercel.app" : `https://hacksync-2026.vercel.app${url}`;
          return `
        <url>
          <loc>${fullUrl}</loc>
          <lastmod>${lastmod}</lastmod>
          <changefreq>${changefreq}</changefreq>
          <priority>${priority}</priority>
        </url>
      `;
        })
        .join("")}
    </urlset>
  `;
}

export async function GET() {
  const sitemap = generateSiteMap(routes);
  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
