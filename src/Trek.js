import React, { useState } from "react";

const Trek = ({ id, name, info, image, price, height, removeTrek }) => {
	const [readMore, setreadMore] = useState(false);

	return (
		<article className='single-trek'>
			<img src={image} alt={name} />
			<footer>
				<div className='trek-info'>
					<h4 className='trek-name'>{name}</h4>
					<h4 className='trek-height'>{height}</h4>
					<h4 className='trek-price'>{price}</h4>
				</div>
				<p>
					{readMore ? info : `${info.substring(0, 200)}...`}
					<button
						onClick={() => {
							setreadMore(!readMore);
						}}
					>
						{readMore ? `show less` : `read more`}
					</button>
				</p>
				<button className='delete-btn' onClick={() => removeTrek(id)}>
					not interested
				</button>
			</footer>
		</article>
	);
};

export default Trek;
