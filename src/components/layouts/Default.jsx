import Header from './Header';
import Footer from './Footer';

export default function LayoutDefault({ children }) {
	return (
		<div id="body" className="flex flex-col min-h-screen ">
			<Header />
			<main className="flex flex-grow flex-col">
				<section id="mainSection"
								 className="flex flex-grow
								 						min-w-[28rem]
								 						mx-[4vw] p-16 pt-12 bg-gray-50">
					{ children }
				</section>
			</main>
			<Footer />
		</div>
	);
}
