import CrewDetails from '../components/CrewDetails'
import Navbar from '../components/Navbar'
import PageText from '../components/PageText'



export default function Crew() {
  return (
    <div className='crew-bg-desktop min-h-screen min-w-full'>
      <Navbar/>
      <PageText pageNumber={2} pageText='Meet your crew'/>
      <CrewDetails />
    </div>  )
}
