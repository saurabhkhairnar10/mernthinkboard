import { createBrowserRouter } from "react-router";
import App from "../App";
import HomePage from "../pages/HomePage";
import CreatePage from "../pages/CreatePage";
import NoteDetailPage from "../pages/NoteDetailPage";
import React from "react";

const Router = createBrowserRouter([
{
    path:'/',
    element:<App />,
    children:[
        {
            path:'',
            element:<HomePage />
        },
        {
            path:'createPage',
            element:<CreatePage/>
        },
        {
            path:'note/:id',
            element:<NoteDetailPage />
        }
    ]
}
])

export default Router;