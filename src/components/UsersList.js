import React, { useState, useEffect } from "react";

//  Style
import "../styles/UsersList.css";

// Services Imports
import { getUsers } from "../services/users";

// Components Imports
import UsersCard from "./UserCard";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [users_list, setUsers_list] = useState([]);
  const [searchusers, setSearchUsers] = useState();
  useEffect(() => {
    getUsers().then((data) => {setUsers(data);setUsers_list(data)});
  }, []);

  const filterUser = (event) =>{

  const query = event.target.value;
  setSearchUsers(query)
  if(query?.length==0){
    setUsers(users_list)
    return
  }

  var updatedList = [...users_list];
  updatedList = updatedList.filter((item) => {
    return item?.name?.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  
  });
  setUsers(updatedList)
  
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="search">
            <label>Search for user</label>
            <input
              type="search"
              data-search="data-search"
              placeholder="Search..."
              id="username"
              value={searchusers}
              onKeyUp={(e)=>filterUser(e)}
              onChange={(e)=>  setSearchUsers(e.target.value)}
            />
            <button className="search__clear" onClick={()=>{setSearchUsers('');setUsers(users_list)}}>&times;</button>
            <div className="recent-search">
              <div className="recent-search__list"></div>
            </div>
          </div>
          <div className="list" id="list" data-searchable="data-searchable">
            {users.map((user) => (
              <>
                <UsersCard user={user} key={user?.id} />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersList;
