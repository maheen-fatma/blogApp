import React, { useId } from 'react'

function Input({
    label,
    type="text",
    className="",
    ...props
}, ref
) {
    const id= useId()
  return (
    <div>
      {
        label &&  //if label exists
        <label htmlFor={id}>
            {label}
        </label>
      }
      <input 
        type={type}
        className={`${className} `}
        {...props}
        id={id}
        ref={ref} //reference taken from the user where this component is called is used here
      />
    </div>
  )
}

export default React.forwardRef(Input)
