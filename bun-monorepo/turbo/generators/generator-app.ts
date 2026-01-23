import type { PlopTypes } from '@turbo/gen'
import { validateName } from './helpers.ts'

const TARGET_DIR = 'apps'
const TEMPLATE_ROOT = 'templates/app'

export const generatorApp: PlopTypes.PlopGeneratorConfig = {
  actions: [
    {
      base: `./${TEMPLATE_ROOT}/{{type}}`,
      destination: `{{turbo.paths.root}}/${TARGET_DIR}/{{ dashCase name }}`,
      templateFiles: `./${TEMPLATE_ROOT}/{{type}}/**/*`,
      type: 'addMany',
    },
  ],
  description: `Generate an app in the ${TARGET_DIR} directory`,
  prompts: [
    {
      choices: ['base'],
      message: 'What type of app should be created?',
      name: 'type',
      type: 'list',
    },
    {
      default: ({ type }: { type: string }) => type,
      message: 'What is the name of the app?',
      name: 'name',
      type: 'input',
      validate: (input: string) => {
        return validateName(input)
      },
    },
  ],
}
