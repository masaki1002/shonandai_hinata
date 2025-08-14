import React,  { useEffect, useRef }  from 'react';
import "./Post.css";
import placeholder from "../images/placeholder-image.jpg"
import window_decoration from "../images/inside_interior.jpg"


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



  return (
  <section id="post">
    <div class="w3-display-left w3-text-black letter_spacing"><br></br>
    {/* <span class="w3-large">丁寧な施術で身体のメンテナンスをサポート</span> */}
    </div> 
    <div class="w3-container w3-paper" style={post_size}>
      <div class="w3-row-padding letter_spacing">
        <div class="w3-col m6">
          <h6>【最新】季節の便り 2025/08/13</h6>
          <h3>免疫力をアップさせて猛暑に負けないように！</h3><br></br>
          <p class="w3-large line_length">毎日ジメジメして過ごしにくい日々が続きますね。
          ついイライラしてしまいますよね。針やお灸にはリラックス効果があります。治療を受けて心と身体をゆっくり休めませんか？
          具体的には###というツボに細い針を刺すと###という神経が刺激され、リラックスできる状態になります。この時期は人気の治療なので、ぜひお早めにお試しください！          
          ついイライラしてしまいますよね。針やお灸にはリラックス効果があります。治療を受けて心と身体をゆっくり休めませんか？<br></br><br></br>
          (一般的に人が読んでくれるブログの長さは500〜2000文字くらいと言われている)
          </p><br></br>
          <p><a href="#moreposts" class="w3-button w3-teal w3-padding-large w3-large w3-margin-top  w3-hover-opacity-off"><i class="fa fa-th"> </i>過去の便りを見る</a></p>
        </div>
        <div class="w3-col m6">
        <video
          style={{ maxWidth: "100%", width: "300px",  margin: "0 auto" }}
          playsInline
          loop
          muted
          controls
          alt="All the devices"
     
          ref={videoEl}
        />
      </div>
    </div>
        </div>
    
  </section>
  )
}

export default Post
