
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";



import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { SContainer } from "./themes/Container.style";

function App() {
  const routerConfig = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage/>,
    },
    {
      path: "/main-page",
      element: <MainPage/>
    },
    {
      path: "profile-page",
      element: <ProfilePage/>
    },
    
  ]) 
  return (
    <SContainer>
      <div className="container">
       <RouterProvider router={routerConfig}  />
      </div>
    </SContainer>
  );
}

export default App;
