import React from "react";
import bg1 from "../assets/Bgimg.png";
import Navbar from "../Component/Navbar";
import { useState } from "react";
import { Mail,  Phone } from "lucide-react";
import bgform from "../assets/bgContact.png";
import Section from '../Component/Contactcompontent/Section';
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Manual Validation
  const validateForm = () => {
    const { name, email, phone, subject, message } = formData;

    // Name validation
    if (!name.trim()) {
      toast.error("Name is required.");
      return false;
    } else if (name.length < 3) {
      toast.error("Name must be at least 3 characters.");
      return false;
    }

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.trim()) {
      toast.error("Email is required.");
      return false;
    } else if (!emailPattern.test(email)) {
      toast.error("Please enter a valid email.");
      return false;
    }

    // Phone validation (10-digit number)
    const phonePattern = /^[0-9]{10}$/;
    if (!phone.trim()) {
      toast.error("Phone number is required.");
      return false;
    } else if (!phonePattern.test(phone)) {
      toast.error("Phone number must be 10 digits.");
      return false;
    }

    // Subject validation
    if (!subject.trim()) {
      toast.error("Subject is required.");
      return false;
    } else if (subject.length < 3) {
      toast.error("Subject must be at least 3 characters.");
      return false;
    }

    // Message validation
    if (!message.trim()) {
      toast.error("Message is required.");
      return false;
    } else if (message.length < 10) {
      toast.error("Message must be at least 10 characters.");
      return false;
    }

    return true;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.dismiss();

    // Validate form before submitting
    if (!validateForm()) return;

    setLoading(true);

    try {
      await axios.post("", formData);
      toast.success("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.error(
        "Error sending message:",
        error.response?.data || error.message
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#b1cdc3] w-full h-auto relative pt-10 px-4 md:px-10 lg:px-20 py-10  radio-canada-big ">
      <div className="w-full relative z-50">
        <Navbar />
      </div>
      <img src={bg1} className="absolute right-0 top-0 h-[40%]" alt="Background" />

      <div className="grid md:grid-cols-2 gap-8 px-2 md:py-20 ">
        {/* Left Section - Contact Details */}
         
     
        <div className="space-y-6 pt-8 md:pt-0 ">
        
        <div>
          <h1 className="w-full text-[#104042] font-bold md:text-[90.48px] py-1 text-2xl ">
          Contact Us
        </h1>
        
        <div>
          <p className="text-[#104042] text-[21.11px] w-[80%]">Contact us for the business and startups Contact us for the business and startups</p>
        </div>
        
        </div>


          <div>
            <h4 className="font-semibold text-[28px] text-[#373f43] mb-4">
              E-mail
            </h4>
            <p className="text-[#8c959f] flex gap-4 items-center text-[23.4px]">
              <span>
                <Mail size={20} />
              </span>
              Sample@gmail.com,
            </p>
          </div>

          {/* <div>
            <h4 className="font-semibold text-xl text-[#373f43] mb-4">
              Address
            </h4>
            <p className="max-w-90 text-[#8c959f] flex gap-4 items-center">
              <span>
                <MapPin size={25} />
              </span>{" "}
              49/26 Site: 4, Sahibabad Industrial Area Ghaziabad, Uttar
              Pradesh, India 201010.
            </p>
          </div> */}

          <div>
            <h4 className="font-semibold text-xl text-[#373f43] mb-4 text-[28px]">
              Reach out to us at
            </h4>
            <p className="text-[#8c959f] flex gap-4 items-center text-[23.4px]">
              <span>
                <Phone size={20} />
              </span>{" "}
              123456789, 987456123
            </p>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6 p-8 rounded-4xl relative z-40 " style={{
          backgroundImage: `Url(${bgform})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name */}
            <div>
              <label className="block text-[25.1px] font-semibold mb-2 text-white">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full py-4 px-4 bg-gray-200 rounded-[25px] outline-none"
                placeholder="Your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-lg font-semibold  text-[25.1px] mb-2 text-white">
                E-mail
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full py-4 px-4 bg-gray-200 rounded-[25px] outline-none"
                placeholder="Your email address"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Phone */}
            <div>
              <label className="block text-lg font-semibold text-[25.1px] mb-2 text-white">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full py-4 px-4 bg-gray-200 rounded-[25px] outline-none"
                placeholder="Your Phone Number"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-lg font-semibold mb-2 text-white text-[25.1px]">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full py-4 px-4 bg-gray-200 rounded-[25px] outline-none"
                placeholder="Your subject"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-lg font-semibold mb-2 text-white text-[25.1px]">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full py-4 px-4 resize-none bg-gray-200 rounded-[25px] outline-none"
              placeholder="Write message"
              rows="5"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="bg-[#4a9274]  w-full p-3 px-10 rounded-2xl text-[30px]  text-white cursor-pointer disabled:bg-gray-400"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
 
<Section/>
    </div>
  );
}

export default Contact;
