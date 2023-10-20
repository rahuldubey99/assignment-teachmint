import "../styles/UserCard.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Services Imports
import { getUserPosts } from "../services/users";

const UsersCard = ({ user }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getUserPosts(user?.id)
      .then((data) => setPosts(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      <Link to={`/user/${user?.id}`} className="list-item">
       
          <div className="list-item__avatar">
            <img src="https://randomuser.me/api/portraits/women/64.jpg" />
          </div>

          <div className="list-item__content">
            <div className="list-item__content_info">
              <strong className="list-item__name">{user?.name}</strong>
              <span className="list-item__info">{user?.email}</span>
            </div>
            <div className="list-item_post">
              <span className="list-item__count">
                Posts : <strong>{posts?.length}</strong>
              </span>
            </div>
          </div>
       
      </Link>
    </>
  );
};

export default UsersCard;
