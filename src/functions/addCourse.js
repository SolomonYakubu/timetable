const addCourse = (lecturer, course, population) => {
	let data = {
		venues: [],
		lecturers: [],
	};
	if (
		!localStorage.getItem("data") ||
		!JSON.parse(localStorage.getItem("data")).lecturers
	) {
		data.lecturers = [{ lecturer, courses: [{ course, population }] }];
		localStorage.setItem("data", JSON.stringify(data));
	} else {
		data = JSON.parse(localStorage.getItem("data"));
		//eslint-disable-next-line
		if (data.lecturers.filter((item) => item.lecturer === lecturer) != 0) {
			const lecturerArray = data.lecturers.map((item) => item.lecturer);
			const index = lecturerArray.indexOf(lecturer);
			console.log(index);
			const selectedLecturer = data.lecturers.filter(
				(item) => item.lecturer === lecturer
			)[0];
			console.log(selectedLecturer);
			data.lecturers.splice(index, 1);
			data.lecturers = [
				...data.lecturers,
				{
					lecturer,
					courses: [...selectedLecturer.courses, { course, population }],
				},
			];
		} else {
			data.lecturers = [
				...data.lecturers,
				{
					lecturer,
					courses: [{ course, population }],
				},
			];
		}
		localStorage.setItem("data", JSON.stringify(data));
	}
};
export default addCourse;
