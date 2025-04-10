import Image from "next/image"

export default function Fiture ({gambar, nama, rincian}) {
  return (
    <>
                <div className="col-md-3">
              <div className="card border-light p-2">
                <div className="p-4">
                  <Image
                  className="mx-2"
                  src={gambar}
                  alt="..."
                  />
                  <span className="fw-bolder pop-20">{nama}</span>
                  <p className="pop-20">{rincian}</p>
                </div>
              </div>
            </div>
              
        </>
  )
}