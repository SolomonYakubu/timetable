import React, { useState } from "react";

import Venues from "../components/Venues";
import Courses from "../components/Courses";
import processData from "../functions/processData";
import Table from "./Table";
export default function Dashboard() {
	const [selected, setSelected] = useState(false);
	const [data, setData] = useState([]);
	const [generate, setGenerate] = useState(false);
	const generateTable = async () => {
		console.log("clicked");
		// setDataGenerated(await processData());

		setTimeout(async () => {
			setData(await processData());
			setGenerate(true);
		}, 1500);
	};
	return (
		<>
			{generate ? (
				<Table data={data} setGenerate={setGenerate} />
			) : (
				<div className="container">
					<div
						style={{
							alignSelf: "flex-end",
							margin: "10px",
							marginRight: "20px",
						}}
					>
						What do you want to input?
					</div>
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							width: "100%",
						}}
					>
						<button
							onClick={() => generateTable()}
							style={{
								// width: "30vw",
								// padding: "5px",
								color: "#fff",
								background: "#50c878",
								border: "none",
								borderRadius: "10px",
								fontSize: "20px",
								fontFamily: "Flamenco",
							}}
						>
							Generate
						</button>
						<div
							style={{
								display: "flex",
								alignSelf: "flex-end",
								marginRight: "20px",
								background: "#fff",
								borderRadius: "47%",
							}}
						>
							<button
								style={!selected ? roundButtonActive : roundButtonInActive}
								onClick={() => setSelected(false)}
							>
								Venues
							</button>
							<button
								style={selected ? roundButtonActive : roundButtonInActive}
								onClick={() => setSelected(true)}
							>
								Courses
							</button>
						</div>
					</div>
					{selected ? <Courses setSelected={setSelected} /> : <Venues />}
				</div>
			)}
		</>
	);
}
const roundButtonActive = {
	height: "50px",
	width: "50px",
	borderRadius: "50%",
	background: "rgb(247, 10, 187)",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	border: "none",
	color: "#fff",
	fontFamily: "flamenco",
	margin: "5px",
	outline: "none",
};
const roundButtonInActive = {
	height: "50px",
	width: "50px",
	borderRadius: "50%",
	background: "grey",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	border: "none",
	color: "#fff",
	fontFamily: "flamenco",
	margin: "5px",
	outline: "none",
	opacity: "0.5",
};
