import React from 'react'
import FirstData from './FirstData'
function Data({r}) {
  return (
    <div>
    {console.log(r)}
    <div><FirstData r={r}/></div>
    </div>
  )
}

export default Data