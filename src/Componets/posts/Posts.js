import React from 'react'
import './Posts.css'
const Posts = () => {
  return (
    <div className="posts">

        <div className="post">
            <div className="postcard">
            <img src="./img/postpic1.jpg" alt="" />
            </div>       
             <div className="symbolls"> 
            <div className="postreact">
            <img src="./img/like.png" alt="" />
            <img src="./img/comment.png" alt="" />
            <img src="./img/share.png" alt="" />
            </div>
            
            <span>18.3 M likes</span><br />
            <span className="profilename">Vijay</span> <span>Beast Mode</span>


            </div>

            <div className="postcard">
            <img src="./img/postpic2.jpg" alt="" />
            </div>       
             <div className="symbolls"> 
            <div className="postreact">
            <img src="./img/notlike.png" alt="" />
            <img src="./img/comment.png" alt="" />
            <img src="./img/share.png" alt="" />
            </div>
            
            <span>15 M likes</span><br />
            <span className="profilename">Vijay</span> <span> Bigil #singapennae </span>


            </div>

            <div className="postcard">
            <img src="./img/postpic3.jpg" alt="" />
            </div>       
             <div className="symbolls"> 
            <div className="postreact">
            <img src="./img/notlike.png" alt="" />
            <img src="./img/comment.png" alt="" />
            <img src="./img/share.png" alt="" />
            </div>
            
            <span>16M likes</span><br />
            <span className="profilename">Vijay</span> <span>Verithanam</span>


            </div>
        </div>

     </div> 
  )
}

export default Posts