import React from "react";
import { useRef, forwardRef } from "react";
import { useReactToPrint } from "react-to-print";
export default forwardRef(function Table({ data, setGenerate }) {
	const componentRef = useRef();
	const handlePrint = useReactToPrint({
		content: () => componentRef.current,
	});
	// const [data, setData] = useState([]);
	// const [generate, setGenerate] = useState(false);
	// const [dataGenerated, setDataGenerated] = useState([]);

	// useEffect(() => {
	// 	const getData = async () => {
	// 		setData(await processData());
	// 	};
	// 	getData();
	// }, []);
	return (
		<div className="container">
			<button
				onClick={() => setGenerate(false)}
				style={{
					// width: "30vw",
					padding: "10px",
					color: "#fff",
					background: "rgb(218, 29, 76)",
					border: "none",
					borderRadius: "10px",
					fontSize: "20px",
					fontFamily: "Flamenco",
					alignSelf: "flex-start",

					marginBottom: "20px",
				}}
			>
				Back
			</button>
			{data != 0 ? (
				<div
					style={{
						display: "flex",
						alignItems: "center",
						flexDirection: "column",
						justifyContent: "center",
						width: "100%",
						alignSelf: "center",
						whiteSpace: "pre-wrap",
					}}
					ref={componentRef}
				>
					<div
						style={{
							textAlign: "center",
							width: "100%",
							height: "50px",
							background: "#50c878",
							color: "#fff",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						SEET TIMETABLE
					</div>
					<table style={{ width: "100%" }}>
						<thead style={{ textAlign: "center" }}>
							<tr>
								<td>Day</td>
								<td>8-10 AM</td>
								<td>10-12 AM</td>
								<td>1-2 PM</td>
								<td>2-4 PM</td>
								<td>4-6 PM</td>
							</tr>
						</thead>
						<tbody style={{ textAlign: "center", padding: "5px" }}>
							<tr>
								<td>Monday</td>
								{data.monday.map((item) => (
									<td>{item}</td>
								))}
							</tr>
							<tr>
								<td>Tuesday</td>
								{data.tuesday.map((item) => (
									<td>{item}</td>
								))}
							</tr>

							<tr>
								<td>Wednesday</td>
								{data.wednesday.map((item) => (
									<td>{item}</td>
								))}
							</tr>
							<tr>
								<td>Thursday</td>
								{data.thursday.map((item) => (
									<td>{item}</td>
								))}
							</tr>
							<tr>
								<td>Friday</td>
								{data.friday.map((item) => (
									<td>{item}</td>
								))}
							</tr>
						</tbody>
					</table>
				</div>
			) : (
				<p>loading</p>
			)}
			<button
				onClick={handlePrint}
				style={{
					// width: "30vw",
					padding: "10px",
					color: "#fff",
					background: "#50c878",
					border: "none",
					borderRadius: "10px",
					fontSize: "20px",
					fontFamily: "Flamenco",
					alignSelf: "flex-end",

					marginTop: "20px",
				}}
			>
				Print
			</button>
		</div>
	);
});
