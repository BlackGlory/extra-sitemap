import { encode } from 'html-entities'
import { ISitemapItem } from '@src/types.js'
import { xml } from './xml.js'

export function createSitemapIndexItem(sitemapItem: ISitemapItem) {
  const { url, lastModified } = sitemapItem

  return xml`
    <sitemap>
      <loc>${encode(url, { level: 'xml' })}</loc>
      ${lastModified && `<lastmod>${lastModified.toISOString()}</lastmod>`}
    </sitemap>
  `
}
