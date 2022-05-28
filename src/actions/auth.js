import * as api from "../api";
import { AUTH } from "../constants/actionTypes";
import { HOME } from "../constants/endPoints";

export const signin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });
    history.push(HOME);
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    history.push(HOME);
  } catch (error) {
    console.log(error);
  }
};
