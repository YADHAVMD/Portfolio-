import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  const projects = [
    {
      title: "Uber Auto Analytics",
      category: "Power BI Dashboard",
      tools: "Power BI, Data Analysis, MySQL",
      description: "Interactive dashboard analyzing 23K bookings and 13M revenue",
      image: "/images/uber.jpeg"
    },
    {
      title: "Credit Card Transaction Report",
      category: "financial Analysis Dashboard",
      tools: "Data Analytics, KPI Analysis, Spending Patterns",
      description: "Comprehensive credit card usage analysis with revenue, interest, and transaction insights",
      image: "/images/cc_report.jpeg"
    },
    {
      title: "Virinda Store Sales",
      category: "Excel Dashboard",
      tools: "Excel, Data Visualization, Analysis",
      description: "Sales analytics dashboard with customer demographics insights",
      image: "/images/virinda_store.jpeg"
    },
    {
      title: "DualSense Controller UI",
      category: "Product Showcase Design",
      tools: "Figma, UI/UX Design, Visual Hierarchy",
      description: "Bold and modern product showcase highlighting a wireless gaming controller with vibrant gradients",
      image: "/images/dualsense_ui.jpeg"
    },
    {
      title: "Sneaker Landing Page",
      category: "E-Commerce UI Design",
      tools: "Figma, Brand Design, UX/UI",
      description: "Sleek, high-contrast landing page centered on a floating sneaker with minimal distractions",
      image: "/images/sneaker_landing.jpeg"
    },
    {
      title: "Logitech MX Master 3S Page",
      category: "Product Page Design",
      tools: "Figma, UI/UX, Tech Design",
      description: "Professional and minimal layout showcasing a premium productivity mouse with dark theme",
      image: "/images/logitech_mx.jpeg"
    },
    {
      title: "Dynamic Sneaker Product Page",
      category: "Product Design",
      tools: "Figma, UI/UX, Composition",
      description: "Dynamic product page with bold typography and floating elements for visual depth",
      image: "/images/sneaker_product.jpeg"
    },
  ];
  
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
