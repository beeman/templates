import type { PlopTypes } from '@turbo/gen'
import { generatorApp } from './generator-app.ts'
import { generatorPkg } from './generator-pkg.ts'

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator('app', generatorApp)
  plop.setGenerator('pkg', generatorPkg)
}
