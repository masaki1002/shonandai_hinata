import React,  { useEffect, useRef }  from 'react';
import "./Post.css";
import okyu_video from "../images/okyu.mp4"

import { Nav } from 'react-bootstrap';
import { useNavigate, Router, Routes, Route, Link } from 'react-router-dom';
import { Parallax } from 'react-scroll-parallax';


function Post() {

   const post_size = {
    padding: "100px 16px"
  }

  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  const navigate = useNavigate();

  return (
  <section id="post">
         {/* <Parallax
       speed={300}
       translateY={[-10, 0, "easeOutQuint"]}
      // speed={100}
      > */}

   

    <div class="w3-container w3-paper w3-padding-64">
        <div class="w3-row-padding letter_spacing">
        <div class="w3-col l7">
          <h6>季節の便り 2025/08/17</h6>
          <h3>免疫力をアップさせて猛暑に勝ちましょう！</h3><br></br>
          <p class="w3-large line_length">毎日ジメジメして過ごしにくい日々が続きますね。
          ついイライラしてしまいますよね。針やお灸にはリラックス効果があります。治療を受けて心と身体をゆっくり休めませんか？
          具体的には###というツボに細い針を刺すと###という神経が刺激され、リラックスできる状態になります。この時期は人気の治療なので、ぜひお早めにお試しください！          
          ついイライラしてしまいますよね。針やお灸にはリラックス効果があります。治療を受けて心と身体をゆっくり休めませんか？<br></br><br></br>
          (一般的に人が読んでくれるブログの長さは500〜2000文字くらいと言われている)
          </p><br></br>
          <button class="w3-button w3-teal w3-padding-large w3-large w3-margin-top  w3-hover-opacity-off" onClick={() => navigate('/moreposts')}><i class="fa fa-th"> </i>過去の便りを見る</button> 
          <br></br><br></br>
        </div>
      
        <div class="w3-col l5">
        {/* <video
          src={okyu_video}
          style={{ maxWidth: "100%", width: "300px",  margin: "0 auto" }}
          playsInline
          loop
          muted
          controls
          alt="All the devices"
     
          ref={videoEl}
        /> */}
      </div>
          
    </div>


      
        </div>
              {/* </Parallax> */}
    
  </section>
  )
}

export default Post
