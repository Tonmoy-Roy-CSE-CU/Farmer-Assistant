import '../Style/Contact.css'

const Contact = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Add logic to handle form submission
    };

    return (
        <div className="contact-container">
            <h2>Contact Us</h2>
            <p>Have questions or feedback about Farmer Assistance? We should love to hear from you!</p>
            <p>Reach out to us via email at <a href="mailto:contact@farmerassistance.com">contact@farmerassistance.com</a>, or fill out the form below:</p>
            <form className="contact-form" onSubmit={handleSubmit}>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Your Message" required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}

export default Contact;