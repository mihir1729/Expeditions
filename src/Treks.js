import React from "react";
import Trek from "./Trek";

const Treks = ({ treks, removeTrek }) => {
	return (
		<section>
			<div className='title'>
				<h2>our expeditions</h2>
				<div className='underline'></div>
			</div>
			<div>
				{treks.map((trek) => {
					return <Trek key={trek.id} {...trek} removeTrek={removeTrek} />;
				})}
			</div>
		</section>
	);
};

export default Treks;
