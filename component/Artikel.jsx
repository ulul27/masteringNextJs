'use client'

import {useEffect, useState} from 'react'
import Image from 'next/image'
import {googleSheets} from '../lib/googleSheet'

export default function Artikel() {
    const [articles, setArticles] = useState([])
    

    useEffect(() => {
      async function fetchData() {
        try {
          // Jika Anda ingin menggunakan Google Sheets, uncomment baris di bawah
          const data = await googleSheets();
          // console.log('data', data);
          // console.log('image', data[0].title)

          setArticles(data)
          
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
      
      fetchData();
    }, [])

  return (
      <>
        {articles.map(value => (
          <div key={value.id} className="col-md-4 mb-4">
            <div className="card custom-border p-2">
              <div className="p-4">
                <div className="position-relative" style={{ width: '100%', height: '200px' }}>
                  <Image 
                    src={value.image} 
                    fill
                    objectFit='cover'                    
                    alt={value.title || "Article image"}
                  />
                </div>
              </div>
              <div className="card-body">
                <p className="card-text fw-bolder pop-18">{value.title}</p>
                <p className="card-text pop-16">{value.medium}</p>
              </div>
            </div>
          </div>
        ))}
      </>
  )
}