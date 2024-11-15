// components
import Circles from "/components/Circles";

// icons
import { BsArrowRight } from "react-icons/bs";

// framer
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../../variants";
import { useState } from "react";

const Contact = () => {
  // State for form fields and errors
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate form fields
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid.";
    }
    if (!formData.message) newErrors.message = "Message is required.";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Proceed with form submission (send data to Formspree)
      fetch('https://formspree.io/f/{your-form-id}', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      .then(response => {
        if (response.ok) {
          alert("Thank you for your message!");
          setFormData({ name: '', email: '', subject: '', message: '' });
          setErrors({});
        } else {
          alert("There was a problem with your submission.");
        }
      })
      .catch(error => {
        alert("There was a problem with your submission.");
      });
    }
  };

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px] ">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let's <span className="text-accent">connect.</span>
          </motion.h2>
          {/* form */}
          <motion.form
            onSubmit={handleSubmit} // Attach submit handler
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            {/* input form */}
            <div className="flex gap-x-6 w-full">
              <input 
                type="text" 
                name="name" 
                placeholder="Name" 
                className={`input ${errors.name ? 'border-red-500' : ''}`} 
                value={formData.name}
                onChange={handleChange}
              />
              <input 
                type="email" 
                name="email" 
                placeholder="E-mail" 
                className={`input ${errors.email ? 'border-red-500' : ''}`} 
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            {errors.name && <p className="text-red-500">{errors.name}</p>}
            {errors.email && <p className="text-red-500">{errors.email}</p>}
            
            <input 
              type="text" 
              name="subject" 
              placeholder="Subject" 
              className="input" 
              value={formData.subject}
              onChange={handleChange}
            />
            
            <textarea 
              name="message" 
              placeholder="Message" 
              className={`textarea ${errors.message ? 'border-red-500' : ''}`} 
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && <p className="text-red-500">{errors.message}</p>}
            
            <button type="submit" className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let's talk
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;