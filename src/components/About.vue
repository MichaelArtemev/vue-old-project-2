<template>
  <div class="about">
    <div class="about__line1"></div>
    <div class="about__line2"></div>
    <div class="about__content">
      <div class="about__row">
        <div class="about__col">
          <div class="about__eye">
            <img src="../assets/about/2.gif" alt="">
          </div>
        </div>
        <div class="about__col about__col-abs">
          <div class="about__img">
            <img class="about__imgx" src="../assets/about/1.png" alt="">
          </div>
          <div class="about__name">
            <h1><span>M</span>ichael</h1>
            <h1>Arteme<span>V</span></h1>
            <h1>26 y.o.</h1>
          </div>
        </div>
        <div class="about__col">
          <p class="about__p">Hi! I was born in Finland, Imatra. Live in Moscow/Saint Petersburg. <br>
            I have extensive experience in front-end development, I know all the nuances and possible problems that I can compensate for in the design for a comfortable layout. I also have a rich experience of freelancing.
            <br>
            <br>
            Привет, я фронтенд разработчик, специализируюсь на vue и смежных ему инструментах, под конкретную задачу подбираю лучший стек технологий и архитектурных решений. я специализируюсь на vue, но мой арсенал включает в себя и react. так же я занимаюсь разработкой дизайна как с нуля так и редизайн продукта/проэкта.
          </p>
        </div>
        <div class="about__col">
          <div class="about__snake">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "About"
  }
</script>

<style lang="scss" scoped>
@media(max-width: 499px){  
  .about__p{
    max-width: 310px !important;
  }
}
@media(max-width: 373px){  
  .about__line2{
    display: none !important;
  }
}
@media(max-width: 592px){
  .about__col{
    p{
      width: 440px !important;
      border-left: none !important;
    }
  }
  .about__line2{
    left: 30px !important;
  }
}
@media(max-width: 1090px){
  .about__row{
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;
    justify-items: center;
  }
  .about__eye{
    display: none;
  }
  .about__col-abs{
    margin-bottom: 70px;
    margin-right: 0px !important;
  }
  .about__col{
    margin-bottom: 70px;
    margin-right: 0px !important;
    z-index: 99;
  }
}
.about__imgx{
  border-right: 25px solid #f21ba0;
  // border-bottom: 20px solid #f21ba0;
  // border-bottom-left-radius: 20px;
}
.about__row{
  display: flex;
  align-items: center;
  align-content: center;
}
.about__content{
  padding-top: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.about{
  
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  // height: 100vh;
  background-color: #fff;
  position: relative;
  overflow: hidden;
}
.about__name{
    border-top: 25px solid #f21ba0;
    border-left: 25px solid #f21ba0;

    padding-left: 20px;
    padding-right: 20px;

  span{
    font-family: 'Major Mono Display', monospace;
    font-size: 4em;

    color: #f21ba0;
  }
  h1{
    color: #f21ba0;
  }
}
.about__col{
  p{
    max-width: 550px;
    font-size: 1.7em;
    color: #f21ba0;
    font-weight: bold;
    border-left: 25px solid #f21ba0;
    padding-left: 20px;
  }
}
.about__col{
  margin-right: 140px;
}
.about__line1{
  width: 100%;
  height: 15px;
  background-color: #1122be;
  position: absolute;
  top: 50px;
  animation-duration: 5s;
  animation-name: slidein;
  z-index: 2;
  // animation-iteration-count: infinite;

}
.about__line2{
  width: 15px;
  height: 100%;
  background-color: #1122be;
  position: absolute;
  left: 70px;
  animation-duration: 5s;
  animation-name: slidein2;
}


@keyframes slidein {
  from {
    left: -100%;
  }  
  to {
        left: 0%;
  }
}
@keyframes slidein2 {
  from {
    top: -100%;
  }  
  to {
        top: 0%;
  }
}
.about__col-abs{
  position: relative;
}
.about__eye{
    border-right: 25px solid #f21ba0;

}
</style>