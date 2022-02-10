import React from "react";
import { useState, useEffect, useCallback } from "react";
import addCourse from "../functions/addCourse";
import Swal from "sweetalert2";
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

  const runAddCourse = useCallback(() => {
    if (!population || !course || !lecturer) {
      return Swal.fire("error", "Fields cannot be empty", "error");
    }
    addCourse(lecturer, course, population);

    setLecturers(JSON.parse(localStorage.getItem("data")).lecturers);
  }, [course, lecturer, population]);
  useEffect(() => {
    setRevLecturers(lecturers.reverse());
    return () => lecturers.reverse();
  }, [lecturers, runAddCourse]);

  return (
    <>
      <div className="container">
        <form>
          <div className="form-div">
            <h2 style={{ fontFamily: "Flamenco", color: "#696969" }}>
              Input Lecturer and Course
            </h2>
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
              onClick={(e) => {
                e.preventDefault();
                runAddCourse();
              }}
              style={{ marginBottom: "30px" }}
            >
              Add Course
            </button>
          </div>
        </form>
      </div>

      {
        //eslint-disable-next-line
        lecturers != 0
          ? revLecturers.map((obj, index) => (
              <>
                <div className="container" style={{}} key={index}>
                  <div
                    style={{
                      fontSize: "22px",
                      fontFamily: "Flamenco",
                      fontWeight: "bold",
                      background: "rgb(218, 29, 76)",
                      width: "100%",
                      color: "#fff",
                      padding: "5px",
                    }}
                  >
                    {obj.lecturer}
                  </div>
                  {obj.courses.map((item, index) => (
                    <>
                      <div
                        style={{
                          display: "flex",
                          width: "95%",
                          justifyContent: "space-between",
                          fontSize: "18px",
                        }}
                        key={index}
                      >
                        <div>
                          {index + 1}. {item.course}
                        </div>
                        <div>Population: {item.population}</div>
                      </div>
                      {/* <div></div> */}
                    </>
                  ))}
                </div>
              </>
            ))
          : null
      }
    </>
  );
}
