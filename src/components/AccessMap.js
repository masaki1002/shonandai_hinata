import React from 'react'
import './Approach.css'

import Iframe from 'react-iframe'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faHouse, faTrain, faPhone, faCalendar } from '@fortawesome/free-solid-svg-icons'


const AccessMap = () => {
  
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

  return (
    <section id="accessmap">
      <div class="w3-full w3-container w3-paper"><br></br>
        <div class="w3-center" style={intro_container}>
          <h2>アクセスマップ</h2>
        </div>
        <div class="w3-row-padding letter_spacing">
        <div class="w3-col l4 m6 w3-margin-bottom"> 
           <div class="business-info">
              <p><FontAwesomeIcon icon={faHouse} /> 神奈川県藤沢市湘南台2-26-17</p>
              <p><FontAwesomeIcon icon={faTrain} /> 小田急線・相鉄線・市営地下鉄線　湘南台駅西口徒歩４分</p>
              <p><FontAwesomeIcon icon={faPhone} />  <a href="tel:0466-53-5690">TEL&FAX：0466-53-5690</a></p>
              <p><FontAwesomeIcon icon={faClock} /> 受付時間 9:00-17:00</p>
              <p><FontAwesomeIcon icon={faCalendar} />  不定休</p>
        <br></br>
      </div>
      <div class="small-business-info">
        <ul>
            <li>予約制とさせて頂きます。予約は電話のみ受付です</li>
            <li>オイルマッサージ・リンパ浮腫治療は完全予約制です</li>
            <li>駐車場は近隣のコインパーキングをご利用ください</li>
            <li>清潔な治療着をご用意しておりますので、どんな格好でもお越し頂けます</li>
            <li>当院は、藤沢市高齢者はり・きゅう・マッサージ利用券取り扱い、生活保護法指定治療院です。交通事故ご相談ください</li>
        </ul>
    
      </div>
        </div>
        <div class="w3-col m6">
             <div class="googlemap">
        <Iframe 
          url={"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1626.286576856071!2d139.4638406!3d35.3910413!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018516ccc7e13bd%3A0xe9e119140ebb24ac!2z44Gy44Gq44Gf5rK755mC6Zmi!5e0!3m2!1sja!2sjp!4v1551619669794"}
          width='800'
          height='450'
          frameborder="0" 
          allowfullscreen
          >
          
        </Iframe>
      </div>
        </div>
      </div>
        
        
      </div>
    </section>
  )
}

export default AccessMap