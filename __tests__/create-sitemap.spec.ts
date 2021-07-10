import { createSitemap } from '@src/create-sitemap'
import { ChangeFrequency, IURLItem } from '@src/types'
import { toArray } from 'iterable-operator'
import '@blackglory/jest-matchers'
import { stripIndent } from 'common-tags'

describe('createSitemap(urlItems: Iterable<IURLItem>): Iterable<string>', () => {
  test('empty items', () => {
    const items: IURLItem[] = []

    const result = createSitemap(items)
    const proResult = toArray(result).join('')

    expect(result).toBeIterable()
    expect(proResult).toBe(stripIndent`
      <?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      </urlset>
    `)
  })

  test('minimal items', () => {
    const items: IURLItem[] = [
      { url: 'http://example.com/1' }
    , { url: 'http://example.com/2' }
    ]

    const result = createSitemap(items)
    const proResult = toArray(result).join('')

    expect(result).toBeIterable()
    expect(proResult).toBe(stripIndent`
      <?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
          <loc>http://example.com/1</loc>
        </url>
        <url>
          <loc>http://example.com/2</loc>
        </url>
      </urlset>
    `)
  })

  test('full items', () => {
    const date = new Date()
    const items: IURLItem[] = [
      {
        url: 'http://example.com/1'
      , changeFrequency: ChangeFrequency.Always
      , lastModdified: date
      , priority: 0.5
      }
    , {
        url: 'http://example.com/2'
      , changeFrequency: ChangeFrequency.Always
      , lastModdified: date
      , priority: 0.5
      }
    ]

    const result = createSitemap(items)
    const proResult = toArray(result).join('')

    expect(result).toBeIterable()
    expect(proResult).toBe(stripIndent`
      <?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
          <loc>http://example.com/1</loc>
          <lastmod>${date.toISOString()}</lastmod>
          <changefreq>always</changefreq>
          <priority>0.5</priority>
        </url>
        <url>
          <loc>http://example.com/2</loc>
          <lastmod>${date.toISOString()}</lastmod>
          <changefreq>always</changefreq>
          <priority>0.5</priority>
        </url>
      </urlset>
    `)
  })
})
