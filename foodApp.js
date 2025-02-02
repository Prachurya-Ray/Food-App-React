import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Component/Header";
import Body from "./src/Component/Body"
import Footer from "./src/Component/Footer"
import About from "./src/Component/About";
import Error from "./src/Component/Error";
import Contact from "./src/Component/Contact";
import RestaurentMenu from "./src/Component/RestaurentMenu";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";

/*
                Header
                    - Logo
                    - Nav Iterm
                    - Cart
                Body
                    - Search Bar
                    - Restaurant List
                        ~ Restaurant Card
                            * Image
                            * Name
                            * Cusine
                            * Rating
                Footer
                    - Links
                    - Copyright
*/

const AppLayout = () =>{
    return (
        <React.Fragment>
            <Header/>
            <Outlet/>
            <Footer/>
        </React.Fragment>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement: <Error/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/restaurant/:id",
                element:<RestaurentMenu/>,
            }
        ]
    },
    
])

let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);