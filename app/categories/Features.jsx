import Image from 'next/image'
import Cek from '../../asseets/img/Group36.png'

export default function Featur ({nama}) {
  return (
    <>
        
          <ul className="list-unstyled">
            <li className="d-flex justify-content-between">{nama}
              {/* <Image
              src={gambar}
              alt="..."/>
            </li> */}
            <Image
            src={Cek}
            alt="..."/>
            </li>
          </ul>
        
    
    </>
  )
}
