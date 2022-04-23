<template>
  <div class="me">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data () {
    return {
      msg: '这里是个人资料'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
