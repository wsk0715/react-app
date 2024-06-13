import Header from './Header';
import Footer from './Footer';

export default function LayoutDefault({ children }) {
	return (
		<div id="body" className="flex flex-col min-h-screen ">
			<Header />
			<main className="flex flex-grow">
				<section className="flex-grow mx-8 p-8 bg-gray-50">
					{ children }
				</section>
			</main>
			<Footer />
		</div>
	);
}
