import {
  PAYMENT_NETWORK_ACTION,
  PAYMENT_NUMBER_ACTION,
  PAYMENT_STATUS_ACTION,
} from "./types";

export const paymentNetworkAction = (selectedNetwork: string | null) => {
  return {
    type: PAYMENT_NETWORK_ACTION,
    payload: selectedNetwork,
  };
};

export const paymentNumberAction = (phoneNumber: string) => {
  return {
    type: PAYMENT_NUMBER_ACTION,
    payload: phoneNumber,
  };
};

export const paymentStatusAction = () => {
  return {
    type: PAYMENT_STATUS_ACTION,
    payload: true,
  };
};
