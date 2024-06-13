export default function Button({ type, label, action }) {
	let className =
		'm-4 py-2 px-4 rounded ' +
		'text-white font-bold ' +
		'focus:outline-none focus:shadow-outline ' +
		'hover:bg-gray-700 ';
	if (type === 'submit') {
		className += 'bg-gray-600';
	}
	if (type === 'button') {
		className += 'bg-gray-500';
	}


	return (
		<button onClick={ action } className={ className }>
			{ label }
		</button>
	);
}
