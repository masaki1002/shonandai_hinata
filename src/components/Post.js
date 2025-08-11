import React from 'react';
import "./Post.css";


function Post() {

   const post_size = {
    padding: "100px 16px"
  }

  return (
  <section id="post">

  <div class="w3-display-left w3-text-black letter_spacing">
    <br></br>
    {/* <span class="w3-large">丁寧な施術で身体のメンテナンスをサポート</span> */}
   
  </div> 
  <div class="w3-display-bottomleft w3-text-grey w3-xxlarge">
    <i class="fa fa-instagram w3-hover-opacity"></i>
  </div>
    <div class="w3-container w3-paper" style={post_size}>
      <div class="w3-row-padding letter_spacing">
        <div class="w3-col m6">
          <h6>【最新】季節の便り 2025/07/17</h6>
          <h3>免疫力をアップさせて猛暑に負けないように！</h3><br></br>
          <p class="w3-large">毎日ジメジメして過ごしにくい日々が続きますね。
          ついイライラしてしまいますよね。針やお灸にはリラックス効果があります。治療を受けて心と身体をゆっくり休めませんか？
          具体的には###というツボに細い針を刺すと###という神経が刺激され、リラックスできる状態になります。この時期は人気の治療なので、ぜひお早めにお試しください！          
          ついイライラしてしまいますよね。針やお灸にはリラックス効果があります。治療を受けて心と身体をゆっくり休めませんか？<br></br><br></br>
          (一般的に人が読んでくれるブログの長さは500〜2000文字くらいと言われている)
          </p><br></br>
          <p><a href="/moreposts" class="w3-button w3-teal w3-padding-large w3-large w3-margin-top  w3-hover-opacity-off"><i class="fa fa-th"> </i> 過去の便りを見る</a></p>
        </div>
        <div class="w3-col m6">
            <img class="w3-image w3-round-large" src="/placeholder-image.jpg" alt="Buildings"></img>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Post
