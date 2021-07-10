import { addIndents } from '@utils/add-indents'
import { createSitemapIndexItem } from '@utils/create-sitemap-index-item'
import { ISitemapItem } from '@src/types'

export async function* createSitemapIndexAsync(
  sitemapItems: AsyncIterable<ISitemapItem>
): AsyncIterable<string> {
  yield '<?xml version="1.0" encoding="UTF-8"?>\n'
  yield '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
  for await (const sitemapItem of sitemapItems) {
    yield addIndents(' '.repeat(2), createSitemapIndexItem(sitemapItem))
    yield '\n'
  }
  yield '</sitemapindex>'
}
