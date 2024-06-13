export default function Header() {
	return (
		<header className="flex items-center justify-between
											 w-full h-24
											 p-4
											 bg-gray-700 text-white">
			<div className="text-2xl font-bold">
				<a href="/" className="hover:text-gray-400">My Company</a>
			</div>
			<nav>
				<ul className="flex space-x-8">
					<li>
						<a href="/register" className="hover:text-gray-400">Register</a>
					</li>
					<li>
						<a href="/member/detail" className="hover:text-gray-400">My Page</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}
