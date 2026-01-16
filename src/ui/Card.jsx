import React from 'react'

function Card({children, className = "", ...props}) {
  return (
    <div className={`rounded-lg border border-border ${className}`}
    {...props}>
        {children}
    </div>
  )
}

export default Card
