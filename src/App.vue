<template>
  <h1 class='header'>SPLI<br>TTER</h1>
  <Container />
</template>

<script>
import Container from './components/Container.vue'

export default {
  components: { Container },
  name: "App",
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #0E0E0E;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

#app {
  background-color: var(--Lightgrayishcyan);
  max-width: 1440px;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

}

.header {
  color: var(--Verydarkcyan);
  font-size: 24px;
  margin-top: 160px;
  letter-spacing: 10px;
}
@media screen and (max-width: 850px) {
  .header{
    margin-top: 50px;
  }
  #app{
    height:auto;
    padding-bottom: 50px;
  }
}
@media screen and (max-width: 500px) {
  .header {
    margin-top: 30px;
  }

  #app {
    height: auto;
    padding-bottom: 30px;
  }
}

</style>
