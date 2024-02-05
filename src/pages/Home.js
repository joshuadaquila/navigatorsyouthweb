import Carousel from "../components/Carousel";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return(
    <div className='flex flex-col justify-center items-center'>
      <div className="mt-4"  style={{width: '90%'}}>
        <Carousel/>
        <Feed/>
      </div>
    </div>
  );
}
export default Home;