'use client'

import { useEffect, useState } from "react"
import Image from 'next/image'
import { googleSheets } from "../lib/googleSheet"

export default function Portfolio() {
  const [portfolio, setPortfolio] = useState([])
  // console.log("ini portfolio", portfolio)

  useEffect(() => {
      async function fetchData() {
        try {
          const data = await googleSheets("portfolio");
          console.log("ini portfolio 2", data)
          setArticles(data)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
      
      fetchData();
    }, [])

  return (
    <>
    {portfolio.map(value => (
      <div className="col-md-4 mb-4">
        {console.log("ini harusnya portfolio",value)}
        <div className="card custom-border p-2">
          <div className="p-4">
            <div className="position-relative" style={{ width: '100%', height: '200px' }}>
              {/* <Image 
                src={value.image} 
                fill
                objectFit='cover'                    
                alt={value.title || "Article image"}
              /> */}
            </div>
          </div>
          <div className="card-body">
            <p className="card-text fw-bolder pop-18"></p>
            <p className="card-text pop-16"></p>
          </div>
        </div>
      </div>
    ))}
   
  </>
  )
}