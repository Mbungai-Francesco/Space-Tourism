import { useState } from "react";
import Navbar from "../components/shared/navbar";
import { Destination as destType } from "../types";
import { data } from "../constants/data";

const Destination = () => {
	const [destinations, setDestinations] = useState<destType[]>(data.destinations);

	// useEffect(() => {
	// 	console.log(data.destinations);
    
	// }, []);

	return (
		<div className="h-screen  bg-[url(./assets/destination/background-destination-desktop.jpg)] bg-cover">
			<Navbar />
			<div>
				<p>
					<span>01</span> Pick your destination
				</p>
				<div>
					<img src="" alt="" />
				</div>
			</div>
		</div>
	);
};

export default Destination;
