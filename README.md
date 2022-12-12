# tagged-hypertext

The `tagged-hypertext` package provides the `html` function that can be used as a template tag to safely generate HTML code.

This library is lightweight (2 KB) and only performs string escaping and concatenation (no virtual DOM stuff involved). [There is 100% test coverage and looking at the tests is the best way to learn how to use this library.](./src/html.test.ts)

## Example

```ts
import { html, renderHtml } from 'tagged-hypertext'

const div = html`
  <div class="container">
    <h1>Hello, world!</h1>
    <p>Here is a list of items:</p>
    <ul>
      ${['<foo>', 'bar&', '"baz"', html`<b>whee</b>`].map(
        (item) => html`<li>${item}</li>`,
      )}
    </ul>
  </div>
`

console.log(renderHtml(div))
/*
  <div class="container">
    <h1>Hello, world!</h1>
    <p>Here is a list of items:</p>
    <ul>
      <li>&lt;foo&gt;</li><li>bar&amp;</li><li>&quot;baz&quot;</li><li><b>whee</b></li>
    </ul>
  </div>
*/
```

See the [tests](./src/html.test.ts) for more examples.

## API reference

<https://apiref.page/package/tagged-hypertext>

[![API reference screenshot](https://ss.dt.in.th/api/screenshots/apiref-tagged-hypertext.png)](https://apiref.page/package/tagged-hypertext)
