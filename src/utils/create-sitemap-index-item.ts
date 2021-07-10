import { ISitemapItem } from '@src/types'
import { xml } from './xml'

export function createSitemapIndexItem(sitemapItem: ISitemapItem) {
  const { url, lastModified } = sitemapItem

  return xml`
    <sitemap>
      <loc>${encodeURI(url)}</loc>
      ${lastModified && `<lastmod>${lastModified.toISOString()}</lastmod>`}
    </sitemap>
  `
}
