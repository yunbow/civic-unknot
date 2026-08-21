import { readFileSync, writeFileSync, rmSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const appDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
const distDir = path.join(appDir, 'dist')
const distSsrDir = path.join(appDir, 'dist-ssr')
const indexPath = path.join(distDir, 'index.html')

const template = readFileSync(indexPath, 'utf-8')

const { render } = await import(path.join(distSsrDir, 'entry-server.js'))
const appHtml = render()

if (!appHtml || !appHtml.trim()) {
  console.error('prerender: render() returned empty output')
  process.exit(1)
}

if (!template.includes('<!--app-html-->')) {
  console.error('prerender: placeholder <!--app-html--> not found in dist/index.html')
  process.exit(1)
}

const finalHtml = template.replace('<!--app-html-->', appHtml)
writeFileSync(indexPath, finalHtml)

rmSync(distSsrDir, { recursive: true, force: true })

console.log('prerender: injected server-rendered markup into dist/index.html')
