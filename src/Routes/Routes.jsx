import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home";
import Registration from "../Pages/Registration/Registration";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
      
      ]
    },
    {
      path:"/registration",
      element:<Registration></Registration>      
    },
    {
      path:"/login",
      element:<Registration></Registration>      
    },
  ]);
  export default router