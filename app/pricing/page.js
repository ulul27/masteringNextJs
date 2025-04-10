import Navibar from "../../component/Navbar"
import Hero from './Hero'
import Price from './Price'
import Fiture from './Fiture'

import Cust from '../../asseets/img/Group45.png'
import Fort from '../../asseets/img/Group451.png'
import Doc from '../../asseets/img/Group452.png'

function page () {

  return (
    <>

    <Navibar/>
    <Hero/>

    <div className="container">
      <div className="row d-flex justify-content-center">
        
        <Price
        harga="IDR 2,000"
        pilihan="Basic Plan"
        kategori="Suitable for new team"
        items={["Customizble layers","Official documentation","SVG icons", "SVG illustrations", "Pre-built design screen"]}
        colorButton="border border-0 py-2"
        />
      
        <Price
        harga="IDR 9,000"
        pilihan="Gold Plan"
        kategori="Suitable for big company"
        items={["Customizble layers","Official documentation","SVG icons", "SVG illustrations","Pre-built design screen", "Coded template", "Support 24/7", "Private designer group", "Unclock cloning app"]}
        colorButton="btn btn-primary py-2"
        />
      </div>
    </div>



    <div className="container my-5">
      <div className="row d-flex justify-content-center">
        <Fiture
        gambar={Cust}
        nama="Customizable"
        rincian="Accelerate your work with our millions of ready-to-use design projects."
        />
        <Fiture
        gambar={Fort}
        nama="500 Fortune"
        rincian="Accelerate your work with our millions of ready-to-use design projects."
        />
        <Fiture
        gambar={Doc}
        nama="Documentation"
        rincian="Accelerate your work with our millions of ready-to-use design projects."
        />
      </div>
    </div>

    </>
  )
}

export default page