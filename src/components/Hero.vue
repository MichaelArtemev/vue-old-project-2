<template>
  <div class="hero">
    <!-- <Menu></Menu> -->
    <!-- <div class="hero__logo transparent">
          <div class="wrap" ref="wrap">
            <p class="hero__trans" ref="trn1" @click="changeBackground"><span class="s4" ref="s1">w</span><span class="s5" ref="s2">e</span><span class="s3" ref="s3">b.</span></p>
            <p class="hero__trans hero__hook" ref="trn2"><span class="s1" ref="s4">A</span><span class="s2" ref="s5">r</span><span class="s8" ref="s6">t</span><span class="s7" ref="s7">e</span><span class="s6" ref="s8">m</span><span class="s9" ref="s9">e</span><span class="s10" ref="s10">v</span></p>
          </div>          
    </div> -->
    <div class="test" ref="test">
      <div class="wrap" ref="wrap">
            <p class="hero__trans" ref="trn1" @click="changeBackground"><span class="s4" ref="s1">w</span><span class="s5" ref="s2">e</span><span class="s3" ref="s3">b.</span></p>
            <p class="hero__trans hero__hook" ref="trn2"><span class="s1" ref="s4">A</span><span class="s2" ref="s5">r</span><span class="s8" ref="s6">t</span><span class="s7" ref="s7">e</span><span class="s6" ref="s8">m</span><span class="s9" ref="s9">e</span><span class="s10" ref="s10">v</span></p>
      </div>   
    </div> 
    <div class="preload">
      <img src="../assets/hero/1.jpg" alt="">
      <img src="../assets/hero/2.jpg" alt="">
      <img src="../assets/hero/3.jpg" alt="">
      <img src="../assets/hero/4.jpg" alt="">
      <img src="../assets/hero/5.jpg" alt="">
      <img src="../assets/hero/6.jpg" alt="">
    </div>  
    <div class="hero__content" ref="hero">
      <div class="hero__info">
        <!-- <div class="hero__nav">
          <ul>
            <li></li>
          </ul>
        </div> -->
        <div class="hero__about-me">
          <div class="hero__hh">
            <p class="hero__hello">Hello!</p>
            <div class="hero__hand" ref="hand">
              <img src="../assets/hand/3.png" alt="">
            </div>
          </div>          
          <p>I'm a fullstack web developer</p>
          <p>and designer.</p> 
          <p>these are my skills : </p> 
          <button class="btn" @click="showCategory">Open categories</button>    
        </div>
      </div> 
      <div class="hero__row2">
        <div class="hero__row-content">
          <div class="hero__nav2" ref="category">
            <ul>
              <li ref="front" @click="openFront">Frontend</li>
              <li ref="back" @click="openBackend">Backend</li>
              <li ref="des" @click="openDesign">Design</li>
            </ul>
          </div>
          <div class="hero__col-x hero__col-x1" ref="x1">
            <div class="hero__col">
                <div class="hero__skill-img">
                  <img class="img" src="../assets/skills/adobe/1.png" alt="">
                </div>
                <p class="hero__col-p">Photoshop</p>
            </div>
            <div class="hero__col">
                <div class="hero__skill-img">
                  <img class="img" src="../assets/skills/adobe/2.png" alt="">
                </div>
                <p class="hero__col-p">Adobe Illustrator</p>
            </div>
            <div class="hero__col">
                <div class="hero__skill-img">
                  <img class="img" src="../assets/skills/adobe/3.png" alt="">
                </div>
                <p class="hero__col-p">Adobe Animate</p>
            </div>
            <div class="hero__col">
                <div class="hero__skill-img">
                  <img class="img" src="../assets/skills/adobe/4.png" alt="">
                </div>
                <p class="hero__col-p">Adobe After Effects</p>
            </div>
            <div class="hero__col">
                <div class="hero__skill-img">
                  <img class="img" src="../assets/skills/adobe/5.png" alt="">
                </div>
                <p class="hero__col-p">Adobe XD</p>
            </div>
            <div class="hero__col">
                <div class="hero__skill-img">
                  <img class="img" src="../assets/skills/adobe/6.png" alt="">
                </div>
                <p class="hero__col-p">3d Modeling</p>
            </div>
            <div class="hero__col">
                <div class="hero__skill-img">
                  <img class="img" src="../assets/skills/t/1.png" alt="">
                </div>
                <p class="hero__col-p">Figma</p>
            </div>
            <div class="hero__col">
                <div class="hero__skill-img">
                  <img class="img" src="../assets/skills/t/2.png" alt="">
                </div>
                <p class="hero__col-p">Avocode</p>
            </div>
            <div class="hero__col">
                <div class="hero__skill-img">
                  <img class="img" src="../assets/skills/t/3.png" alt="">
                </div>
                <p class="hero__col-p">Zeplin</p>
            </div>
          </div>
          <div class="hero__col-x hero__col-x3" ref="x3">
            <div class="hero__col">
                <div class="hero__skill-img">
                  <img class="img" src="../assets/skills/php/1.png" alt="">
                </div>
                <p class="hero__col-p">PHP</p>
            </div>
            <div class="hero__col">
                <div class="hero__skill-img">
                  <img class="img" src="../assets/skills/php/2.png" alt="">
                </div>
                <p class="hero__col-p">MySQL</p>
            </div>
            <div class="hero__col">
                <div class="hero__skill-img">
                  <img class="img" src="../assets/skills/php/3.png" alt="">
                </div>
                <p class="hero__col-p">NODE.js</p>
            </div>
            <div class="hero__col">
                <div class="hero__skill-img">
                  <img class="img" src="../assets/skills/php/4.png" alt="">
                </div>
                <p class="hero__col-p">Wordpress</p>
            </div>
          </div>
          <div class="hero__col-x hero__col-x2" ref="x2">
             <div class="hero__col">
                <div class="hero__skill-img">
                  <img class="img" src="../assets/skills/react/1.png" alt="">
                </div>
                <p class="hero__col-p">React.js</p>
            </div>
            <div class="hero__col">
                <div class="hero__skill-img">
                  <img class="img" src="../assets/skills/1.png" alt="">
                </div>
                <p class="hero__col-p">Vue.js</p>
            </div>
            <div class="hero__col">
                <div class="hero__skill-img">
                  <img class="img" src="../assets/skills/4.png" alt="">
                </div>
                <p class="hero__col-p">Vuetify.js</p>
            </div>
            <div class="hero__col">
                <div class="hero__skill-img">
                  <img class="img" src="../assets/skills/html/4.png" alt="">
                </div>
                <p class="hero__col-p">JavaScript</p>
            </div>
             <div class="hero__col">
                <div class="hero__skill-img">
                  <img class="img" src="../assets/skills/html/1.png" alt="">
                </div>
                <p class="hero__col-p">HTML</p>
            </div>
             <div class="hero__col">
                <div class="hero__skill-img">
                  <img class="img" src="../assets/skills/html/2.png" alt="">
                </div>
                <p class="hero__col-p">CSS</p>
            </div>
             <div class="hero__col">
                <div class="hero__skill-img">
                  <img class="img" src="../assets/skills/html/3.png" alt="">
                </div>
                <p class="hero__col-p">SCSS</p>
            </div>
            <div class="hero__col">
                <div class="hero__skill-img">
                  <img class="img" src="../assets/skills/html/5.png" alt="">
                </div>
                <p class="hero__col-p">TypeScript</p>
            </div>
            <div class="hero__col">
                <div class="hero__skill-img">
                  <img class="img" src="../assets/skills/html/6.png" alt="">
                </div>
                <p class="hero__col-p">Bootstrap</p>
            </div>
            <div class="hero__col">
                <div class="hero__skill-img">
                  <img class="img" src="../assets/skills/builder/1.png" alt="">
                </div>
                <p class="hero__col-p">Webpack</p>
            </div>
            <div class="hero__col">
                <div class="hero__skill-img">
                  <img class="img" src="../assets/skills/builder/2.png" alt="">
                </div>
                <p class="hero__col-p">Gulp</p>
            </div>
            <div class="hero__col">
                <div class="hero__skill-img">
                  <img class="img" src="../assets/skills/builder/3.png" alt="">
                </div>
                <p class="hero__col-p">Grunt</p>
            </div>
            <div class="hero__col">
                <div class="hero__skill-img">
                  <img class="img" src="../assets/skills/t/1.png" alt="">
                </div>
                <p class="hero__col-p">Figma</p>
            </div>
            <div class="hero__col">
                <div class="hero__skill-img">
                  <img class="img" src="../assets/skills/t/2.png" alt="">
                </div>
                <p class="hero__col-p">Avocode</p>
            </div>
            <div class="hero__col">
                <div class="hero__skill-img">
                  <img class="img" src="../assets/skills/t/3.png" alt="">
                </div>
                <p class="hero__col-p">Zeplin</p>
            </div>
            <div class="hero__col">
                <div class="hero__skill-img">
                  <img class="img" src="../assets/skills/adobe/6.png" alt="">
                </div>
                <p class="hero__col-p">3D Modeling</p>
            </div>
          </div>
        </div>
      </div>
      <div class="hero__row" ref="mainline">
        <!-- <div class="hero__logo transparent">
          <div class="wrap" ref="wrap">
            <p class="hero__trans" ref="trn1" @click="changeBackground"><span class="s4" ref="s1">w</span><span class="s5" ref="s2">e</span><span class="s3" ref="s3">b.</span></p>
            <p class="hero__trans hero__hook" ref="trn2"><span class="s1" ref="s4">A</span><span class="s2" ref="s5">r</span><span class="s8" ref="s6">t</span><span class="s7" ref="s7">e</span><span class="s6" ref="s8">m</span><span class="s9" ref="s9">e</span><span class="s10" ref="s10">v</span></p>
          </div>          
        </div> -->
         <div class="hero__inner-row5" ref="r1">
           <div class="hero__triangle" ref="t1">
             <div class="triangle"></div>
           </div>
          <div class="hero__col">
            <div class="hero__skill-img">
              <img class="img" src="../assets/skills/react/1.png" alt="">
            </div>
            <p class="hero__col-p">React.js</p>
          </div>
        </div>
        
        <div class="hero__inner-row" ref="r2">
          <div class="hero__triangle">
             <div class="triangle" ref="t2"></div>
           </div>
          <div class="hero__col">
            <div class="hero__skill-img">
              <img class="img" src="../assets/skills/1.png" alt="">
            </div>
            <p class="hero__col-p">Vue.Js</p>
          </div>
          <div class="hero__col">
            <div class="hero__skill-img">
              <img class="img" src="../assets/skills/4.png" alt="">
            </div>
            <p class="hero__col-p">Vuetefy</p>
          </div>  
        </div>   
        <div class="hero__inner-row3" ref="r3">
          <div class="hero__triangle" ref="t3">
             <div class="triangle"></div>
           </div>
          <div class="hero__col">
            <div class="hero__skill-img">
              <img class="img" src="../assets/skills/builder/1.png" alt="">
            </div>
            <p class="hero__col-p">Webpack</p>
          </div>
          <div class="hero__col">
            <div class="hero__skill-img">
              <img class="img" src="../assets/skills/builder/2.png" alt="">
            </div>
            <p class="hero__col-p">Gulp</p>
          </div>
          <div class="hero__col">
            <div class="hero__skill-img">
              <img class="img" src="../assets/skills/builder/3.png" alt="">
            </div>
            <p class="hero__col-p">Grunt</p>
          </div>
        </div> 
        <div class="hero__inner-row7" ref="r4">
          <div class="hero__triangle" ref="t4">
             <div class="triangle"></div>
           </div>
          <div class="hero__col">
            <div class="hero__skill-img">
              <img class="img" src="../assets/skills/t/1.png" alt="">
            </div>
            <p class="hero__col-p">Figma</p>
          </div><div class="hero__col">
            <div class="hero__skill-img">
              <img class="img" src="../assets/skills/t/2.png" alt="">
            </div>
            <p class="hero__col-p">Avocode</p>
          </div><div class="hero__col">
            <div class="hero__skill-img">
              <img class="img" src="../assets/skills/t/3.png" alt="">
            </div>
            <p class="hero__col-p">Zeplin</p>
          </div>
        </div>
        
        
        <div class="hero__inner-row4" ref="r5">
          <div class="hero__triangle" ref="t5">
             <div class="triangle"></div>
           </div>
          <div class="hero__col">
            <div class="hero__skill-img">
              <img class="img" src="../assets/skills/php/1.png" alt="">
            </div>
            <p class="hero__col-p">PHP</p>
          </div>
          <div class="hero__col">
            <div class="hero__skill-img">
              <img class="img" src="../assets/skills/php/2.png" alt="">
            </div>
            <p class="hero__col-p">MySQL</p>
          </div>
          <div class="hero__col">
            <div class="hero__skill-img">
              <img class="img" src="../assets/skills/php/3.png" alt="">
            </div>
            <p class="hero__col-p">NODE.js</p>
          </div>
          <div class="hero__col">
            <div class="hero__skill-img">
              <img class="img" src="../assets/skills/php/4.png" alt="">
            </div>
            <p class="hero__col-p">Wordpress</p>
          </div>
        </div>
       
        <div class="hero__inner-row6" ref="r6">
          <div class="hero__triangle" ref="t6">
             <div class="triangle"></div>
           </div>
          <div class="hero__col">
            <div class="hero__skill-img">
              <img class="img" src="../assets/skills/adobe/1.png" alt="">
            </div>
            <p class="hero__col-p">Photoshop</p>
          </div>
          <div class="hero__col">
            <div class="hero__skill-img">
              <img class="img" src="../assets/skills/adobe/2.png" alt="">
            </div>
            <p class="hero__col-p">Adobe Illustrator</p>
          </div>
          <div class="hero__col">
            <div class="hero__skill-img">
              <img class="img" src="../assets/skills/adobe/3.png" alt="">
            </div>
            <p class="hero__col-p">Adobe Animate</p>
          </div>
          <div class="hero__col">
            <div class="hero__skill-img">
              <img class="img" src="../assets/skills/adobe/4.png" alt="">
            </div>
            <p class="hero__col-p">After Effects</p>
          </div>
          <div class="hero__col">
            <div class="hero__skill-img">
              <img class="img" src="../assets/skills/adobe/5.png" alt="">
            </div>
            <p class="hero__col-p">Adobe XD</p>
          </div>
          <div class="hero__col">
            <div class="hero__skill-img">
              <img class="img" src="../assets/skills/adobe/6.png" alt="">
            </div>
            <p class="hero__col-p">3D Modeling</p>
          </div>
        </div>
        <div class="hero__inner-row2" ref="r7">
          <div class="hero__triangle">
             <div class="triangle" ref="t7"></div>
           </div>
          <div class="hero__col">
            <div class="hero__skill-img">
              <img class="img" src="../assets/skills/html/1.png" alt="">
            </div>
            <p class="hero__col-p">HTML5</p>
          </div>
          <div class="hero__col">
            <div class="hero__skill-img">
              <img class="img" src="../assets/skills/html/2.png" alt="">
            </div>
            <p class="hero__col-p">CSS</p>
          </div>
          <div class="hero__col">
            <div class="hero__skill-img">
              <img class="img" src="../assets/skills/html/3.png" alt="">
            </div>
            <p class="hero__col-p">SCSS</p>
          </div>
          <div class="hero__col">
            <div class="hero__skill-img">
              <img class="img" src="../assets/skills/html/4.png" alt="">
            </div>
            <p class="hero__col-p">JavaScript</p>
          </div>
          <div class="hero__col">
            <div class="hero__skill-img">
              <img class="img" src="../assets/skills/html/7.png" alt="">
            </div>
            <p class="hero__col-p">Three.js</p>
          </div>
          <div class="hero__col">
            <div class="hero__skill-img">
              <img class="img" src="../assets/skills/html/5.png" alt="">
            </div>
            <p class="hero__col-p">TypeScript</p>
          </div>
          <div class="hero__col">
            <div class="hero__skill-img">
              <img class="img" src="../assets/skills/html/6.png" alt="">
            </div>
            <p class="hero__col-p">Bootstrap</p>
          </div>
        </div>  
        
      </div>
    </div>
  </div>
