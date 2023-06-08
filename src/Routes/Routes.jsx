import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home";
import Registration from "../Pages/Registration/Registration";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import Dashboard from "../LayOut/Dashboard";

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
      element:<Registration></Registration>      
    },
    {
      path:"/dashboard",
      element:<Dashboard></Dashboard>
    }
  ]);
  export default router