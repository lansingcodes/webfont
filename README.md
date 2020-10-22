# Lansing Codes Web Font

This is a custom web font (like [Mfizz](http://fizzed.com/oss/font-mfizz) or
[FontAwesome](https://fontawesome.com/)) for Lansing tech groups with custom
logos.

The font exists so groups listed on [Lansing Codes](https://www.lansing.codes)
can be represented using their own logo while still allowing the icons to be
styled with CSS.

## Code of Conduct
All participants are expected to treat others with respect and follow our [Code of Conduct](https://www.lansing.codes/code-of-conduct/).

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

## Using the web font

Do not use GitHub as a CDN for loading this web font! Instead, copy the CSS,
SVG, EOT, TTF, and WOFF files into your project.

Once in place, you may need to adjust the URLs in your copy of the CSS file to
point at the correct locations. For example, if you put the SVG and other font
files in the same directory in your project, you may need to remove the
`generated/` portion of the URL. If using Webpack, you may want to use a path
helper such as `~assets/fonts` instead of the relative `./` path.

Then you can use the style classes to use the web font in your project, like
this:

``` html
<span
  class="icon-code-for-lansing"
  style="
    font-size: 4rem;
    color: #3e79bb
  "
></span>
```

## License

[Hippocratic 2.1](https://firstdonoharm.dev)

Copyright (c) 2019-Present, Humanity Codes LLC