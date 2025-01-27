import { LoginPage } from "./pages/LoginPage/LoginPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { ForgetPassword } from "./pages/ForgetPassword/ForgetPasswordPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { SContainer } from "./themes/Container.style";
import { RegistrationPage } from "./pages/RegistrationPage/RegistrationPage";
import { PostPage } from "./pages/PostPage/PostPage";


function App() {
  const routerConfig = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/main-page",
      element: <MainPage />,
    },
    {
      path: "profile-page",
      element: <ProfilePage />,
    },
    { path: "/registration-page", element: <RegistrationPage /> },
    {
      path: "/forget-password",
      element: <ForgetPassword />,
    },
    {
      path: "/posts/:postId",
      element: <PostPage />,
    },
  ]);
  return (
    <SContainer>
      <div className="container">
        <RouterProvider router={routerConfig} />
      </div>
    </SContainer>
  );
}

export default App;
