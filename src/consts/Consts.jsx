const size = {
  mobile: "740px",
  laptop: "1440px",
  desktop: "2560px",
};

export const device = {
  mobile: `(min-width: ${size.mobile})`,
  mobileSmall: `(max-width: ${size.mobile})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
};

export const monthRange = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const weekDayNames = ["M", "T", "W", "T", "F", "S", "S"];

export const yearsRange = [2022, 2023, 2024];

export const hourseRange = [
  { 0: "00:00" },
  { 1: "01:00" },
  { 2: "02:00" },
  { 3: "03:00" },
  { 4: "04:00" },
  { 5: "05:00" },
  { 6: "06:00" },
  { 7: "07:00" },
  { 8: "08:00" },
  { 9: "09:00" },
  { 10: "10:00" },
  { 11: "11:00" },
  { 12: "12:00" },
  { 13: "13:00" },
  { 14: "14:00" },
  { 15: "15:00" },
  { 16: "16:00" },
  { 17: "17:00" },
  { 18: "18:00" },
  { 19: "19:00" },
  { 20: "20:00" },
  { 21: "21:00" },
  { 22: "22:00" },
  { 23: "23:00" },
];

export const StyleActiveDay = (day) => {
  day.backgroundColor = "red";
  day.borderRadius = "50px";
  day.width = "28px";
  day.marginLeft = "35%";
  day.textAlign = "center";
  day.color = "white";
};

export const removeStyle = (day) => {
  day.removeProperty("backgroundColor");
  day.removeProperty("borderRadius");
  day.removeProperty("width");
  day.removeProperty("marginLeft");
  day.removeProperty("textAlign");
  day.removeProperty("color");
  // day.backgroundColor = "red";
  // day.borderRadius = "50px";
  // day.width = "28px";
  // day.marginLeft = "35%";
  // day.textAlign = "center";
  // day.color = "white";
};

export const timeRange = [
  "00:00",
  "01:00",
  "02:00",
  "03:00",
  "04:00",
  "05:00",
  "06:00",
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
  "23:00",
];
