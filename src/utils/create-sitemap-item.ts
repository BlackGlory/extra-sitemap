import { encode } from 'html-entities'
import { IURLItem } from '@src/types.js'
import { xml } from './xml.js'

export function createSitemapItem(urlItem: IURLItem): string {
  const { url, changeFrequency, lastModified, priority } = urlItem

  return xml`
    <url>
      <loc>${encode(url, { level: 'xml' })}</loc>
      ${lastModified && `<lastmod>${lastModified.toISOString()}</lastmod>`}
      ${changeFrequency && `<changefreq>${changeFrequency}</changefreq>`}
      ${priority && `<priority>${priority}</priority>`}
    </url>
  `
}
