import { lazy, Suspense, useEffect } from "react";
import { useNavigate } from "react-router";
import { PATHS } from "../../Router/paths";
import { useDispatch, useSelector } from "react-redux";
import {
  deletePostsAction,
  getPostsAction,
} from "../../redux/slices/postsSlice";

const Table = lazy(() => import("../../Components/Table"));

const POSTS_COLUMNS = (handleDelete, handleEdit) => [
  { key: "id", title: "ID" },
  { key: "title", title: "Title" },
  { key: "body", title: "Body" },
  {
    key: "actions",
    title: "Actions",
    render: (data) => (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "130px",
        }}
      >
        <button
          style={{
            backgroundColor: "#61346B",
            color: "white",
            padding: "5px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
            width: "60px",
          }}
          onClick={(e) => {
            e.stopPropagation();
            handleDelete(data.id);
          }}
        >
          Delete
        </button>
        <button
          style={{
            backgroundColor: "#61346B",
            color: "white",
            padding: "5px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
            width: "60px",
          }}
          onClick={(e) => {
            e.stopPropagation();
            handleEdit(data.id);
          }}
        >
          Edit
        </button>
      </div>
    ),
  },
];

const PostsPage = () => {
  const navigate = useNavigate();
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  // const { get, data, remove } = useAPI(`${API_URL}/posts`);

  // useEffect(() => {
  //   get();
  // }, [get]);

  useEffect(() => {
    if (!posts.length) dispatch(getPostsAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const handleDelete = async (id) => {
    // remove(id);
    dispatch(deletePostsAction(id));
  };

  const handleEdit = async (id) => {
    navigate(PATHS.POSTS.EDIT.replace(":id", id));
  };

  const handleRowClick = (row) => {
    navigate(PATHS.POSTS.VIEW.replace(":id", row.id));
  };

  return (
    <div>
      <h1>Posts Page</h1>
      <Suspense fallback={<h1>Loading ...</h1>}>
        <button onClick={() => navigate(PATHS.POSTS.CREATE)}>Create</button>
        <Table
          columns={POSTS_COLUMNS(handleDelete, handleEdit)}
          data={posts}
          onRowClick={handleRowClick}
        />
      </Suspense>
    </div>
  );
};

export default PostsPage;