</template>

<script>
// import Menu from "../components/Menu";

  export default {
    name: "Hero",
    components:{
    },
    data(){
      return{
        isFrontend: true,
        isBackend: false,
        isDesign: false,
        categoryCheck: false,
        img: [
          require(`../assets/hero/1.jpg`),
          require(`../assets/hero/2.jpg`),
          require(`../assets/hero/3.jpg`),
          require(`../assets/hero/4.jpg`),
          require(`../assets/hero/5.jpg`),
          require(`../assets/hero/6.jpg`),
        ],
        word: [
          this.$refs.s1,
          this.$refs.s2,
          this.$refs.s3,
          this.$refs.s4,
          this.$refs.s5,
          this.$refs.s6,
          this.$refs.s7,
          this.$refs.s8,
          this.$refs.s9,
          this.$refs.s10,
        ]
      }
    },
    mounted(){
      this.changeBackground();
      window.onload = ()=> {
        return
      };
      if( window.onload != null ){
        let windowInnerWidth = window.innerWidth
        
        if(windowInnerWidth <= 1593){
          this.$refs.hero.style.display = "block";
          this.rotateAndShow();
          setTimeout(()=>{
            this.hideHand();
          },5000);
        }else{
         this.drow();
        }
      }
      console.log(window.onload);
      
    },
    methods:{
      hideHand(){
        this.$refs.hand.style.opacity = 0;
      },
      changeBackground(){
        let i = 0;
        setInterval(
          ()=>{
            if( i === 5){
              i = 0;
            }
            this.$refs.trn1.style.backgroundImage = `url('${this.img[i]}')`;
            this.$refs.trn2.style.backgroundImage = `url('${this.img[i]}')`;
            i++;
          }, 1000
        )
      },
      rotateAndShow(){
        setTimeout(()=>{
        this.$refs.t1.style.transform = "rotate(90deg)";
        this.$refs.r1.style.opacity = 1;

        },1000);
        setTimeout(()=>{
        this.$refs.t2.style.transform = "rotate(90deg)";
        this.$refs.r2.style.opacity = 1;

        },2000);
        setTimeout(()=>{
        this.$refs.t3.style.transform = "rotate(90deg)";
        this.$refs.r3.style.opacity = 1;

        },3000);
        setTimeout(()=>{
        this.$refs.t4.style.transform = "rotate(90deg)";
        this.$refs.r4.style.opacity = 1;

        },4000);
        setTimeout(()=>{
        this.$refs.t5.style.transform = "rotate(90deg)";
        this.$refs.r5.style.opacity = 1;

        },5000);
        setTimeout(()=>{
        this.$refs.t6.style.transform = "rotate(90deg)";
        this.$refs.r6.style.opacity = 1;

        },6000);
        setTimeout(()=>{
        this.$refs.t7.style.transform = "rotate(90deg)";
        this.$refs.r7.style.opacity = 1;

        },7000);
      },
      showCategory(){
        if( this.categoryCheck ){
          // this.$refs.category.style.display = "none";
          if(window.innerWidth < 858){
            this.$refs.mainline.style.marginTop = "0px";
          }
          if(window.innerWidth < 611){
            this.$refs.mainline.style.marginTop = "0px";
          }
          if(window.innerWidth > 858){
            this.$refs.mainline.style.marginTop = "0px";
          }
          this.categoryCheck = false;
          this.$refs.category.style.opacity = 0;
          this.$refs.x3.style.opacity = 0;
          this.$refs.x2.style.opacity = 0;
          this.$refs.x1.style.opacity = 0;          


        }else{
          this.$refs.category.style.display = "flex";
          if(window.innerWidth < 858){
            this.$refs.mainline.style.marginTop = "490px";
          }
          if(window.innerWidth < 611){
            this.$refs.mainline.style.marginTop = "880px";
          }
          if(window.innerWidth > 858){
            this.$refs.mainline.style.marginTop = "350px";
          }
          this.categoryCheck = true;
          setTimeout(
          ()=>{
            this.$refs.category.style.opacity = 1;
            this.openFront();
          },500
          )
        }
      },
      openBackend(){
        this.$refs.x3.style.opacity = 1;
        this.$refs.x2.style.opacity = 0;
        this.$refs.x1.style.opacity = 0;
        this.$refs.back.style.borderBottom = "2px solid #f21ba0";
        this.$refs.front.style.borderBottom = "none";
        this.$refs.des.style.borderBottom = "none";

      },
      openFront(){
        this.$refs.x3.style.opacity = 0;
        this.$refs.x2.style.opacity = 1;
        this.$refs.x1.style.opacity = 0;
        this.$refs.front.style.borderBottom = "2px solid #f21ba0";
        this.$refs.back.style.borderBottom = "none";
        this.$refs.des.style.borderBottom = "none";
      },
      openDesign(){
        this.$refs.x3.style.opacity = 0;
        this.$refs.x2.style.opacity = 0;
        this.$refs.x1.style.opacity = 1;
        this.$refs.des.style.borderBottom = "2px solid #f21ba0";
        this.$refs.back.style.borderBottom = "none";
        this.$refs.front.style.borderBottom = "none";

      },
      drow(){
        let i = 1;
        let timerId = setInterval(
          ()=>{
            if( i === 10){
              i === 1;
              clearInterval(timerId);
              setTimeout(
                ()=>{
                  this.$refs.wrap.style.opacity = 0;
                },1000
              )
              setTimeout(
                ()=>{
                  setTimeout(
                    ()=>{
                      this.$refs.hero.style.display = "block";
                      this.$refs.wrap.style.opacity = 1;
                      this.rotateAndShow();
                      setTimeout(()=>{
                        this.hideHand();
                      },5000);
                    }, 500
                  );      
                  this.$refs.wrap.style.top = "300px";
                  this.$refs.wrap.style.left = "-280px";    
                  
                  this.$refs.wrap.style.transform = "rotate(-90deg)";
                  this.$refs.test.style.width = "auto";
                  this.$refs.test.style.height = "auto";
                },2500
              )

            }
            let current = document.getElementsByClassName(`s${i}`)[0];
            current.style.opacity = 1;
            console.log(current);            
            i++;
          }, 300
        )
      }
    }
  }
