import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa'

const Landing = () => (
  <section>
    <div style={styles.jumboContainer}>
      <div style={styles.jumboIntroHeader}>
        <div>
          <h3 style={styles.text.subheader}> Frontend Developer </h3>
          <h1 style={styles.text.fullname}>Patipon Riebpradit </h1>
          <div
            style={{
              display: 'flex',
              marginTop: '2vh',
              width: '30vh',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <FaFacebook color={'white'} size={50} />
            <FaInstagram color={'white'} size={50} />
            <FaTwitter color={'white'} size={50} />
            <FaGithub color={'white'} size={50} />
          </div>
        </div>
      </div>
    </div>
  </section>
)

const styles = {
  jumboContainer: {
    height: '100vh',
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'column wrap',
  },
  jumboIntroHeader: {
    display: 'flex',
    alignSelf: 'flex-end',
    marginBottom: '16vh',
    marginLeft: '16vh',
  },
  icon: {
    color: 'white',
  },
  text: {
    fullname: {
      fontSize: '6vw',
      color: 'white',
    },
    subheader: {
      fontSize: '2vw',
      color: 'darkgray',
    },
  },
}

export default Landing
