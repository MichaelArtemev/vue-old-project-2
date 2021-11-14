<template>
  <div class="contacts">
    <div class="contacts__line1 contacts__line"></div>
    <div class="contacts__line2 contacts__line"></div>
    <div class="contacts__line3 contacts__line"></div>
    <div class="contacts__line4 contacts__line"></div>
    <div class="contacts__line5 contacts__line"></div>

    <div class="contacts__content">
      <div class="contacnts__media">
        <div class="contacts__img-container">
          <a href="tg://resolve?domain=@Mlart22"><img class="contacts__img" src="../assets/contacts/1.png" alt=""></a> 
        </div>
        <div class="contacts__img-container">
          <a href="https://www.behance.net/mlart" target="_blanc"><img class="contacts__img" src="../assets/contacts/2.png" alt=""></a> 
        </div>
        <div class="contacts__img-container">
         <a href="mailto:webartemev@gmail.com"> <img class="contacts__img" src="../assets/contacts/3.png" alt=""> </a>
        </div>
        <div class="contacts__img-container">
         <a href="https://api.whatsapp.com/send/?phone=79309399963"> <img class="contacts__img" src="../assets/contacts/4.png" alt=""></a>
        </div>
        <div class="contacts__img-container">
        <a href="https://github.com/MichaelArtemev" target="_blanc">  <img class="contacts__img" src="../assets/contacts/5.png" alt=""></a>
        </div>
      </div>
      <form action="https://michaelartemev.ru/mail.php" method="POST">
        <div class="contacts__wrap">
            <input type="mail" placeholder="enter your email" class="anim__input" id="a1" name="user_mail">
            <textarea name="user_msg" cols="30" rows="10" placeholder="your message" class="anim__area" id="a2"></textarea>
            <button type="submit">SEND</button>          
        </div>
      </form>
      
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
// form{
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
// }
@media(max-width: 775px){
  .contacnts__media{
    flex-direction: column;
  }
  .contacts__img-container{
    margin-right: 0px !important;
    margin-bottom: 30px;
  }
}
.contacts__img{
  width: 50px;
  height: 50px;
  cursor: pointer;
}
.contacnts__media{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  margin-top: 20px;
}
.contacts__img-container:not(:last-child){
  margin-right: 50px;
}

.contacts{
  width: 100%;
  // height: 100vh;
  position: relative;
  overflow: hidden;
}
form{
  display: flex;
  width: 100%;
  padding-top: 50px;
  padding-bottom: 150px;
  


  // flex-direction: column;
  justify-content: center;
  input{
    border: 100px solid #bd93ad;
    padding: 10px;  
     
  }
  textarea{
    border: 100px solid #bd93ad;
    padding: 10px;
  }
  button{
    cursor: pointer;
    padding: 10px;
    border: none;
    color: white;
    background-color: #bd93ad;
    font-size: 4em;
    font-weight: bold;
  }
}
.contacts__wrap{
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 0 10px rgba(0,0,0,0.9);
}
.anim__input{
 
}
#a1{
//  animation-duration: 1s;
//     animation-name: slidein; 
}
#a2{
  animation-duration: 1s;
    animation-name: slidein2; 
}

@keyframes slidein {
  from {
    margin-top: -50%;
  }

  to {
    margin-top: 0%;
  }
}
@keyframes slidein2 {
  from {
    margin-top: 50%;
  }

  to {
    margin-top: 0%;
  }
}
.contacts__line{
  width: 100%;
  height: 140px;
  background-color: #afe3ce;
  position: absolute;
  z-index: 1;
}
.contacts__line1{
  top: 20%;
  animation-duration: 2s;
  animation-name: toRight; 
  animation-iteration-count: infinite;
}
.contacts__line2{
  top: 35%;
  animation-duration: 1.5s;
  animation-name: toRight; 
  animation-iteration-count: infinite;
}
.contacts__line3{
  top: 65%;
  animation-duration: 2.5s;
  animation-name: toRight; 
  animation-iteration-count: infinite;
}
.contacts__line4{
  top: 85%;
  animation-duration: 4.5s;
  animation-name: toRight; 
  animation-iteration-count: infinite;
}
.contacts__line5{
  background-color: #90fcd0;
  opacity: 0.5;
  animation-duration: 1.5s;
  animation-name: toRight; 
  animation-iteration-count: infinite;
}
.contacts__content{
  z-index: 5;
  position: relative;
}
@keyframes toRight {
  from {
    margin-left: -100%;
  }

  to {
    margin-left: 100%;
  }
}
@keyframes lleft {
  from {
    margin-right: -100%;
  }

  to {
    margin-right: 0%;
  }
}
</style>