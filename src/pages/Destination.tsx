import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import PageText from '../components/PageText'


export default function Destination() {
  const [destinations, setDestinations] = useState([]);  
  console.log(destinations);
  

  useEffect(function () {
    async function fetchDestinations() {
      const res = await fetch('/data.json');
      const data = await res.json();
      setDestinations(data.destination);
    }

    fetchDestinations();
  }, []);


  return (
    <div className='destination-bg-desktop h-screen w-full'>
      <Navbar/>
      <PageText pageNumber={1} pageText='Pick your destination' />
    </div>
  )
}
