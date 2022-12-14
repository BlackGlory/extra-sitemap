import { filter, dedent } from 'extra-tags'
import { removeBlankLines } from 'extra-utils'
import { Falsy, isntFalsy } from '@blackglory/prelude'

export function xml(strings: TemplateStringsArray, ...values: Array<string | Falsy>) {
  return (
    removeBlankLines(
      dedent(
        ...filter(isntFalsy, strings, ...values)
      )
    )
  )
}
