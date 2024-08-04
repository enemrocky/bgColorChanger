import React from "react";
import Button from "./Button";

const Card = ({ children }) => {
	return (
		<div className="flex gap-4 bg-white py-4 px-6 ml-36 rounded-full shadow-md w-fit absolute bottom-8 left-1/3">
			{children}
		</div>
	);
};

export default Card;
