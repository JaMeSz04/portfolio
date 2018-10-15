import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import Landing from './landing'
import Profile from './profile'
import ProfileTimeline from './timeline'
import SkillSet from './skill'

const IndexPage = () => (
  <div>
    <section>
      <Landing />
    </section>
    <section>
      <Profile />
    </section>
    <section>
      <ProfileTimeline />
    </section>
    <section>
      <SkillSet />
    </section>
  </div>
)

export default IndexPage
