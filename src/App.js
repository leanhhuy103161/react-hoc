// import logo from './logo.svg';
import './App.css';

import React, { useState, useEffect } from 'react';
import HoverOpacity from './components/HoverOpacity.js'
import AwesomeImage from './components/AwesomeImage'
import HocHoverOpacity from './components/HocHoverOpacity';

const SetHocHoverOpacity = HocHoverOpacity(AwesomeImage, 0.9)

// function App() {
//   return (
//     <div>
//       <HoverOpacity>
//         <AwesomeImage src='https://source.unsplash.com/random'></AwesomeImage>
//       </HoverOpacity>
//     </div>
//   );
// }


function App() {
  return (
    <div>
      <SetHocHoverOpacity src="https://source.unsplash.com/random" />
    </div>
  );
}

export default App;
