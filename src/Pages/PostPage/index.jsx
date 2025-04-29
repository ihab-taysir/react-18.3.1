import React, { useEffect } from "react";
import { PATHS } from "../../Router/paths";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getSinglePostAction } from "../../redux/slices/postsSlice";
const PostPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { post, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  // const { getSingle, item: post } = useAPI(`${API_URL}/posts`);

  useEffect(() => {
    // getSingle(id);
    if (id !== post?.id) dispatch(getSinglePostAction(id));
  }, [dispatch, id]);

  return (
    <>
      {post && (
        <div>
          <h1>Post number {id}</h1>
          {isLoading ? (
            <h1>Loading ...</h1>
          ) : (
            <>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <button
                onClick={() => navigate(PATHS.POSTS.EDIT.replace(":id", id))}
              >
                Edit
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default PostPage;
