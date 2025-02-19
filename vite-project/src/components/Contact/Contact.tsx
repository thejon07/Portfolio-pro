import emailjs from "@emailjs/browser";
import { useRef } from "react";

const ContactForm = ({contactref}) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_6rqrh9d",
      "template_l761f4x",
      form.current,
      "o0BrNs7RWyzuetPRB"
    )
    .then(
      (result) => {
        console.log("Email sent successfully:", result.text);
        alert("Message sent!");
      },
      (error) => {
        console.log("Email failed to send:", error.text);
        alert("Failed to send message.");
      }
    );
  };

  return (
    <>
    <section ref={contactref}>
    <h1 className="text-center pt-10">Contact</h1>
    <form ref={form} onSubmit={sendEmail} className="pt-10 pb-20 sm:ml-96 pl-10 sm:pl-20">
      <label htmlFor="user_name" className="pb-2">Your Name</label><br/>
      <input type="text" className="mb-4 sm:w-96 w-72 mt-2 p-2 border rounded-xl" name="user_name" placeholder="Your Name" required /><br/>

      <label htmlFor="user_email" className="mt-4">Enter your email</label><br/>
      <input type="email" className="sm:w-96 w-72 mt-2 p-2 mb-4 border rounded-xl" name="user_email" placeholder="Your Email" required /><br/>

      <label htmlFor="message" className="pb-2">Content</label><br/>
      <textarea name="message" className="mt-2 w-72 sm:w-96 mb-4 p-6 border rounded-xl" placeholder="Your Message" required /><br/>
      <button type="submit" className="text-white w-72 sm:w-96 bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sent</button>
    </form>

    </section>
  
    
    </>
  
  );
};

export default ContactForm;
