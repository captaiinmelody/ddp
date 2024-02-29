import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import NavItems from './NavItems'
import MobileNav from './MobileNav'
import CTA from './cta'

const Header = () => (
  <header className="w-full border-b bg-black text-white">
    <div className="border-b">
      <div className="wrapper flex-between">
        <div className="flex">
          <Button variant={'link'} className="text-white p-bold-20">
            EN
          </Button>
          <span className="mt-2">|</span>
          <Button variant={'link'} className="text-white p-small-20">
            ID
          </Button>
        </div>
        <div className="flex gap-5">
          <Link href={''}>a</Link>
          <Link href={''}>a</Link>
          <Link href={''}>a</Link>
          <Link href={''}>Contact Us</Link>
        </div>
      </div>
    </div>
    <div className="border-b sticky top-0">
      <div className="wrapper flex-between p-8">
        <div className="min-w-36">
          <Link href="/">
            <Image src="/assets/images/logo-nbg.png" alt="logo" width={120} height={38} />
          </Link>
        </div>

        <nav className="md:flex hidden">
          <NavItems />
        </nav>
        <div className="hidden md:block">
          <CTA />
        </div>

        <MobileNav />
      </div>
    </div>
  </header>
)

export default Header
