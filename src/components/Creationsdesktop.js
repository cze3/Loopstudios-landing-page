import React from 'react'
import img1 from '../images/desktop/image-deep-earth.jpg'
import img2 from '../images/desktop/image-night-arcade.jpg'
import img3 from '../images/desktop/image-soccer-team.jpg'
import img4 from '../images/desktop/image-grid.jpg'
import img5 from '../images/desktop/image-from-above.jpg'
import img6 from '../images/desktop/image-pocket-borealis.jpg'
import img7 from '../images/desktop/image-curiosity.jpg'
import img8 from '../images/desktop/image-fisheye.jpg'

const Creationsdesktop = () => {
  return (
    <>
      <section className='creations-desktop'>
        <div className='title'>
          <h2>Our creations</h2>
          <div className='btn-container'>
            <button className='btn'>
              See All
            </button>
          </div>
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
      </section>
    </>
  )
}

export default Creationsdesktop
