import { ShiftType } from "../types/shift";

export const shiftPatterns = {
  A: [
    ShiftType.Rest,
    ShiftType.Meeting,
    ShiftType.Rest,
    ShiftType.Rest,
    ShiftType.Night,
    ShiftType.Night,
    ShiftType.Night,
  ],

  B: [
    ShiftType.Rest,
    ShiftType.MeetingNight,
    ShiftType.Night,
    ShiftType.Night,
    ShiftType.Rest,
    ShiftType.Rest,
    ShiftType.Rest,
  ],

  C: [
    ShiftType.Night,
    ShiftType.Meeting,
    ShiftType.Rest,
    ShiftType.Rest,
    ShiftType.Rest,
    ShiftType.Day,
    ShiftType.Day,
  ],
};