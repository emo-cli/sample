<template>
  <div class="content">
    <img class="logo" :src="require('../assets/logo.png')">
    <p class="slogan">高效混合App快速开发平台</p>
    <div class="blink">
      <p :class="['event',isDeviceReady?'received':'listening']">{{isDeviceReady()?'DEVICE IS READY':'CONNECTING TO DEVICE'}}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: "index",
  data () {
    return {
    }
  },
  computed: {
    isDeviceReady() {
      return this.$store.state.deviceready
    }
  },
  watch:{
    isDeviceReady: function (deviceready){
      if (deviceready) {
        console.log('deviceready')
      }
    }
  }

}
</script>

<style scoped>
.content {
  width: 100%;
}

.logo {
  margin-top: 20px;
  width: 80%;
  margin-left: 10%;
}

.slogan {
  margin-top: 20px;
  text-align: center;
  font-size: 16px;
  letter-spacing: 2px;
  font-weight: bold;
}

.event {
  border-radius:4px;
  -webkit-border-radius:4px;
  color:#FFFFFF;
  font-size:14px;
  margin-top: 15px;
  width: 200px;
  text-align: center;
  padding:2px 0;
}

.event.listening {
  background-color:#333333;
}

.event.received {
  background-color:#4B946A;
}


.blink {
  animation:fade 3000ms infinite;
  -webkit-animation:fade 3000ms infinite;
  display: flex;
  justify-content: center;
}

@keyframes fade {
  from { opacity: 1.0; }
  50% { opacity: 0.4; }
  to { opacity: 1.0; }
}

@-webkit-keyframes fade {
  from { opacity: 1.0; }
  50% { opacity: 0.4; }
  to { opacity: 1.0; }
}


</style>
