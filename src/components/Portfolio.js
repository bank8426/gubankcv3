import React from 'react';
import { render } from 'react-dom';
import { RingLoader } from 'react-spinners';
import Gallery from './Gallery';
import './example.less';

/*

<a href="http://ibb.co/bwCjpR"><img src="http://image.ibb.co/djDDim/icon_xl.png" alt="icon_xl" border="0"></a>
<a href="http://ibb.co/kzLhb6"><img src="http://image.ibb.co/nnMAUR/OXicon2.png" alt="OXicon2" border="0"></a>
<a href="http://ibb.co/j8n63m"><img src="http://image.ibb.co/nDyDim/IPhone_icon_aqua.png" alt="IPhone_icon_aqua" border="0"></a>
<a href="http://ibb.co/fxZ8G6"><img src="http://image.ibb.co/jCCvw6/image17.png" alt="image17" border="0"></a>
<a href="http://ibb.co/fPwYim"><img src="http://image.ibb.co/cfBc9R/image24.png" alt="image24" border="0"></a>
<br /><a target='_blank' href='http://imgbb.com/'>upload image to webside</a><br />

[url=http://imgbb.com/][img]http://image.ibb.co/kLOMZR/image1.png[/img][/url]
[url=http://imgbb.com/][img]http://image.ibb.co/bGdATm/image8.png[/img][/url]
[url=http://imgbb.com/][img]http://image.ibb.co/hnjOg6/image12.png[/img][/url]
[url=http://imgbb.com/][img]http://image.ibb.co/gWDMZR/image17.png[/img][/url]

//color ninja
[url=https://imgbb.com/][img]https://image.ibb.co/g3dbeG/image24.png[/img][/url]
[url=https://imgbb.com/][img]https://image.ibb.co/dHVBDb/image25.png[/img][/url]
[url=https://ibb.co/b5sKzG][img]https://preview.ibb.co/evcV6w/image26.png[/img][/url]
[url=https://ibb.co/jsgZYb][img]https://preview.ibb.co/fGecmw/image27.jpg[/img][/url]
[url=https://ibb.co/bOhmeG][img]https://preview.ibb.co/hnmCKG/image28.png[/img][/url]
[url=https://ibb.co/mQKA6w][img]https://preview.ibb.co/ktjcmw/image29.png[/img][/url]
[url=https://ibb.co/cnOEYb][img]https://preview.ibb.co/mnWezG/image30.jpg[/img][/url]
[url=https://ibb.co/nrnxmw][img]https://preview.ibb.co/gwrezG/image31.png[/img][/url]
[url=https://ibb.co/j9W1Db][img]https://preview.ibb.co/ekRZYb/image32.png[/img][/url]
[url=https://ibb.co/iXhV6w][img]https://preview.ibb.co/d0v6eG/image33.png[/img][/url]

insectica
[url=https://ibb.co/fbpotb][img]https://preview.ibb.co/mH3sKG/image1.png[/img][/url]
[url=https://ibb.co/mWnxmw][img]https://preview.ibb.co/kyBORw/image2.png[/img][/url]
[url=https://ibb.co/hyZcmw][img]https://preview.ibb.co/fAX8tb/image3.png[/img][/url]
[url=https://ibb.co/bR4XKG][img]https://preview.ibb.co/hhR1Db/image4.png[/img][/url]
[url=https://ibb.co/jHzA6w][img]https://preview.ibb.co/kor1Db/image5.png[/img][/url]
[url=https://ibb.co/gcrq6w][img]https://preview.ibb.co/hH9MDb/image6.jpg[/img][/url]
[url=https://ibb.co/dHeotb][img]https://preview.ibb.co/msucmw/image7.png[/img][/url]

mon box
[url=https://imgbb.com/][img]https://image.ibb.co/bCMweG/image17.png[/img][/url]
[url=https://ibb.co/fuZGeG][img]https://preview.ibb.co/gSApzG/image18.jpg[/img][/url]
[url=https://ibb.co/mme4Yb][img]https://preview.ibb.co/nJFdtb/image19.jpg[/img][/url]
[url=https://ibb.co/m2wweG][img]https://preview.ibb.co/i4Tnmw/image20.jpg[/img][/url]
[url=https://ibb.co/mPJWDb][img]https://preview.ibb.co/ksiytb/image21.jpg[/img][/url]
[url=https://ibb.co/ixpSmw][img]https://preview.ibb.co/cYk06w/image22.jpg[/img][/url]
[url=https://ibb.co/d6wjYb][img]https://preview.ibb.co/iNHDRw/image23.jpg[/img][/url]

ox
[url=https://imgbb.com/][img]https://image.ibb.co/dZTEYb/image8.png[/img][/url]
[url=https://ibb.co/febweG][img]https://preview.ibb.co/bRhrDb/image9.png[/img][/url]
[url=https://ibb.co/fnESmw][img]https://preview.ibb.co/dFetRw/image10.png[/img][/url]
[url=https://ibb.co/nziL6w][img]https://preview.ibb.co/eWBUzG/image11.png[/img][/url]

figther
[url=https://imgbb.com/][img]https://image.ibb.co/iKjGeG/image12.png[/img][/url]
[url=https://ibb.co/jZVYRw][img]https://preview.ibb.co/d9hPYb/image13.png[/img][/url]
[url=https://ibb.co/fPptRw][img]https://preview.ibb.co/erDL6w/image14.png[/img][/url]
[url=https://ibb.co/mNqNKG][img]https://preview.ibb.co/dtapzG/image15.png[/img][/url]
[url=https://ibb.co/h3eSmw][img]https://preview.ibb.co/jEqpzG/image16.png[/img][/url]

*/

