import React, { useState } from "react";
import Modal from "react-modal";

const phoneNumberLengths = {
  "+91": 10,
  "+1": 10,
  "+44": 10,
};

const ContactUs = () => {
  const [countryCode, setCountryCode] = useState("+91");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [formData, setFormData] = useState({
    companyName: "",
    position: "",
    location: "",
    requirements: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCountryCodeChange = (event) => {
    setCountryCode(event.target.value);
    setPhoneNumber("");
  };

  const handlePhoneNumberChange = (event) => {
    const value = event.target.value;
    const maxLength = phoneNumberLengths[countryCode] || 10;

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

    // const message = `
    //   Company: ${formData.companyName}
    //   Position: ${formData.position}
    //   Location: ${formData.location}
    //   Requirements: ${formData.requirements}
    //   Phone: ${countryCode}${phoneNumber}
    // `;

    // emailjs
    //   .send(
    //     "service_ma8g6ad",
    //     "template_c6ql3jo",
    //     {
    //       message: message,
    //       to_email: "ashutoshpahariya6@gmail.com",
    //     },
    //     "your_user_id"
    //   )
    setTimeout(() => {
      setIsModalOpen(true);
      setFormData({
        companyName: "",
        position: "",
        location: "",
        requirements: "",
      });
      setPhoneNumber("");
    }, 2000); // 2000 milliseconds = 2 seconds
    // setFormData({
    //   companyName: "",
    //   position: "",
    //   location: "",
    //   requirements: "",
    // });
    // setPhoneNumber("");
    // })
    // .catch((error) => {
    //   console.error("Failed to send email", error);
    // });
    setIsModalOpen(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      style={{
        display: "fixed",
        justifyContent: "center",
        overflowX: "hidden",
      }}
    >
      <div
        style={{
          border: "1px solid #ddd",
          padding: "20px",
          borderRadius: "8px",
          backgroundColor: "#f9f9f9",
          boxShadow: "0 5px 15px rgba(0, 0, 0, .3)",
          margin: "0 auto",
        }}
      >
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
              <strong>Company Name:</strong>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                style={{ width: "98%", padding: "8px", marginTop: "5px" }}
                required
              />
            </label>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              <strong>Position:</strong>
              <input
                type="text"
                name="position"
                value={formData.position}
                onChange={handleInputChange}
                style={{ width: "98%", padding: "8px", marginTop: "5px" }}
                required
              />
            </label>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              <strong>Location:</strong>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                style={{ width: "98%", padding: "8px", marginTop: "5px" }}
                required
              />
            </label>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              <strong>Requirements:</strong>
              <textarea
                name="requirements"
                value={formData.requirements}
                onChange={handleInputChange}
                style={{ width: "98%", padding: "8px", marginTop: "5px" }}
                rows="4"
                required
              />
            </label>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              <strong>Phone Number:</strong>
              <div style={{ display: "flex", alignItems: "center" }}>
                <select
                  value={countryCode}
                  onChange={handleCountryCodeChange}
                  style={{
                    padding: "8px",
                    marginRight: "10px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
                >
                  <option value="+91">+91 (India)</option>
                  <option value="+1">+1 (USA)</option>
                  <option value="+44">+44 (UK)</option>
                  {/* Add other country codes as needed */}
                </select>
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  placeholder={`Enter ${
                    phoneNumberLengths[countryCode] || 10
                  } digit phone number`}
                  style={{
                    width: "100%",
                    padding: "8px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
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

      {/* Success Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Success Modal"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            maxWidth: "400px",
            margin: "auto",
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
