import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import  { Toaster } from 'react-hot-toast';
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";
import AuthProviders from "./Providers/AuthProviders.jsx";
import {
 
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
 <div className="bg-accent">
   <AuthProviders>
    <React.StrictMode>
    <QueryClientProvider client={queryClient}>
   
    <RouterProvider router={router} />
    </QueryClientProvider>
     
    </React.StrictMode>
  </AuthProviders>
 </div>
);
