export function addIndents(indent: string, text: string): string {
  return text
    .split('\n')
    .map(x => `${indent}${x}`)
    .join('\n')
}
