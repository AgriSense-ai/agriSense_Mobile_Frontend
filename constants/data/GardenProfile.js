import { Coordinates } from "./Coordinates";

export const GardenProfile = {
  id: "1",
  name: "Garden 4",
  active: true,
  description:
    "A garden is a space where plants are cultivated and grown, often for aesthetic or recreational purposes. It can include flowers, vegetables, herbs, and other types of plants, and may also feature pathways, seating areas, and decorative elements.",
  crop: "flower",
  progress: 0,
  area: 10,
  cropsRemaining: 0,
  coordinates: Coordinates,
  zone: [
    {
      id: 1,
      name: "Zone 1",
      progress: 0,
      CropsRemaining: 5,
    },
    {
      id: 2,
      name: "Zone 2",
      progress: 80,
      CropsRemaining: 2,
    },
  ],
};
