import React, { Component } from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Certificate from './components/Certificate';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';



class App extends Component {
  render() {

    const person = {
      avatar: 'https://s3.amazonaws.com/media-p.slid.es/uploads/supasanchuangyang/images/688757/bank2.png',
      name: 'Tanapon Kuljarusin',
      //profession: 'FrontEnd Developer',
      //bio: '❤ Front end Developer - Growth Hacker at @CityDrive, CSS Lover, Geek & Blogger. Better known as The Grumpy Developer.',
      address: 'Rayong, Thailand',
      social: [
        //{name: 'facebook', url: 'https://facebook.com/oscarbarajastavares'},
        //{name: 'twitter', url: 'https://twitter.com/gndx'},
        {name: 'github', url: 'https://github.com/bank8426/gubankcv3'},
        {name: 'linkedin', url: 'https://www.linkedin.com/in/gu-bank-cpe-9b671ba0/'}
      ],
      experience: [
        {jobTitle: 'IT Support', 
        company: 'Rayong Bird’s Nest Farmer Group', 
        startDate: 'Jan 2017', endDate: 'Present', 
        jobDescription: [
        {description: '- monitor and maintain computer systems and networks and also replace parts of equipment.'},
        {description: '- provide service information ,solve customer problems and determining the cause.'},
        {description: '- deliver customers report to IT Support manager.'}
        ]
      },
        {jobTitle: 'Sales Trainee', 
        company: 'Nattapong Sales & Service Co.,Ltd (Banmoh Branch)', 
        startDate: 'March 2015', endDate: 'September 2015', 
        jobDescription: [
        {description: '- provide customer with sound system solution for live sound, public address and conference'},
        {description: '- learn sales process and all NPE products by complete training program and assignment.'},
        {description: '- represent organization at exhibitions, event and demonstrations'},
        {description: '- take care of foreigner customers'}
        ]
      },
        {jobTitle: 'Co-founder &Lead game developer ', 
        company: 'ZaferLab Co., Ltd.', 
        startDate: 'June 2014', endDate: 'December 2014', 
        jobDescription: [
        {description: '- responsible for the technical specification of the game, manage overall code development process and develop game with Unity3D'},
        {description: '- provide support and guidance to the developers to make sure everyone understand the specification.'},
        {description: '- hold team meeting and encourage team to use Agile development.'}
        ]
      }  ,
        {jobTitle: 'Web developer(subcontractor) ', 
        company: 'Magic Box Asia Co., Ltd.', 
        startDate: 'June 2014', endDate: 'December 2014', 
        jobDescription: [
        {description: '- build and maintain website using HTML/CSS/JS and other front-end technologies'},
        {description: '- cooperate with customers and web designer to match requirement and visual design.'},
        {description: '- integrate data from back-end services and databases'},
        {description: '- test the website and identify any technical problems before upload the site to server'}
        ]
      }
      ,
        {jobTitle: 'Software Tester(internship) 2 months', 
        company: 'Reuters Software Thailand in QA Department (Financial & Risk)', 
        startDate: 'June 2013', endDate: 'July 2013',
        jobDescription: [
        {description: '- implement automated test script by translate and optimize existing code from Basic to Python'},
        {description: '- execute test cases of assigned projects and deliver test results.'},
        {description: '- research and report about file sharing and storage technology'}
        ]
      }    
      ],


      education: [
        {degree: 'Bachelor of Engineering in Computer Engineering (International Program)', institution: 'King Mongkut’s University of Technology Thonburi(KMUTT)', startDate: '2010', endDate: '2014', description: 'GPAX 3.37'},
      ],
      certificate: [
        {
          year : '2015-2016',
          experiences : [
          {experience : '-Live Sound Engineer by Butterfly Studio Thailand'}
          ]
        },
        {
          year : '2014',
          experiences : [
          {experience : '-Through final round MSEED game accelerator program for game name “Color ninja”.'},
          {experience : '-Through final round Angle in the city with SIPA  for game name "Mons Box".'}
          ]
        },
        {
          year : '2013',
          experiences : [
          {experience : '-Through final round Tor KlaHaiTerbYai by SCB Foundation in Tertiary Student Project for entertainment name “InsecticaKingdom : Adventure”.'},
          {experience : '-Through final round NSC2013 in Tertiary Student Project for entertainment name “InsecticaKingdom : Adventure”.'},
          {experience : '-Develop game “Amazing OX” for Blackberry10 available on App World with AI and 2 player mode by LUA scripting.'},
          {experience : '-Develop game “InsecticaFigther” for Blackberry10 available on App World with AI mode by LUA scripting.'},
          {experience : '-Participate in Photon CGM Game Jam.'},
          {experience : '-Through final round Samart Innovation Awards 2013.'},
          {experience : '-Winner business plan  in SIPA Young Talent 2013'}
          ]
        },
        {
          year : '2012',
          experiences : [
          {experience : '-Runner up in Thailand ICT Award 2012 (Tertiary Student Project) name “Insectica Kingdom” 3D turn-base strategy game on Smartphone (IOS, BB, Android) , can play with multiplayer and AI.'},
          {experience : '-Through final round Samart Innovation Awards 2012.'}
          ]
        },
        {
          year : '2011',
          experiences : [
          {experience : '-Introduction to Ethical Hacking by CITEC.'},
          {experience : '-Mastering in Exploitation by CITEC.'},
          {experience : '-Web app security by CITEC.'},
          {experience : '-Develop “Flood damage record for help by KMUTT” program by visual basic with CPE developer team and cooperation with Civil engineering department.'}
          ]
        },
        {
          year : '2010',
          experiences : [
          {experience : '-Worked as a C programming teacher and teaching leader in Comcamp #23 at KMUTT.'}
          ]
        }
      ],
      skills: 
        { programming : [
            {name: 'HTML5', percentage: '85%'},
            {name: 'CSS', percentage: '90%'},
            {name: 'JavaScript', percentage: '85%'},
            {name: 'PHP', percentage: '80%'},
            {name: 'Unity3D', percentage: '95%'},
            {name: 'React', percentage: '70%'},
            {name: 'Python', percentage: '80%'},
            {name: 'C, C#', percentage: '95%'},
            {name: 'LUA, Basic', percentage: '90%'}
          ],
          language : [
            {name: 'Thai'},
            {name: 'English(TOEIC 625)'}
          ],
          other : [
            {name: 'Acting as a team player'},
            {name: 'Agile Management'},
            {name: 'Analytical and Research'},
            {name: 'Time and Priority management'},
            {name: 'Marketing'},
            {name: 'Good Listener'},
            {name: 'Problem-solving'},
            {name: 'Live sound engineering'}
          ]

        }
      ,

      //[url=https://imgbb.com/][img]https://image.ibb.co/g3dbeG/image24.png[/img][/url]
      portfolio: [
        {portTitle: 'Color Ninja',
          gallery:[
          { imgURL: 'https://image.ibb.co/cfBc9R/image24.png', orientation: 'square', useForDemo: true }, // https://unsplash.com/photos/t20pc32VbrU (Hump Back Whale)
          { imgURL: 'https://image.ibb.co/dHVBDb/image25.png', orientation: 'landscape' }, // https://unsplash.com/photos/cmKPOUgdmWc (Deer)
          { imgURL: 'https://preview.ibb.co/evcV6w/image26.png', orientation: 'landscape' }, // https://unsplash.com/photos/h13Y8vyIXNU (Walrus)
          { imgURL: 'https://preview.ibb.co/fGecmw/image27.jpg', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/I3C1sSXj1i8 (Leopard)
          { imgURL: 'https://preview.ibb.co/hnmCKG/image28.png', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/_snqARKTgoc (Mother and Cubs)
          { imgURL: 'https://preview.ibb.co/ktjcmw/image29.png', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/n0feC_PWFdk (Dragonfly)
          { imgURL: 'https://preview.ibb.co/mnWezG/image30.jpg', orientation: 'landscape' }, // https://unsplash.com/photos/YOX8ZMTo7hk (Baby Crocodile)
          { imgURL: 'https://preview.ibb.co/gwrezG/image31.png', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/n0feC_PWFdk (Dragonfly)
          { imgURL: 'https://preview.ibb.co/ekRZYb/image32.png', orientation: 'landscape' }, // https://unsplash.com/photos/YOX8ZMTo7hk (Baby Crocodile)
          { imgURL: 'https://preview.ibb.co/d0v6eG/image33.png', orientation: 'landscape' }, // https://unsplash.com/photos/n0feC_PWFdk (Dragonfly)

          ]
        },

        {portTitle: 'Insectica Kingdoms',
          gallery:[
          { imgURL: 'https://image.ibb.co/nDyDim/IPhone_icon_aqua.png', orientation: 'square', useForDemo: true }, // https://unsplash.com/photos/t20pc32VbrU (Hump Back Whale)
          { imgURL: 'https://preview.ibb.co/kyBORw/image2.png', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/cmKPOUgdmWc (Deer)
          { imgURL: 'https://preview.ibb.co/fAX8tb/image3.png', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/h13Y8vyIXNU (Walrus)
          { imgURL: 'https://preview.ibb.co/hhR1Db/image4.png', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/I3C1sSXj1i8 (Leopard)
          { imgURL: 'https://preview.ibb.co/kor1Db/image5.png', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/_snqARKTgoc (Mother and Cubs)
          { imgURL: 'https://preview.ibb.co/hH9MDb/image6.jpg', orientation: 'landscape' }, // https://unsplash.com/photos/n0feC_PWFdk (Dragonfly)
          { imgURL: 'https://preview.ibb.co/msucmw/image7.png', orientation: 'landscape' } // https://unsplash.com/photos/YOX8ZMTo7hk (Baby Crocodile)
          ]
        },
        {portTitle: 'Mon Box',
          gallery:[
          { imgURL: 'https://image.ibb.co/jCCvw6/image17.png', orientation: 'square', useForDemo: true }, // https://unsplash.com/photos/t20pc32VbrU (Hump Back Whale)
          { imgURL: 'https://preview.ibb.co/gSApzG/image18.jpg', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/cmKPOUgdmWc (Deer)
          { imgURL: 'https://preview.ibb.co/nJFdtb/image19.jpg', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/h13Y8vyIXNU (Walrus)
          { imgURL: 'https://preview.ibb.co/i4Tnmw/image20.jpg', orientation: 'landscape' }, // https://unsplash.com/photos/I3C1sSXj1i8 (Leopard)
          { imgURL: 'https://preview.ibb.co/ksiytb/image21.jpg', orientation: 'landscape' }, // https://unsplash.com/photos/_snqARKTgoc (Mother and Cubs)
          { imgURL: 'https://preview.ibb.co/cYk06w/image22.jpg', orientation: 'landscape' }, // https://unsplash.com/photos/n0feC_PWFdk (Dragonfly)
          { imgURL: 'https://preview.ibb.co/iNHDRw/image23.jpg', orientation: 'landscape' } // https://unsplash.com/photos/YOX8ZMTo7hk (Baby Crocodile)
          ]
        },
        {portTitle: 'Amazing OX',
          gallery:[
          { imgURL: 'https://image.ibb.co/nnMAUR/OXicon2.png', orientation: 'square', useForDemo: true }, // https://unsplash.com/photos/t20pc32VbrU (Hump Back Whale)
          { imgURL: 'https://preview.ibb.co/bRhrDb/image9.png', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/cmKPOUgdmWc (Deer)
          { imgURL: 'https://preview.ibb.co/dFetRw/image10.png', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/h13Y8vyIXNU (Walrus)
          { imgURL: 'https://preview.ibb.co/eWBUzG/image11.png', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/I3C1sSXj1i8 (Leopard)
          ]
        },
        {portTitle: 'Insectica Figther',
          gallery:[
          { imgURL: 'https://image.ibb.co/djDDim/icon_xl.png', orientation: 'square', useForDemo: true }, // https://unsplash.com/photos/t20pc32VbrU (Hump Back Whale)
          { imgURL: 'https://preview.ibb.co/erDL6w/image14.png', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/h13Y8vyIXNU (Walrus)
          { imgURL: 'https://preview.ibb.co/dtapzG/image15.png', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/I3C1sSXj1i8 (Leopard)
          { imgURL: 'https://preview.ibb.co/jEqpzG/image16.png', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/_snqARKTgoc (Mother and Cubs)
          { imgURL: 'https://preview.ibb.co/d9hPYb/image13.png', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/cmKPOUgdmWc (Deer)
          
          ]
        },
        
      ]
      
    };

    return (
      <header>
        <div className='wrapper'>
          <div className='sidebar'>
            <About
              avatar={person.avatar}
              name={person.name}
              profession={person.profession}
              bio={person.bio}
              address={person.address}
              social={person.social} />
          </div>

          <div className='content-wrapper'>
              <div className='content'>
                <Education education={person.education} />
                <Experience experience={person.experience} />
                <Skills skills={person.skills} />
                <Certificate certificate={person.certificate} />
                <Portfolio portfolio={person.portfolio} />
              </div>
          </div>

        </div>
      </header>
    );
  }
}

export default App;
