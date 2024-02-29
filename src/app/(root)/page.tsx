import { GetServerSideProps } from 'next'

import WelcomeSection from '../../components/home/welcome'
import ProgramSection from '../../components/home/program'

export default function Home() {
  return (
    <>
      <div className="wrapper flex flex-col gap-24 p-5 h-screen ">
        <WelcomeSection />
        <ProgramSection />
      </div>
    </>
  )
}
