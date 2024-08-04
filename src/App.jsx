import React, { useState } from "react";
import Card from "./components/Card";

const App = () => {
	const [color, setColor] = useState("olive");

	return (
		<>
			<div
				className={"w-screen h-screen static"}
				style={{ backgroundColor: color }}>
				<Card>
					<button
						className="bg-red-400 px-4 py-1 rounded-2xl text-white font-semibold"
						onClick={() => {
							setColor("red");
						}}>
						RED
					</button>
					<button
						className="bg-green-400 px-4 py-1 rounded-2xl text-white font-semibold"
						onClick={() => {
							setColor("green");
						}}>
						GREEN
					</button>
					<button
						className="bg-blue-400 px-4 py-1 rounded-2xl text-white font-semibold"
						onClick={() => {
							setColor("blue");
						}}>
						BLUE
					</button>
				</Card>
			</div>
		</>
	);
};

export default App;
