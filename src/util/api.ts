import axios from "axios";

const API_KEY = "AIzaSyBZ4-4C3GPYOAT10-MvTm55qd_81GHfA_Y";

export const createUser = async (email: string, password: string): Promise<any> => {
  const response = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
};
