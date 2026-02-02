import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaulLayout from "@/components/layout/DefaultLayout";
import HomePage from "@/pages/home/HomePage";

const ReactRoutes = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <DefaulLayout />,
            children: [
                {
                    path: "/",
                    element: <HomePage />,
                },
                {
                    path: "/team",
                    element: <div >team</div>,
                },
            ],
        },
    ]);
    return <RouterProvider router={router} />

};

export default ReactRoutes;