export const SALES_DATA = [
  { id: 1, month: "Jan", y2023: 27, y2024: 40 },
  { id: 2, month: "Feb", y2023: 31, y2024: 35 },
  { id: 3, month: "Mar", y2023: 36, y2024: 33 },
  { id: 4, month: "Apr", y2023: 26, y2024: 34 },
  { id: 5, month: "May", y2023: 14, y2024: 35 },
  { id: 6, month: "Jun", y2023: 14, y2024: 28 },
  { id: 7, month: "Jul", y2023: 17, y2024: 31 },
  { id: 8, month: "Aug", y2023: 20, y2024: 37 },
  { id: 9, month: "Sep", y2023: 18, y2024: 32 },
  { id: 10, month: "Oct", y2023: 15, y2024: 20 },
  { id: 11, month: "Nov", y2023: 18, y2024: 19 },
  { id: 12, month: "Dec", y2023: 35, y2024: 45 },
];

export const BAR_DATA = [
  { id: 1, name: "Emaar", value: 25 },
  { id: 2, name: "Nakheel", value: 46 },
  { id: 3, name: "Al Makht.", value: 31 },
  { id: 4, name: "Emaar", value: 21 },
  { id: 5, name: "Nakheel", value: 36 },
  { id: 6, name: "Al Makht.", value: 54 },
  { id: 7, name: "Emaar", value: 29 },
  { id: 8, name: "Emaar", value: 14 },
  { id: 9, name: "Nakheel", value: 41 },
  { id: 10, name: "Al Makht.", value: 16 },
];

export const FIRST_DONUT_STAT_DATA=[
  {id:1,name: "Villas",value: 20, fill: "var(--color-red)",},
  {id:2,name: "Apartments",value: 55, fill: "var(--color-green)",},
  {id:3,name: "Plot",value: 15, fill: "var(--color-yellow)",},
  {id:4,name: "Commercial",value: 10, fill: "var(--color-blue)",},
]
export const FIRST_DONUT_DATA = [
  {
    id: 1,
    name: "Villas",
    value: 20,
    fill: "var(--color-red)",
    innerRadius: 75,
    outerRadius: 112,
  },
  {
    id: 2,
    name: "Apartments",
    value: 55,
    fill: "var(--color-green)",
    innerRadius: 75,
    outerRadius: 126,
  },
  {
    id: 3,
    name: "Commercial",
    value: 10,
    fill: "var(--color-blue)",
    innerRadius: 75,
    outerRadius: 95,
  },
  {
    id: 4,
    name: "Plot",
    value: 15,
    fill: "var(--color-yellow)",
    innerRadius: 75,
    outerRadius: 105,
  },
];

export const SECOND_DONUT_DATA = [
  {
    id: 1,
    name: "Primary Sales",
    value: 70,
    fill: "var(--color-green)",
    innerRadius: 65,
    outerRadius: 125,
  },
  {
    id: 2,
    name: "Secondary Sales",
    value: 30,
    fill: "var(--color-red)",
    innerRadius: 65,
    outerRadius: 95,
  },
];

export const THIRD_DONUT_STAT_DATA=[
  {id:1,name: "1B/R",value: 20, fill: "var(--color-green)",},
  {id:2,name: "2B/R",value: 20, fill: "var(--color-red)",},
  {id:3,name: "3B/R",value: 20, fill: "var(--color-yellow)",},
  {id:4,name: "4B/R",value: 12, fill: "rgba(59,64,109,1)",},
  {id:5,name: "5B/R",value: 10, fill: "rgba(53,166,105,1)",},
  {id:6,name: "6B/R",value: 10, fill: "rgba(187, 62, 3, 1)",},
  {id:7,name: "7B/R",value: 8, fill: "rgba(255,211,128,1)",},
]

export const THIRD_DONUT_DATA = [
  {
    id: 0,
    name: "4B/R",
    value: 20,
    fill: "var(--color-red)",
    innerRadius: 75,
    outerRadius: 155,
  },

  {
    id: 1,
    name: "1B/R",
    value: 20,
    fill: "var(--color-green)",
    innerRadius: 75,
    outerRadius: 145,
  },
  {
    id: 3,
    name: "3B/R",
    value: 8,
    fill: "rgba(255,211,128,1)",
    innerRadius: 75,
    outerRadius: 90,
  },
  {
    id: 2,
    name: "2B/R",
    value: 10,
    fill: "rgba(187,62,3,1)",
    innerRadius: 75,
    outerRadius: 105,
  },

  {
    id: 4,
    name: "5B/R",
    value: 10,
    fill: "rgba(53,166,105,1)",
    innerRadius: 75,
    outerRadius: 110,
  },

  {
    id: 5,
    name: "6B/R",
    value: 12,
    fill: "var(--color-blue)",
    innerRadius: 75,
    outerRadius: 120,
  },
  {
    id: 6,
    name: "7B/R",
    value: 20,
    fill: "var(--color-yellow)",
    innerRadius: 75,
    outerRadius: 135,
  },
];

export default function charts(data, startAngleOffset = 0) {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  let currentAngle = 0;

  return data.map((item) => {
    const startAngle = currentAngle;
    const angle = (item.value / total) * 360;
    currentAngle += angle;
    return {
      ...item,
      startAngle: startAngle + startAngleOffset,
      endAngle: startAngle + angle + startAngleOffset,
    };
  });
}
