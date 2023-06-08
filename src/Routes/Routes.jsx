import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home";
import Registration from "../Pages/Registration/Registration";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import Dashboard from "../LayOut/Dashboard";
import Login from "../Pages/Login/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/instructors",
            element:<Instructors></Instructors>
        },
        {
            path:"/classes",
            element:<Classes></Classes>
        },
      
      ]
    },
    {
      path:"/registration",
      element:<Registration></Registration>      
    },
    {
      path:"/login",
      element:<Login></Login>    
    },
    {
      path:"/dashboard",
      element:<Dashboard></Dashboard>
    }
  ]);
  export default router