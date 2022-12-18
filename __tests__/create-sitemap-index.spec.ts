import { createSitemapIndex } from '@src/create-sitemap-index'
import { ISitemapItem } from '@src/types'
import { toArray } from 'iterable-operator'
import { dedent } from 'extra-tags'

describe('createSitemapIndex(sitemapItems: Iterable<ISitemapItem>): Iterable<string>', () => {
  test('empty items', () => {
    const items: ISitemapItem[] = []

    const iter = createSitemapIndex(items)
    const result = toArray(iter).join('')

    expect(result).toBe(dedent`
      <?xml version="1.0" encoding="UTF-8"?>
      <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      </sitemapindex>
    `)
  })

  test('minimal items', () => {
    const items: ISitemapItem[] = [
      { url: 'http://example.com/sitemap-1.xml' }
    , { url: 'http://example.com/sitemap-2.xml' }
    ]

    const iter = createSitemapIndex(items)
    const result = toArray(iter).join('')

    expect(result).toBe(dedent`
      <?xml version="1.0" encoding="UTF-8"?>
      <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <sitemap>
          <loc>http://example.com/sitemap-1.xml</loc>
        </sitemap>
        <sitemap>
          <loc>http://example.com/sitemap-2.xml</loc>
        </sitemap>
      </sitemapindex>
    `)
  })

  test('full items', () => {
    const date = new Date()
    const items: ISitemapItem[] = [
      {
        url: 'http://example.com/sitemap-1.xml'
      , lastModified: date
      }
    , {
        url: 'http://example.com/sitemap-2.xml'
      , lastModified: date
      }
    ]

    const iter = createSitemapIndex(items)
    const result = toArray(iter).join('')

    expect(result).toBe(dedent`
      <?xml version="1.0" encoding="UTF-8"?>
      <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <sitemap>
          <loc>http://example.com/sitemap-1.xml</loc>
          <lastmod>${date.toISOString()}</lastmod>
        </sitemap>
        <sitemap>
          <loc>http://example.com/sitemap-2.xml</loc>
          <lastmod>${date.toISOString()}</lastmod>
        </sitemap>
      </sitemapindex>
    `)
  })
})
