import React from 'react'

function Button({
    children="Button", //the content displayed on Button
    type="button",
    width="w-24",
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
