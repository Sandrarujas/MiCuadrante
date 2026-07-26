/**
 * Patrones de trabajo que forman el ciclo completo.
 *
 * El ciclo consta de tres semanas:
 * A → B → C → A...
 */
export const ShiftPattern = {
  A: "A",
  B: "B",
  C: "C",
} as const;

/**
 * Tipo derivado del objeto ShiftPattern.
 */
export type ShiftPattern =
  (typeof ShiftPattern)[keyof typeof ShiftPattern];