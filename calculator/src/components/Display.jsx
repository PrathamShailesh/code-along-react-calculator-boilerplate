import React from 'react'

function Display({inp,val}) {
  return (
    <div className='dis'>
        {inp}
        <br/>
        {val}
    </div>
  )
}

export default Display