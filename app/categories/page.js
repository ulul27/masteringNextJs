import '../../styles/globals.css'
import Navibar from "../../component/Navbar"
import Categories from '../categories/Categories'
import Small from '../categories/Small'
import Featur from '../categories/Features'

import Image from 'next/image'
import Cek from '../../asseets/img/Group36.png'
import Cate1 from '../../asseets/img/Cate1.png'
import Cate2 from '../../asseets/img/Cate2.png'
import Sm11 from '../../asseets/img/Small11.png'
import Sm12 from '../../asseets/img/Small12.png'
import Sm13 from '../../asseets/img/Small13.png'
import Sm14 from '../../asseets/img/Small14.png'

function page () {
  return (
    <>
    <Navibar/>

    <div className="container">
      <h1>Robocrypto UI Kit</h1>
      <p>Built your next coin startup</p>
    
        <div className="row">
          <div className="col-8">
            <Categories/>

            <div className="row my-3">
                <Small
                gambar={Sm11}
                />
                <Small
                gambar={Sm12}
                />
                <Small
                gambar={Sm13}
                />
                <Small
                gambar={Sm14}
                />
            </div>
          </div>

          <div className="col-4">
              <div className="card custom-border p-3">

                <Image
                className="my-2"
                src={Cate1}
                alt="..."
                />
                <Image
                className="my-2"
                src={Cate2}
                alt="..."
                />

                <p className="fw-bold my-3">Great Features</p>

                <div className="row d-flex justify-content-between">

                <Featur
                nama="Customizable layers"
                gambar={Cek}
                />
                {/* <Featur
                nama="Documentation"
                />
                <Featur
                nama="Icon set design"
                />
                <Featur
                nama="Pre-built UI screeens"
                /> */}
                </div>

                <button className="browse rounded-pill py-3 m-4">Download Now</button>
              </div>
          </div>

        </div>

      <div className="row">

        <div className="col-6">
          <p className="fw-bold">About</p>
          <p>Sportly App UI Kit will help your Sport, Fitness, and Workout App products or services. Came with modern and sporty style, you can easily edit and customize all elements with components that can speed up your design process.</p>

          <p>Suitable for :<br/>- Sport App<br/>- Fitness & GYM App<br/>- Workout App<br/>- Trainer & Tracker App<br/>- And many more</p>
        </div>

      </div>
    </div>

    </>
  )
}

export default page