</script>

<style lang="scss" scoped>
@media(max-width: 1593px){
  .wrap{
    display: none !important;
  }
  .test{
    display: none !important;
  }
  
}
.hero{
  width: 100%;
  // height: 100vh;
  position: relative;
  // background-image: url("../assets/hero/1.jpg");
  // z-index: 1;
  p{
    font-size: 10em;
  }
}
.hero__content{
  // width: 100%;
  // height: 100vh;
  z-index: 2;
  // background: #000;
  
}
.hero__logo{
  // color: transparent;w
  // width: 100%;
  // height: 100vh;
  // position: fixed;
  // background-color: white;
  // z-index: 100;
}
.transparent{
  // background: #000;
  // color: #FFF;
  // mix-blend-mode: multiply;
  // width: 100%;
  // height: 100vh;
}
.hero__content{
  
}
.wrap{
  
}
.hero__trans{
  background-image: url("../assets/hero/1.jpg");
  background-repeat: no-repeat;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-size: cover;
  font-weight: bold;
  font-family: 'Major Mono Display', monospace;
  text-transform: uppercase;
  transition: 0.2s;
}
.preload{
  display: none;
}
.hero__hook{
  margin-top: -100px;
}
.hero__row{
  // display: flex;
  // align-content: center;
  // align-items: center;
  // justify-content: center;
}
.hero__trans{
  span{
    opacity: 0;
  }
}
span{
  transition: 0.4s;
}
.wrap{
  // transform: rotate(-90deg);
  top: 0;
  left: 0;
  transition: 1.5s;
  position: absolute;
  // display: none;
}
.img{
  width: 50px;
  height: 50px;
  object-fit: contain;
}
.hero__col-p{
  font-size: 1em !important;
  font-weight: bold;
  color: #f21ba0;
  opacity: 0.9;
}
.hero__inner-row,
.hero__inner-row2,
.hero__inner-row3,
.hero__inner-row4,
.hero__inner-row5,
.hero__inner-row6,
.hero__inner-row7{
  display: flex;
  flex-direction: column;
  // border-bottom: 5px solid #f21ba0;
  // border-radius: 50px;
  padding: 20px;
  max-height: min-content;
  max-width: max-content;
  flex-wrap: wrap;
  height: max-content;
  transition: 1s;
  opacity: 0;
  }

