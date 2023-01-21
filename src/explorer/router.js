import {
    createBrowserRouter,
  } from "react-router-dom";
  
import FindBlock from "./findBlock";
import InitialBlocksTransactions from "./InitialBlocksTransactions";
  
  const router = createBrowserRouter([
    {
        path: "/",
        element: <InitialBlocksTransactions/>,
    },
    {
      path: "/block",
      element: <FindBlock/>,
    }
  ]);
  
  
  export default router;
  