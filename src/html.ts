import { escape } from 'lodash-es'

/**
 *
 */
export function html(
  strings: TemplateStringsArray,
  ...values: any[]
): Hypertext {
  return new Hypertext(
    strings.reduce(
      (acc, str, i) => acc + Hypertext.from(values[i - 1]).toHtml() + str,
    ),
  )
}

export class Hypertext {
  constructor(private __html: string) {}
  static from(html: any): Hypertext {
    if (Array.isArray(html)) {
      return new Hypertext(html.map((x) => Hypertext.from(x).toHtml()).join(''))
    } else if (typeof html === 'string') {
      return new Hypertext(escape(html))
    } else if (html == null) {
      return new Hypertext('')
    } else if (html instanceof Hypertext) {
      return html
    } else if (html.__html) {
      return new Hypertext(html?.__html)
    } else {
      return new Hypertext(escape(String(html)))
    }
  }
  toHtml() {
    return this.__html
  }
}

export type Html = Hypertext | string | Html[]

export function renderHtml(html: Html): string {
  return Hypertext.from(html).toHtml()
}
