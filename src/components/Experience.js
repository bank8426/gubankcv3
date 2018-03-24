import React from 'react';

const Experience = (props) => {
  //console.log(props.experience);
  const myExperience = (
    <div>
      {props.experience.map((exp) =>
        <div className='item' key={exp.jobTitle}>
          <h3>{exp.jobTitle} @ {exp.company} <span>{exp.startDate} - {exp.endDate}</span></h3>
          <p>
              {exp.jobDescription.map((descript) =>{
                return(<div>{descript.description}</div>)

              })
            }
          </p>
        </div>
      )}
    </div>
  );
  return (
    <div className='title'>
      <i className='fa fa-briefcase'></i>
      <h2>EXPERIENCE</h2>
      {myExperience}
    </div>
  )
};

export default Experience;


/*
import React from 'react';

const Experience = (props) => {
  const myExperience = (
    <div>
      {props.experience.map((exp) =>
        <div className='item' key={exp.jobTitle}>
          <h3>{exp.jobTitle} @ {exp.company} <span>{exp.startDate} - {exp.endDate}</span></h3>
          <p>{exp.jobDescription}</p>
        </div>
      )}
    </div>
  );
  return (
    <div className='title'>
      <i className='fa fa-briefcase'></i>
      <h2>EXPERIENCE</h2>
      {myExperience}
    </div>
  )
};

export default Experience;

*/