import './Navbar.css'
import CodeOffIcon from '@mui/icons-material/CodeOff';
function Navbar()
{
    return(
  <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid">
    <a className="navbar-brand text-white "  href="#">Caplotex</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link about text-white" href="#">About</a>
        </li>
        
      </ul>
      <form className="d-flex">
      <a href='https://www.linkedin.com/in/abhishek-kumar-singh-3b62b719b/'>
        <button className="btn btnn btn-outline-success text-white " type="submit"><CodeOffIcon />  A</button>
        </a>
      </form>
    </div>
  </div>
</nav>
    )
}

export default Navbar;