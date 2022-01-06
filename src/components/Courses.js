import React from "react";
import { useState, useEffect, useCallback } from "react";
import addCourse from "../functions/addCourse";
export default function Courses({ setSelected }) {
	const [lecturer, setLecturer] = useState("");
	const [course, setCourse] = useState("");
	const [population, setPopulation] = useState("");
	const [lecturers, setLecturers] = useState(
		localStorage.getItem("data") &&
			JSON.parse(localStorage.getItem("data")).lecturers
			? JSON.parse(localStorage.getItem("data")).lecturers
			: []
	);
	const [revLecturers, setRevLecturers] = useState(lecturers.reverse());

	const runAddCourse = useCallback(
		(venue, capacity) => {
			if (!population || !course || !lecturer) {
				return;
			}
			addCourse(lecturer, course, population);

			console.log("Course added");

			setLecturers(JSON.parse(localStorage.getItem("data")).lecturers);

			// setTimeout(() => {
			// 	window.location.reload(() => setSelected(true));
			// }, 10);
		},
		[course, lecturer, population]
	);
	useEffect(() => {
		setRevLecturers(lecturers.reverse());
		return () => lecturers.reverse();
	}, [lecturers, runAddCourse]);

	return (
		<>
			<form>
				<div className="form-div">
					<p>Lecturers and Courses</p>
					<input
						type="text"
						className="input lecturer"
						placeholder="Lecturer Name"
						onChange={(e) => setLecturer(e.target.value)}
					/>
					<div
						style={{
							display: "flex",
							width: "100%",
							alignItems: "center",
							justifyContent: "space-between",
							padding: 0,
						}}
					>
						<input
							type="text"
							className="input"
							placeholder="Course Name"
							onChange={(e) => setCourse(e.target.value)}
						/>
						<input
							type="number"
							className="input"
							placeholder="Population"
							onChange={(e) => setPopulation(e.target.value)}
						/>
					</div>
					<button
						className="input button"
						onClick={() => runAddCourse(lecturer, course, population)}
						style={{ marginBottom: "30px" }}
					>
						Add Course
					</button>
					<table
						style={{
							width: "80%",
							background: "#fff",
						}}
					>
						{
							//eslint-disable-next-line
							lecturers != 0
								? revLecturers.map((obj, index) => (
										<tbody
											style={{
												textAlign: "center",
												padding: "5px",
											}}
										>
											<tr>
												<td
													colSpan={2}
													style={{
														background: "#1a1a1a",
														color: "#fff",
														borderRadius: 0,
														fontSize: "24px",
														fontFamily: "Buenard",
														padding: "5px",
														margin: 0,
													}}
												>
													{lecturers.length - index}
												</td>
											</tr>

											<tr>
												<td
													colSpan={2}
													style={{
														background: "#1a1a1a",
														color: "#fff",
														borderRadius: 0,
														fontSize: "18px",
														fontFamily: "Buenard",
													}}
												>
													{obj.lecturer}
												</td>
											</tr>
											{obj.courses.map((item, index) => (
												<tr style={{ width: "100%" }}>
													<td>{item.course}</td>
													<td>{item.population}</td>
												</tr>
											))}
											<tr style={{ width: "100%" }}>
												<td
													colSpan={2}
													style={{ background: "#a9a9a9", borderRadius: 0 }}
												>
													{" "}
												</td>
											</tr>
										</tbody>
								  ))
								: null
						}
					</table>
				</div>
			</form>
		</>
	);
}
