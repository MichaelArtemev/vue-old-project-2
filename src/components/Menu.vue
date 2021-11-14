<template>
  <div class="menu">
    <div class="menu__burger">
      <p class="menu__burger-m" @click="openPop" ref="bm">M<span>en</span>U</p>
      <p class="menu__burger-x" ref="bx" @click="closePop">X</p>
    </div>
    <div class="menu__content" ref="pop">
      <div class="menu__items">
        <nav>
          <ul>
            <router-link to="/"><li @click="closePop">H<span>o</span>me</li></router-link>
            <router-link to="/portfolio"><li @click="closePop">Po<span>r</span>tfolio</li></router-link>
            <router-link to="/about"><li @click="closePop"><span>A</span>bout</li></router-link>
            <router-link to="/contacts"><li @click="closePop">Contac<span>t</span>s</li></router-link>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
      }
    },
    methods:{
      openPop(){
        this.$refs.pop.style.marginTop = "0px";
        // this.$refs.pop.style.marginBottom = "0px";

        this.$refs.bm.style.display = "none";
        this.$refs.bx.style.display = "block"; 
      },
      closePop(){
        this.$refs.bx.style.display = "none";  
        this.$refs.bm.style.display = "block";
        this.$refs.bm.style.pointerEvents = "none";  
        setTimeout(
          ()=>{
            this.$refs.bm.style.pointerEvents = "auto";  
          },1000
        )


        this.$refs.pop.style.marginTop = "-350%";
      }
    }
  }
</script>

<style lang="scss" scoped>
.menu__content{
  width: 100%;
  height: 100vh;
  margin: auto;
  background-color: white;
  position: fixed;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  font-size: 5em;
  color: #f21ba0;
  margin-top: -350%;
  transition: 1s;
}
.menu__burger{
  z-index: 101;
  position: fixed;
  font-family: 'Major Mono Display', monospace;
  font-size: 4em;
  color: #f21ba0;
  font-weight: bold;
  top: 10px;
  right: 20px;
}
li{
  list-style-type: none;
  cursor: pointer;
}
ul {
    margin-left: 0; /* Отступ слева в браузере IE и Opera */
    padding-left: 0; /* Отступ слева в браузере Firefox, Safari, Chrome */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
}
.menu__items{
  span{
    font-family: 'Major Mono Display', monospace;
  }
  font-weight: bold;
  text-transform: uppercase;
}
.menu__burger-m{
  span{
    font-size: 0.3em;
  }
  cursor: pointer;
}
.menu__burger-x{
  cursor: pointer;
  display: none;
}
@media(max-width: 633px){
  .menu__content{
    font-size: 3em;
  }
}
@media(max-width: 333px){
  .menu__content{
    font-size: 2em;
    height: 120vh;
  }
}
@media(max-height: 446px){
  .menu__content{
    font-size: 3em !important;
  }
}
a{
  text-decoration: none;
  color: inherit;
}
</style>