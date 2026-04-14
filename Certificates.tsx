import "./styles/Certificates.css";

const Certificates = () => {
  const certificates = [
    {
      title: "Data Analytics",
      issuer: "Deloitte",
      date: "2025"
    },
    {
      title: "Data Analytics Course Completion",
      issuer: "ExcelR Solutions",
      date: "2025"
    },
    {
      title: "3 Months Internship Completion",
      issuer: "ExcelR Solutions",
      date: "2025"
    },
    {
      title: "Advanced Training in Amazon Web Services",
      issuer: "Amazon Web Services",
      hours: "352+ hours",
      date: "2025"
    }
  ];

  return (
    <div className="certificates-section" id="certificates">
      <div className="certificates-container section-container">
        <h2>
          <span>Certificates</span>
        </h2>
        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <div className="certificate-card" key={index}>
              <div className="cert-number">0{index + 1}</div>
              <h3>{cert.title}</h3>
              <p className="issuer">{cert.issuer}</p>
              {cert.hours && <p className="hours">{cert.hours}</p>}
              <p className="date">{cert.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
