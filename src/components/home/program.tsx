import { GetServerSideProps } from 'next'
import Title from './title'
import React from 'react'

interface ProgramsPageProps {
  data: {
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl: string
  }[]
}

const program = ({ data }: ProgramsPageProps) => {
  return (
    <section>
      <Title>Our Programs</Title>
      <p>
        Learning at RockStar Academy is facilitated by professional & qualified instructors, both
        Indonesians and expatriates from all over the world, supported with International
        Curriculums, state-of-the-art facility & equipment, and superior Information Technology
        System to track every student’s progress and report and is conducted in a safe &
        high-standard learning environment.
      </p>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.url} </li>
        ))}
      </ul>
    </section>
  )
}

export default program
