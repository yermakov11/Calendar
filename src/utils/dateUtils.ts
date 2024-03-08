import { DAYS } from "../data/data_time";

export const getDaysInMonth = (date: Date): number => {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
};

export const range = (end: number): number[] => {
  const { result } = Array.from({ length: end }).reduce(
    ({ result, current }) => ({
      result: [...result, current],
      current: current + 1
    }),
    { result: [], current: 1 }
  );
  return result;
};

export const sortDays = (date: Date): string[] => {
  const dayIndex = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  const sortedDays = [...DAYS.slice(dayIndex), ...DAYS.slice(0, dayIndex)];
  return sortedDays;
};

export const datesAreOnSameDay = (first: Date, second: Date): boolean =>
  first.getFullYear() === second.getFullYear() &&
  first.getMonth() === second.getMonth() &&
  first.getDate() === second.getDate();

export const getMonthYear = (date: Date): string => {
  const d = date.toDateString().split(" ");
  return `${d[1]} ${d[3]}`;
};

export const nextMonth = (date: Date, cb: (date: Date) => void): void => {
  const mon = date.getMonth();
  if (mon < 11) {
    date.setMonth(mon + 1);
  } else {
    date.setMonth(0);
    date.setFullYear(date.getFullYear() + 1);
  }
  cb(new Date(date));
};

export const prevMonth = (date: Date, cb: (date: Date) => void): void => {
  const mon = date.getMonth();
  if (mon > 0) {
    date.setMonth(mon - 1);
  } else {
    date.setMonth(11);
    date.setFullYear(date.getFullYear() - 1);
  }
  cb(new Date(date));
};

export const getDarkColor = (): string => {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += Math.floor(Math.random() * 10);
  }
  return color;
};

export const getSortedDays = (date: Date): number[] => {
  const daysInMonth = range(getDaysInMonth(date));
  const index = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  return [...Array(index === 0 ? 6 : index - 1), ...daysInMonth];
};
