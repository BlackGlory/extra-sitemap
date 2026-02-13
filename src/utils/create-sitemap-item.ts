import { IURLItem } from '@src/types.js'
import { xml } from './xml.js'

export function createSitemapItem(urlItem: IURLItem): string {
  const { url, changeFrequency, lastModified: lastModdified, priority } = urlItem

  return xml`
    <url>
      <loc>${encodeURI(url)}</loc>
      ${lastModdified && `<lastmod>${lastModdified.toISOString()}</lastmod>`}
      ${changeFrequency && `<changefreq>${changeFrequency}</changefreq>`}
      ${priority && `<priority>${priority}</priority>`}
    </url>
  `
}
