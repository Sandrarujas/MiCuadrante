export const ShiftType = {
  Rest: "REST",
  Meeting: "MEETING",
  MeetingNight: "MEETING_NIGHT",
  Night: "NIGHT",
  Day: "DAY",
  Vacation: "VACATION",
} as const;

export type ShiftType = typeof ShiftType[keyof typeof ShiftType];