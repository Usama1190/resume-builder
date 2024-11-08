import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='flex border-2 border-b-gray-200 justify-between px-5 py-3 text-gray-600'>
      <div>
        <a href={'/'}>
          <Image
            src="https://www.resumebuilder.com/wp-content/themes/resumebuilder/assets/images/2023/rb-new-logo-color.svg" // Route of the image file
            height={144} // Desired size with correct aspect ratio
            width={144} // Desired size with correct aspect ratio
            alt="Your Name"
          />
        </a>
      </div>

      <ul className='flex gap-5 '>
        <li><Link href={'/'} className='hover:bg-gray-100 hover:text-gray-900 rounded-md p-2 transition-all'>Resume Templates</Link></li>
        <li><Link href={'/'} className='hover:bg-gray-100 hover:text-gray-900 rounded-md p-2 transition-all'>Cover Letters</Link></li>
        <li><Link href={'/'} className='hover:bg-gray-100 hover:text-gray-900 rounded-md p-2 transition-all'>About</Link></li>
        <li><Link href={'/'} className='hover:bg-gray-100 hover:text-gray-900 rounded-md p-2 transition-all'>Contact</Link></li>
        <li><button className='border-2 border-gray-600 text-red-950 px-7'>SignUp</button></li>
       </ul>
    </div>
  )
}

export default Header
