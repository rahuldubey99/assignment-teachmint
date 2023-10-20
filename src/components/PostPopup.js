import { useEffect, useRef, useState } from 'react';
import '../styles/PostPopup.css';

const PostPopup = ({post , isModelOpen , showModelFun}) => {

  const [showModal, setshowModal] = useState(false)
  const modal = useRef(null)
  const overlay = useRef(null)
  const btnCloseModal = useRef(null)
  const btnsShowModal = useRef(null)

  useEffect(() => {
   

    setshowModal(isModelOpen)

  }, [isModelOpen])
  



  return (
    <>
  <div className={`modal ${showModal?'':'hidden'}`}>
  <button className="close-modal" ref={btnCloseModal} onClick={showModelFun}>&times;</button>
  <h1>{post?.title}</h1>
  <p>
   {post?.body}
  </p>
</div>
<div  className={`overlay ${showModal?'':'hidden'}`}></div>
    </>
  );
};

export default PostPopup;
