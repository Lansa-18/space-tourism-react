import Navbar from '../components/Navbar'
import PageText from '../components/PageText'
import TechnologyDetails from '../components/TechnologyDetails'

export default function Technology() {
  return (
    <div className='technology-bg-desktop [mask-image:linear-gradient(to_bottom,black_80%,transparent)] h-screen w-full'>
      <Navbar />
      <PageText pageNumber={3} pageText='Space Launch 101' />
      <TechnologyDetails />
    </div>  )
}
