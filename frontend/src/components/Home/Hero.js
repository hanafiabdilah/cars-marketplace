import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function Hero(params) {
  const cars = [
    require('./../../assets/images/cars/2.png'),
    require('./../../assets/images/cars/1.jpg'),
    require('./../../assets/images/cars/5.png'),
  ]
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  }

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h6>
              <span>- PRESTIGE</span>
            </h6>
            <h1>Invite our cars to Your Life</h1>
            <h6>
              <span>145.000</span> cars in <span>1000+</span> locations arount
              the world!
            </h6>
          </div>
          <div className="col-lg-6">
            <Slider {...settings}>
              {cars.map((car, i) => {
                return <img src={car} key={i} />
              })}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  )
}
