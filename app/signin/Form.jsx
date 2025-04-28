import '../../styles/globals.css'

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
              <button className="btn btn-secondary rounded-pill py-2 w-100">Create New Account</button>
              
            </div>
          </div>
        </form>
      </div>
     </div>

     <div className="container pt-5">
      <div className="row">
        <div className="col">
          <Image src={Apel} alt="apel dong" />
        </div>
        <div className="col">
          <Image src={Adobe} alt="adobe dong" />
        </div>
        <div className="col">
          <Image src={slack} alt="slack dong" />
        </div>
        <div className="col">
          <Image src={Spotify} alt="spotify dong" />
        </div>
        <div className="col">
          <Image src={Google} alt="google dong" />
        </div>
      </div>
     </div>
    
    </>
  )
}