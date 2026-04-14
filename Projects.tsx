import "./styles/Projects.css";

const Projects = () => {
  const projects = [
    {
      number: "01",
      title: "UBER Auto Analytics",
      category: "Power BI Dashboard",
      year: "2026",
      description: "Comprehensive analysis of Uber ride-sharing operations",
      details: [
        "Analyzed 23K bookings and 13M revenue",
        "Tracked ride distance metrics and demand patterns",
        "Built dynamic visualizations for monthly/quarterly trends",
        "Provided location-based demand insights"
      ],
      tools: ["Power BI", "Excel", "MySQL"]
    },
    {
      number: "02",
      title: "Credit Card Transaction Report",
      category: "Financial Analysis Dashboard",
      year: "2026",
      description: "In-depth credit card usage and revenue analysis",
      details: [
        "Analyzed overall credit card usage and transaction trends",
        "Highlighted KPIs: total revenue, interest earned, transaction count",
        "Identified spending patterns across multiple categories",
        "Provided insights into card types and usage methods"
      ],
      tools: ["Data Analytics", "KPI Analysis", "Financial Insights"]
    },
    {
      number: "03",
      title: "Virinda Store Sales",
      category: "Excel Dashboard",
      year: "2026",
      description: "Sales analytics and customer behavior insights",
      details: [
        "Analyzed sales, orders, and customer demographics",
        "Tracked order status and channel performance",
        "Identified top states and sales trends",
        "Supported data-driven business growth strategies"
      ],
      tools: ["Excel", "Data Visualization", "Analysis"]
    },
    {
      number: "04",
      title: "DualSense Controller UI",
      category: "Product Showcase Design",
      year: "2026",
      description: "Bold and modern product showcase design with immersive UI aesthetics",
      details: [
        "Created a wireless gaming controller product showcase",
        "Used vibrant gradients and depth for visual impact",
        "Implemented smooth card layering and immersive lighting",
        "Designed clear pricing, color options, and CTA buttons"
      ],
      tools: ["Figma", "UI/UX Design", "Visual Hierarchy"]
    },
    {
      number: "05",
      title: "Sneaker Landing Page",
      category: "E-Commerce UI Design",
      year: "2026",
      description: "Sleek, high-contrast landing page with minimal distractions for brand impact",
      details: [
        "Created a floating sneaker-centered landing page design",
        "Implemented strong typography reinforcing brand identity",
        "Displayed product variants for quick browsing and interaction",
        "Prioritized brand consistency and clean e-commerce UX"
      ],
      tools: ["Figma", "Brand Design", "E-Commerce UX"]
    },
    {
      number: "06",
      title: "Dynamic Sneaker Product Page",
      category: "Product Design",
      year: "2026",
      description: "Dynamic product page with bold typography and floating elements for visual depth",
      details: [
        "Designed dynamic product page with bold, impactful typography",
        "Created floating elements and layered shapes for depth perception",
        "Implemented smooth gradients for modern visual composition",
        "Placed clear pricing and CTA to guide users toward quick action"
      ],
      tools: ["Figma", "UI/UX Design", "Product Design"]
    }
  ];

  return (
    <div className="projects-section" id="projects">
      <div className="projects-container section-container">
        <h2>
          <span>Projects</span>
        </h2>
        
        <div className="projects-list">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-number">{project.number}</div>
              
              <div className="project-header">
                <div>
                  <h3>{project.title}</h3>
                  <p className="category">{project.category}</p>
                </div>
                <span className="year">{project.year}</span>
              </div>

              <p className="description">{project.description}</p>

              <ul className="details-list">
                {project.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>

              <div className="tools-list">
                {project.tools.map((tool, i) => (
                  <span className="tool-badge" key={i}>
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
