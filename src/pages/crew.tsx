import { useState } from "react";
import Navbar from "../components/shared/navbar";
import { data } from "../constants/data";

const Crew = () => {
	const crews = data.crew;
	const [crewNum, setCrewNum] = useState(0);

	const mainStyle = "aspect-square w-4 rounded-full bg-white opacity-30";
	const activeStyle = "aspect-square w-4 rounded-full bg-white";

	return (
		<div className="h-screen bg-[url(./assets/destination/background-destination-desktop.jpg)] bg-cover overflow-y-scroll">
			<Navbar />
			<div className="px-32 p-10">
				<p
					className="text-2xl uppercase tracking-widest"
					style={{ wordSpacing: "0.3em" }}
				>
					<span className="text-myBLue-100 font-bold opacity-40">02</span> MEET
					YOUR CREW
				</p>
				<div className="flex justify-between">
					<div className="flex flex-col w-2/5 h-[70vh] justify-between">
						<div className="justify-self-center pt-36">
							<p className="text-3xl font-belle uppercase">{crews[crewNum].role}</p>
							<p className="text-5xl font-belle uppercase mt-4 mb-6">{crews[crewNum].name}</p>
							<p className="font-extralight text-xl">{crews[crewNum].bio}</p>
						</div>
						<div className="">
							<ul className="flex w-2/5 justify-between space-x-10">
								{crews.map((crew, index) => (
									<li key={crew.name}>
										<div
											className={crewNum == index ? activeStyle : mainStyle}
											onClick={() => setCrewNum(index)}
										></div>
									</li>
								))}
							</ul>
						</div>
					</div>
					<div>
						<img src={crews[crewNum].images.png} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Crew;
