import CrewDetails from '../components/CrewDetails'
import Navbar from '../components/Navbar'
import PageText from '../components/PageText'



export default function Crew() {
  return (
    <div className='crew-bg-desktop h-screen w-full'>
      <Navbar/>
      <PageText pageNumber={2} pageText='Meet your crew'/>
      <CrewDetails />
    </div>  )
}