function makeUnsplashSrc (id) {
  return `${id}`;
}
function makeUnsplashSrcSet (id, size) {
  return `${id}`;
}
function makeUnsplashThumbnail (id, orientation = 'landscape') {
  const dimensions = orientation === 'square'
    ? 'w=300&h=300'
    : 'w=240&h=159';

  return `${id}`;
}

/*const THUMBNAIL_IMAGES = [
  { id: 'mH3sKG/image1.png', orientation: 'square', useForDemo: true }, // https://unsplash.com/photos/t20pc32VbrU (Hump Back Whale)
  { id: 'kyBORw/image2.png', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/cmKPOUgdmWc (Deer)
  { id: 'fAX8tb/image3.png', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/h13Y8vyIXNU (Walrus)
  { id: 'hhR1Db/image4.png', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/I3C1sSXj1i8 (Leopard)
  { id: 'kor1Db/image5.png', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/_snqARKTgoc (Mother and Cubs)
  { id: 'hH9MDb/image6.jpg', orientation: 'landscape' }, // https://unsplash.com/photos/n0feC_PWFdk (Dragonfly)
  { id: 'msucmw/image7.png', orientation: 'landscape' }, // https://unsplash.com/photos/YOX8ZMTo7hk (Baby Crocodile)
  // https://unsplash.com/photos/NUMlxTPsznM coyote?
];*/

