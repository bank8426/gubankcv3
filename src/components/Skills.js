import React from 'react';

const Skills = (props) => {
  //<div className='item w33' key={skll.name}>
  const mySkills = (
    <div>
      {props.skills.programming.map((skll) =>
        <div className='w33' key={skll.name}>
          <h3>{skll.name}</h3>
          <div className='skills'>
            <span style={{width: skll.percentage}}></span>
          </div>
        </div>
      )}
    </div>
  );
  const myLangs = (
    <div>
      {props.skills.language.map((skll) =>
        <div className='w33' key={skll.name}>
          <p>-{skll.name}</p>
        </div>
      )}
    </div>
  );
  const myOthers = (
    <div>
      {props.skills.other.map((skll) =>
        <div className='w33' key={skll.name}>
          <p>-{skll.name}</p>
        </div>
      )}
    </div>
  );


  return (
    <div className='title'>
      <i className='fa fa-code'></i>
      <h2>SKILLS</h2>
      <h3>Programing</h3>
      {mySkills}
      <h3>Language</h3>
      {myLangs}
      <h3>Other</h3>
      {myOthers}
    </div>
  )
};

export default Skills;
