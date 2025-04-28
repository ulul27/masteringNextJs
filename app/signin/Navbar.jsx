import Image from 'next/image'
import Link from 'next/link'
import NavbarBrand from '../../asseets/img/Group2.png'


export default function Navibar () {
return (
  <>
  
    <div className="container">
      <nav className="navbar mb-5">
        <Link href="/"><Image src={NavbarBrand} alt="logo"/></Link>
        <div className="d-flex justify-content-end">
          <Link className="nav-link p-2 fw-bold" href="/home">Home</Link>
          <Link className="nav-link p-2" href="/categories">Categories</Link>
          <Link className="nav-link p-2" href="/pricing">Pricing</Link>
          <Link className="nav-link p-2" href="/studycase">Study Case</Link>
        </div>
      </nav>
      </div>

  </>
)
}