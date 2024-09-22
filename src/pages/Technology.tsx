import Navbar from '../components/Navbar'
import PageText from '../components/PageText'
import TechnologyDetails from '../components/TechnologyDetails'

export default function Technology() {
  return (
    <div className='technology-bg-desktop min-h-[150vh] min-w-full'>
      <Navbar />
      <PageText pageNumber={3} pageText='Space Launch 101' />
      <TechnologyDetails />
    </div>  )
}
