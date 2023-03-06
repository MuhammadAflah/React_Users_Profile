import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  userId:0,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
        state.user = action.payload.user
  },
  setUserId: (state, action)=>{
        state.userId = action.payload.userId
  },
  setHeading: (state, action) => {
    state.heading = action.payload.heading
  }
}
});


export const { setUser, setUserId, setHeading  } = userSlice.actions;
export default userSlice.reducer;
