import React from 'react'
import Head from './head'
import Header from './header'
import './css/about.css'

const About = () => {
  return (
    <div className="body">
      <Head title="Hello" />
      <Header />
      <div className="item">
        <div className="chil">
          <div className="textComponent">Component 1</div>
          <div className="textParagraf">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse hic blanditiis facilis
            eaque? Ad adipisci soluta, nihil sequi tenetur rerum, nemo laudantium minus quis ab
            delectus debitis quisquam dignissimos vitae.
          </div>
        </div>

        <div className="chil2">
          <div className="textComponent">Component 2</div>
        </div>

        <div className="chil">
          <div className="textComponent">Component 3</div>
          <div className="textParagraf">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse hic blanditiis facilis
            eaque? Ad adipisci soluta, nihil sequi tenetur rerum, nemo laudantium minus quis ab
            delectus debitis quisquam dignissimos vitae.
          </div>
        </div>
      </div>

    </div>
  )
}

About.propTypes = {}

export default React.memo(About)
