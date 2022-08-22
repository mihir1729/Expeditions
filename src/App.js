import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Treks from "./Treks";
import "./App.css";
import data from "./data";

const url = `http://localhost:8080/expeditions`;

function App() {
	const [loading, setLoading] = useState(true);
	const [treks, setTreks] = useState(data);

	const removeTrek = (id) => {
		const newTreks = treks.filter((trek) => trek.id !== id);
		setTreks(newTreks);
	};

	// Used local host to connect API locally and got it working and running

	// const fetchTreks = async () => {
	// 	setLoading(true);

	// 	try {
	// 		const response = await fetch(url);
	// 		const treks = await response.json();
	// 		setTreks(treks);
	// 		setLoading(false);
	// 	} catch (error) {
	// 		setLoading(false);
	// 		console.log(error);
	// 	}
	// };

	const fetchTreks = () => {
		setTreks(data);
		setLoading(false);
	};

	useEffect(() => {
		fetchTreks();
	}, []);

	if (loading) {
		return (
			<main>
				<Loading />
			</main>
		);
	}

	if (treks.length == 0) {
		return (
			<main>
				<div className='title'>
					<h2>no expeditions left</h2>
					<button className='btn' onClick={() => fetchTreks()}>
						refresh
					</button>
				</div>
			</main>
		);
	}

	return (
		<main>
			<Treks treks={treks} removeTrek={removeTrek} />
		</main>
	);
}

export default App;
