import { useState } from "react";
import Navbar from "../components/shared/navbar";
import { data } from "../constants/data";

import moon  from '../assets/destination/image-moon.png';
import europa  from '../assets/destination/image-europa.png';
import titan  from '../assets/destination/image-titan.png';
import mars  from '../assets/destination/image-mars.png';

const Destination = () => {
	const destinations = data.destinations;
	const [destNum, setDestNum] = useState(0);

	const mainStyle =
		"border-b-[3px] hover:border-white pb-2 border-transparent cursor-pointer";
	const activeStyle = "border-b-[3px] border-white pb-2 cursor-pointer";

	const getImage = (name : string) => {
    switch (name) {
      case "Moon":
        return moon;
      case "Mars":
        return mars;
      case "Europa":
        return europa;
      case "Titan":
        return titan;
      default:
        return moon;
    }
  };

	return (
		<div className="h-screen  bg-[url(./assets/destination/background-destination-desktop.jpg)] bg-cover">
			<Navbar />
			<div className="px-32 p-10">
				<p
					className="text-2xl uppercase tracking-widest"
					style={{ wordSpacing: "0.3em" }}
				>
					<span className="text-myBLue-100 font-bold opacity-40">01</span> Pick
					your destination
				</p>
				<div className="flex p-20 justify-between">
					<div>
						<div>
							{/* <img src={destinations[destNum].images.png} alt="" /> */}
							<img src={getImage(destinations[destNum].name)} alt="" />
						</div>
					</div>
					<div className="w-2/5">
						<ul className="flex w-3/5 justify-between space-x-10">
							{destinations.map((dest, index) => (
								<li
									key={dest.name}
									className={destNum == index ? activeStyle : mainStyle}
									onClick={() => setDestNum(index)}
								>
									<p className="font-extralight uppercase tracking-widest">
										{dest.name}
									</p>
								</li>
							))}
						</ul>
						<div>
							<p className="text-7xl font-belle uppercase my-10">
								{destinations[destNum].name}
							</p>
							<p className="font-extralight text-xl">
								{destinations[destNum].description}
							</p>
							<hr className="opacity-35 my-8" />
							<div className="flex w-4/5 justify-between font-extralight">
								<div>
									<p>AVG. DISTANCE</p>
									<p className="font-belle text-2xl uppercase font-extralight">
										{destinations[destNum].distance}
									</p>
								</div>
								<div>
									<p>EST. TRAVEL TIME</p>
									<p className="font-belle text-2xl uppercase font-extralight">
										{destinations[destNum].travel}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Destination;
