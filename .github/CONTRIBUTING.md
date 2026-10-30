# Lansing Codes Web Font Contributing Guide

Thanks for helping maintain this community icon font. Please read the
[Code of Conduct](https://www.lansing.codes/code-of-conduct/) first.

- [Issue Reporting Guidelines](#issue-reporting-guidelines)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Development Setup](#development-setup)
- [Usage](#usage)
- [Making changes](#making-changes)
- [Testing changes](#testing-changes)

## Issue Reporting Guidelines

Search [existing issues](https://github.com/lansingcodes/webfont/issues)
before filing a new one. For a rendering bug, include the icon, browser,
operating system, a minimal HTML/CSS example, and what appeared instead of the
expected glyph. For a new icon, explain which Lansing tech group it represents
and link to artwork you have permission to contribute.

## Pull Request Guidelines

Create a focused branch from `main` and open a pull request back to `main`.
Link the related issue and describe the visual change. Include a before/after
image or a short local browser check, and list any generated font files that
changed. Ask a maintainer to review before merging; only maintainers should
publish a new package version.

## Development Setup

You need [Git](https://git-scm.com/downloads), a text editor with SVG and CSS
support, a modern browser, and [Node.js](https://nodejs.org/) with npm to
inspect the package. Use [Inkscape](https://inkscape.org/) when editing the
source font SVG. No service credentials are required for a local preview.

Fork this repository, then clone your fork:

```sh
git clone https://github.com/YOUR-USERNAME/webfont.git
cd webfont
```

The repository has no build script. The SVG source, CSS, and generated font
files are checked in, so inspect and update them together.

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

You can add or change glyphs within the SVG using
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

## Testing changes

Load the local `font-lansing-codes.css` in a small HTML page and check the named
class, `data-icon`, and direct font-family examples above in a browser. Confirm
that each glyph appears and that its adjacent text remains readable. Verify the
font files that would ship in the npm package without publishing it:

```sh
npm pack --dry-run
```

Before opening a pull request, check for unintended whitespace changes with
`git diff --check`.
