<template>
  <div class=" text-center">

    <Navbar/>
    <router-view />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: {Navbar}
}
</script>

<style>
#app {

}
</style>
