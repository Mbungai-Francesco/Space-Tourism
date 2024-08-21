import { Link, useLocation } from "react-router-dom";
import { routes } from "../../constants";

const Navbar = () => {
	const location = useLocation()
	const path = location.pathname

	const mainStyle = "border-b-4 hover:border-white py-6 border-transparent"
	const activeStyle = "border-b-4 border-white py-6"

	return (
		<>
			<div className="flex items-center justify-between pt-8 pl-12 relative z-0">
				<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" className="z-30">
					<g fill="none" fill-rule="evenodd">
						<circle cx="24" cy="24" r="24" fill="#FFF" />
						<path
							fill="#0B0D17"
							d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
						/>
					</g>
				</svg>					
				{/* <div className="border-b w-[55%] h-0 border-pink-600 absolute self-center right-[35%] z-20"></div> */}
				<ul className="flex pr-12 pl-24 bg-white bg-opacity-10 space-x-7 backdrop-blur-xl relative z-30">
					{routes.map((route) => (
						<li key={route.num} className={path == route.path ? activeStyle : mainStyle}>
							<Link to={route.path}>
								<p className="uppercase text-sm text-white">
									<span className="font-semibold font-barlow mr-2">
										{route.num}
									</span>
									{route.name}
								</p>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default Navbar;
