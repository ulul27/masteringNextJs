import Image from 'next/image'
import Cek from '../../asseets/img/Group36.png'

export default function Featur ({nama, gambar}) {
  return (
    <>
  
          <ul className="list-unstyled">
            <li className="">{nama}
              <Image
              src={gambar}
              alt="..."/>
            </li>
            {/* <Image
            src={Cek}
            alt="..."/> */}
          </ul>
    
    </>
  )
}
