import { addIndents } from '@utils/add-indents'
import { createSitemapItem } from '@utils/create-sitemap-item'
import { IURLItem } from '@src/types'

export function* createSitemap(urlItems: Iterable<IURLItem>): Iterable<string> {
  yield '<?xml version="1.0" encoding="UTF-8"?>\n'
  yield '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
  for (const urlItem of urlItems) {
    yield addIndents(' '.repeat(2), createSitemapItem(urlItem))
    yield '\n'
  }
  yield '</urlset>'
}
