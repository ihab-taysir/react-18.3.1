import React from "react";
import { PATHS } from "../../Router/paths";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addPostAction } from "../../redux/slices/postsSlice";

const CreatePostPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCreatePost = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const body = e.target.body.value;

    // try {
    // await axios.post(`${API_URL}/posts`, {
    //   title,
    //   author,
    // });
    //   navigate(PATHS.POSTS.ROOT);
    // } catch (error) {
    //   console.log(error);
    // }
    dispatch(
      addPostAction({
        title,
        body,
      })
    );
    navigate(PATHS.POSTS.ROOT);
  };
  return (
    <div>
      <h1>Create Post</h1>
      <form onSubmit={handleCreatePost}>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" />
        </div>
        <div>
          <label htmlFor="body">Body</label>
          <textarea id="body" />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreatePostPage;
