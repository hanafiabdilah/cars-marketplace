import Hero from './../components/Home/Hero'
import Recommended from './../components/Home/Recommended'
import Better from './../components/Home/Better'
import Review from './../components/Home/Review'

export default function Home(params) {
  return (
    <>
      <Hero />
      <Recommended />
      <Better />
      <Review />
    </>
  )
}
