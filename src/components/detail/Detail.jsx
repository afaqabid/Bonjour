import React from 'react'
import './detail.css'
import { auth, db } from '../../lib/firebase'
import {useUserStore} from '../../lib/userStore';
import {useChatStore} from '../../lib/chatStore';
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore';
// https://youtu.be/domt_Sx-wTY?t=10584
function Detail() {

  const {chatId, user, isCurrentUserBlocked, isReceiverBlocked, changeBlock} = useChatStore();
  const {currentUser} = useUserStore();


  const handleBlock = async () =>{
    if(!user) return;

    const userDocRef = doc(db, 'users', currentUser.id)

    try {
      await updateDoc(userDocRef, {
        blocked: isReceiverBlocked ? arrayRemove(user.id) : arrayUnion(user.id)
      });
      changeBlock();
      
    } catch (error) {
      console.log(error);
      
    }


  }

  return (
    <div className='detail'>
      <div className="user">
        <img src={user?.avatar || "./avatar.png"} alt="" />
        <h2>{user?.username || "User"}</h2>
        {/* <p>Lorem ipsum dolor sit, amet consectetur.</p> */}
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowDown.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <img src="./arrowDown.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared photos</span>
            <img src="./arrowUp.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">

              <img src="https://images.pexels.com/photos/20449273/pexels-photo-20449273/free-photo-of-window-on-bricks-wall.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
              <span>Image_1062.png</span>
              </div>
            <img src="./download.png" alt="" className='icon'/>
            </div>
            <div className="photoItem">
              <div className="photoDetail">

              <img src="https://images.pexels.com/photos/20449273/pexels-photo-20449273/free-photo-of-window-on-bricks-wall.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
              <span>Image_1062.png</span>
              </div>
            <img src="./download.png" alt=""  className='icon'/>
            </div>

            <div className="photoItem">
              <div className="photoDetail">

              <img src="https://images.pexels.com/photos/20449273/pexels-photo-20449273/free-photo-of-window-on-bricks-wall.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
              <span>Image_1062.png</span>
              </div>
            <img src="./download.png" alt="" className='icon'/>
            </div>
            <div className="photoItem">
              <div className="photoDetail">

              <img src="https://images.pexels.com/photos/20449273/pexels-photo-20449273/free-photo-of-window-on-bricks-wall.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
              <span>Image_1062.png</span>
              </div>
            <img src="./download.png" alt=""  className='icon' />
            </div>


          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowDown.png" alt="" />
          </div>
        </div>
        <button onClick={handleBlock}>{
          isCurrentUserBlocked ? "You are blocked" : isReceiverBlocked ? "User Blocked" : "Block User"

        }</button>
        <button className='logout' onClick={()=>auth.signOut()}>Log Out</button>
      </div>
    </div>
  )
}

export default Detail