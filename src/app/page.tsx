import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import ProfileCard from '@/components/ProfileCard'


export default function Home() {
  return (
    <div className='flex flex-col h-screen'>
      <Navbar />

      <ProfileCard />

      <Footer />
    </div>
  )
}
