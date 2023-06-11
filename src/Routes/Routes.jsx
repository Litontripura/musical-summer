import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home";
import Registration from "../Pages/Registration/Registration";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import Dashboard from "../LayOut/Dashboard";
import Login from "../Pages/Login/Login";
import StudentsHome from "../Pages/StudentsHome/StudentsHome";
import AdminHome from "../Pages/AdminHome/AdminHome";
import InstructorHome from "../Pages/InstructorHome/InstructorHome";
import AllUsers from "../Pages/AllUsers/AllUsers";
import Error from "../Pages/Error/Error";
import AddClass from "../Pages/Addclass/AddClass";
import AdminAllClasses from "../Pages/AdminHome/AdminAllClasses";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<Error></Error>,
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
      element:<Dashboard></Dashboard>,
      errorElement:<Error></Error>,
      children:[
        {
          path:'students',
          element:<StudentsHome></StudentsHome>
        },
        {
          path:'adminHome',
          element:<AdminHome></AdminHome>
        },
        {
          path:'instructorsHome',
          element:<InstructorHome></InstructorHome>
        },
        {
          path:'allusers',
          element:<AllUsers></AllUsers>
        },
        {
          path:'addclass',
          element:<AddClass></AddClass>
        },
        {
          path:'allclasses',
          element:<AdminAllClasses></AdminAllClasses>
        }
      ]
    }
  ]);
  export default router