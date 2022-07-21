import SectionTitle from './SectionTitle'

export default function Better(params) {
  const betters = [
    {
      title: 'Protection',
      icon: require('./../../assets/images/icon/protect.png'),
      description:
        'We protect your data with a strong encryption algorithm and a strong firewall.',
    },
    {
      title: 'Effectiveness',
      icon: require('./../../assets/images/icon/effective.png'),
      description:
        'We provide a high-quality service with a fast and reliable response time.',
    },
    {
      title: 'Support',
      icon: require('./../../assets/images/icon/support.png'),
      description:
        'We provide 24/7 support to our customers and we are always ready to help.',
    },
  ]
  return (
    <section id="better" className="better">
      <div className="container">
        <SectionTitle
          title="Better Way to Find Your Cars"
          subtitle="Ullamco aliquip sint mollit Lorem consequat aliqua eiusmod cupidatat sit Lorem. Qui proident anim culpa magna mollit ullamco aute. Est proident exercitation quis cillum ad enim culpa voluptate."
        />
        <div className="row">
          {betters.map((better, i) => {
            return (
              <div key={i} className="col-lg-4">
                <div className="card">
                  <div className="card-body">
                    <img src={better.icon} alt="icon" />
                    <h4 className="my-4">{better.title}</h4>
                    <p>{better.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
