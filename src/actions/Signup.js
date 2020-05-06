import axios from "axios";

export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_ERROR = "SIGNUP_ERROR";

export const signup = (obj) => (dispatch) => {
  dispatch({ type: SIGNUP_START });

  console.log("from action creator", obj);
  axios
    .post(
      "http://signlingo.us-east-1.elasticbeanstalk.com/api/auth/register",
      obj
    )
    .then((res) => {
      console.log("res", res);
      dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: SIGNUP_ERROR, payload: err.error });
    });
};
