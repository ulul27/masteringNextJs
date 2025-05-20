import Image from 'next/image'

export default function Case ({gambar, item}) {
  return (
    <>
      <div className="col-md-4">
        <div className="card custom-border my-4">
          <div className="p-3">
            <Image src={gambar} className="card-img-top" alt="..."/>
          </div>

          <div className="card-body">
            <p className="card-text pop-18 fw-bold">{item}</p>
          </div>
        </div>
      </div>
    </>
  )
}