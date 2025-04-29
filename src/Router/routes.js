import { PATHS } from "./paths";
import { Navigate } from "react-router-dom";
import { lazy } from "react";

import AdminGuard from "../Components/Guards/AdminGuard";
import UserGuard from "../Components/Guards/UserGuard";
import GuestGuard from "../Components/Guards/GuestGuard";

const TypographyPage = lazy(() => import("../Pages/TypographyPage"));
const GiffsPage = lazy(() => import("../Pages/GiffsPage"));
const TodoPage = lazy(() => import("../Pages/TodoPage"));
const CounterPage = lazy(() => import("../Pages/CounterPage"));
const HomePage = lazy(() => import("../Pages/HomePage"));
const AboutPage = lazy(() => import("../Pages/AboutPage"));
const PostsPage = lazy(() => import("../Pages/PostsPage"));
const EditPostPage = lazy(() => import("../Pages/EditPostPage"));
const CreatePostPage = lazy(() => import("../Pages/CreatePostPage"));
const PostPage = lazy(() => import("../Pages/PostPage"));
const LoginPage = lazy(() => import("../Pages/LoginPage"));
const SignupPage = lazy(() => import("../Pages/signupPage"));
const FormsPage = lazy(() => import("../Pages/FormsPage"));

const adminPages = [
  {
    path: PATHS.ADMIN.ROOT,
    element: <AdminGuard />,
    children: [
      {
        index: true,
        element: <h1>Admin</h1>,
      },
      {
        path: PATHS.ADMIN.USERS,
        element: <h1>Users</h1>,
      },
    ],
  },
];

const userPages = [
  {
    path: PATHS.POSTS.ROOT,
    element: <UserGuard />,
    children: [
      {
        index: true,
        element: <PostsPage />,
      },
      {
        path: PATHS.POSTS.VIEW,
        element: <PostPage />,
      },
      {
        path: PATHS.POSTS.EDIT,
        element: <EditPostPage />,
      },
      {
        path: PATHS.POSTS.CREATE,
        element: <CreatePostPage />,
      },
    ],
  },
];

const authPages = [
  {
    path: PATHS.LOGIN,
    element: (
      <GuestGuard>
        <LoginPage />
      </GuestGuard>
    ),
  },
  {
    path: PATHS.SIGNUP,
    element: (
      <GuestGuard>
        <SignupPage />
      </GuestGuard>
    ),
  },
];

const guestPages = [
  {
    index: true,
    element: (
      <GuestGuard>
        <HomePage />
      </GuestGuard>
    ),
  },
  {
    path: PATHS.TYPOGRAPHY,
    element: (
      <GuestGuard>
        <TypographyPage />
      </GuestGuard>
    ),
  },
  {
    path: PATHS.COUNTER,
    element: (
      <GuestGuard>
        <CounterPage />
      </GuestGuard>
    ),
  },
  {
    path: PATHS.TODO,
    element: (
      <GuestGuard>
        <TodoPage />
      </GuestGuard>
    ),
  },
  {
    path: PATHS.ABOUT,
    element: (
      <GuestGuard>
        <AboutPage />
      </GuestGuard>
    ),
  },
  {
    path: PATHS.GIFFS,
    element: (
      <GuestGuard>
        <GiffsPage />
      </GuestGuard>
    ),
  },
  {
    path: PATHS.FORMS,
    element: (
      <GuestGuard>
        <FormsPage />
      </GuestGuard>
    ),
  },
  ...authPages,
];

const routes = [
  ...adminPages,
  ...userPages,
  ...guestPages,
  {
    path: PATHS.ERRORS.NOT_FOUND,
    element: <h1>Page Not Found</h1>,
  },
  {
    path: "*",
    element: <Navigate to={PATHS.ERRORS.NOT_FOUND} replace={true} />,
  },
];

export { routes };
