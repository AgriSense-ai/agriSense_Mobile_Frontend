import {
  PAYMENT_NETWORK_ACTION,
  PAYMENT_NUMBER_ACTION,
  PAYMENT_STATUS_ACTION,
} from "./types";

type PaymentState = {
  networkName: string | null;
  number: string;
  status: boolean;
};

const initialState: PaymentState = {
  networkName: null,
  number: "",
  status: true,
};

type PaymentAction = {
  type: string;
  payload: any;
};

export default (state = initialState, { type, payload }: PaymentAction) => {
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
