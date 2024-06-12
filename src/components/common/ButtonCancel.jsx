export default function ButtonCancel({ action, label }) {
	return (
		<button
			onClick={ action }
			className="m-4 py-2 px-4 rounded focus:outline-none focus:shadow-outline
								 bg-gray-500 hover:bg-gray-700 text-white font-bold"
		>
			{ label }
		</button>
	);
}
