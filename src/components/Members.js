import React from 'react'
import "./Members.css"
import placeholder_image from "../images/placeholder-image.jpg"
import misuzu_image from "../images/misuzu.JPG"
import junichi_image from "../images/junichi.JPG"


const Members = () => {

  const intro_container = {
    padding: "32px 0px 0px 0px"
  }

  const intro_paragraph = {
    padding: "50px 0 0"
  }

  const hinata_characteristics = {
    padding: "12px 16px"
  }



  return(
    <section id="members">
    


      <div class="w3-container w3-paper w3-padding-64"><br></br>
        <div class="w3-row-padding">
          <div class="w3-center" style={intro_container}>
            <h2>ひなた治療院の鍼灸師</h2>
            <p class="w3-center w3-large">先ずはお気軽にご相談ください</p>
        </div>
      </div>

        <div class="w3-row-padding">
          <div class="w3-col l3">
            <img class="w3-image w3-round-large image-max-width"   style={{ maxWidth: "100%", width: "350px",  margin: "0 auto" }} src={misuzu_image} alt="misuzu oeda"></img>
          </div>  
          <div class="w3-col l9">
            <p class="w3-large"><b>代表: 大江田美鈴<br></br>鍼師・灸師・あん摩マッサージ指圧師 <br></br>MLAJリンパドレナージセラピスト臨床心理士</b></p><br></br>
            <p class="w3-large">子育てが一段落したのを機に鍼灸の専門学校に通い、はり師・きゅう師・あん摩マッサージ指圧師の国家資格を取得。その後、長男とともに「ひなた治療院」を開業。学び続ける姿勢を大切にし、2024年には臨床心理士の資格も取得。身体だけでなく、心の面からもアプローチする施術は多くの方から高い評価を得ている
            <br></br><br></br>
            8人の孫に手作りご飯を振舞うのが何よりの楽しみにしている
            <br></br><br></br>
            趣味は発酵食品、映画鑑賞と旅行
            </p>    
          </div>
        </div>
      <br></br><br></br>
        <div class="w3-row-padding">
          <div class="w3-col l3">
            <img class="w3-image w3-round-large image-max-width"   style={{ maxWidth: "100%", width: "350px",  margin: "0 auto" }} src={junichi_image} alt="misuzu oeda"></img>
          </div>  
          <div class="w3-col l9">
            <p class="w3-large"><b>院長:大江田淳一<br></br>鍼師・灸師・あん摩マッサージ指圧師 <br></br>MLAJリンパドレナージセラピスト臨床心理士</b></p><br></br>
            <p class="w3-large">学生時代はバスケットボール一筋で、高校ではチームとして全国大会に出場。しかし、自らのケガを経験したことで鍼灸の世界に興味を持ち、治療のみならず、アスリートの視点でケガの予防や身体のメンテナンスの大切さを深く追求し現在もその学びと実践を続けている
            <br></br><br></br>
            二人の娘の父
            <br></br><br></br>
            趣味は食べる事、キャンプ、スノーボード
            </p>    
          </div>
        </div>

      






      
      
      



      
      </div>
      





      
  




          
   

    </section>
    )

 

  
}

export default Members