/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import "./Top.css"


const Top = () => {
  const text_subtitle = {
    padding: "48px"
  }


  const instagram_icon = {
    padding:"24px 48px"
  }

  return (
    <section id="top">
      <div class="bgimg-1 w3-display-container w3-grayscale-min top-position" sticky="top">
        <div class="w3-display-left w3-text-white letter_spacing" style={text_subtitle}>
          <span class="top_title_font w3-xxlarge w3-hide-small">湘南台で気軽に立ち寄れる治療院</span>
          <span class="top_title_font w3-xxlarge w3-hide-large w3-hide-medium">湘南台で気軽に<br></br>立ち寄れる治療院</span><br></br>
          <span class="w3-medium">丁寧な施術で身体のメンテナンスをサポート</span>  
          <p class="top_button_size"><a href="#accessmap" class="w3-button w3-teal w3-margin-top w3-hover-opacity-off my_button">ひなた治療院へ行ってみる</a></p>
        </div>
        <div class="w3-display-bottomleft w3-text-grey w3-xxlarge" style={instagram_icon}>
          <p class="w3-medium"><a href="https://www.instagram.com/hinata_chiryoin/" target='_blank' rel="noopener noreferrer"><i class="fa fa-3x fa-instagram w3-hover-opacity"></i></a></p>
        </div>
      </div>
    </section>
  )
}

export default Top