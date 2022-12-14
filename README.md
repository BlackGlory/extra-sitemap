# extra-sitemap
## Install
```sh
npm install --save extra-sitemap
# or
yarn add extra-sitemap
```

## API
```ts
enum ChangeFrequency {
  Always
, Hourly
, Daily
, Weekly
, Monthly
, Yearly
, Never
}

interface IURLItem {
  url: string
  lastModdified?: Date
  priority?: 0.0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1.0
  changeFrequency?: ChangeFrequency
}

interface ISitemapItem {
  url: string
  lastModified?: Date
}
```

### createSitemap
```ts
function createSitemap(urlItems: Iterable<IURLItem>): Iterable<string>
```

### createSitemapAsync
```ts
function createSitemapAsync(urlItems: AsyncIterable<IURLItem>): AsyncIterable<string>
```

### createSitemapIndex
```ts
function createSitemapIndex(sitemapItems: Iterable<ISitemapItem>): Iterable<string>
```

### createSitemapIndexAsync
```ts
function createSitemapIndexAsync(
  sitemapItems: AsyncIterable<ISitemapItem>
): AsyncIterable<string>
```