/*
function makeUnsplashSrc (id) {
  return `https://images.unsplash.com/photo-${id}?dpr=2&auto=format&w=1024&h=1024`;
}
function makeUnsplashSrcSet (id, size) {
  return `https://images.unsplash.com/photo-${id}?dpr=2&auto=format&w=${size} ${size}w`;
}
function makeUnsplashThumbnail (id, orientation = 'landscape') {
  const dimensions = orientation === 'square'
    ? 'w=300&h=300'
    : 'w=240&h=159';

  return `https://images.unsplash.com/photo-${id}?dpr=2&auto=format&crop=faces&fit=crop&${dimensions}`;
}

const DEFAULT_IMAGES = [
  { id: '1470619549108-b85c56fe5be8', caption: 'Photo by Alan Emery', orientation: 'square', useForDemo: true }, // https://unsplash.com/photos/SYzUF6XcWBY (Flamingo)
  { id: '1471079502516-250c19af6928', caption: 'Photo by Jeremy Bishop', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/GIpGxe2_cT4 (Turtle)
  { id: '1454023492550-5696f8ff10e1', caption: 'Photo by Jessica Weiller', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/LmVSKeDy6EA (Tiger)
  { id: '1470854989922-5be2f7456d78', caption: 'Photo by Piotr Łaskawski', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/GXMr7BadXQo (Hedgehog)
  { id: '1470317596697-cbdeda56f999', caption: 'Photo by Michel Bosma', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/XgF9e93Tkt0 (Ladybug)
];
const THEMED_IMAGES = [
  { id: '1471101173712-b9884175254e', caption: 'Photo by Pedro Lastra', orientation: 'square', useForDemo: true }, // https://unsplash.com/photos/5oRzZU5uwSM (Dragonfly)
  { id: '1471127432458-65206be149c9', caption: 'Photo by Ernesto Velázquez', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/Kpgt4pl03O0 (Deer)
  { id: '1470777639313-60af88918203', caption: 'Photo by Cris Saur', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/GNUcUx-iObg (Koala)
  { id: '1453550486481-aa4175b013ea', caption: 'Photo by Benjamin Pley', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/WiSeaZ4E6ZI (Elephant)
  { id: '1415904663467-dfdc16cae794', caption: 'Photo by Levi Saunders', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/NUMlxTPsznM (Coyote)
];
const THUMBNAIL_IMAGES = [
  { id: '1454991727061-be514eae86f7', caption: 'Photo by Thomas Kelley', orientation: 'square', useForDemo: true }, // https://unsplash.com/photos/t20pc32VbrU (Hump Back Whale)
  { id: '1455717974081-0436a066bb96', caption: 'Photo by Teddy Kelley', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/cmKPOUgdmWc (Deer)
  { id: '1460899960812-f6ee1ecaf117', caption: 'Photo by Jay Ruzesky', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/h13Y8vyIXNU (Walrus)
  { id: '1456926631375-92c8ce872def', caption: 'Photo by Gwen Weustink', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/I3C1sSXj1i8 (Leopard)
  { id: '1452274381522-521513015433', caption: 'Photo by Adam Willoughby-Knox', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/_snqARKTgoc (Mother and Cubs)
  { id: '1471145653077-54c6f0aae511', caption: 'Photo by Boris Smokrovic', orientation: 'landscape' }, // https://unsplash.com/photos/n0feC_PWFdk (Dragonfly)
  { id: '1471005197911-88e9d4a7834d', caption: 'Photo by Gaetano Cessati', orientation: 'landscape' }, // https://unsplash.com/photos/YOX8ZMTo7hk (Baby Crocodile)
  { id: '1470583190240-bd6bbde8a569', caption: 'Photo by Alan Emery', orientation: 'landscape' }, // https://unsplash.com/photos/emTCWiq2txk (Beetle)
  { id: '1470688090067-6d429c0b2600', caption: 'Photo by Ján Jakub Naništa', orientation: 'landscape' }, // https://unsplash.com/photos/xqjO-lx39B4 (Scottish Highland Cow)
  { id: '1470742292565-de43c4b02b57', caption: 'Photo by Eric Knoll', orientation: 'landscape' }, // https://unsplash.com/photos/DmOCkOnx-MQ (Cheetah)
  // https://unsplash.com/photos/NUMlxTPsznM coyote?
];
*/


const theme = {
  // container
  container: {
    background: 'rgba(255, 255, 255, 0.9)',
  },

  // arrows
  arrow: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    fill: '#222',
    opacity: 0.6,
    transition: 'opacity 200ms',

    ':hover': {
      opacity: 1,
    },
  },
  arrow__size__medium: {
    borderRadius: 40,
    height: 40,
    marginTop: -20,

    '@media (min-width: 768px)': {
      height: 70,
      padding: 15,
    },
  },
  arrow__direction__left: { marginLeft: 10 },
  arrow__direction__right: { marginRight: 10 },
  close: {
    fill: '#D40000',
    opacity: 0.6,
    transition: 'all 200ms',
    ':hover': {
      opacity: 1,
    },
  },

  // footer
  footer: {
    color: 'black',
  },
  footerCount: {
    color: 'rgba(0, 0, 0, 0.6)',
  },

  // thumbnails
  thumbnail: {
  },
  thumbnail__active: {
    boxShadow: '0 0 0 2px #00D8FF',
  },
};

const Portfolio = (props) => {
  console.log(props.portfolio);
  const myPortfolio = (
    <div>
      {props.portfolio.map((port) =>
        <div className='item' key={port.portTitle}>
          <h3>{port.portTitle}</h3>
          <p>
    <Gallery images={port.gallery.map(({  imgURL, orientation, useForDemo }) => ({
      src: makeUnsplashSrc(imgURL),
      thumbnail: makeUnsplashThumbnail(imgURL, orientation),
      srcSet: [
        makeUnsplashSrcSet(imgURL, 1024),
        makeUnsplashSrcSet(imgURL, 800),
        makeUnsplashSrcSet(imgURL, 500),
        makeUnsplashSrcSet(imgURL, 320),
      ],
      orientation,
      useForDemo,
    }))} showThumbnails />


          </p>
        </div>
      )}
    </div>
  );
  return (
    <div className='title'>
      <i className='fa fa-rocket'></i>
      <h2>PORTFOLIO</h2>
      {myPortfolio}
    </div>
  )
};

export default Portfolio;


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