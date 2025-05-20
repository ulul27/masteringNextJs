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
             
        <form>
          
            <div className="col-md-7">
              <label for="exampleInputEmail1" class="form-label">Name</label>
              <input type="email" class="form-control rounded-pill mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="type your full name" />
              
              <label for="exampleInputEmail1" class="form-label">Email Address</label>
              <input type="email" class="form-control rounded-pill mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="type your email" />
              
              <label for="exampleInputEmail1" class="form-label">Password</label>
              <input type="email" class="form-control rounded-pill mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="type your password" />

              <button className="browse rounded-pill py-2 w-100 mb-2">Sign In</button>
              <button className="off rounded-pill py-2 w-100">Create New Account</button>
              
            </div>
          
        </form>
    </>
  )
}