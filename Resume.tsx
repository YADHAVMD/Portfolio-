import "./styles/Resume.css";

const Resume = () => {
  const workExperience = [
    {
      title: "Data Analyst Internship",
      company: "ExcelR Solutions",
      duration: "3 months (Sep 2025 - Dec 2025)",
      year: "2025",
      points: [
        "Successfully completed a Data Analyst internship project, gaining practical experience in real-world data analysis",
        "Worked on structured projects, demonstrating ability to handle data, derive insights, and meet project requirements effectively",
        "Developed hands-on analytical and problem-solving skills"
      ]
    }
  ];

  const projects = [
    {
      title: "UBER Auto Analytics",
      year: "2026",
      points: [
        "Developed an interactive Uber Auto dashboard using Power BI, analyzing 23K bookings, 13M revenue, and ride distance metrics",
        "Performed data extraction and preprocessing using Excel and MySQL, ensuring clean and structured datasets for analysis",
        "Built dynamic visualizations (KPIs, charts, slicers) to track monthly/quarterly trends and location-based demand insights",
        "Generated actionable insights to improve business performance, revenue optimization, and decision-making"
      ]
    },
    {
      title: "Credit Card Transaction Report",
      year: "2026",
      points: [
        "Analyzed overall credit card usage, revenue, and transaction trends with detailed KPI metrics",
        "Highlighted key performance indicators including total revenue, interest earned, and transaction count",
        "Identified spending patterns across categories such as bills, fuel, and entertainment",
        "Provided insights into card types, usage methods, and quarterly performance for strategic decision-making"
      ]
    },
    {
      title: "Virinda Store Sales",
      year: "2026",
      points: [
        "Built an interactive Virinda Store Sales Dashboard analyzing sales, orders, customer demographics, and order status",
        "Processed and cleaned data using Excel, enabling accurate insights on top states, sales trends, and channel performance",
        "Created dynamic visualizations (KPIs, charts, slicers) to support data-driven decision-making and business growth strategies"
      ]
    }
  ];

  const skills = [
    "Power BI",
    "Ms Excel",
    "Ms PowerPoint",
    "n8n Workflow",
    "MySQL",
    "Figma",
    "Canva"
  ];

  const education = {
    school: "Rajeev Institute of Technology",
    degree: "Bachelor of Engineering, Information Science and Engineering",
    location: "Bengaluru, Chikmagalur",
    duration: "2021-2025",
    sgpa: "8.1"
  };

  const certificates = [
    { name: "Deloitte Data Analytics", year: "2025" },
    { name: "ExcelR Solutions Data Analytics Course Completion", year: "2025" },
    { name: "ExcelR Solutions 3 Months Internship Completion", year: "2025" },
    { name: "Amazon Web Services 352+ hours of Advanced Training", year: "2025" }
  ];

  return (
    <div className="resume-section" id="resume">
      <div className="resume-container section-container">
        <h2>
          <span>Resume</span>
        </h2>

        <div className="resume-content">
          {/* Summary */}
          <div className="resume-block">
            <h3>Summary</h3>
            <p>
              Detail-oriented graduate from Rajeev Institute of Technology with hands-on skills in Power BI, Excel, n8n automation, Figma, and video editing. Adept at data analysis, workflow automation, and creating visually engaging digital content. Seeking to leverage technical and creative expertise in AI-driven and data-focused roles.
            </p>
          </div>

          {/* Work Experience */}
          <div className="resume-block">
            <h3>Work Experience</h3>
            {workExperience.map((exp, idx) => (
              <div className="resume-item" key={idx}>
                <div className="resume-header">
                  <h4>{exp.title}</h4>
                  <span className="year">{exp.year}</span>
                </div>
                <p className="company">{exp.company}</p>
                <p className="duration">{exp.duration}</p>
                <ul>
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div className="resume-block">
            <h3>Projects</h3>
            {projects.map((project, idx) => (
              <div className="resume-item" key={idx}>
                <div className="resume-header">
                  <h4>{project.title}</h4>
                  <span className="year">{project.year}</span>
                </div>
                <ul>
                  {project.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="resume-block">
            <h3>Education</h3>
            <div className="resume-item">
              <div className="resume-header">
                <h4>{education.school}</h4>
                <span className="year">{education.duration}</span>
              </div>
              <p className="company">{education.degree}</p>
              <p className="duration">{education.location}</p>
              <p className="sgpa">SGPA: {education.sgpa}</p>
            </div>
          </div>

          {/* Skills */}
          <div className="resume-block">
            <h3>Technical Skills</h3>
            <div className="skills-list">
              {skills.map((skill, idx) => (
                <span className="skill-tag" key={idx}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="resume-block">
            <h3>Certifications</h3>
            <ul>
              {certificates.map((cert, idx) => (
                <li key={idx}>
                  {cert.name} <span className="year">({cert.year})</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
