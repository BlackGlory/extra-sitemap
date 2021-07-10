export enum ChangeFrequency {
  Always = 'always'
, Hourly = 'hourly'
, Daily = 'daily'
, Weekly = 'weekly'
, Monthly = 'monthly'
, Yearly = 'yearly'
, Never = 'never'
}

export interface IURLItem {
  url: string
  lastModdified?: Date
  priority?: 0.0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1.0
  changeFrequency?: ChangeFrequency
}

export interface ISitemapItem {
  url: string
  lastModified?: Date
}
