import React from "react";
import { FaRocket, FaSmile, FaLightbulb, FaUsers } from "react-icons/fa"; // Import icons from react-icons

const AboutUs = () => {
  // Reusable style objects
  const containerStyle = {
    backgroundColor: "#f9fafb",
    padding: "1.5rem",
    borderRadius: "8px",
    maxWidth: "800px",
    maxHeight: "1080px",
    margin: "1rem auto",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    height: "calc(100vh - 4rem)", // Fit within the viewport
    overflowY: "auto", // Allow scrolling only within the container
  };

  const headingStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#1a365d",
    textAlign: "center",
    marginBottom: "1rem",
  };

  const paragraphStyle = {
    fontSize: "1rem",
    color: "#4a5568",
    lineHeight: "1.5",
    marginBottom: "1rem",
  };

  const sectionHeadingStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#f02d34",
    marginBottom: "1rem",
    textAlign: "center",
  };

  const cardStyle = {
    backgroundColor: "#ffffff",
    padding: "1rem",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    marginBottom: "1rem",
  };

  const iconStyle = {
    fontSize: "1.5rem",
    color: "#f02d34",
    marginBottom: "0.5rem",
    textAlign: "center",
  };

  const listStyle = {
    listStyleType: "disc",
    paddingLeft: "1.5rem",
    marginBottom: "1rem",
  };

  const listItemStyle = {
    fontSize: "1rem",
    color: "#4a5568",
    lineHeight: "1.5",
    marginBottom: "0.5rem",
  };

  const teamGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "1rem",
    marginBottom: "1rem",
  };

  const teamCardStyle = {
    textAlign: "center",
    padding: "1rem",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s, box-shadow 0.2s",
  };

  const teamCardHoverStyle = {
    transform: "translateY(-5px)",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>About Us</h1>
      <p style={paragraphStyle}>
        Welcome to <strong style={{ color: "#1a365d" }}>SoundStore</strong>,
        your ultimate destination for high-quality products and a seamless
        shopping experience. We specialize in headphones and earphones.
      </p>
      <p style={paragraphStyle}>
        Our mission is to make online shopping easy, affordable, and enjoyable
        for everyone. We carefully curate our collection to ensure that every
        product meets our high standards of quality and style.
      </p>

      {/* Our Story */}
      <div style={cardStyle}>
        <h2 style={sectionHeadingStyle}>Our Story</h2>
        <p style={paragraphStyle}>
          Founded in 2023, SoundStore started as a small team of passionate
          individuals who wanted to revolutionize the way people shop online.
          Over the years, we&apos;ve grown into a trusted platform serving
          thousands of happy customers worldwide.
        </p>
      </div>

      {/* Our Values */}
      <div style={cardStyle}>
        <h2 style={sectionHeadingStyle}>Our Values</h2>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <FaRocket
              style={{ verticalAlign: "middle", marginRight: "0.5rem" }}
            />
            <strong>Quality:</strong> We source only the best products for our
            customers.
          </li>
          <li style={listItemStyle}>
            <FaSmile
              style={{ verticalAlign: "middle", marginRight: "0.5rem" }}
            />
            <strong>Customer Satisfaction:</strong> Your happiness is our top
            priority.
          </li>
          <li style={listItemStyle}>
            <FaLightbulb
              style={{ verticalAlign: "middle", marginRight: "0.5rem" }}
            />
            <strong>Innovation:</strong> We constantly strive to improve and
            innovate.
          </li>
        </ul>
      </div>

      {/* Meet the Team */}
      <div style={cardStyle}>
        <h2 style={sectionHeadingStyle}>Meet the Team</h2>
        <p style={paragraphStyle}>
          Our team is made up of dedicated professionals who are passionate
          about what they do. From product sourcing to customer service, we work
          together to ensure you have the best shopping experience possible.
        </p>
        <div style={teamGridStyle}>
          <div
            style={teamCardStyle}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = teamCardHoverStyle.transform)
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
          >
            <FaUsers style={iconStyle} />
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: "bold",
                color: "#1a365d",
                marginBottom: "0.5rem",
              }}
            >
              John Doe
            </h3>
            <p style={{ fontSize: "1rem", color: "#4a5568" }}>CEO & Founder</p>
          </div>
          <div
            style={teamCardStyle}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = teamCardHoverStyle.transform)
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
          >
            <FaUsers style={iconStyle} />
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: "bold",
                color: "#1a365d",
                marginBottom: "0.5rem",
              }}
            >
              Jane Smith
            </h3>
            <p style={{ fontSize: "1rem", color: "#4a5568" }}>
              Head of Operations
            </p>
          </div>
        </div>
      </div>

      <p
        style={{
          fontSize: "1rem",
          color: "#4a5568",
          lineHeight: "1.5",
          textAlign: "center",
        }}
      >
        Thank you for choosing SoundStore. We look forward to serving you!
      </p>
    </div>
  );
};

export default AboutUs;
