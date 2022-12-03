import React from 'react'
import './Header/style.css'


const Header = () => {
  return (
    <>
    <div className='header'>
      <div className='logo'>
        <h1>QuizVerse</h1>
      </div>

      <div className='menu'>
        <nav>
          <a href="#">Let's Learn</a>
          <a href="#">Help Us</a>
          <a href="#">About</a>
        </nav>
      </div>

      <div className="account">
        <button>SignIn</button>
        <button>SignUp</button>
      </div>
    </div>
    
    </>
  )
}

export default Header