import '../../styles/globals.css'
import Image from 'next/image'
import Cek from '../../asseets/img/Group36.png'

export default function Price ({harga,pilihan,kategori,items, colorButton}) {
  console.log(items)
  return (
    <>
    <div className="col-md-4">
      <div className="card custom-border p-2">
        <h1 className="pop-42 my-3 mx-3">{harga} <span className="pop-20">/month</span></h1>
        <h3 className="pop-18 my-0 mx-3">{pilihan}</h3>
        <p className="pop-16 mb-3 mx-3">{kategori}</p>

        <ul className="list-unstyled mx-3">
          {items.map((item, index) => (
          <li className="my-3" key={index}>
          <Image
          className="me-2"
          src={Cek}
          alt="..."
          />{item}</li>
          ))}
        </ul>

        <button className={`${colorButton} rounded-pill`}>Checkout Now</button>
      </div>
    </div>
    </>
  )
}