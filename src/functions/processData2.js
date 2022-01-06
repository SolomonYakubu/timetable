// import data from "../data";
let data = JSON.parse(localStorage.getItem("data"));
console.log(data);

const days = {
	monday: [],
	tuesday: [],
	wednesday: [],
	thursday: [],
	friday: [],
};
let courses = [];
let venues;
let population;
let capacity;

let classes = [];
if (localStorage.getItem("data")) {
	for (let i = 0; i < data.lecturers.length; i++) {
		let course = data.lecturers[i].courses;
		for (let j = 0; j < course.length; j++) {
			courses.push(course[j]);
		}
	}
	venues = data.venues.map((item) => item);
	population = courses.map((item) => item.population);
	capacity = venues.map((item) => item.capacity);
}

//function to generate timetable for each day
const generateTable = (arr, num) => {
	let i = 0;
	let a = 0;
	const courseSelected = [];

	while (arr.length !== num) {
		const rand1 = Math.floor(Math.random() * capacity.length);
		let rand2 = Math.floor(Math.random() * courses.length);
		console.log(courses.length);
		if (
			// selected.includes(courses[rand2].course) ||
			classes.includes(venues[rand1]) ||
			courseSelected.includes(courses[rand2].course.split(" ")[0])
		) {
			continue;
		}
		if (
			capacity[rand1] - population[rand2] < 70 &&
			capacity[rand1] >= population[rand2]
		) {
			if (i === 2) {
				arr.push("Break");
				i++;
			}
			arr[i]
				? (arr[
						i
				  ] = `${arr[i]}\n\n${courses[rand2].course}\n${venues[rand1].name}`)
				: (arr[i] = `${courses[rand2].course}\n${venues[rand1].name}`);
			courseSelected.push(courses[rand2].course.split(" ")[0]);
			let index = courses.indexOf(courses[rand2]);
			// selected.push(courses[rand2].course);
			courses.splice(index, 1);
			classes.push(venues[rand1]);
			a++;
		}

		let rand6 = Math.floor(2 + Math.random() * 6);
		if (a === rand6) {
			i++;
			a = 0;
			classes = [];
		}
	}
	a = 0;
	i = 0;
};
//function to process the generated table asynchronously
const processData = async () => {
	if (localStorage.getItem("data")) {
		await generateTable(days.tuesday, 5);
		await generateTable(days.monday, 5);
		await generateTable(days.wednesday, 2);
		await generateTable(days.thursday, 5);
		await generateTable(days.friday, 2);
		console.log(days);
	}

	return days;
};

export default processData;
