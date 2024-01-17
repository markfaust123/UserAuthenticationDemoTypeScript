import axios from "axios";

const API_KEY: string = "AIzaSyBZ4-4C3GPYOAT10-MvTm55qd_81GHfA_Y";
const API_URL_BASE: string = `https://identitytoolkit.googleapis.com/v1/accounts`;

export const authenticate = async (
  mode: string,
  email: string,
  password: string
) => {
  const url = `${API_URL_BASE}:${mode}?key=${API_KEY}`;
  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });
  return response.data.idToken;
};

export const createUser = async (
  email: string,
  password: string
): Promise<any> => {
  return authenticate("signUp", email, password);
};

export const login = async (email: string, password: string): Promise<any> => {
  return authenticate("signInWithPassword", email, password);
};
