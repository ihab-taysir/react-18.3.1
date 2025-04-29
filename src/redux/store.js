import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import postsSlice from "./slices/postsSlice";

export default configureStore({
  reducer: {
    counter: counterSlice,
    posts: postsSlice,
    // [counterSlice.name]: counterSlice.reducer,
    // [postsSlice.name]: postsSlice.reducer,
  },
});
