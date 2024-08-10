import React from 'react'

function Button({
    children="Button", //the content displayed on Button
    type="button",
    width="",
    bgColor="bg-black",
    textColor,
    className="",
    ...props
}) {
  return (
    <button className={` p-3 ${bgColor} ${textColor} ${width} ${className} `} {...props}>
        {children}
    </button>
  )
}

export default Button
