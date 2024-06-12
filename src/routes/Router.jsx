import { Outlet, createBrowserRouter } from "react-router-dom";
import LayoutDefault from "../components/layouts/Default";
import Home from "../pages/home/Index";
import Register from "../pages/member/Index";

export default createBrowserRouter([
	{
		element: (
			<LayoutDefault>
				<Outlet />
			</LayoutDefault>
		),
		children: [
			{ path: "/", element: <Home /> },
			{ path: "/register", element: <Register /> },
		],
	},
]);
