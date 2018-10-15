import React from 'react'
import Title from '../components/title'
import { Progress } from 'react-sweet-progress'
import { FaJs, FaAppStoreIos, FaAndroid, FaToolbox } from 'react-icons/fa'

const SkillSet = ({}) => (
  <div>
    <div
      style={{
        marginTop: '5vh',
        marginLeft: '5vh',
        marginRight: '5vh',
        height: '80vh',
        textAlign: 'center',
      }}
    >
      <Title header="SKILLS" title="In detail" />
      <div
        style={{ display: 'inline-block', marginTop: '5vh', minWidth: '70vw' }}
      >
        <div
          style={{
            display: 'flex',
            flexFlow: 'row wrap',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <FaAppStoreIos style={{ alignSelf: 'center' }} size="8vw" />
            <h4> iOS </h4>
            <p style={{ marginTop: '2vh' }}>
              <strong>Swift, Objective C</strong>
              <br />
              RxSwift
              <br />
              Material Design
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <FaJs style={{ alignSelf: 'center' }} size="8vw" />
            <h4> Web </h4>
            <p style={{ marginTop: '2vh' }}>
              <strong>React, React Native</strong>
              <br />
              Redux, Mobx
              <br />
              JQuery
              <br />
              ES6+
              <br />
              Bootstrap, Bulma
              <br />
              Material Design
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <FaAndroid style={{ alignSelf: 'center' }} size="8vw" />
            <h4> Android </h4>
            <p style={{ marginTop: '2vh' }}>
              <strong>Java, Kotlin</strong>
              <br />
              RxJava, RxAndroid
              <br />
              Dagger, Retrofit
              <br />
              Material Design
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <FaToolbox style={{ alignSelf: 'center' }} size="8vw" />
            <h4> Tools </h4>
            <p style={{ marginTop: '2vh' }}>
              <strong>Git</strong>
              <br />
              BitBucket, Gitlab
              <br />
              Jenkins
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default SkillSet
