import React, { useEffect, useState } from "react";

export default function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      const response = await fetch("http://localhost:8080/skills"); // Replace with your JSON server URL
      const data = await response.json();
      setSkills(data);
    } catch (error) {
      console.error("Error fetching skills:", error);
    }
  };

  return (
    <div className="shadow-1-strong bg-white my-5 p-5" id="skills">
      <div className="skills-section">
        <h2 className="h2 fw-light mb-4">Professional Skills</h2>
        <div className="row">
          <div className="col-md-6">
            {skills.slice(0, 3).map((skill, index) => (
              <div className="mb-3" key={index}>
                <span className="fw-bolder">{skill.name}</span>
                <div
                  className="progress my-2 rounded bg-secondary"
                  style={{ height: "20px" }}
                >
                  <div
                    className="progress-bar"
                    role="progressbar"
                    data-aos="zoom-in-right"
                    data-aos-delay={100 + 100 * index}
                    data-aos-anchor=".skills-section"
                    style={{ width: `${skill.progress}%` }}
                    aria-valuenow={skill.progress}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {skill.level}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-6">
            {skills.slice(3).map((skill, index) => (
              <div className="mb-3" key={index}>
                <span className="fw-bolder">{skill.name}</span>
                <div
                  className="progress my-2 rounded bg-secondary"
                  style={{ height: "20px" }}
                >
                  <div
                    className="progress-bar"
                    role="progressbar"
                    data-aos="zoom-in-right"
                    data-aos-delay={400 + 100 * index}
                    data-aos-anchor=".skills-section"
                    style={{ width: `${skill.progress}%` }}
                    aria-valuenow={skill.progress}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {skill.level}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
