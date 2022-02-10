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

let classes = [];
let level1 = [];
let level2 = [];
if (localStorage.getItem("data")) {
  for (let i = 0; i < data.lecturers.length; i++) {
    let course = data.lecturers[i].courses;
    for (let j = 0; j < course.length; j++) {
      // console.log(course[j].course.split(" ")[0][0]);
      //eslint-disable-next-line
      if (course[j].course.split(" ")[1][0] == "1") {
        level1.push(course[j]);
        //eslint-disable-next-line
      } else if (course[j].course.split(" ")[1][0] == "2") {
        level2.push(course[j]);
      } else {
        courses.push(course[j]);
      }
    }
  }
  venues = data.venues.map((item) => item);
}

//function to generate timetable for each day
const generateTable = (arr, num) => {
  let i = 0;

  let a = 0;

  let courseSelected = [];
  // let courseSelectedCode = []
  if (level1.length > 0) {
    for (let j = 0; j < num; j++) {
      if (j === 2) {
        arr[j] = "break";
        continue;
        // j++;
      }

      let venue = venues.filter(
        (item) => +item.capacity >= +level1[j].population
      );
      let rand1 = Math.floor(Math.random() * venue.length);

      if (venue.length > 0) {
        arr[j]
          ? (arr[j] = `${arr[j]}\n\n${level1[j].course}\n${venue[rand1].name}`)
          : (arr[j] = `${level1[j].course}\n${venue[rand1].name}`);

        classes.push(venue[rand1]);
      }
    }
    level1.splice(0, 4);
  }
  if (level2.length > 0) {
    for (let j = 0; j < num - 1; j++) {
      if (j === 2) {
        arr[j] = "break";
        continue;
        // j++;
      }

      let venue = venues.filter(
        (item) =>
          item.capacity - +level2[j].population <= 150 &&
          +item.capacity - +level2[j].population > 0
      );
      let rand1 = Math.floor(Math.random() * venue.length);

      if (venue.length > 0) {
        arr[j]
          ? (arr[j] = `${arr[j]}\n\n${level2[j].course}\n${venue[rand1].name}`)
          : (arr[j] = `${level2[j].course}\n${venue[rand1].name}`);

        classes.push(venue[rand1]);
      }
    }
    level2.splice(0, 4);
  }

  let rand6 = Math.floor(Math.random() * 3) + 1;
  while (num !== i) {
    let rand2 = Math.floor(Math.random() * courses.length);

    if (
      courseSelected.includes(
        courses[rand2].course.split(" ")[0] +
          courses[rand2].course.split(" ")[1][0]
      )
    ) {
      continue;
    }
    const venue = venues.filter(
      // eslint-disable-next-line no-loop-func
      (item) =>
        +item.capacity - +courses[rand2].population <= 250 &&
        +item.capacity - +courses[rand2].population > 0 &&
        !classes.includes(item.name)
    );

    let rand1 = Math.floor(Math.random() * venue.length);

    if (i === 2) {
      arr[i] = "break";
      i++;
    }
    if (venue.length > 0) {
      arr[i]
        ? (arr[
            i
          ] = `${arr[i]}\n\n${courses[rand2].course}\n${venue[rand1].name}`)
        : (arr[i] = `${courses[rand2].course}\n${venue[rand1].name}`);
      courseSelected.push(
        courses[rand2].course.split(" ")[0] +
          courses[rand2].course.split(" ")[1][0]
      );

      courses.splice(rand2, 1);
      classes.push(venues[rand1].name);
      a++;

      if (a === rand6) {
        i++;
        a = 0;
        rand6 = Math.floor(Math.random() * 3) + 1;
        classes = [];
        courseSelected = [];
      }
    }
  }
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
