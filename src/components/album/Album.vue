<template>
  <div class="album">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Album',
  data () {
    return {
      msg: '这里是相册'
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
