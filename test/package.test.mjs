import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { existsSync, readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import test from 'node:test'

const rootUrl = new URL('../', import.meta.url)

function localCssUrls(css) {
  return [...css.matchAll(/url\(([^)]*)\)/gi)].flatMap(([, value]) => {
    let path = value.trim()
    if (path.startsWith('"') || path.startsWith("'")) {
      assert.equal(path.at(-1), path[0], `unsupported CSS url(): ${value}`)
      path = path.slice(1, -1)
    }
    assert.ok(path && !/["'\s]/.test(path), `unsupported CSS url(): ${value}`)
    if (/^(?:https?:|data:|\/\/)/i.test(path)) return []
    assert.ok(!path.startsWith('/') && !path.startsWith('../'), `unsupported local CSS url(): ${value}`)
    return [path.replace(/^\.\//, '').split(/[?#]/, 1)[0]]
  })
}

test('published package includes every font file referenced by CSS', () => {
  const css = readFileSync(new URL('font-lansing-codes.css', rootUrl), 'utf8')
  const references = localCssUrls(css)
  assert.ok(references.length > 0, 'font CSS must reference local assets')

  const packageJson = execFileSync('npm', ['pack', '--dry-run', '--json'], {
    cwd: fileURLToPath(rootUrl),
    encoding: 'utf8'
  })
  const packageFiles = new Set(JSON.parse(packageJson)[0].files.map((file) => file.path))

  for (const path of references) {
    assert.ok(existsSync(new URL(path, rootUrl)), `${path} must exist`)
    assert.ok(packageFiles.has(path), `${path} must be included in the npm package`)
  }
  assert.ok(packageFiles.has('font-lansing-codes.css'))
})

test('extracts quoted and unquoted local font URLs', () => {
  assert.deepEqual(localCssUrls("url('./generated/a.woff2') url(./generated/b.woff2) url(generated/c.woff2?v=1)"), [
    'generated/a.woff2', 'generated/b.woff2', 'generated/c.woff2'
  ])
  assert.throws(() => localCssUrls('url("./generated/missing.woff2)'))
})
