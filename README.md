# Lansing Codes Web Font

This is a custom web font (like [Mfizz](http://fizzed.com/oss/font-mfizz) or
[FontAwesome](https://fontawesome.com/)) for Lansing tech groups with custom
logos.

The font exists so groups listed on [Lansing Codes](https://www.lansing.codes)
can be represented using their own logo while still allowing the icons to be
styled with CSS.

## Installation

This web font can be loaded using JSDelivr's CDN (the preferred method) or as an
NPM dependency.

### JSDelivr CDN

You can use a `link` element to load the web font directly from JSDelivr's CDN:

``` html
<link
  rel="preload"
  as="style"
  href="https://cdn.jsdelivr.net/npm/@lansingcodes/webfont@latest/font-lansing-codes.css"
>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@lansingcodes/webfont@latest/font-lansing-codes.css"
>
```

### NPM

Install the web font in your project using NPM:

``` sh
npm install --save @lansingcodes/webfont
```

If you are using Webpack or another code bundler, you can access the CSS file
like this:

``` js
require('@lansingcodes/webfont/font-lansing-codes.css')
```

Without a code bundler, you can access the files from `node_modules`. Here's
what's included in the package:

~~~
node_modules/
└── @lansingcodes
    └── webfont
        ├── font-lansing-codes.css
        ├── font-lansing-codes.svg
        └── generated
            ├── font-lansing-codes.eot
            ├── font-lansing-codes.svg
            ├── font-lansing-codes.ttf
            └── font-lansing-codes.woff
~~~

## Usage

See the [Contributing Guide](.github/CONTRIBUTING.md#usage) for named classes,
`data-icon` glyphs, custom CSS, and accessible examples.

## Contributing

The [Contributing Guide](.github/CONTRIBUTING.md) covers issue reports, pull
requests, local testing, and changing the font source.

## Questions

For general support, ask in the [Lansing Codes Slack team](https://slack.lansing.codes/).
Use this repository's [issues](https://github.com/lansingcodes/webfont/issues)
for webfont bug reports and feature requests.

## Stay in touch

- [Slack](https://slack.lansing.codes/)
- [Twitter](https://twitter.com/lansingcodes)
- [Facebook](https://www.facebook.com/lansingcodes)
- [Website](https://www.lansing.codes/)
- [Newsletter](https://www.lansing.codes/#newsletter)

## Code of Conduct
All participants are expected to treat others with respect and follow our
[Code of Conduct](https://www.lansing.codes/code-of-conduct/).

## License

[Hippocratic 2.1](https://firstdonoharm.dev)

Copyright (c) 2019-Present, Humanity Codes LLC
