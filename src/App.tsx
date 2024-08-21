import { Route, Routes } from "react-router-dom";
import { Crew, Destination, Home, NotFoundPage, Tech } from "./pages";
import NavBar from "./components/shared/navbar";

function App() {

	return (
		<>
			<div className="flex flex-col text-white font-barlow bg-slate-200 h-screen bg-[url(./assets/home/background-home-desktop.jpg)] bg-cover">
				<NavBar/>
				<Routes>
					<Route index={true} element={<Home />} errorElement={<NotFoundPage />}></Route>
					<Route path='destination' element={<Destination />} errorElement={<NotFoundPage />}></Route>
					<Route path='crew' element={<Crew />} errorElement={<NotFoundPage />}></Route>
					<Route path='tech' element={<Tech />} errorElement={<NotFoundPage />}></Route>
				</Routes>
			</div>
		</>
	);
}

export default App;