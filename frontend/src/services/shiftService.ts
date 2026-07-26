import { shiftPatterns } from "../data/shiftPatterns";
import { ShiftPattern } from "../types/shiftPattern";

/**
 * Devuelve el patrón de turnos correspondiente (A, B o C).
 *
 * @param pattern Patrón de turnos que se desea obtener.
 * @returns Array con los turnos de los siete días de la semana.
 */
export function getPattern(pattern: ShiftPattern) {
  return shiftPatterns[pattern];
}

/**
 * Devuelve el turno correspondiente a un día concreto dentro de un patrón.
 *
 * @param pattern Patrón de turnos (A, B o C).
 * @param dayIndex Posición del día dentro de la semana (0 = lunes, 6 = domingo).
 * @returns Tipo de turno correspondiente a ese día.
 */
export function getShiftFromPattern(
  pattern: ShiftPattern,
  dayIndex: number
) {
  const week = getPattern(pattern);

  return week[dayIndex];
}

/**
 * Calcula el número de días transcurridos entre dos fechas.
 *
 * Esta función será la base del motor de turnos, ya que nos permitirá
 * saber en qué posición del ciclo de trabajo nos encontramos.
 *
 * @param startDate Fecha de inicio del ciclo.
 * @param targetDate Fecha que queremos consultar.
 * @returns Número de días completos transcurridos.
 */
export function getDaysDifference(
  startDate: Date,
  targetDate: Date
): number {
  // Número de milisegundos que tiene un día.
  const millisecondsPerDay = 1000 * 60 * 60 * 24;

  // Diferencia entre ambas fechas expresada en milisegundos.
  const difference = targetDate.getTime() - startDate.getTime();

  // Convertimos los milisegundos en días completos.
  return Math.floor(difference / millisecondsPerDay);
}

/**
 * Calcula el patrón correspondiente según los días transcurridos
 * y el patrón con el que comenzó el ciclo.
 *
 * @param daysPassed Número de días transcurridos desde el inicio del ciclo.
 * @param startPattern Patrón con el que comenzó el ciclo.
 * @returns Patrón que corresponde a la fecha consultada.
 */
export function getPatternForDay(
  daysPassed: number,
  startPattern: ShiftPattern
): ShiftPattern {
  const patterns: ShiftPattern[] = [
    ShiftPattern.A,
    ShiftPattern.B,
    ShiftPattern.C,
  ];

  // Posición del patrón inicial dentro del ciclo.
  const startIndex = patterns.indexOf(startPattern);

  // Número de semanas completas transcurridas.
  const weekIndex = Math.floor(daysPassed / 7);

  // Avanzamos por el ciclo y volvemos al principio cuando sea necesario.
  return patterns[(startIndex + weekIndex) % patterns.length];
}

/**
 * Obtiene la posición del día dentro de la semana.
 *
 * La semana comienza en lunes (0) y termina en domingo (6).
 *
 * @param targetDate Fecha que queremos consultar.
 * @returns Índice del día dentro de la semana.
 */
export function getDayIndex(targetDate: Date): number {
  // JavaScript devuelve:
  // Domingo = 0
  // Lunes = 1
  // ...
  // Nosotros queremos:
  // Lunes = 0
  // ...
  // Domingo = 6

  return (targetDate.getDay() + 6) % 7;
}

/**
 * Devuelve el turno correspondiente para una fecha concreta.
 *
 * Esta función constituye el núcleo del motor de turnos.
 *
 * @param targetDate Fecha que queremos consultar.
 * @param cycleStartDate Fecha de inicio del ciclo.
 * @param startPattern Patrón con el que comienza el ciclo.
 * @returns Turno correspondiente a la fecha indicada.
 */
export function getShiftForDate(
  targetDate: Date,
  cycleStartDate: Date,
  startPattern: ShiftPattern
) {
  // Calculamos los días transcurridos desde el inicio del ciclo.
  const daysPassed = getDaysDifference(cycleStartDate, targetDate);

  // Averiguamos qué patrón corresponde.
  const currentPattern = getPatternForDay(daysPassed, startPattern);

  // Calculamos el día de la semana.
  const dayIndex = getDayIndex(targetDate);

  // Obtenemos el turno correspondiente.
  return getShiftFromPattern(currentPattern, dayIndex);
}