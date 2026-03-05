import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact-section bg-dark-navy">
      <div className="container contact-container">
        
        {/* ฝั่งซ้าย: ฟอร์ม */}
        <div className="contact-left">
          <form className="contact-form-new">
            <input type="text" placeholder="Your name" className="form-input" />
            <input type="email" placeholder="Email" className="form-input" />
            <input type="text" placeholder="Your website (If exists)" className="form-input" />
            <textarea rows="6" placeholder="How can I help?*" className="form-input"></textarea>

            <div className="contact-actions">
              <button type="submit" className="btn-get-in-touch">Get In Touch</button>
              
              {/* ปุ่ม Social (เปลี่ยนเป็น Icon ได้ถ้าลง react-icons ไว้) */}
              <div className="social-square-links">
                <button type="button" className="social-square">f</button>
                <button type="button" className="social-square">r</button>
                <button type="button" className="social-square">X</button>
                <button type="button" className="social-square">d</button>
              </div>
            </div>
          </form>
        </div>

        {/* ฝั่งขวา: ข้อความ */}
        <div className="contact-right">
          <h2 className="contact-heading">
            Let's <span className="text-outline">talk</span> for <br />
            Something special
          </h2>
          <p className="contact-desc">
                        I'm always looking for new challenges and opportunities to apply my skills. 
            Whether you have a project in mind, a role to fill, or just want to connect, 
            I'd love to hear from you!
          </p>
          <div className="contact-info">
            <h3>chayutponsrisopha@gmail.com</h3>
             <h3>0968851933</h3> 
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;