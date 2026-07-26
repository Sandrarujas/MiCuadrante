/**
 * Tipos de turno disponibles en la aplicación.
 *
 * Se utilizan para identificar cada tipo de jornada
 * dentro de los diferentes patrones de trabajo.
 */
export const ShiftType = {
  Rest: "REST",
  Meeting: "MEETING",
  MeetingNight: "MEETING_NIGHT",
  Night: "NIGHT",
  Day: "DAY",
  Vacation: "VACATION",
} as const;

/**
 * Tipo derivado del objeto ShiftType.
 *
 * Permite utilizar los valores del objeto como un tipo
 * de TypeScript para mejorar la seguridad del código.
 */
export type ShiftType =
  (typeof ShiftType)[keyof typeof ShiftType];