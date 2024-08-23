import { useState } from "react";
import Navbar from "../components/shared/navbar";
import { data } from "../constants/data";

const Tech = () => {
	const techs = data.technology;
	const [techsNum, setTechsNum] = useState(0);
  console.log(techs);
  

	const mainStyle = "aspect-square rounded-full border w-20 items-center flex justify-center cursor-pointer font-belle text-3xl";
	const activeStyle = "aspect-square rounded-full border w-20 items-center flex justify-center cursor-pointer font-belle text-3xl bg-white text-black";

	return (
		<div className="h-screen  bg-[url(./assets/technology/background-technology-desktop.jpg)] bg-cover overflow-y-scroll">
			<Navbar />
			<div className="px-32 p-10 pr-0">
				<p
					className="text-2xl uppercase tracking-widest"
					style={{ wordSpacing: "0.3em" }}
				>
					<span className="text-myBLue-100 font-bold opacity-40">03</span> SPACE
					LAUNCH 101
				</p>
				<div className="flex justify-between">
					<div className="flex w-2/5 h-[70vh] justify-between items-center">
						<ul className="flex flex-col space-y-6 mr-10">
							{techs.map((tech, index) => (
								<li key={tech.name}>
									<div
										className={techsNum == index ? activeStyle : mainStyle}
										onClick={() => setTechsNum(index)}
									><p>{index + 1}</p></div>
								</li>
							))}
						</ul>
						<div className="justify-self-center">
							<p className="text-3xl font-belle uppercase text-myBLue-100 opacity-55"> THE TERMINOLOGY...</p>
							<p className="text-5xl font-belle uppercase mt-4 mb-6">
								{techs[techsNum].name}
							</p>
							<p className="font-extralight text-xl">
								{techs[techsNum].description}
							</p>
						</div>
					</div>
					<div>
						<img src={techs[techsNum].images.portrait} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Tech;
