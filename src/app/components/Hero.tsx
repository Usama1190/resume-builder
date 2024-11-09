'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div className='flex'>
      <a href={'/'}>
          <Image
            src="https://www.resumebuilder.com/wp-content/themes/resumebuilder/assets/images/2023/rb-new-logo-color.svg" // Route of the image file
            height={134} // Desired size with correct aspect ratio
            width={134} // Desired size with correct aspect ratio
            alt="Resume Image"
          />
        </a>
      <div>
        <Link href={'/build-cv'}>Create my resume</Link>
      </div>
    </div>
  )
}

export default Hero
