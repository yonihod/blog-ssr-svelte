import { getPosts } from './../services/wordpress';
export async function get() {

    const posts = await getPosts();
    const urls = posts.map((post) => {
      const dateString = post.modified;
      const date = new Date(dateString);

       return `<url><loc><![CDATA[https://blog.yonihodeffi.dev/posts/${post.id}]]></loc><lastmod><![CDATA[${date.toISOString()}]]></lastmod><changefreq><![CDATA[weekly]]></changefreq><priority><![CDATA[0.7]]></priority><image:image><image:loc><![CDATA[${post.jetpack_featured_media_url}]]></image:loc></image:image></url>`
    })
    const body = `<?xml version="1.0" encoding="UTF-8" ?>
    <urlset
      xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
      xmlns:xhtml="https://www.w3.org/1999/xhtml"
      xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
      xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
      xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
    >
    ${urls.toString()}
    </urlset>
    `
    
    const headers = {
      'Cache-Control': 'max-age=0, s-maxage=3600',
      'Content-Type': 'application/xml',
    }
    return {
      headers,
      body,
    }
  }