import React from 'react'
import "./Members.css"
import placeholder_image from "../images/placeholder-image.jpg"
import misuzu_image from "../images/misuzu.JPG"
import junichi_image from "../images/junichi.JPG"


const Members = () => {

  const intro_container = {
    padding: "64px 0px 12px 12px"
  }

  const intro_paragraph = {
    padding: "50px"
  }

  const hinata_characteristics = {
    padding: "12px 16px"
  }

  const icon_color = {
    color: "teal"
  }


  return(
    <section id="members">
      <div class="w3-full w3-container w3-paper"><br></br>
        <div class="w3-center" style={intro_container}>
          <h2>ひなた治療院の鍼灸師</h2>
          <p class="w3-center w3-large">先ずはお気軽にご相談ください</p>
          <div class="w3-left-align" style={intro_paragraph}>
          <div class="w3-row-padding">
            <div class="w3-col l4 m4 w3-margin-bottom">
              <img class="w3-image w3-round-large image-max-width"  src={misuzu_image} alt="Buildings"></img>
            </div>
              <div class="w3-col l8 m8 w3-margin-bottom">
                <p class="w3-large">
                  代表
                  <br></br>
                  大江田美鈴
                  <br></br>
                  <br></br>
                  鍼師・灸師・あん摩マッサージ指圧師 
                  <br></br>
                  MLAJリンパドレナージセラピスト臨床心理士
                  <br></br>
                  <br></br>
                  子育てが一段落したのを機に鍼灸の専門学校に通い、はり師・きゅう師・あん摩マッサージ指圧師の国家資格を取得。その後、長男とともに「ひなた治療院」を開業。学び続ける姿勢を大切にし、2024年には臨床心理士の資格も取得。身体だけでなく、心の面からもアプローチする施術は多くの方から高い評価を得ている
                  <br></br>
                  <br></br>
                  人の孫に手作りご飯を振舞うのが何よりの楽しみにしている
                  <br></br><br></br> 
                  趣味は発酵食品、映画鑑賞と旅行
                </p>
              </div>
            </div><br></br>

            <div class="w3-row-padding">
            <div class="w3-col l4 m4 w3-margin-bottom">
              <img class="w3-image w3-round-large image-max-width"  src={junichi_image} alt="Buildings"></img>
            </div>
              <div class="w3-col l8 m8 w3-margin-bottom">
                <p class="w3-large">
                  院長
                  <br></br>
                  大江田淳一
                  <br></br>
                  <br></br>
                  鍼師・灸師・あん摩マッサージ指圧師 
                  <br></br>
                  MLAJリンパドレナージセラピスト臨床心理士
                  <br></br>
                  <br></br>
                  学生時代はバスケットボール一筋で、高校ではチームとして全国大会に出場。しかし、自らのケガを経験したことで鍼灸の世界に興味を持ち、治療だけでなく、ケガの予防や身体のメンテナンスの大切さを深く追求。現在もその学びと実践を続けている
                  <br></br>
                  <br></br>
                  二人の娘の父
                  <br></br><br></br> 
                  趣味は食べる事、キャンプ、スノーボード
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )

 

  
}

export default Members