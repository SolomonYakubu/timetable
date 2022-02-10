import React, { useState } from "react";
import Venues from "../components/Venues";
import Courses from "../components/Courses";
import processData from "../functions/processData";
import Table from "./Table";
import Swal from "sweetalert2";
export default function Dashboard() {
  const [selected, setSelected] = useState(false);
  const [data, setData] = useState([]);
  const [generate, setGenerate] = useState(false);

  const handleChange = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      console.log(JSON.parse(e.target.result));
      //   setFiles(e.target.result);
      localStorage.setItem("data", JSON.parse(e.target.result));
      window.location.reload();
    };
  };
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
      <h1>Kogi Timetable Generator</h1>
      {generate ? (
        <Table data={data} setGenerate={setGenerate} />
      ) : (
        <>
          <div className="container">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "20px",
                alignSelf: "flex-end",
                width: "100%",
                padding: 0,
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    fontFamily: "Flamenco",
                    fontSize: "18px",
                    marginBottom: "5px",
                  }}
                >
                  Upload data
                </div>
                <input
                  type="file"
                  onChange={handleChange}
                  accept=".json"
                  avatar="Upload data"
                  className="file"
                />
              </div>

              <button
                onClick={() => generateTable()}
                className="button"
                style={{
                  color: "#fff",
                  background: "#50c878",
                  border: "none",
                  borderRadius: "10px",
                  fontSize: "20px",
                  fontFamily: "Flamenco",
                  // marginRight:"80px",
                  alignSelf: "flex-end",
                  marginTop: "5px",
                }}
              >
                Generate
              </button>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "20px",
                alignSelf: "flex-end",
                width: "100%",
                padding: 0,
                flexWrap: "wrap",
              }}
            >
              <button
                onClick={() => {
                  Swal.fire({
                    title: "Do you want to clear data?",

                    showCancelButton: true,
                    confirmButtonText: "Yes",
                  }).then((result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                      localStorage.clear();
                      window.location.reload();
                    }
                  });
                }}
                className="button"
                style={{
                  color: "#fff",
                  background: "rgb(218, 29, 76)",
                  border: "none",
                  borderRadius: "10px",
                  fontSize: "20px",
                  fontFamily: "Flamenco",
                  // marginRight:"80px",
                  alignSelf: "flex-end",
                  margin: 0,
                }}
              >
                Clear Data
              </button>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  marginTop: "20px",
                  alignSelf: "flex-end",
                }}
              >
                <div>What do you want to input?</div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    alignSelf: "flex-end",
                  }}
                >
                  <div
                    style={{
                      display: "flex",

                      marginRight: "20px",
                      background: "#fff",
                      borderRadius: "47%",
                    }}
                  >
                    <button
                      style={
                        !selected ? roundButtonActive : roundButtonInActive
                      }
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
              </div>
            </div>
          </div>
          {selected ? <Courses setSelected={setSelected} /> : <Venues />}
        </>
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
