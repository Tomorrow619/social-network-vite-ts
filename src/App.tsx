
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";



import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Scontainer } from "./themes/Container.style";

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
    <Scontainer>
      <div className="container">
       <RouterProvider router={routerConfig}  />
      </div>
    </Scontainer>
  );
}

export default App;
