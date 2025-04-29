import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { PATHS } from "../../Router/paths";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import {
  editPostAction,
  getSinglePostAction,
} from "../../redux/slices/postsSlice";

const EditPostPage = () => {
  const { id } = useParams();
  // const [post, setPost] = useState(null);
  const { post } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // (async () => {
    //   try {
    //     const { data } = await axios.get(API_URL + `/posts/${id}`);
    //     setPost(data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // })();
    dispatch(getSinglePostAction(id));
  }, [dispatch, id]);

  const handleEditPost = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const body = e.target.body.value;

    // try {
    //   await axios.put(`${API_URL}/posts/${id}`, {
    //     title,
    //     body,
    //   });
    //   navigate(PATHS.POSTS.ROOT);
    // } catch (error) {
    //   console.log(error);
    // }

    dispatch(
      editPostAction({
        id,
        title,
        body,
      })
    );
    navigate(PATHS.POSTS.ROOT);
  };
  return (
    <div>
      <h1>Edit Post</h1>
      {post && (
        <form onSubmit={handleEditPost}>
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              defaultValue={post.title}
            />
          </div>
          <div>
            <label htmlFor="body">Body</label>
            <textarea id="body" name="body" defaultValue={post.body} />
          </div>
          <button type="submit">Save</button>
        </form>
      )}
    </div>
  );
};

export default EditPostPage;
