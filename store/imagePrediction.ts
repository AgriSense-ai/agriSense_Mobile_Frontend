import { IMAGE_CAPTURE_ACTION } from "./types";

export const imageCaptureAction = (predictionUrl: string | null) => {
  return {
    type: IMAGE_CAPTURE_ACTION,
    payload: predictionUrl,
  };
}