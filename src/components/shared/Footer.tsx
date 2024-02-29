import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t bg-black">
      <div className="wrapper flex-center flex-between flexCol gap-4 p-5 sm:flex-row">
        <Link href="/">
          <Image src="/assets/images/logo-nbg.png" alt="logo" width={120} height={0} />
        </Link>
        <p>@2024 DDP, All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer
