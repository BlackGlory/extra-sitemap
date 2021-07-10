import {
  removeMultilineHeader
, removeMultilineFooter
, removeFalsyValues
, removeExtraIndents
, toString
, removeBlankLines
} from 'extra-tags'
import { Falsy } from 'justypes'

export function xml(strings: TemplateStringsArray, ...values: Array<string | Falsy>) {
  return (
    removeExtraIndents(
      removeBlankLines(
        removeMultilineFooter(
          removeMultilineHeader(
            toString(
              ...removeFalsyValues(strings, ...values)
            )
          )
        )
      )
    )
  )
}
