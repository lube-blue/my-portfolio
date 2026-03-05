import React from 'react';

const Home = () => {
  return (
    <section id="home" className="home-tamal-section">
      
      {/* 🟢 เติม / นำหน้าชื่อไฟล์ตรง src */}
      <img 
        src="/download.gif" 
        alt="Background Animation" 
        className="gif-bg-element" 
      />

      {/* เลเยอร์สีดำโปร่งแสงทับรูป */}
      <div className="video-overlay"></div>

      {/* เนื้อหาข้อความ */}
      <div className="home-tamal-content">
        <h1 className="home-tamal-title">Chayutphol</h1>
        <p className="home-tamal-subtitle">
          FULL STACK DEVELOPER, EMBEDDED SYSTEMS & IOT.
        </p>
      </div>

    </section>
  );
};

export default Home;