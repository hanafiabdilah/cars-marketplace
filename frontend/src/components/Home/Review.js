import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import SectionTitle from './SectionTitle'
import avatar1 from './../../assets/images/avatar/1.png'
import avatar2 from './../../assets/images/avatar/2.png'
import star from './../../assets/images/icon/star.png'
import starBorder from './../../assets/images/icon/star-border.png'

export default function Review(params) {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  const reviews = [
    {
      avatar: avatar2,
      name: 'John Doe',
      comment:
        'Veniam quis in ullamco et nisi. Ad enim sint laboris consectetur culpa quis sit consequat minim commodo culpa. Aliqua adipisicing aliqua ex incididunt excepteur reprehenderit magna voluptate excepteur ex culpa culpa dolore officia. Esse consequat fugiat pariatur sunt.',
      date: new Date().toLocaleString('IN', options),
      stars: 5,
    },
    {
      avatar: avatar1,
      name: 'John Doe',
      comment:
        'Veniam quis in ullamco et nisi. Ad enim sint laboris consectetur culpa quis sit consequat minim commodo culpa. Aliqua adipisicing aliqua ex incididunt excepteur reprehenderit magna voluptate excepteur ex culpa culpa dolore officia. Esse consequat fugiat pariatur sunt.',
      date: new Date().toLocaleString('IN', options),
      stars: 5,
    },
    {
      avatar: avatar2,
      name: 'John Doe',
      comment:
        'Veniam quis in ullamco et nisi. Ad enim sint laboris consectetur culpa quis sit consequat minim commodo culpa. Aliqua adipisicing aliqua ex incididunt excepteur reprehenderit magna voluptate excepteur ex culpa culpa dolore officia. Esse consequat fugiat pariatur sunt.',
      date: new Date().toLocaleString('IN', options),
      stars: 4,
    },
    {
      avatar: avatar1,
      name: 'John Doe',
      comment:
        'Veniam quis in ullamco et nisi. Ad enim sint laboris consectetur culpa quis sit consequat minim commodo culpa. Aliqua adipisicing aliqua ex incididunt excepteur reprehenderit magna voluptate excepteur ex culpa culpa dolore officia. Esse consequat fugiat pariatur sunt.',
      date: new Date().toLocaleString('IN', options),
      stars: 4,
    },
    {
      avatar: avatar2,
      name: 'John Doe',
      comment:
        'Veniam quis in ullamco et nisi. Ad enim sint laboris consectetur culpa quis sit consequat minim commodo culpa. Aliqua adipisicing aliqua ex incididunt excepteur reprehenderit magna voluptate excepteur ex culpa culpa dolore officia. Esse consequat fugiat pariatur sunt.',
      date: new Date().toLocaleString('IN', options),
      stars: 5,
    },
  ]

  const settings = {
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
  }

  const Stars = (params) => {
    let rows = []
    for (let i = 1; i <= 5; i++) {
      rows.push(
        <img
          key={i}
          src={params.stars >= i ? star : starBorder}
          className="star mr-2"
        />
      )
    }

    return rows
  }

  return (
    <section id="review" className="review">
      <div className="container">
        <SectionTitle
          title="Clients Comments"
          subtitle="Veniam non eiusmod nulla dolore fugiat elit anim adipisicing minim minim. Aute dolor officia aliquip sit nostrud nulla. Consectetur excepteur consectetur non non aliquip deserunt."
        />
      </div>
      <div className="container-fluid">
        <div className="mx-3">
          <Slider {...settings}>
            {reviews.map((review, i) => {
              return (
                <div key={i} className="col my-2">
                  <div className="card mx-3">
                    <div className="card-body">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <img src={review.avatar} />
                          <h6 className="m-0 p-0 ms-3">Georg Starks</h6>
                        </div>
                        <div className="d-flex align-items-center stars">
                          <Stars stars={review.stars} />
                        </div>
                      </div>
                      <div className="mt-3">
                        <p className="comment">{review.comment}</p>
                        <p className="date">{review.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>
      </div>
    </section>
  )
}
