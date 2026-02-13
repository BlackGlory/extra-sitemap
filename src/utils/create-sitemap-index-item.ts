import { ISitemapItem } from '@src/types.js'
import { xml } from './xml.js'

export function createSitemapIndexItem(sitemapItem: ISitemapItem) {
  const { url, lastModified } = sitemapItem

  return xml`
    <sitemap>
      <loc>${encodeURI(url)}</loc>
      ${lastModified && `<lastmod>${lastModified.toISOString()}</lastmod>`}
    </sitemap>
  `
}
