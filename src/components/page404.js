import React from 'react'
import Page404Image from './assets/page404.svg'
export default function Page404 () {
    return (
     <>
     
     <div className="page404Screen" style={{display:'flex', justifyContent:'center'}}>
        <img src={Page404Image} style={{maxWidth:'100%',height: 'calc(100vh - 100px)'}} />
     </div>
     </>
    )
  
}
