import Image from 'next/image'
import Cate11 from '../../asseets/img/Cat11.png'

export default function Categories () {
  return (
    <>
      <div className="">
        <Image 
        className="img-fluid w-100"
        src={Cate11}
        alt=""/>
      </div>
      
     </>
  )
}