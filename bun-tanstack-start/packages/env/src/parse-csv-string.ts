import { z } from 'zod'

/**
 * A helper function to parse comma-separated strings into an array of validated items.
 * @param item - A Zod schema to validate each individual item in the array.
 * @returns A Zod transformation that splits, trims, and filters the input string.
 */
export function parseCsvString(item: z.ZodType<string, string>) {
  return z
    .string()
    .default('')
    .transform((val) =>
      val
        .split(',')
        .map((item) => item.trim())
        .filter(Boolean),
    )
    .pipe(z.array(item))
}
