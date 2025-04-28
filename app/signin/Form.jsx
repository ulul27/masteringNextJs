import '../../styles/globals.css'

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

     <div className="container">
      <div className="row">
        <div className="col">1</div>
        <div className="col">1</div>
        <div className="col">1</div>
        <div className="col">1</div>
        <div className="col">1</div>
      </div>
     </div>
    
    </>
  )
}