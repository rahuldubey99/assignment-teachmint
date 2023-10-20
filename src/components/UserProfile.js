import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

// style
import "../styles/UserProfile.css";

// Services Imports
import { getUser, getUserPosts , getClockData , getCountryList } from "../services/users";
import UsersCard from "./UserCard";
import PostCard from "./PostCard";
import Clock from "./Clock";
import CountryDropDown from "./CountryDropDown";

const UserProfile = () => {
  const { userId } = useParams();

  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [clockData, setClockData] = useState(null);
  const [clockRunning, setClockRunning] = useState(true);
  const [countryList, setcountryList] = useState([])
  const [selected_country, set_selected_country] = useState()

  useEffect(() => {
    console.log(userId);
    getUser(userId)
      .then((data) => setUser(data))
      .catch((error) => console.error(error));

    getUserPosts(userId)
      .then((data) => setPosts(data))
      .catch((error) => console.error(error));



    // Fetch clock data and start the clock
    // Ensure clockData contains the required information (e.g., area, location, region)

   
    getCountryList().then((data) => setcountryList(data));

  }, [userId]);

  useEffect(()=>{
    console.log(selected_country);
    if(selected_country){

    getClockData(selected_country).then((data) => setClockData(data));
    }
  },[selected_country])

  const toggleClock = () => {
    setClockRunning(!clockRunning);
  };

  
 
  return (
    <>
    <div className="header">
    <Link to={"/"}>
    <button className="btn">
        <span>Back</span>
        <span class="ripple"></span>
    </button>
    
    </Link>
    <div className="clock">

    <CountryDropDown countryLists={countryList} selected_country={(e)=>set_selected_country(e)}/>
   {selected_country && <>
    <Clock clockData={clockData} running={clockRunning} /> 
    <button className="btn" onClick={toggleClock}>
        {clockRunning ? 'Pause Clock' : 'Start Clock'}
      </button>
    
   </>
   }
    </div>   
    <div>

    </div> 
    </div>

      <div className="user-profile__container">
        {/* user info */}
        <div className="list-item__content">
          <div className="list-item__content_info">
            <strong className="list-item__name">{user?.name}</strong>
            <span className="list-item__info">{user?.username}</span>
          </div>
          <div className="list-item_post">
            <span className="list-item__count">
              <strong className="list-item__name">
                {user?.address?.street} {user?.address?.city}{" "}
                {user?.address?.city}
              </strong>
              <strong className="list-item__name">
                {user?.email} | {user?.phone}
              </strong>
            </span>
          </div>
        </div>
        <div className="list">
          {posts.map((post) => (
            <>
              <PostCard post={post} key={post?.id} />
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default UserProfile;
