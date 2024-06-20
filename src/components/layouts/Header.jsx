import { Link } from "react-router-dom";
import useAuthStore from "../../store/authStore";
import { useEffect } from "react";

export default function LayoutHeader() {
	const { isLoggedIn, logout } = useAuthStore((state) => ({
		isLoggedIn: state.isLoggedIn,
		logout: state.logout,
	}));

	const handleLogout = async () => {
		if (window.confirm('로그아웃 하시겠습니까?')) {
			logout();
			alert('로그아웃 되었습니다.');
		}
	}

	useEffect(() => {
	}, [isLoggedIn]);


	return (
		<header className="flex items-center justify-between
											 w-full h-24
											 p-8
											 bg-gray-700 text-white">
			<div className="text-2xl font-bold">
				<a href="/" className="hover:text-gray-400">My Company</a>
			</div>
			<nav>
				<ul className="flex space-x-8">
					{
						!isLoggedIn
							?
							<>
								<li>
									<Link to="/login" className="hover:text-gray-400">Login</Link>
								</li>
								<li>
									<Link to="/register" className="hover:text-gray-400">Register</Link>
								</li>
							</>
							:
							<>
								<li>
									<Link to="/" className="hover:text-gray-400" onClick={ handleLogout }>Logout</Link>
								</li>
								<li>
									<Link to="/member/detail" className="hover:text-gray-400">My Page</Link>
								</li>
							</>
					}
				</ul>
			</nav>
		</header>
	);
}
