import React, { useEffect, useState } from "react";

export default function Education() {
  const [educationData, setEducationData] = useState([]);

  useEffect(() => {
    fetchEducationData();
  }, []);

  const fetchEducationData = async () => {
    try {
      const response = await fetch("http://localhost:8080/education");
      const data = await response.json();
      setEducationData(data);
    } catch (error) {
      console.error("Error fetching education data:", error);
    }
  };

  return (
    <div className="shadow-1-strong bg-white my-5 p-5" id="education">
      <div className="education-section">
        <h2 className="h2 fw-light mb-4">Education</h2>
        <div className="timeline">
          {educationData.map((education) => (
            <div
              key={education.id}
              className="timeline-card timeline-card-success"
              data-aos="fade-in"
              data-aos-delay={education.delay}
            >
              <div className="timeline-head px-4 pt-3">
                <div className="h5">{education.school}</div>
              </div>
              <div className="timeline-body px-4 pb-4">
                <div className="text-muted text-small mb-3"></div>
                <div>
                  {education.startYear} - {education.endYear}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
