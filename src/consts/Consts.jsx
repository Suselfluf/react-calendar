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

export const StyleActiveDay = (day, res) => {
  if (res === "mobile") {
    day.backgroundColor = "red";
    day.borderRadius = "50px";
    day.width = "25px";
    day.marginLeft = "25%";
    day.textAlign = "center";
    day.color = "white";
    // day.cursor = "pointer";
  } else {
    day.backgroundColor = "red";
    day.borderRadius = "50px";
    day.width = "28px";
    day.marginLeft = "35%";
    day.textAlign = "center";
    // day.cursor = "pointer";
    day.color = "white";
  }
};

export const removeStyle = (day) => {
  day.removeProperty("background-color");
  day.removeProperty("border-radius");
  day.removeProperty("width");
  day.removeProperty("margin-left");
  day.removeProperty("text-align");
  day.removeProperty("color");
  day.removeProperty("cursor");
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
