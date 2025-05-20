import '../../styles/globals.css'

import Navibar from './Navbar'
import Form from './Form'
import Post from './Post'

import Cust from '../../asseets/img/Group45.png'
import Fort from '../../asseets/img/Group451.png'
import Doc from '../../asseets/img/Group452.png'


function Signup () {
  return (
  <>
  <div className="container">
    <div className="row">
      <Navibar/>

  <h1 className="pop-42 text-center my-5">Join & Get Our <br/> Pro Benefits</h1>
  
          <div className="col-6">
            <div className="row d-flex justify-content-center">
                    <Post
                    gambar={Cust}
                    nama="Customizable"
                    rincian="Accelerate your work with our millions of ready-to-use design projects."
                    />
                    <Post
                    gambar={Fort}
                    nama="500 Fortune"
                    rincian="Accelerate your work with our millions of ready-to-use design projects."
                    />
                    <Post
                    gambar={Doc}
                    nama="Documentation"
                    rincian="Accelerate your work with our millions of ready-to-use design projects."
                    />
                  </div>
          </div>

          <div className="col-6">
            <Form/>
          </div>

    </div>
  </div>
  </>
  )
}

export default Signup