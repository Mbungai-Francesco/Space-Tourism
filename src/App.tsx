import { Link, RouterProvider } from "react-router-dom";
// import NavBar from "./components/shared/navbar";
import router from "./main";

function App() {
	return (
		<>
			<div className="font-belle">
				{/* <NavBar/> */}
				<div>
					<Link to='/' ></Link>
				</div>
				<RouterProvider router={router} />
			</div>
		</>
	);
}

export default App;