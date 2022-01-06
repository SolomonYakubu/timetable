const addVenue = (venue, capacity) => {
	let data = {
		venues: [],
		lecturers: [],
	};
	if (!localStorage.getItem("data")) {
		data.venues = [...data.venues, { name: venue, capacity }];
		localStorage.setItem("data", JSON.stringify(data));
	} else {
		if (
			JSON.parse(localStorage.getItem("data"))
				.venues.map((item) => item.name === venue)
				.includes(true)
		) {
			return -1;
		}
		data = JSON.parse(localStorage.getItem("data"));
		data.venues = [...data.venues, { name: venue, capacity }];
		localStorage.setItem("data", JSON.stringify(data));
	}
};
export default addVenue;
