import React from 'react';

const About = () => {
  return (
    <section id="about" className="about-section-new bg-dark-navy">
      
      {/* 🟢 เพิ่ม div container ตรงนี้ */}
      <div className="container">

        {/* ป้าย Tag ด้านบน */}
        <div className="about-header-tag">
          <span className="tag-pill">About me</span>
        </div>

        <div className="about-grid-new">
          
          {/* --- ฝั่งซ้าย: รูปภาพ --- */}
          <div className="about-img-container">
             <img 
               src="/YourPicture.jpg" 
               alt="About Lifestyle" 
               className="about-lifestyle-img" 
             />
             <div className="about-frame-bg"></div>
          </div>

          {/* --- ฝั่งขวา: เนื้อหา --- */}
          <div className="about-content-new">
           <br></br>
           <h2>Curious about me? Here you have it:</h2>
           
           <div className="about-text">
             <p>
               ผมเป็นนักศึกษาชั้นปีสุดท้ายที่ <strong>มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าเหนือ (KMUTNB)</strong>, 
               สาขาเทคโนโลยีอิเล็กทรอนิกส์ โดยเน้นด้านวิทยาการคอมพิวเตอร์ ผมมีความสนใจในการเชื่อมโยงประสิทธิภาพของ <strong>ฮาร์ดแวร์</strong> และ <strong>ความชาญฉลาดของซอฟต์แวร์</strong>.
             </p>
             <p>
               เส้นทางของผมเริ่มต้นด้วยวงจรไฟฟ้า แต่ฉันก็หลงรักการเขียนโปรแกรมอย่างรวดเร็ว ตอนนี้ผมสนุกกับการสร้างเว็บแอปพลิเคชันและเชื่อมต่อกับอุปกรณ์ IoT ฉันเป็นผู้เรียนรู้ที่กระตือรือร้นและไม่กลัวความท้าทายทางวิศวกรรมที่ซับซ้อน
             </p>
             <p>
               ขณะนี้ผมกำลังมองหาตำแหน่ง <strong>ฝึกงาน</strong>หรือ <strong>ตำแหน่งเริ่มต้น</strong> 
               เพื่อนำทักษะของฉันไปใช้ในสภาพแวดล้อมจริง.
             </p>
           </div>

          </div>
        </div>

      </div> {/* 🟢 ปิด div container ตรงนี้ */}

    </section>
  );
};

export default About;