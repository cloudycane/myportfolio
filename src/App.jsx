
import './App.css'
import Navbar from './intro'

function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

export default function MyApp() {
  return (
    <>
      <nav>
      <center><img src='../img/home.png' className='nav1' /><img src='../img/projects.png' className='nav2'/><img src='../img/blogs.png' className='nav3' /></center>
      </nav>
    </>
  );
}

