import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRegisterUserPayload } from "./API/authApi";

interface initialState {
  user: IRegisterUserPayload | null;
}

const initialState: initialState = {
  user: null,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    changeUser(state, action: PayloadAction<IRegisterUserPayload>) {
      state.user = action.payload;
    },
  },
});
export default userSlice.reducer;
export const { changeUser } = userSlice.actions;