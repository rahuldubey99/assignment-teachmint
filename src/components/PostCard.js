import { useState } from "react";
import "../styles/PostCard.css";
import PostPopup from "./PostPopup";

const PostCard = ({post}) => {

  const [isOpen, setisOpen] = useState(false)

  const showModal = () =>{
    setisOpen(!isOpen)
  }
  
  return (
    <>
      {/* <main>
        <section>
          <ul className="article-cards">
            <li>
              <article className="card">
                <header>
                  <img
                    src="https://images.unsplash.com/photo-1677348521205-7aa807a63b39?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2Nzg1MjIxMDE&ixlib=rb-4.0.3&q=80"
                    alt=""
                  />
                </header>
                <p>
                  <time dateTime="2023-01-15T12:04:00">
                    January 15, 2023 @ 12:04pm
                  </time>
                </p>
                <h3>Coventry City Guide Including Coventry Hotels</h3>
                <p>
                  Namaskar, welcome to Incredible India, where culture echoes,
                  tradition speaks, beauty enthralls and diversity delights…{' '}
                </p>
                <footer>
                  <ul className="left-items">
                    <li>
                      <a href="#">
                        <span className="icon-wrapper">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <title>shape-star</title>
                            <g fill="#8c8d95">
                              <path
                                d="M23.144,8.541,16.063,7.512,12.9,1.1a1.041,1.041,0,0,0-1.794,0L7.937,7.512.856,8.541A1,1,0,0,0,.3,10.246L5.425,15.24,4.216,22.293a1,1,0,0,0,1.451,1.054L12,20.018l6.333,3.329a1,1,0,0,0,1.451-1.054L18.575,15.24,23.7,10.246a1,1,0,0,0-.554-1.705Z"
                                fill="#8c8d95"
                              ></path>
                            </g>
                          </svg>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon-wrapper">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <title>f-chat</title>
                            <g fill="#8c8d95">
                              <path
                                d="M21,1H3C1.346,1,0,2.346,0,4V15c0,1.654,1.346,3,3,3H7.52l3.699,4.625c.19,.237,.478,.375,.781,.375s.591-.138,.781-.375l3.699-4.625h4.52c1.654,0,3-1.346,3-3V4c0-1.654-1.346-3-3-3ZM13,13H7c-.553,0-1-.448-1-1s.447-1,1-1h6c.553,0,1,.448,1,1s-.447,1-1,1Zm4-5H7c-.553,0-1-.448-1-1s.447-1,1-1h10c.553,0,1,.448,1,1s-.447,1-1,1Z"
                                fill="#8c8d95"
                              ></path>
                            </g>
                          </svg>
                        </span>
                      </a>
                    </li>
                  </ul>
                  <ul className="right-items">
                    <li>
                      <button type="button" className="read-more">
                        Read more
                      </button>
                    </li>
                  </ul>
                </footer>
              </article>
            </li>
          </ul>
        </section>
      </main> */}
      <div className="item">
            <div className="item-in">
              <h4>{post?.title}</h4>
              <div className="seperator" />
              <p>
                {post?.body}
              </p>
              <a onClick={()=>setisOpen(!isOpen)}>
                Read More
                <i className="fa fa-long-arrow-right" >
                <svg className="fa fa-long-arrow-right" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
                </i>
              </a>
            </div>
          </div>

          {/* popup */}

          { isOpen &&
            <div className="popup">
              <PostPopup post={post} isModelOpen={isOpen} showModelFun={showModal}/>
            </div>
          }

    </>
  );
};

export default PostCard;
