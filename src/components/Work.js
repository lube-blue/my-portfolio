import React from 'react';

const Work = () => {
  return (
    <section id="work">
      <h2 className="section-title">work</h2>
      <p className="section-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate tristique quam felis.
      </p>

      <div className="work-grid">
        {/* Project 1 */}
        <div className="work-card">
          <div className="work-img">
             {/* ใส่รูปโปรเจกต์ตรงนี้ หรือปล่อยว่างไว้มันจะเป็นสีเทาเข้ม */}
             {/* <img src="/project1.png" alt="project" /> */}
          </div>
          <div className="work-info">
            <h4>DESIGN PORTFOLIO</h4>
            <p>HTML CSS JAVASCRIPT</p>
          </div>
        </div>

        {/* Project 2 */}
        <div className="work-card">
          <div className="work-img">
             {/* <img src="/project2.png" alt="project" /> */}
          </div>
          <div className="work-info">
            <h4>E-COMMERCE APP</h4>
            <p>REACT NODE MONGODB</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Work;