import { Route, Routes } from "react-router-dom";
import { Crew, Destination, Home, NotFoundPage, Tech } from "./pages";

function App() {

	return (
		<>
			<div className="text-white font-barlow">
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