.hero__col{
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  padding: 15px;
  padding-left: 2px;
  img{
    margin-bottom: 20px;
  }
}
.hero__row{
  display: flex;
  // flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  transition: 1s;
}
.hero__about-me{
  // display: flex;
  justify-content: center;
  margin-bottom: 30px;
  p{
    font-size: 2em;
    font-weight: bold;
    color: #f21ba0;
  }
  p:not(:last-child){
    margin-right: 20px;
  }
}
.hero__hand{
  margin-right: 20px;
  img{
    width: 40px;
    height: 40px;
  }
  animation-duration: 1s;
  animation-name: shake;
  animation-iteration-count: infinite;
}


@keyframes shake {
  0% {
    transform: rotate(60deg);
  }

  50% {
    transform: rotate(-60deg);
  }
  100% {
    transform: rotate(60deg);
  }
}
.hero__hello{
  
}
.hero{
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  justify-self: center;
  align-self: center;
  // position: relative;
}
@media(max-width: 1661px){
    // .wrap{
    //   p{
    //     font-size: 4em;
    //   }
    // }
}
.triangle{
  width: 0;
	height: 0;

  border-top: 25px solid transparent;
	border-left: 50px solid #f21ba0;
	border-bottom: 25px solid transparent;
  margin: 0 auto;

	// border-top: 50px solid #f21ba0;
  // transform: rotate(-90deg);
  transition: 1s;
}
.hero__triangle{
  position: relative;
  transition: 1s;
  margin: 0 auto;
  margin-bottom: 40px;

}
.hero__hand{
  transition: 1s;
}
.btn{
  cursor: pointer;
  border: none;
  color: white;
  font-weight: bold;
  border-radius: 50px;
  padding: 10px 40px;
  background-color: #f21ba0;
  margin-top: 50px;
  outline: none;
}
btn:focus{
  outline: 0;
}
.hero__info{
  // display: none;
  padding-top: 50px;
  padding-bottom: 50px;
  padding-left: 20px;
  padding-right: 20px;
}
@media(max-width: 1539px){
  .hero__info{
    font-size: 0.8em;
  }
}
@media(max-width: 1281px){
  .hero__info{
    font-size: 0.7em;
  }
}
.hero__about-me{
  // flex-direction: column;
}
.hero__hh{
  display: flex;
}

