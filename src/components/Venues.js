import React from "react";
import { useState, useEffect, useCallback } from "react";
import addVenue from "../functions/addVenue";

export default function Venues() {
	const [venue, setVenue] = useState("");
	const [capacity, setCapacity] = useState("");
	const [venues, setVenues] = useState(
		localStorage.getItem("data") &&
			JSON.parse(localStorage.getItem("data")).venues
			? JSON.parse(localStorage.getItem("data")).venues
			: []
	);
	const [revVenues, setRevVenues] = useState(venues.reverse());

	const runAddVenue = useCallback((venue, capacity) => {
		if (!venue || !capacity) {
			return;
		}
		const runFunction = addVenue(venue, capacity);
		if (runFunction === -1) {
			return console.log("Venue already exist");
		}
		console.log("Venue added");

		setVenues(JSON.parse(localStorage.getItem("data")).venues);
		setVenue("");
		setCapacity("");
	}, []);
	useEffect(() => {
		setRevVenues(venues.reverse());
		return () => venues.reverse();
	}, [venues, runAddVenue]);
	return (
		<>
			<form>
				<div className="form-div">
					<p>Venues</p>
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
							placeholder="Venue Name"
							onChange={(e) => setVenue(e.target.value)}
							value={venue}
						/>
						<input
							type="number"
							className="input"
							placeholder="Capacity"
							onChange={(e) => setCapacity(e.target.value)}
							value={capacity}
						/>
					</div>
					<button
						className="input button"
						onClick={() => runAddVenue(venue, capacity)}
					>
						Add Venue
					</button>

					<table style={{ width: "100%" }}>
						<thead style={{ textAlign: "center" }}>
							<tr>
								<td>S/N</td>
								<td>Venue</td>
								<td>Capacity</td>
							</tr>
						</thead>
						<tbody
							style={{
								textAlign: "center",
								padding: "5px",
							}}
						>
							{
								//eslint-disable-next-line
								venues != 0
									? revVenues.map((item, index) => (
											<tr style={{ width: "100%" }}>
												<td>{venues.length - index}</td>
												<td>{item.name}</td>
												<td>{item.capacity}</td>
											</tr>
									  ))
									: null
							}
						</tbody>
					</table>
				</div>
			</form>
		</>
	);
}
