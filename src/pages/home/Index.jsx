import { useEffect } from "react";

export default function Home() {
	useEffect(() => {
		sessionStorage.removeItem('id');
		sessionStorage.setItem('id', window.prompt('(test) 아이디를 입력해주세요:'));
	}, []);

	return (
		<div>
			<h1 className="text-2xl">Home</h1>
		</div>
	);
}
