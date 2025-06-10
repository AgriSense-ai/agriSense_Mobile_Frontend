import { IMAGE_CAPTURE_ACTION } from "./types";

type PredictionState = {
  imageUrl: string | null;
};
const initialState: PredictionState = {
  imageUrl: null,
};
type PredictionAction = {
  type: string;
  payload: string | null;
};
export default (state = initialState, { type, payload }: PredictionAction) => {
  switch (type) {
    case IMAGE_CAPTURE_ACTION:
      return {
        ...state,
        imageUrl: payload,
      };
    default:
      return state;
  }
};
