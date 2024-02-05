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
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
        </div>

      </div>
    </div>
  )
}
export default Feed;