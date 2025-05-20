import '../globals.css'

import Case from '../studi/studycase'
import Nav from '../../component/Navbar'

import Robo from '../../asseets/img/Group326.png'
import Onl from '../../asseets/img/Group327.png'
import Bank from '../../asseets/img/Group328.png'

function page () {
  return (
    <>
    <Nav/>

    <div className="container">
      <div className="row">
        <h1 className="fw-bold">Study Case</h1>
      </div>

      <div className="row">
      <Case
      gambar={Robo}
      item="Mobile UI Kit"
      />
      <Case
      gambar={Onl}
      item="Website UI Kit"
      />
      <Case
      gambar={Bank}
      item="Mobile UI Kit"
      />
      <Case
      gambar={Robo}
      item="Mobile UI Kit"
      />
      <Case
      gambar={Onl}
      item="Website UI Kit"
      />
      <Case
      gambar={Bank}
      item="Mobile UI Kit"
      />
      </div>      
    </div>
    </>
  )
}
 export default page