@keyframes ripple {
  0% {
    box-shadow: 0 0 0 .7rem rgba(255,255,255, 0.2),
                0 0 0 1.5rem rgba(255,255,255, 0.2),
                0 0 0 5rem rgba(255,255,255, 0.2);
  }
  100% {
    box-shadow: 0 0 0 1.5rem rgba(255,255,255, 0.2),
                0 0 0 4rem rgba(255,255,255, 0.2),
                0 0 0 8rem rgba(255,255,255, 0);
  }
}


.img{
  animation: ripple 2s linear infinite;

}

@-webkit-keyframes pulse {to {box-shadow: 0 0 0 45px rgba(234, 65, 49, 0.02);}}
@-moz-keyframes pulse {to {box-shadow: 0 0 0 45px rgba(226, 60, 44, 0.01);}}
@-ms-keyframes pulse {to {box-shadow: 0 0 0 45px rgba(218, 80, 67, 0);}}
@keyframes pulse {to {box-shadow: 0 0 0 45px rgba(218, 80, 67, 0);}}


@media(max-width: 501px){
 .hero__col{
  
    padding: 5px;

 }
}
@media(max-width: 474px){
 .hero__col{
  
    font-size: 0.8em;

 }
}
@media(max-width: 419px){
 .hero__col{
  
    font-size: 0.5em;
    margin-bottom: 20px;

 }
 .hero__col{
   padding: 0px;
 }
 
 .hero__inner-row,
 .hero__inner-row2,
 .hero__inner-row3,
 .hero__inner-row4,
 .hero__inner-row5,
 .hero__inner-row6,
 .hero__inner-row7,{
   padding: 10px;
 }
}
.hero__col-x{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.hero__col-x .hero__col{
  padding: 20px;
}
.hero__col-x{
  margin-bottom: 50px;
  margin-top: 50px;
  display: flex;
  justify-content: center;
}
.hero__nav2{
  font-size: 1em;
  font-weight: bold;
  transition: 1s;
  ul{
    display: flex;
    color: #f21ba0;
  }
  li {
    list-style-type: none;
    cursor: pointer; /* Убираем маркеры */
   }
   li:not(:last-child){
     margin-right: 20px;
   }
   ul {
    margin-left: 0; /* Отступ слева в браузере IE и Opera */
    padding-left: 0; /* Отступ слева в браузере Firefox, Safari, Chrome */
   }
}
.hero__col-x{
  opacity: 0;
  // display: none;
  position: absolute;
}
.hero__col-x1{
  opacity: 0;
  display: flex;
  transition: 1s;
  width: 100%;


}
.hero__col-x2{
  opacity: 0;
  display: flex;
  transition: 1s;
  width: 100%;


}
.hero__col-x3{
  opacity: 0;
  display: flex;
  transition: 1s;
  width: 100%;
}
.hero__nav2{
  display: none;
  justify-content: center;
  opacity: 0;
}
.hero__row-content{
  position: relative;
}
.active-category{
  border-bottom: 2px solid #f21ba0;
}
.hero__content{
  display: none;
}
.test{
  width: 100%;
  height: 100vh;  
  // background-color: white;
  z-index: 101;
}
.wrap{
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.hero__trans{
    // transition: 1s;

  span{
    // display: inline-block;
    // font-size: 50em;
    
    transition: 1s;
  }
}
.s1,
.s2,
.s3,
.s4{
  transition: 1s;
}


</style>