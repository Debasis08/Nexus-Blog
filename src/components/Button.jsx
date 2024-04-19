import React from 'react'

export default function Button({
    children,
    type = 'button',
    bgColor = 'bg-greyish hover:bg-sky',
    textSize = 'text-xl',
    textColor = 'text-sky hover:text-greyish',
    border = 'border-2 border-sky',
    className = '',
    ...props
}) {
  return (
    <button className= {`px-4 py-2 focus:shadow-inner shadow-theme-400 rounded-2xl ${border} ${className} ${textSize} ${bgColor} ${textColor}`} {...props}>
      {children}
    </button>
  )
}
