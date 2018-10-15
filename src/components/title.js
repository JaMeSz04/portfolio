import React from 'react'

const Title = ({ header, title }) => (
     <div
       style={{
         display: 'flex',
         flexDirection: 'column',
       }}
     >
       <h5 style={{ textAlign: 'center' }}> {header} </h5>
       <h1 style={{ textAlign: 'center' }}> {title} </h1>
     </div>
   )

export default Title