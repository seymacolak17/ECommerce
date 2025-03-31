import { createBrowserRouter } from "react-router";
import App from "../Components/App";
import HomePage from "../Pages/HomePage";
import ContactPage from "../Pages/ContactPage";
import AboutPage from "../Pages/AboutPage";
import CatalogPage from "../Pages/Catalog/CatalogPage";
import ProductDetailsPage from "../Pages/Catalog/ProductDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
            {path:"", element:<HomePage/>},
            {path:"About", element:<AboutPage/>},
            {path:"Contact", element:<ContactPage/>},
            {path:"Catalog", element:<CatalogPage/>},
            {path:"Catalog/:id", element:<ProductDetailsPage/>},
        ]
    }
])