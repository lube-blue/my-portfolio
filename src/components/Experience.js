import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="resume-section bg-dark-navy">
      
      {/* 🟢 เพิ่ม div container ตรงนี้ เพื่อบีบเนื้อหาเข้าตรงกลาง */}
      <div className="container"> 

        {/* Header Tag */}
        <div className="resume-header">
          <span className="tag-pill">Experience</span>
          <p className="resume-subtitle">Here is a quick summary of my most recent experiences:</p>
        </div>

        {/* Card: PWA */}
        <div className="resume-card">
          {/* Left: Company Name */}
          <div className="resume-card-left">
            <h3 className="company-logo-text">PWA</h3>
            <span style={{color:'#6b7280', fontSize:'0.8rem'}}>Provincial Waterworks Authority</span>
          </div>
          
          {/* Right: Details */}
          <div className="resume-card-right">
            <div className="resume-card-header">
              <h4 className="role-title">Internship Trainee</h4>
              <span className="resume-date">2023</span>
            </div>
            
            <ul className="resume-list">
              <li>Repaired and maintained computer hardware and peripherals to ensure operational efficiency.</li>
              <li>Troubleshot and fixed printer issues for various departments.</li>
              <li>Assisted in programming tasks and software configuration.</li>
              <li>Gained hands-on experience in IT support and system maintenance.</li>
            </ul>
          </div>
        </div>

      </div> {/* 🟢 อย่าลืมปิด div container ตรงนี้ (ก่อนปิด section) */}

    </section>
  );
};

export default Experience;