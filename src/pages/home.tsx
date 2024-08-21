const Home = () => {
	return (
		<div className="flex flex-grow items-end p-20 justify-between">
			<div className="w-1/2">
				<p className="text-2xl text-myBLue-100">SO, YOU WANT TO TRAVEL TO</p>
				<p className="text-9xl font-belle">SPACE</p>
				<p className="text-myBLue-100">
					Let’s face it; if you want to go to space, you might as well genuinely
					go <br /> to outer space and not hover kind of on the edge of it. Well sit
					back, <br /> and relax because we’ll give you a truly out of this world
					experience!
				</p>
			</div>
			<div className="w-1/2 flex justify-end ">
				<div className="bg-white text-black w-[40%] aspect-square rounded-full flex items-center justify-center">
					<p className="text-2xl font-belle">EXPLORE</p>
				</div>
			</div>
		</div>
	);
};

export default Home;
