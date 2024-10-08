import React, { useState } from "react";
import Modal from "react-modal";
import emailjs from "emailjs-com";
import { countryCodesData } from "../CountryDetail";

const ContactUs = () => {
  const [countryCode, setCountryCode] = useState("+91");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [filterQuery] = useState("");
  const [formData, setFormData] = useState({
    companyName: "",
    position: "",
    location: "",
    requirements: "",
    email: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCountryCodeChange = (event) => {
    setCountryCode(event.target.value);
    setPhoneNumber("");
  };

  const handlePhoneNumberChange = (event) => {
    const value = event.target.value;
    let totalLength = countryCodesData.find(
      (country) => country.code === countryCode
    );
    const maxLength = totalLength.length;

    if (/^\d*$/.test(value) && value.length <= maxLength) {
      setPhoneNumber(value);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const templateParams = {
      companyName: formData.companyName,
      position: formData.position,
      location: formData.location,
      requirements: formData.requirements,
      email: formData.email,
      phoneNumber: `${countryCode}${phoneNumber}`,
    };

    emailjs
      .send(
        "service_2vr9vhu", // Replace with your EmailJS service ID
        "template_c6ql3jo", // Replace with your EmailJS template ID
        templateParams,
        "jHkRdWPVoz5Vpy8WU" // Replace with your EmailJS user ID
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setIsModalOpen(true);
      })
      .catch((error) => {
        console.error("Failed to send email", error);
      });

    // Reset form fields
    setFormData({
      companyName: "",
      position: "",
      location: "",
      requirements: "",
      email: "",
    });
    setCountryCode("+91");
    setPhoneNumber("");
  };

  const closeModal = () => {
    setIsModalOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top smoothly
  };

  const filteredCountryCodes = countryCodesData.filter((country) =>
    country.name.toLowerCase().includes(filterQuery.toLowerCase())
  );

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        overflowX: "hidden",
      }}
    >
      <div className="contact_form">
        <h2
          style={{
            textAlign: "center",
            backgroundColor: "#333",
            color: "white",
            padding: "10px",
            borderRadius: "8px 8px 0 0",
            marginTop: "-3px",
          }}
        >
          Contact Us
        </h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              <input
                type="text"
                name="companyName"
                placeholder="Enter Your Company Name"
                required
                value={formData.companyName}
                onChange={handleInputChange}
                style={{
                  width: "100%",
                  padding: "8px",
                  boxSizing: "border-box",
                }}
              />
            </label>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              <input
                type="text"
                name="position"
                placeholder="Offering Position Name"
                value={formData.position}
                onChange={handleInputChange}
                style={{
                  width: "100%",
                  padding: "8px",
                  boxSizing: "border-box",
                }}
                required
              />
            </label>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              <input
                type="text"
                name="location"
                placeholder="Location Name"
                value={formData.location}
                onChange={handleInputChange}
                style={{
                  width: "100%",
                  padding: "8px",
                  boxSizing: "border-box",
                }}
                required
              />
            </label>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              <textarea
                name="requirements"
                placeholder="Describe Your Requirements"
                value={formData.requirements}
                onChange={handleInputChange}
                style={{
                  width: "100%",
                  padding: "8px",
                  boxSizing: "border-box",
                  fontFamily: "sans-serif",
                }}
                rows="4"
                required
              />
            </label>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <select
                  value={countryCode}
                  onChange={handleCountryCodeChange}
                  style={{
                    padding: "8px",
                    marginRight: "5px",
                    borderRadius: "4px",
                    border: "1px solid gray",
                    width: "100%", // Adjusted width for responsiveness
                    boxSizing: "border-box",
                    maxWidth: "160px", // Maintain max width for larger screens
                    flex: "1", // Allow it to grow within the flexbox
                  }}
                >
                  {filteredCountryCodes.map((country, index) => (
                    <option key={index} value={country.code}>
                      {country.code} {country.name}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  required
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  placeholder="Enter Your Phone Number"
                  style={{
                    flex: "2", // Take the remaining space in flexbox
                    padding: "8px",
                    borderRadius: "4px",
                    border: "1px solid gray",
                    boxSizing: "border-box",
                    width: "100%", // Set width to 100% for small screens
                  }}
                />
              </div>
            </label>
          </div>

          <button
            type="submit"
            style={{
              backgroundColor: "#333",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Submit
          </button>
        </form>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Success Modal"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            transform: "translate(-50%, -50%)", // Center the modal
            maxWidth: "400px",
            padding: "20px",
            borderRadius: "8px",
            border: "none",
            boxShadow: "0 5px 15px rgba(0, 0, 0, .3)",
          },
        }}
      >
        <h2 style={{ textAlign: "center", color: "green" }}>Success!</h2>
        <p style={{ textAlign: "center" }}>
          Your request has been sent successfully.
        </p>
        <div style={{ textAlign: "center" }}>
          <button
            onClick={closeModal}
            style={{
              backgroundColor: "dodgerblue",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ContactUs;
