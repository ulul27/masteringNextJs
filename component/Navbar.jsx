import Image from 'next/image'
import Link from 'next/link'
import NavbarBrand from '../asseets/img/Group2.png'


export default function Navibar () {
return (
  <>
  
    <div className="container">
      <nav className="navbar mb-5">
        <Link href="/"><Image src={NavbarBrand} alt="logo"/></Link>
        <div className="d-flex justify-content-center">
          <Link className="nav-link p-2 fw-bold" href="/">Home</Link>
          <Link className="nav-link p-2" href="/categories">Categories</Link>
          <Link className="nav-link p-2" href="/pricing">Pricing</Link>
          <Link className="nav-link p-2" href="/">Study Case</Link>
        </div>

        <div className="position-relative rounded-pil">
          <button type="button" className="btn btn-outline-secondary m-2 px-4 rounded-pill">Sign In</button>
          <button type="button" className="btn btn-dark m-2 px-4 rounded-pill">Sign Up</button>
        </div>
      </nav>
      </div>

  </>
)
}