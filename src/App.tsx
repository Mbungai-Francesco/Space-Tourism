import { Link, Route, Routes } from "react-router-dom";
import { Crew, Destination, Home, NotFoundPage, Tech } from "./pages";
import NavBar from "./components/shared/navbar";
import { bgImage } from "./assets/home/background-home-desktop.jpg"

function App() {

	return (
		<>
			<div className="font-belle bg-slate-200 h-screen bg-[url(./assets/home/background-home-desktop.jpg)] bg-cover">
				<NavBar/>
				<div>
					<Link to='/' ></Link>
				</div>
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