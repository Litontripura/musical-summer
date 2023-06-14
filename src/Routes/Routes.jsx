import { createBrowserRouter, Route } from 'react-router-dom';
import Main from '../LayOut/Main';
import Home from '../Pages/Home/Home';
import Registration from '../Pages/Registration/Registration';
import Instructors from '../Pages/Instructors/Instructors';
import Classes from '../Pages/Classes/Classes';
import Dashboard from '../LayOut/Dashboard';
import Login from '../Pages/Login/Login';

import AllUsers from '../Pages/AllUsers/AllUsers';
import Error from '../Pages/Error/Error';
import AddClass from '../Pages/Addclass/AddClass';
import AdminAllClasses from '../Pages/AdminHome/AdminAllClasses';
import MyClass from '../Pages/myClass/MyClass';
import PrivetRout from './PrivetRout';
import MyAddClasses from '../Pages/MyAddClasses/MyAddClasses';
import AdminRoute from './AdminRout';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/instructors',
        element: <Instructors></Instructors>
      },
      {
        path: '/classes',
        element: <Classes></Classes>
      }
    ]
  },
  {
    path: '/registration',
    element: <Registration></Registration>
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/dashboard',
    element: <PrivetRout><Dashboard></Dashboard></PrivetRout>,
    errorElement: <Error></Error>,
    children: [
   
      {
        path: 'myaddedclass',
        element: <MyAddClasses></MyAddClasses>
      },
      {
        path: 'allusers',
        element: <AllUsers></AllUsers>
      },
      {
        path: 'addclass',
        element: <AddClass></AddClass>
      },
      {
        path: 'allclasses',
        element: <AdminAllClasses></AdminAllClasses>
      },
      {
        path: 'myselectedclass',
        element: <MyClass></MyClass>
      }
     
    ]
  },
  
]);

export default router;
