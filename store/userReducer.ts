type UserState = {
  name: string;
  email: string;
  phone: string;
  address: string;
  profilePicture: string;
  isLoggedIn: boolean;
  tier: "Free" | "Pro" | "Community"| null;
  isDarkMode: boolean;
};
const initialState: UserState = {
  name: "Kakuru Conrad Akankwasa",
  email: "kakurucon1234@gmail.com",
  phone: "789404730",
  address: "Kikaaya",
  profilePicture: "",
  isLoggedIn: false,
  tier: "Free",
  isDarkMode: false,
};

export default (
  state = initialState,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        ...action.payload,
      };
    case "TOGGLE_DARK_MODE":
      return {
        ...state,
        isDarkMode: !state.isDarkMode,
      };
    case "LOG_IN":
      return {
        ...state,
        isLoggedIn: true,
      };
    case "LOG_OUT":
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};
