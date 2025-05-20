import Image from "next/image"

export default function Post ({gambar, nama, rincian}) {
  return (
    <>
            <div className="col-md-7">
              <div className="card border-light p-1">
                <div className="p-1">
                  <Image
                  // className="mx-0"
                  src={gambar}
                  alt="..."
                  />
                  <span className="fw-bolder pop-20 mx-3">{nama}</span>
                  <p className="pop-20 my-3">{rincian}</p>
                </div>
              </div>
            </div>
              
        </>
  )
}