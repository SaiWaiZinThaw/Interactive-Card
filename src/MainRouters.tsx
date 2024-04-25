import React from "react";
import { RouteObject } from "react-router-dom";
import Layout from "./Layout";
import Success from "./Success";
import InputField from "./InputField";

const MainRouter: RouteObject[] = [{
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "success",
        element: <Success />
      },
      
      {
        path: "/", 
        element: <InputField />
      }
    ]
  }
];

export default MainRouter;
