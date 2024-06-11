import LayoutHeader from './Header';
import LayoutFooter from './Footer';

export default function LayoutDefault({ children }) {
	return (
		<div className="flex flex-col min-h-screen ">
			<LayoutHeader />
			<div className="flex flex-grow">
				<div className="flex-grow mx-8 p-8 bg-gray-50">
					{ children }
				</div>
			</div>
			<LayoutFooter />
		</div>
	);
}
