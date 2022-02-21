import React from 'react'
import logo from '../images/logo.svg'
import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'
import instagram from '../images/icon-instagram.svg'
import pinterest from '../images/icon-pinterest.svg'
const Footer = () => {
  return (
    <>
      <footer className='footer'>
        <div>
          <div className='logo'>
            <img src={logo} />
          </div>
          <ul>
            <li><button>About</button></li>
            <li><button>Careers</button></li>
            <li><button>Events</button></li>
            <li><button>Products</button></li>
            <li><button>Support</button></li>
          </ul>
        </div>
        <div>
          <ul className='social'>
            <li><img src={facebook} /></li>
            <li><img src={twitter} /></li>
            <li><img src={instagram} /></li>
            <li><img src={pinterest} /></li>
          </ul>
          <div className="copyright">
            &copy; 2021 Loopstudios. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
