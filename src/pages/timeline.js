import React from 'react'
import {
  FaReact,
  FaSchool,
  FaTrophy,
  FaKeyboard,
  FaBuilding,
  FaBook,
  FaLightbulb,
  FaBicycle,
} from 'react-icons/fa'
import { Row, Col } from 'react-bootstrap'
import Title from '../components/title'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

const story = [
  {
    title: 'B.Eng Software Engineering',
    place: '2014-2018, KMITL',
    content:
      'Persue bachelor degree specialize on software implementation and design',
    icon: <FaSchool />,
  },
  {
    title: 'ICM ICPC Central region',
    place: '2015, Forth place',
    content:
      'Team up with 2 members as the representative of the International College on ICM programming competition',
    icon: <FaKeyboard />,
  },
  {
    title: 'Mitsubishi Electric internship',
    place: 'June 2016, Mitsubishi electric R&D center, Japan',
    content:
      '2 months internship on Building energy management system(BEMS) using Python, JQuery, Cassandra',
    icon: <FaBuilding />,
  },
  {
    title: 'Web developer freelance',
    place: '2016-2017',
    content:
      'Create website for data visualization and monitoring using React and main tool',
    icon: <FaReact />,
  },
  {
    title: 'Young innovation award',
    place: '2016-2017, Thailand digital startup competition',
    content:
      'Under the idea of creating comfortable Lidar machine with build in software',
    icon: <FaLightbulb />,
  },
  {
    title: 'Software internship',
    place: 'June 2017, Universität Bundeswehr München',
    content:
      'Research internship on enterprise architecture design using Spark Enterprise Architect',
    icon: <FaBook />,
  },
  {
    title: 'Drone Hackathon Competition',
    place: '2018, First place',
    content:
      'Automatic drone system to detect crocodile crack, podhole on the street of Bangkok',
    icon: <FaTrophy />,
  },
  {
    title: 'Bike sharing system',
    place: '2017-2018, Bike Isara Corp.',
    content:
      'develop new iOS/android Application (native) together with maintenance old system (hybrid)',
    icon: <FaBicycle />,
  },
]

const StoryLine = ({ data }) => (
  <VerticalTimeline>
    {data.map(element => (
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{ background: 'black', color: 'white' }}
        icon={element.icon}
      >
        <h5>{element.title}</h5>
        <h6 style={{ color: 'darkgray' }}>{element.place}</h6>
        <hr />
        <p>{element.content}</p>
      </VerticalTimelineElement>
    ))}
  </VerticalTimeline>
)

const ProfileTimeline = ({}) => (
  <div style={{ backgroundColor: 'rgb(229,229,229)' }}>
    <div
      style={{
        marginLeft: '5vh',
        marginRight: '5vh',
      }}
    >
      <div style={{ paddingTop: '5vh' }}>
        <Title header="EXPERIENCES" title="Timeline" />
      </div>
      <Row>
        <StoryLine data={story} />
      </Row>
    </div>
  </div>
)

export default ProfileTimeline
