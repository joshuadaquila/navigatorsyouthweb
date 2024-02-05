import Carousel from "./Carousel";
import profilepic from '../resources/profilepic.jpg'

const Feed = () =>{
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
              <p className="m-0 text-xs">December 12, 2023</p>
            </div>

          </div>
        </div>

        <div className="p-4">
          <p>Welcome to the official website of Navigators Mini-Association Youth Department!

Thank you for visiting. We're excited to bring you updates, announcements, and events right here.

Please Note: Our website is currently under development. We appreciate your patience as we work to create the best experience for you.

Stay tuned for more updates coming soon!
          </p>
        </div>

      </div>
    </div>
  )
}
export default Feed;