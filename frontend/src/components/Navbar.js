export default function Navbar(params) {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
      <div class="container">
        <a class="navbar-brand" href="#">
          <span>CARS</span> MARKETPLACE
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav align-items-center ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Buy Car
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Sell Car
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                About Us
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Testimonial
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link login" href="#">
                Login
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link register" href="#">
                Register
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
