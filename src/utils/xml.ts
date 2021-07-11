import { removeBlankLines, removeFalsyValues, dedent } from 'extra-tags'
import { Falsy } from 'justypes'

export function xml(strings: TemplateStringsArray, ...values: Array<string | Falsy>) {
  return (
    removeBlankLines(
      dedent(
        ...removeFalsyValues(strings, ...values)
      )
    )
  )
}
