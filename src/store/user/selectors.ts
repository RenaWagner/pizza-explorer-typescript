import { ReduxState } from "../index";

export const selectUser = (reduxState: ReduxState) => {
  return reduxState.user;
};
