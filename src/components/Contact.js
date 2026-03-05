import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // ป้องกันหน้าเว็บรีเฟรช

    emailjs.sendForm(
      'service_k8ismp2',        // Service ID ของคุณ
      'template_t3xzki1',       // Template ID ของคุณ
      form.current,
      'N9DkzOEoBKZyNsCrJ'       // 🟢 Public Key ของคุณใส่ตรงนี้ครับ!
    )
      .then((result) => {
          console.log(result.text);
          alert("ส่งข้อความสำเร็จ! ขอบคุณที่ติดต่อมาครับ");
          e.target.reset(); // ล้างข้อมูลในฟอร์มหลังส่งเสร็จ
      }, (error) => {
          console.log(error.text);
          alert("เกิดข้อผิดพลาดในการส่งข้อความ กรุณาลองใหม่อีกครั้ง");
      });
  };

  return (
    <section id="contact" className="contact-section bg-dark-navy">
      <div className="container contact-container">
        
        {/* ฝั่งซ้าย: ฟอร์ม */}
        <div className="contact-left">
          <form ref={form} onSubmit={sendEmail} className="contact-form-new">
            <input type="text" name="user_name" placeholder="Your name" className="form-input" required />
            <input type="email" name="user_email" placeholder="Email" className="form-input" required />
            <input type="text" name="user_website" placeholder="Your website (If exists)" className="form-input" />
            <textarea name="message" rows="6" placeholder="How can I help?*" className="form-input" required></textarea>

            <div className="contact-actions">
              <button type="submit" className="btn-get-in-touch">Get In Touch</button>
              
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
            Let's <span className="text-outline">build</span> <br />
            something special
          </h2>
          <p className="contact-desc">
            I'm always looking for new challenges and opportunities to apply my skills. 
            Whether you have a project in mind, a role to fill, or just want to connect, 
            I'd love to hear from you!
          </p>
          <div className="contact-info">
            <h3>chayutponsrisopha@gmail.com</h3>
            <h3>096-885-1933</h3> 
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;