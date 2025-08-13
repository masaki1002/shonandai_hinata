import React from 'react'
import './PatientVoices.css'
import { height } from '@fortawesome/free-brands-svg-icons/fa42Group'

export const PatientVoices = () => {

   const testimony_container = {
    padding: "16px",
    height: "0%"
  }
  
    const testimony_subcontainer = {
      margin: "64px 0px 0px 0px"
    }

    const card_size = {
      height: "30vh"
    }


  return (
    <section id="patientsvoices"><br></br>


      <div class="w3-full w3-container" style={testimony_container} id="team"><br></br>
        <h2 class="w3-center w3-border-dark-grey">当院患者さんの声</h2>
        <p class="w3-center w3-large">当院の施術効果を体感された方々を一部ご紹介</p>
        <div class="w3-row-padding w3-grayscale" style={testimony_subcontainer}>
          <div class="w3-col l3 m6 w3-margin-bottom">
            <div class="w3-card" style={card_size}>
              <div class="w3-container">
                <p class="w3-center w3-light-grey w3-block">美容鍼</p>
                <h3>寝つきが良いです</h3>
                <p class="w3-opacity">35歳女性 主婦</p>
                <p>とても気持ちが良いです。治療を受けた日は、夜寝つきが良いです。とても気持ちが良いです。治療を受けた日は、夜寝つきが良いです。とても気持ちが良いです。治療を受けた日は、夜寝つきが良いです</p><br></br>
              </div>
           </div>
        </div>
        <div class="w3-col l3 m6 w3-margin-bottom">
            <div class="w3-card" style={card_size}>
              <div class="w3-container">
                <p class="w3-center w3-light-grey w3-block">鍼灸</p>
                <h3>首/肩こり/腰痛が改善</h3>
                <p class="w3-opacity">73歳男性 会社役員</p>
                <p>症状が改善された。親切。腰痛に関する良いアドバイスをもらった</p>
              </div>
           </div>
        </div>
         <div class="w3-col l3 m6 w3-margin-bottom">
            <div class="w3-card" style={card_size}>
              <div class="w3-container">
                <p class="w3-center w3-light-grey w3-block">よもぎ蒸し</p>
                <h3>不眠症解消</h3>
                <p class="w3-opacity">40歳女性</p>
                <p>今まで不眠症で悩んでましたが、ひなた治療院に通い始めて朝までぐっすり眠れます。本当にびっくりしました</p>
              </div>
           </div>
        </div>
         <div class="w3-col l3 m6 w3-margin-bottom">
            <div class="w3-card" style={card_size}>
              <div class="w3-container">
                <p class="w3-center w3-light-grey w3-block">リンパ浮腫</p>
                <h3>手足が楽に</h3>
                <p class="w3-opacity">65歳女性</p>
                <p>マッサージを受けた後は両足がとても楽になります。先生の人柄も素晴らしいです</p>
              </div>
           </div>
        </div>
         <div class="w3-col l3 m6 w3-margin-bottom">
            <div class="w3-card" style={card_size}>
              <div class="w3-container">
                <p class="w3-center w3-light-grey w3-block">リンパ浮腫</p>
                <h3>手足が楽に</h3>
                <p class="w3-opacity">65歳女性</p>
                <p>マッサージを受けた後は両足がとても楽になります。先生の人柄も素晴らしいです</p>
              </div>
           </div>
        </div>
         <div class="w3-col l3 m6 w3-margin-bottom">
            <div class="w3-card" style={card_size}>
              <div class="w3-container">
                <p class="w3-center w3-light-grey w3-block">リンパ浮腫</p>
                <h3>手足が楽に</h3>
                <p class="w3-opacity">65歳女性</p>
                <p>マッサージを受けた後は両足がとても楽になります。先生の人柄も素晴らしいです</p>
              </div>
           </div>
        </div>
         <div class="w3-col l3 m6 w3-margin-bottom">
            <div class="w3-card" style={card_size}>
              <div class="w3-container">
                <p class="w3-center w3-light-grey w3-block">リンパ浮腫</p>
                <h3>手足が楽に</h3>
                <p class="w3-opacity">65歳女性</p>
                <p>マッサージを受けた後は両足がとても楽になります。先生の人柄も素晴らしいです</p>
              </div>
           </div>
        </div>
         <div class="w3-col l3 m6 w3-margin-bottom">
            <div class="w3-card" style={card_size}>
              <div class="w3-container">
                <p class="w3-center w3-light-grey w3-block">リンパ浮腫</p>
                <h3>手足が楽に</h3>
                <p class="w3-opacity">65歳女性</p>
                <p>マッサージを受けた後は両足がとても楽になります。先生の人柄も素晴らしいです</p>
              </div>
           </div>
        </div>
        <p class="w3-left">*効果を実感した個人の感想です</p>
  </div>
</div>
    </section>
  )
}

export default PatientVoices