import { ShiftPattern } from "../types/shiftPattern";
import { ShiftType } from "../types/shift";

/**
 * Define los tres patrones de trabajo.
 *
 * Cada patrón contiene los siete días de la semana,
 * comenzando siempre por el lunes.
 */
export const shiftPatterns: Record<ShiftPattern, ShiftType[]> = {
  [ShiftPattern.A]: [
    ShiftType.Rest,
    ShiftType.Meeting,
    ShiftType.Rest,
    ShiftType.Rest,
    ShiftType.Night,
    ShiftType.Night,
    ShiftType.Night,
  ],

  [ShiftPattern.B]: [
    ShiftType.Rest,
    ShiftType.MeetingNight,
    ShiftType.Night,
    ShiftType.Night,
    ShiftType.Rest,
    ShiftType.Rest,
    ShiftType.Rest,
  ],

  [ShiftPattern.C]: [
    ShiftType.Night,
    ShiftType.Meeting,
    ShiftType.Rest,
    ShiftType.Rest,
    ShiftType.Rest,
    ShiftType.Day,
    ShiftType.Day,
  ],
};