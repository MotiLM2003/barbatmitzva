import React from 'react'

interface Props {
  // place holder for the text input
  placeholder: string
}

const Input: React.FC<Props> = ({ placeholder }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className=" animate-500  w-[120px] origin-center rounded-md border border-shades-300 p-2 text-right text-xs outline-none  drop-shadow-md   focus:w-[220px] focus:border-primary-400"
    />
  )
}

export default Input
