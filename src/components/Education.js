import React from 'react';

const Education = () => {
  return (
    <section id="education" className="resume-section container">
      {/* paddingTop 0 เพราะมันต่อจาก Experience เดี๋ยวจะห่างไป */}

      <div className="resume-header">
        <span className="tag-pill">Education</span>
      </div>

      {/* Card 1: KMUTNB */}
      <div className="resume-card">
        <div className="resume-card-left">
          <h3 className="company-logo-text">KMUTNB</h3>
          <span style={{color:'#6b7280', fontSize:'0.8rem'}}>King Mongkut's University of Technology North Bangkok</span>
        </div>
        <div className="resume-card-right">
          <div className="resume-card-header">
            <h4 className="role-title">Bachelor of Industrial Science (B.Ind.Sc.)</h4>
            <span className="resume-date">2023 - Present (Exp. 2026)</span>
          </div>
          <p style={{color:'#10b981', marginBottom:'10px', fontWeight:'500'}}>GPAX: 2.78</p>
          <ul className="resume-list">
            <li>Major: Electronic Technology</li>
            <li>Specialization: Computer Science Branch</li>
            <li>Focus on embedded systems, network infrastructure, and software development.</li>
          </ul>
        </div>
      </div>

      {/* Card 2: Phongsawad */}
      <div className="resume-card">
        <div className="resume-card-left">
          <h3 className="company-logo-text">PSC</h3>
          <span style={{color:'#6b7280', fontSize:'0.8rem'}}>Phongsawad Technological College</span>
        </div>
        <div className="resume-card-right">
          <div className="resume-card-header">
            <h4 className="role-title">Diploma in Information Technology</h4>
            <span className="resume-date">Graduated 2023</span>
          </div>
          <p style={{color:'#10b981', marginBottom:'10px', fontWeight:'500'}}>GPA: 3.70</p>
          <ul className="resume-list">
            <li>Achieved academic excellence with strong fundamentals in IT.</li>
            <li>Participated in technical projects and vocational training.</li>
          </ul>
        </div>
      </div>

    </section>
  );
};

export default Education;