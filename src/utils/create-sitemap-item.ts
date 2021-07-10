import { IURLItem } from '@src/types'
import { xml } from './xml'

export function createSitemapItem(urlItem: IURLItem): string {
  const { url, changeFrequency, lastModdified, priority } = urlItem

  return xml`
    <url>
      <loc>${encodeURI(url)}</loc>
      ${lastModdified && `<lastmod>${lastModdified.toISOString()}</lastmod>`}
      ${changeFrequency && `<changefreq>${changeFrequency}</changefreq>`}
      ${priority && `<priority>${priority}</priority>`}
    </url>
  `
}
