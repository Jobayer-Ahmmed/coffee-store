
import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import PostCafe from "../pages/postCafe/PostCafe";


const routes = createBrowserRouter([
    {
        path:"/",
        element:<Root/>,
        children:[
            {
                path:"/",
                element:<PostCafe/>
            }
        ]

    }
])

export default routes