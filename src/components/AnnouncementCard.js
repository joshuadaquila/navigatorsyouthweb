import Carousel from "./Carousel";
import profilepic from '../resources/profilepic.jpg'

const AnnouncementCard = () =>{
  return(
    <div className="flex bg-green mt-3 p-2 rounded-md shadow-lg border-2">
      <div className="flex flex-col flex-1 mr-2">

        <div className="flex">
          <div className="p-2">
            <img src={profilepic} alt="profilepic" className="border-2 w-16 h-16 rounded-full"/>
          </div>
          <div className="bg-white flex flex-1 items-center">
            <div>
              <h4 className="m-0 font-bold">Joshua Daquila</h4>
              <p className="m-0 text-xs">February 5, 2024</p>
            </div>

          </div>
        </div>

        <div className="p-4">
          <div className="text-center">
            <h1 className="font-bold">Announcement 24001</h1>

          </div>
          <div className="flex">
            <h1 className="font-bold">WHAT:</h1><p className="ml-4">True Love Waits Season 7</p>
          </div>

          <div className="flex">
            <h1 className="font-bold">WHO:</h1><p className="ml-4">All SA2SA Youth</p>
          </div>

          <div className="flex">
            <h1 className="font-bold">WHEN:</h1><p className="ml-4">February 17-18, 2024</p>
          </div>

          <div className="flex">
            <h1 className="font-bold">WHERE:</h1><p className="ml-4">Pis-anan SDA Church, Pis-anan, Sibalom, Antique</p>
          </div>

          <div>
            <p></p>
          </div>

          <div>

          </div>
        </div>

      </div>
    </div>
  )
}
export default AnnouncementCard;