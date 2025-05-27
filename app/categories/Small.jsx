import Image from 'next/image'


export default function Small ({gambar}) {
  return (
    <>
    <div className="col-md-3">
      <Image src={gambar} alt="..."/>

    </div>
    </>
  )
}