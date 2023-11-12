import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "../layouts/MainLayout";
import {MovieDetailsPage} from "../pages/MovieDetailsPage";
import {HomePage} from "../pages/HomePage";

const router = createBrowserRouter([{
    path: '', element: <MainLayout/>, children: [
        {index: true, element: <Navigate to={'home'}/>},
        {path: 'home', element: <HomePage/>},
        {path: '/home/details/:id', element: <MovieDetailsPage/>}]
}]);

export {router};