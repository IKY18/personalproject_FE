import React, { useEffect, useState } from "react";

export default function Interest() {
  const [interests, setInterests] = useState([]);

  useEffect(() => {
    fetchInterests();
  }, []);

  const fetchInterests = async () => {
    try {
      const response = await fetch("http://localhost:8080/interests"); // Replace with your JSON server URL
      const data = await response.json();
      setInterests(data);
    } catch (error) {
      console.error("Error fetching interests:", error);
    }
  };

  return (
    <div className="shadow-1-strong bg-white my-5 p-5" id="interest">
      <div className="work-interest-section">
        <h2 className="h2 fw-light mb-4">Interest</h2>
        <div className="timeline">
          {interests.map((interest) => (
            <div
              key={interest.id}
              className="timeline-card timeline-card-info"
              data-aos="fade-in"
            >
              <div className="timeline-head px-4 pt-3">
                <div className="h5">{interest.title}</div>
              </div>
              <div className="timeline-body px-4 pb-4">
                <div>{interest.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
