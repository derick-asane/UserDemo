import * as React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";

import ListUser from "../pages/listUser";
import CreateUser from "../pages/createUser";
import EditUser from "../pages/editUser";

 const router = createBrowserRouter([
  {
    path: "/",
    element: <ListUser />
  },
  {
    path: "/create-user",
    element: <CreateUser />
  },
  {
    path: "list-user/edit-user",
    element: <EditUser />
  },
]);

export default router;