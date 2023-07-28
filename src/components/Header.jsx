const Header = () => {
    return (
      <header>
        <nav>
          <a href="https://google.com">Google</a><br/>
          <a href="https://facebook.com">FaceBook</a><br/>
          <a href="https://LinkedIn.com">LinkedIn</a>
        </nav>
        <label>Username</label>
        <input placeholder="Username"/><br/>
        <label>Password</label>
        <input placeholder="Password"/><br/>
        <button>Submit</button>
      </header>   
    )
}

export default Header