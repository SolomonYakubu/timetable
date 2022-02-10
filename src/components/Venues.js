import React from "react";
import { useState, useEffect, useCallback } from "react";
import addVenue from "../functions/addVenue";
import Swal from "sweetalert2";
export default function Venues() {
  const [venue, setVenue] = useState("");
  const [capacity, setCapacity] = useState("");
  const [venues, setVenues] = useState(
    localStorage.getItem("data") &&
      JSON.parse(localStorage.getItem("data")).venues
      ? JSON.parse(localStorage.getItem("data")).venues
      : []
  );
  const [revVenues, setRevVenues] = useState(venues);

  const runAddVenue = useCallback(() => {
    if (!venue || !capacity) {
      return Swal.fire("error", "Fields cannot be empty", "error");
    }
    const runFunction = addVenue(venue, capacity);
    if (runFunction === -1) {
      return Swal.fire("error", "Venue Already Exist", "error");
    }

    setVenues(JSON.parse(localStorage.getItem("data")).venues);
    setVenue("");
    setCapacity("");
  }, [venue, capacity]);
  useEffect(() => {
    setRevVenues(venues.reverse());
    return () => venues.reverse();
  }, [venues, runAddVenue]);
  return (
    <>
      <div className="container">
        <form>
          <div className="form-div">
            <h2 style={{ fontFamily: "Flamenco", color: "#696969" }}>
              Input Venues
            </h2>
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
              onClick={(e) => {
                e.preventDefault();
                runAddVenue();
              }}
            >
              Add Venue
            </button>
          </div>
        </form>
      </div>
      <div className="container">
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
                    <tr style={{ width: "100%" }} key={index}>
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
    </>
  );
}
