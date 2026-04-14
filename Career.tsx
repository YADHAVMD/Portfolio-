import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analyst Intern</h4>
                <h5>ExcelR Solutions</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Developed hands-on analytical and problem-solving skills. Performed data extraction, preprocessing, and analysis using Excel and MySQL. Created dynamic visualizations and dashboards to support data-driven decision-making.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Uber Data Analytics Project</h4>
                <h5>Portfolio Project</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Developed an interactive Uber Auto dashboard using Power BI analyzing 23K bookings and 13M revenue. Built dynamic visualizations (KPIs, charts, slicers) to track monthly/quarterly trends and location-based demand insights.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Virinda Store Sales Dashboard</h4>
                <h5>Excel Project</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Built an interactive dashboard analyzing sales, orders, customer demographics. Processed and cleaned data using Excel, enabling accurate insights on top states, sales trends, and channel performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
