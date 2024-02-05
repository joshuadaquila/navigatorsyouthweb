import Carousel from "../components/Carousel";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import AnnouncementCard from "../components/AnnouncementCard";

const Announcement = () => {
  return(
    <div className='flex flex-col justify-center items-center'>
      <div className="mt-4"  style={{width: '90%'}}>
        <Carousel/>
        <AnnouncementCard/>
      </div>
    </div>
  );
}
export default Announcement;