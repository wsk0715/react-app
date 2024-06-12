export default function MemberForm({ title, children }) {
	return (
		<div className="flex flex-col items-center min-h-[28rem]">
			<div className="flex-grow
											w-2/3 max-w-[40rem] h-full
											p-8 border-2 rounded-md
											bg-gray-100 text-center ">
				<h1 className="text-2xl w-full text-center">{ title }</h1>
				<hr className="my-8" />
				{ children }
			</div>
		</div>
	);
}
