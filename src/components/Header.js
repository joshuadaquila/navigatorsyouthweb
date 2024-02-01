import aylogo from '../resources/AY_Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRss, faBullhorn, faCalendar } from '@fortawesome/free-solid-svg-icons'

const Header= () => {
  return(
    <div className="flex p-3 shadow-lg">

      <div className='flex'>
        <img className='w-28' src={aylogo} alt='AY Logo'></img>
        <div className='flex flex-col justify-center ml-2'>
          <h3 className='truncate w-full'>Navigators Mini-Association</h3>
          <h3 className='truncate w-full'>Youth Department</h3>
        </div>
      </div>

      
      <div className='flex flex-1 justify-center items-center'>
        <nav>
          <ul className='flex space-x-10 justify-center items-center'>
            <li><a className='headerlink flex justify-center items-center' href='#'>
              <FontAwesomeIcon icon={faRss} className='m-2'/>Feed</a></li>
            <li><a className='headerlink flex justify-center items-center' href='#'>
              <FontAwesomeIcon icon={faBullhorn} className='m-2'/>Announcement</a></li>
            <li><a className='headerlink flex justify-center items-center' href='#'>
              <FontAwesomeIcon icon={faCalendar} className='m-2'/>Events</a></li>
          </ul>
        </nav>
      </div>
    </div>

  )
}

export default Header;