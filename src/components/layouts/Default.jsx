import Header from './Header';
import Footer from './Footer';

export default function LayoutDefault({ children }) {
	return (
		<div id="body" className="flex flex-col min-h-screen ">
			<Header />
			<main className="flex flex-grow flex-col">
				<section className="flex flex-grow mx-8 p-16 pt-12 bg-gray-50">
					{ children }
				</section>
			</main>
			<Footer />
		</div>
	);
}
