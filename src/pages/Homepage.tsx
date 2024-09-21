import { useState } from 'react';
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import NavOverlay from '../components/NavOverlay';

export default function Homepage() {
  const [activeHamburger, setActiveHamburger] = useState(false);

  function handleSetHamburger() {
    setActiveHamburger((prev) => !prev);
  }

  return (
    <div className='home-bg-desktop min-h-[200vh] w-full custom-850:pt-[4rem]'>
      <Navbar setActiveHamburger={handleSetHamburger}/>
      {activeHamburger && (
        <NavOverlay
          activeHamburger={activeHamburger}
          setActiveHamburger={handleSetHamburger}
        />
      )}
      <Main />
    </div>
  )
}
