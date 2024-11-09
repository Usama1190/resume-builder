import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-center p-5 text-gray-600'>
      <div>
        <a href={'/'}>
          <Image
            src="https://www.resumebuilder.com/wp-content/themes/resumebuilder/assets/images/2023/rb-new-logo-color.svg" // Route of the image file
            height={134} // Desired size with correct aspect ratio
            width={134} // Desired size with correct aspect ratio
            alt="Resume Builder Logo"
          />
        </a>
      </div>

      <ul className='flex gap-5 text-[12px] items-center'>
        <li><Link href={'/'} className='hover:bg-gray-100 hover:text-gray-900 rounded-md p-2 transition-all'>Resume Templates</Link></li>
        <li><Link href={'/'} className='hover:bg-gray-100 hover:text-gray-900 rounded-md p-2 transition-all'>Cover Letters</Link></li>
        <li><Link href={'/'} className='hover:bg-gray-100 hover:text-gray-900 rounded-md p-2 transition-all'>Career Center</Link></li>
        <li><Link href={'/'} className='hover:bg-gray-100 hover:text-gray-900 rounded-md p-2 transition-all'>My Account</Link></li>
        <li><button className='border-2 border-[#FD9D60] text-[#A55CD1] hover:bg-[#FD9D60] hover:text-[#ffffff] font-bold transition-all mx-7 px-4 py-2 rounded-md'>Build My Resume</button></li>
       </ul>
    </div>
  )
}

export default Header
