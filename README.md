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

After loading `font-lansing-codes.css`, use a named class for an icon. The
stylesheet inserts the matching glyph with a `::before` pseudo-element:

``` html
<span
  class="icon-code-for-lansing"
  aria-hidden="true"
  style="
    font-size: 4rem;
    color: #3e79bb;
  "
></span>
```

You can also supply a glyph code through `data-icon`. The current codes are
`b` for Code for Lansing and `c` for the Lansing Codes logo:

``` html
<span data-icon="b" aria-hidden="true"></span> Code for Lansing
```

For a custom rule, apply the font family directly and put the glyph code in
the element. This does not need the generated icon classes:

``` html
<style>
  .group-icon { font-family: "FontLansingCodes"; }
</style>
<span class="group-icon" aria-hidden="true">c</span> Lansing Codes
```

Keep a text label beside a decorative icon, or provide an accessible name if
the icon itself conveys information.

## Making changes

Consider the `font-lansing-codes.svg` file as the one source of truth for this
web font.

You can add or change glypsh within the SVG using
[Inkscape](https://inkscape.org/) by following the directions on
[How to Make Your Own Icon Webfont](https://www.webdesignerdepot.com/2012/01/how-to-make-your-own-icon-webfont/).

If the linked how-to goes away, here are the important points from
the article:

1. Start with the [Inkscape Icon Font Template SVG](https://github.com/Heydon/Community-Icon-Font/blob/master/resources/inkscape_iconfont_canvas_template.svg)
2. Scale the graphic to fit in the drawing
3. Align the graphic to the baseline (slightly below the drawing)
4. Convert the graphic entirely to paths
5. Create a new glyph in `Text > SVG Font Editor` panel
6. Assign the new glyph a unique matching string (e.g. 'a', 'b', 'c', etc.)
7. Use _Get curves from selection_ to use the selected paths for the new glyph
8. Save the file as a plain SVG (not an Inkscape SVG)
9. Add style classes to the CSS file and use the unique matching string from
   Step 6 as the value of the `content` attribute for new glyphs

Once the SVG is up to date, go to
[fontconverter.org](https://www.fontconverter.org/) and use the SVG to generate
EOT, TTF, and WOFF versions of the font.

Save the generated files to the `generated/` directory, making sure to replace
the files that already exist there.

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
