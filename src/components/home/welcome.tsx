import React from 'react'
import Title from './title'

const welcome = () => {
  return (
    <section>
      <Title>Welcome to the bigest one-stop dance academy in Bogor City</Title>
      <div className="flex gap-5">
        <p>
          Since 2011, RockStar Academy has been a trusted partner for parents of more than 50,000
          kids & teens in Indonesia, from 6 months to 18 years old, providing opportunities for
          children in this 21st Century Environment to have sufficient physical activities in a safe
          environment and to experience a rounded and balanced growth
        </p>
        <p>
          With over 120 classes per week and more than 20 events and competitions to participate in
          throughout the year, RockStar Academy offers a full range of physical activities, from
          sports to performing arts, allowing our students to establish a healthy lifestyle from
          early age, explore their talents, reach their full potentials, and develop an essential
          qualities required to become Future Life Champions.
        </p>
      </div>
    </section>
  )
}

export default welcome
