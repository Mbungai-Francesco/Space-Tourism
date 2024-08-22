import { Link } from "react-router-dom";
import Navbar from "../components/shared/navbar";

const Home = () => {
	return (
		<div className="h-screen  bg-[url(./assets/home/background-home-desktop.jpg)] bg-cover">
			<Navbar />
			<div className="flex flex-grow items-end p-20 justify-between">
				<div className="w-1/2">
					<p className="text-2xl text-myBLue-100">SO, YOU WANT TO TRAVEL TO</p>
					<p className="text-[9em] font-belle">SPACE</p>
					<p className="text-myBLue-100 text-lg">
						Let’s face it; if you want to go to space, you might as well
						genuinely go <br /> to outer space and not hover kind of on the edge
						of it. Well sit back, <br /> and relax because we’ll give you a
						truly out of this world experience!
					</p>
				</div>
				<Link to={"/destination"} className="w-1/2 flex justify-end">
					<div className="bg-transparent text-black w-[60%] aspect-square rounded-full flex border-[5em] border-white border-opacity-0  hover:border-opacity-20 overflow-hidden transition">
						<p className="text-2xl font-belle bg-white w-full items-center h-full flex justify-center">
							EXPLORE
						</p>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Home;
