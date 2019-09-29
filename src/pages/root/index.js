import React from 'react'
import team1Image from '../../images/team1.png'
import team2Image from '../../images/team2.png'
import team3Image from '../../images/team3.png'
import team4Image from '../../images/team4.png'
import team5Image from '../../images/team5.png'
import team6Image from '../../images/team6.png'
import team7Image from '../../images/team7.png'
import team8Image from '../../images/team8.png'
import judgitImage from '../../images/judgit.png'
import housingImage from '../../images/housing.png'
import egridImage from '../../images/egrid.png'
import twitterLocationImage from '../../images/twitter-location.png'
import egraphImage from '../../images/egraph.png'
import egrendererImage from '../../images/egrenderer.png'
import wamsimImage from '../../images/wamsim.png'
import influencerImage from '../../images/twitter-analysis2018.png'
import rankingImage from '../../images/influencer-ranking.png'
import cypherImage from '../../images/cypher-viewer.png'
import vdslabImage from '../../images/vdslab.png'
import isemImage from '../../images/isem.png'

const Card = ({ image, url }) => {
  return (
    <div className='column is-3'>
      <div className='card'>
        <div className='card-image'>
          <figure className='image'>
            <a href={url} target='_blank' rel='noopener'>
              <img src={image} alt='judgit' />
            </a>
          </figure>
        </div>
      </div>
    </div>
  )
}

const RootPage = () => {
  return (
    <>
      <section
        className='hero is-primary'
        style={{ backgroundColor: 'rgb(32, 88, 90)' }}
      >
        <div className='hero-body'>
          <div className='container'>
            <h1 className='title has-text-centered'>
              2019秋季オープンキャンパス
            </h1>
            <h2 className='subtitle has-text-centered'>
              日本大学文理学部情報科学科 尾上研究室
            </h2>
          </div>
        </div>
      </section>
      <section className='section'>
        <div className='columns is-multiline is-vcentered'>
          <Card
            image={team1Image}
            url='https://codepen.io/tsubasa_0111/full/vqrwYd'
          />
          <Card
            image={team2Image}
            url='https://codepen.io/sawa38/full/KOzEoZ'
          />
          <Card
            image={team3Image}
            url='https://codepen.io/Arasou-0206/full/ZgEbyO'
          />
          <Card image={team4Image} url='https://codepen.io/HRMC/full/RzmpNp' />
          <Card
            image={team5Image}
            url='https://codepen.io/EntranceExit/full/RXgQmr'
          />
          <Card
            image={team6Image}
            url='https://codepen.io/t_taiki/full/KOMQVO'
          />
          <Card image={team7Image} url='https://codepen.io/syuku/full/aevBLR' />
          <Card image={team8Image} url='' />
          <Card image={vdslabImage} url='https://vdslab.jp' />
          <Card image={judgitImage} url='https://judgit.net' />
          <Card image={wamsimImage} url='https://wamsim.vdslab.jp' />
          <Card image={egridImage} url='https://egrid.jp' />
          <Card
            image={egraphImage}
            url='https://egraph.likr-lab.com/group-in-a-box'
          />
          <Card
            image={egrendererImage}
            url='https://likr.github.io/eg-renderer/demos/eg-renderer/'
          />
          <Card
            image={cypherImage}
            url='https://likr.github.io/cypher-viewer/'
          />
          <Card
            image={influencerImage}
            url='https://likr.github.io/twitter-analysis2018/'
          />
          <Card
            image={housingImage}
            url='https://unruffled-brattain-c007a3.netlify.com/'
          />
          <Card
            image={rankingImage}
            url='https://likr.github.io/influencer-ranking/'
          />
          <Card
            image={twitterLocationImage}
            url='https://codepen.io/HRMC/full/bPJNLJ'
          />
          <Card image={isemImage} url='https://isem.likr-lab.com/' />
        </div>
      </section>
      <section className='footer'>
        <div className='content has-text-centered'>
          <p>&copy; 2019 vdslab</p>
        </div>
      </section>
    </>
  )
}

export default RootPage
