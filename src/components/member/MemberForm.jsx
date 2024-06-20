export default function MemberForm({ title, children }) {
	return (
		<div className="flex flex-col flex-grow items-center min-h-[28rem]">
			<div id="memberForm"
					 className="flex-grow
											w-[60%] max-w-[40rem] min-w-[20rem] h-full
											p-8 border-2 rounded-md
											bg-gray-100 text-center ">
				<h1 className="w-full text-center my-4 text-3xl">{ title }</h1>
				<hr className="my-8" />
				{ children }
			</div>
		</div>
	);
}
