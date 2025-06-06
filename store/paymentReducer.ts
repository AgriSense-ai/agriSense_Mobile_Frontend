import {
  PAYMENT_NETWORK_ACTION,
  PAYMENT_NUMBER_ACTION,
  PAYMENT_STATUS_ACTION,
} from "./types";

const initialState = {
  selectedNetwork: null,
  phoneNumber: "",
  paymentStatus: true,
};

export default (state = initialState, { type, payload }: { type: string; payload: any }) => {
  switch (type) {
    case PAYMENT_NETWORK_ACTION:
      return {
        ...state,
        networkName: payload,
      };
    case PAYMENT_NUMBER_ACTION:
      return {
        ...state,
        number: payload,
      };
    case PAYMENT_STATUS_ACTION:
      return {
        ...state,
        status: payload,
      };
    default:
      return state;
  }
};
