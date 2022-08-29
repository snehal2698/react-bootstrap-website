import { Router } from "react-router";
import { Link } from 'react-router-dom';
function Header(){
    return(
        <header id="header" class="fixed-top">
              <div class="container d-flex align-items-center">

      <h1 class="logo me-auto"><a href="/">Mentor</a></h1>
      <a href="/" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></img></a>

      <nav id="navbar" class="navbar order-last order-lg-0">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/trainers">Trainers</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/pricing">Pricing</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>

      <a href="/courses" class="get-started-btn">Get Started</a>

    </div>
  </header>

    )
}

export default Header;