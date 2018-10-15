import React from 'react'
import { Image, Row, Col, Button } from 'react-bootstrap'
import shubu from '../images/shubu.jpg'
import { FaReact, FaMobile, FaMicrochip, FaAndroid } from 'react-icons/fa'
import { Progress } from 'react-sweet-progress'
import 'react-sweet-progress/lib/style.css'
import Title from '../components/title'

const Info = ({ title, content }) => (
  <div
    style={{
      marginLeft: '2vh',
      marginRight: '2vh',
    }}
  >
    <Row>
      <h5>{title}</h5>
    </Row>
    <Row>
      <p style={{ fontSize: 'large', textAlign: 'justify' }}>{content}</p>
    </Row>
  </div>
)

const Skills = ({}) => (
  <Row style={{ marginTop: '2vh' }}>
    <Col sm={3} md={3}>
      <FaReact size={50} />
    </Col>
    <Col sm={3} md={3}>
      <FaMobile size={50} />
    </Col>
    <Col sm={3} md={3}>
      <FaAndroid size={50} />
    </Col>
    <Col sm={3} md={3}>
      <FaMicrochip size={50} />
    </Col>
  </Row>
)

const ProfileDetail = ({ header, context }) => (
  <Row>
    <Row>
      <h5> Fullname </h5>
    </Row>
  </Row>
)

const HeaderProfile = ({}) => (
  <Row style={{ marginLeft: '5vh', marginRight: '5vh' }}>
    <Col sm={12} md={12} lg={6}>
      <div
        style={{
          marginTop: '3vh',
          marginRight: '5vh',
        }}
      >
        <Image src={shubu} thumbnail responsive />
      </div>
    </Col>
    <Col sm={12} md={12} lg={6}>
      <Row style={{ marginTop: '5vh' }}>
        <h5> About me </h5>
      </Row>
      <Row>
        <p>
          Young new graduated software developer experienced working in Thailand
          software industry. Skilled in mobile application and web application
          development.
        </p>
      </Row>
      <Row>
        <h5> Interest </h5>
      </Row>
      <Row>
        <p>Distributed system, Mobile technology, Embedded system</p>
      </Row>
      <Row>
        <Button
          href="https://drive.google.com/file/d/1BYhV-CFd8pZDCQ3XMUUbtyTUwkmDK7oB/view?usp=sharing"
          style={{
            marginBottom: '2vh',
            color: 'black',
            backgroundColor: 'lightgray',
            borderColor: 'darkgray',
          }}
          block
        >
          Download Resume
        </Button>
      </Row>
    </Col>
  </Row>
)

const progressTheme = {
  success: {
    symbol: '🤘',
    color: 'darkgreen',
  },
  active: {
    symbol: '👍',
    color: 'orange',
  },
  error: {
    symbol: '👌',
    color: 'brown',
  },
}

const Intro = () => (
  <div style={{ marginTop: '6vh', display: 'flex', flexDirection: 'column' }}>
    <Title header="ABOUT" title="Patipon Riebpradit" />
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ maxWidth: '100vh' }}>
        <HeaderProfile />
        <Row style={{ marginLeft: '5vh', marginRight: '5vh' }}>
          <Col md={12} lg={6}>
            <Row>
              <h4> Profile</h4>
            </Row>
            <Row>
              <p> Lorem ipsum Exercitation culpa qui</p>
            </Row>

            <Row style={{ marginTop: '1vh' }}>
              <h6> Fullname:</h6>
            </Row>
            <Row>
              <p style={{ color: 'rgb(60,60,60)' }}> Patipon Riebpradit</p>
            </Row>
            <Row>
              <h6> Birth Date:</h6>
            </Row>
            <Row>
              <p style={{ color: 'rgb(60,60,60)' }}> June 9, 1996</p>
            </Row>
            <Row>
              <h6> Degree:</h6>
            </Row>
            <Row>
              <p style={{ color: 'rgb(60,60,60)' }}>
                B.Eng Software Engineering, KMITL
              </p>
            </Row>
            <Row>
              <h6> Email:</h6>
            </Row>
            <Row>
              <p style={{ color: 'rgb(60,60,60)' }}>patipon74@gmail.com</p>
            </Row>
          </Col>
          <Col md={12} lg={6}>
            <Row>
              <h4> Skills </h4>
            </Row>
            <Skills />
            <Row style={{ marginTop: '3vh' }}>
              <h6> Web : React, JQuery </h6>
              <Progress percent={70} status="active" theme={progressTheme} />
            </Row>
            <Row style={{ marginTop: '1vh' }}>
              <h6> Hybird : React Native </h6>
              <Progress percent={100} status="success" theme={progressTheme} />
            </Row>
            <Row style={{ marginTop: '1vh' }}>
              <h6> Mobile : iOS, Android </h6>
              <Progress percent={100} status="success" theme={progressTheme} />
            </Row>
            <Row style={{ marginTop: '1vh' }}>
              <h6> Embedded : ARM Cortex </h6>
              <Progress percent={50} status="error" theme={progressTheme} />
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  </div>
)

const Profile = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      marginTop: '2vh',
      marginBottom: '3vh',
      marginLeft: '2vh',
      marginRight: '2vh',
    }}
  >
    <Intro />
  </div>
)

export default Profile
