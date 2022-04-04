import React from 'react'
interface Props {
  items: Array<string>
}
const OptionsMenu: React.FC<Props> = ({ items }) => {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {items.map((item) => (
        <div
          className="min-w-[60px] cursor-pointer rounded-md border p-1 py-2 text-center"
          key={item}
        >
          {item}
        </div>
      ))}
    </div>
  )
}

export default OptionsMenu
