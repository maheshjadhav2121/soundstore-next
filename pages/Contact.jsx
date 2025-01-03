import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"; // Import icons from react-icons
import Link from "next/link"; // Import Link from next/link

const ContactUs = () => {
  // Reusable style objects
  const containerStyle = {
    backgroundColor: "#f9fafb",
    padding: "2rem",
    borderRadius: "8px",
    maxWidth: "1000px",
    minHeight: "1060px",
    margin: "2rem auto",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const headingStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#f02d34",
    textAlign: "center",
    marginBottom: "1.5rem",
  };

  const paragraphStyle = {
    fontSize: "1.125rem",
    color: "#4a5568",
    lineHeight: "1.75",
    textAlign: "center",
    marginBottom: "2rem",
  };

  const cardStyle = {
    backgroundColor: "#ffffff",
    padding: "2rem",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    marginBottom: "2rem",
  };

  const subHeadingStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#1a365d",
    marginBottom: "1.5rem",
    textAlign: "center",
  };

  const contactGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "1.5rem",
  };

  const contactItemStyle = {
    backgroundColor: "#ffffff",
    padding: "1.5rem",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    transition: "transform 0.2s, box-shadow 0.2s",
  };

  const contactItemHoverStyle = {
    transform: "translateY(-5px)",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  };

  const iconStyle = {
    fontSize: "2rem",
    color: "#f02d34",
    marginBottom: "1rem",
  };

  const contactTitleStyle = {
    fontSize: "1.25rem",
    fontWeight: "bold",
    color: "#1a365d",
    marginBottom: "0.5rem",
  };

  const contactTextStyle = {
    fontSize: "1rem",
    color: "#4a5568",
  };

  const linkStyle = {
    color: "#3182ce",
    textDecoration: "none",
    transition: "color 0.2s",
  };

  const handleHover = (e) => (e.target.style.color = "#1c64f2");
  const handleLeave = (e) => (e.target.style.color = "#3182ce");

  const mapStyle = {
    width: "100%",
    height: "300px",
    border: "0",
    borderRadius: "8px",
    marginTop: "2rem",
  };

  const ctaStyle = {
    textAlign: "center",
    marginTop: "2rem",
    fontSize: "1.25rem",
    color: "#4a5568",
  };

  const ctaLinkStyle = {
    color: "#f02d34",
    fontWeight: "bold",
    textDecoration: "none",
    transition: "color 0.2s",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Contact Us</h1>
      <p style={paragraphStyle}>
        Have questions or need assistance? We&apos;re here to help! Reach out to
        us via the contact details below, and we&apos;ll get back to you as soon
        as possible.
      </p>

      <div style={cardStyle}>
        <h2 style={subHeadingStyle}>Get in Touch</h2>
        <div style={contactGridStyle}>
          {/* Email */}
          <div
            style={contactItemStyle}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform =
                contactItemHoverStyle.transform)
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
          >
            <FaEnvelope style={iconStyle} />
            <h3 style={contactTitleStyle}>Email</h3>
            <p style={contactTextStyle}>
              <Link
                href="/Contact"
                style={linkStyle}
                onMouseOver={handleHover}
                onMouseOut={handleLeave}
              >
                support@soundstore.com
              </Link>
            </p>
          </div>

          {/* Phone */}
          <div
            style={contactItemStyle}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform =
                contactItemHoverStyle.transform)
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
          >
            <FaPhone style={iconStyle} />
            <h3 style={contactTitleStyle}>Phone</h3>
            <p style={contactTextStyle}>
              <Link
                href="/Contact"
                style={linkStyle}
                onMouseOver={handleHover}
                onMouseOut={handleLeave}
              >
                +1 (123) 456-7890
              </Link>
            </p>
          </div>

          {/* Address */}
          <div
            style={contactItemStyle}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform =
                contactItemHoverStyle.transform)
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
          >
            <FaMapMarkerAlt style={iconStyle} />
            <h3 style={contactTitleStyle}>Address</h3>
            <p style={contactTextStyle}>
              123 SoundStore Lane, Suite 456, San Francisco, CA 94107
            </p>
          </div>
        </div>
      </div>

      {/* Embedded Map */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093747!2d-122.3990726846816!3d37.77492997975938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807f4e8e7f9b%3A0x3b5b3b3b3b3b3b3b!2sSan+Francisco%2C+CA%2C+USA!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
        style={mapStyle}
        allowFullScreen=""
        loading="lazy"
        title="Location Map"
      ></iframe>

      {/* Call-to-Action */}
      <p style={ctaStyle}>
        Visit our store today!{" "}
        <Link
          href="/visit-us"
          style={ctaLinkStyle}
          onMouseOver={handleHover}
          onMouseOut={handleLeave}
        >
          Learn more about our location →
        </Link>
      </p>
    </div>
  );
};

export default ContactUs;
