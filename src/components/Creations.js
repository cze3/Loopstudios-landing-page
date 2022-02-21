import React from 'react'
import img1 from '../images/mobile/image-deep-earth.jpg'
import img2 from '../images/mobile/image-night-arcade.jpg'
import img3 from '../images/mobile/image-soccer-team.jpg'
import img4 from '../images/mobile/image-grid.jpg'
import img5 from '../images/mobile/image-from-above.jpg'
import img6 from '../images/mobile/image-pocket-borealis.jpg'
import img7 from '../images/mobile/image-curiosity.jpg'
import img8 from '../images/mobile/image-fisheye.jpg'

const Creations = () => {
  return (
    <>
      <section className='creations-mobile'>
        <div className='title'>
          <h2>Our creations</h2>
        </div>  
        <section>
          <article>
            <div>
              <img src={img1} />
            </div>
            <h3>Deep <br /> earth</h3>
          </article>
          <article>
            <div>
              <img src={img2} />
            </div>
            <h3>Night arcade</h3>
          </article>
          <article>
            <div>
              <img src={img3} />
            </div>
            <h3>Soccer team</h3>
          </article>
          <article>
            <div>
              <img src={img4} />
            </div>
            <h3>The grid</h3>
          </article>
          <article>
            <div>
              <img src={img5} />
            </div>
            <h3>From up above vr</h3>
          </article>
          <article>
            <div>
              <img src={img6} />
            </div>
            <h3>Pocket borealis</h3>
          </article>
          <article>
            <div>
              <img src={img7} />
            </div>
            <h3>The curiosity</h3>
          </article>
          <article>
            <div>
              <img src={img8} />
            </div>
            <h3>Make it fisheye</h3>
          </article>
        </section>
        <div className='btn-container'>
          <button className='btn'>
            See All
          </button>
        </div>
      </section>
    </>
  )
}

export default Creations
