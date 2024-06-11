export default function Header() {
	return (
		<header className="flex items-center justify-between w-full h-24 p-4 bg-gray-700 text-white">
			<div className="text-2xl font-bold">My Company</div>
			<nav>
				<ul className="flex space-x-4">
					<li>
						<a href="/" className="hover:text-gray-400">Home</a>
					</li>
					<li>
						<a href="#" className="hover:text-gray-400">About</a>
					</li>
					<li>
						<a href="#" className="hover:text-gray-400">Contact</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}
