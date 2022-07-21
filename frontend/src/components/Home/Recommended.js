import { useState } from 'react'
import SectionTitle from './SectionTitle'

export default function Recommended(params) {
  const cars = [
    {
      image: require('./../../assets/images/cars/1.jpg'),
      title: 'BMW X5',
      price: '$1000',
      year: '2020',
      transition: 'Manual',
      fuel: 'Petrol',
      seats: '5',
    },
    {
      image: require('./../../assets/images/cars/2.png'),
      title: 'BMW X5',
      price: '$1000',
      year: '2020',
      transition: 'Manual',
      fuel: 'Petrol',
      seats: '5',
    },
    {
      image: require('./../../assets/images/cars/3.png'),
      title: 'BMW X5',
      price: '$1000',
      year: '2020',
      transition: 'Manual',
      fuel: 'Petrol',
      seats: '5',
    },
    {
      image: require('./../../assets/images/cars/4.png'),
      title: 'BMW X5',
      price: '$1000',
      year: '2020',
      transition: 'Manual',
      fuel: 'Petrol',
      seats: '5',
    },
  ]

  const [type, setType] = useState('new_cars')
  const handleType = (e) => {
    setType(e.target.dataset.type)
  }

  return (
    <section id="recommended" className="recommended">
      <div className="container">
        <SectionTitle
          title="Recommended"
          subtitle="See our latest car leasing deals below. Please be aware that these special offers may only be around for a limited amout of time"
        />
        <div className="row">
          <div className="col-lg-12">
            <div className="d-flex justify-content-center">
              <button
                className={`btn btn-type ${
                  type === 'new_cars' ? 'active' : ''
                }`}
                data-type="new_cars"
                onClick={handleType}
              >
                New Cars
              </button>
              <button
                className={`btn btn-type ${
                  type === 'used_cars' ? 'active' : ''
                }`}
                data-type="used_cars"
                onClick={handleType}
              >
                Used Cars
              </button>
              <button
                className={`btn btn-type ${
                  type === 'most_popular' ? 'active' : ''
                }`}
                data-type="most_popular"
                onClick={handleType}
              >
                Most Popular
              </button>
              <button
                className={`btn btn-type ${
                  type === 'recent_added' ? 'active' : ''
                }`}
                data-type="recent_added"
                onClick={handleType}
              >
                Recent Added
              </button>
              <button
                className={`btn btn-type ${type === 'luxury' ? 'active' : ''}`}
                data-type="luxury"
                onClick={handleType}
              >
                Luxury
              </button>
            </div>
          </div>
          <div className="col-lg-12 mt-5">
            <div className="row">
              {cars.map((car, i) => {
                return (
                  <div key={i} className="col-lg-3">
                    <div className="card">
                      <div className="card-body text-center">
                        <img src={car.image} />
                        <h3 className="mt-3">{car.title}</h3>
                        <div className="d-flex justify-content-center">
                          <button className="btn btn-description btn-sm mx-1">
                            {car.year}
                          </button>
                          <button className="btn btn-description btn-sm mx-1">
                            {car.transition}
                          </button>
                          <button className="btn btn-description btn-sm mx-1">
                            {car.fuel}
                          </button>
                          <button className="btn btn-description btn-sm mx-1">
                            {car.seats} Seats
                          </button>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mt-3 price">
                          <div className="text-start">
                            <h6 className="m-0 p-0">Excellent Price</h6>
                            <small className="m-0 p-0">
                              $2.145 off avg list price
                            </small>
                          </div>
                          <h3>{car.price}</h3>
                        </div>
                        <a href="" className="btn btn-view">
                          View Deal
                        </a>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
