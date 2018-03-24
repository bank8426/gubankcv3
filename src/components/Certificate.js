import React from 'react';

const Certificate = (props) => {
  const myCertificates = (
    <div>
      {props.certificate.map((cert) =>
        <div className='item' key={cert.name}>
          <h3>{cert.year}</h3>
          {cert.experiences.map((exp) =>

          <p>{exp.experience}</p>
          )}
        </div>
      )}
    </div>
  );
  return (
    <div className='title'>
      <i className='fa fa-trophy'></i>
      <h2>Extra Experiences</h2>
      {myCertificates}
    </div>
  )
};

export default Certificate;
