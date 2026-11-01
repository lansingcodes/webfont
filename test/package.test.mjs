import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { existsSync, readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import test from 'node:test'

const rootUrl = new URL('../', import.meta.url)

test('published package includes every font file referenced by CSS', () => {
  const css = readFileSync(new URL('font-lansing-codes.css', rootUrl), 'utf8')
  const references = [...css.matchAll(/url\("\.\/([^"?#]+)(?:[?#][^"]*)?"\)/g)]
    .map((match) => match[1])
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
