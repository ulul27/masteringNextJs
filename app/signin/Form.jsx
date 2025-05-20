import '../../styles/globals.css'
import Link from 'next/link'

import Image from 'next/image'
import Apel from '../../asseets/img/apple.png'
import Adobe from '../../asseets/img/adobe.png'
import slack from '../../asseets/img/slack.png'
import Spotify from '../../asseets/img/spotify.png'
import Google from '../../asseets/img/google.png'

export default function Form () {
  return (
    <>
     <div className="container mb-5">
      <div>
        <h1 className="fw-bold pop-42 text-center my-5">Welcome Back</h1>
        <form>
          <div className="d-flex justify-content-center">
            <div className="w-25">
              <label for="exampleInputEmail1" class="form-label">Email Address</label>
              <input type="email" class="form-control rounded-pill mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="type your email" />
              
              <label for="exampleInputEmail1" class="form-label">Password</label>
              <input type="email" class="form-control rounded-pill mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="type your password" />

              <button className="browse rounded-pill py-2 w-100 mb-2">Sign In</button>
              <Link className="btn off rounded-pill py-2 w-100" href="/signup" >Create New Account</Link>
              
            </div>
          </div>
        </form>
      </div>
     </div>

     {/* <div className="container w-50 pt-5">
      <div className="row">
        <div className="col">
          <Image src={Apel} width={87} height={30} alt="apel dong" />
        </div>
        <div className="col">
          <Image src={Adobe} width={125} height={30} alt="adobe dong" />
        </div>
        <div className="col">
          <Image src={slack} width={118} height={30} alt="slack dong" />
        </div>
        <div className="col">
          <Image src={Spotify} width={100} height={30} alt="spotify dong" />
        </div>
        <div className="col">
          <Image src={Google} width={91} height={30} alt="google dong" />
        </div>
      </div>
     </div> */}
    
    <div className="d-flex justify-content-center mt-5 p-5">
        {/* <div>  */}
            <Image src={Apel} className="mx-3" width={87} height={30} alt="apel dong" />
        {/* </div> */}
        {/* <div> */}
            <Image src={Adobe} className="mx-3" width={125} height={30} alt="adobe dong" />
        {/* </div> */}
        {/* <div className="mx-3"> */}
          <Image src={slack} className="mx-3" width={118} height={30} alt="slack dong" />
        {/* </div> */}
        {/* <div> */}
          <Image src={Spotify} className="mx-3" width={100} height={30} alt="spotify dong" />
        {/* </div> */}
        {/* <div> */}
          <Image src={Google} className="mx-3" width={91} height={30} alt="google dong" />
        {/* </div> */}
     </div>
    </>
  )
}