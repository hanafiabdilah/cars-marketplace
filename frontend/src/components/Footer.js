export default function Footer(params) {
  return (
    <footer>
      <div className="main-footer container">
        <div className="row justify-content-between">
          <div className="col-lg-3">
            <h3>CARS MARKETPLACE</h3>
            <p>
              Ullamco proident labore mollit pariatur id Lorem quis voluptate.
              Minim nisi commodo velit nostrud qui Lorem sit. Deserunt tempor id
              aute ullamco consequat amet ex. Tempor ex enim Lorem elit sunt
              nulla ipsum veniam quis.
            </p>
          </div>
          <div className="col-lg-8">
            <div className="row">
              <div className="col-lg-4">
                <h5>About Us</h5>
                <ul>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Location</a>
                  </li>
                  <li>
                    <a href="#">Reviews</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4">
                <h5>Service</h5>
                <ul>
                  <li>
                    <a href="#">Sell Car</a>
                  </li>
                  <li>
                    <a href="#">Buy Car</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4">
                <h5>Help</h5>
                <ul>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <p className="text-center footer-copy">
        &copy; 2020 - 2022 PT Hanafi Mobil Indonesia | Dilindungi oleh hak
        cipta.
      </p>
    </footer>
  )
}
