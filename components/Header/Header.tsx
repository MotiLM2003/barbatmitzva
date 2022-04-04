import React from 'react'
import Image from 'next/image'
import Input from 'components/Input/Input'
import OptionsMenu from 'components/OptionsMenu'
const Header = () => {
  return (
    <header className="default-container  p4-4 border-b p-6 ">
      <div className="items-ce flex items-center justify-between">
        <div>
          <Input placeholder="חפש משהו..." />
        </div>
        <div className="pr-5 md:p-0">
          <Image
            src="/logo.png"
            width="279px"
            height="49px"
            placeholder="blur"
            blurDataURL="data:,Hello%2C%20World%21"
          />
        </div>
      </div>
    </header>
  )
}

export default Header
