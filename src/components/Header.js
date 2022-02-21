import logo from '../images/logo.svg'
// import hamburger from '../images/icon-hamburger.svg'
// import close from '../images/icon-close.svg'
const Header = () => {
  const menuHandler = (e) => {
    const navbar = document.querySelector('nav')
    e.target.classList.contains('closed') && e.target.classList.toggle('opened')
    navbar.classList.toggle('open')
  }
  return (
    <>
      <header className='header'>
        <div className='logo'>
          <img src={logo} alt='loopstudios' />
        </div>
        <nav>
          <ul>
            <li><button>About</button></li>
            <li><button>Careers</button></li>
            <li><button>Events</button></li>
            <li><button>Products</button></li>
            <li><button>Support</button></li>
          </ul>
        </nav>

        <div className='menu-btn'>
          <div className='image closed' onClick={menuHandler}>

          </div>
        </div>
      </header>
    </>
  )
}

export default Header
