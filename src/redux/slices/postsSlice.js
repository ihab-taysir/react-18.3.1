import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../config/api";

export const postsSlice = createSlice({
  name: "posts",

  initialState: {
    posts: [],
    isLoading: false,
    errorMessage: "",
    post: null,
  },

  reducers: {
    setLoading: (state, { payload = true }) => {
      state.isLoading = payload;
    },

    getAllPosts: (state, action) => {
      state.posts = action.payload;
      state.isLoading = false;
      state.errorMessage = "";
    },

    getSinglePost: (state, action) => {
      state.post = action.payload;
      state.isLoading = false;
      state.errorMessage = "";
    },

    addPost: (state, action) => {
      state.posts = action.payload;
      state.isLoading = false;
      state.errorMessage = "";
    },

    editPost: (state, action) => {
      state.posts = state.posts.map((post) =>
        post.id === action.payload.id ? action.payload : post
      );
      state.isLoading = false;
      state.errorMessage = "";
    },

    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
      state.isLoading = false;
      state.errorMessage = "";
    },

    setError: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },
  },
});

export const {
  addPost,
  editPost,
  deletePost,
  getAllPosts,
  getSinglePost,
  setLoading,
  setError,
} = postsSlice.actions;

//_________________________________________________________________________________________
//_______________________________________ Custom Actions __________________________________
//_________________________________________________________________________________________

//  action function return dispatch function
export const getPostsAction = () => async (dispatch) => {
  try {
    dispatch(setLoading());
    const { data } = await axios.get(API_URL + "/posts");
    dispatch(getAllPosts(data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const getSinglePostAction = (id) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const { data } = await axios.get(API_URL + `/posts/${id}`);
    dispatch(getSinglePost(data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const deletePostsAction = (id) => async (dispatch) => {
  try {
    dispatch(setLoading());
    await axios.delete(API_URL + `/posts/${id}`);
    dispatch(deletePost(id));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const addPostAction = (body) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const { data } = await axios.post(API_URL + `/posts`, body);
    dispatch(addPost(data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const editPostAction = (data) => async (dispatch) => {
  try {
    dispatch(setLoading());
    await axios.put(API_URL + `/posts/${data.id}`, data);
    dispatch(editPost(data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export default postsSlice.reducer;
