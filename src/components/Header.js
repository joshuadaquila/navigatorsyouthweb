import aylogo from '../resources/AY_Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRss, faBullhorn, faCalendar } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

const Header= () => {
  return(
    <div className="grid grid-cols-2  gap-2 p-3 shadow-lg" style={{gridTemplateColumns: '1fr 2fr'}}>

      <div className='grid grid-cols-1 justify-center items-center'>
        <img className='w-28' src={aylogo} alt='AY Logo'></img>
          <p className='text-xs ml-2'>Navigators MNA</p>
          <p className='text-xs ml-2'>Youth Department</p>
      </div>

      
      <div className='flex justify-center items-center mr-4'>
        <nav>
          <ul className='grid grid-cols-3' style={{gridTemplateColumns: '1fr 2fr 1fr'}}>
            <li><Link className='headerlink flex flex-col justify-center items-center' to='/'>
              <FontAwesomeIcon icon={faRss} className='m-2'/>Feed</Link></li>
            <li><Link className='headerlink flex flex-col justify-center items-center' to='/announcement'>
              <FontAwesomeIcon icon={faBullhorn} className='m-2'/>Announcement</Link></li>
            <li><Link className='headerlink flex flex-col justify-center items-center' to='/events'>
              <FontAwesomeIcon icon={faCalendar} className='m-2'/>Events</Link></li>
          </ul>
        </nav>
      </div>
    </div>

  )
}

export default Header;