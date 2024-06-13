import { createBrowserRouter, Outlet } from "react-router-dom";
import LayoutDefault from "../components/layouts/Default";
import Home from "../pages/home/Index";
import { MemberDetail, MemberModify, Register } from "../pages/member/Index";

export default createBrowserRouter([
	{
		element: (
			<LayoutDefault>
				<Outlet />
			</LayoutDefault>
		),
		children: [
			// home
			{ path: "/", element: <Home /> },

			// register, login
			{ path: "/register", element: <Register /> },

			// member
			{ path: "/member/detail", element: <MemberDetail /> },
			{ path: "/member/modify", element: <MemberModify /> },
		],
	},
]);
