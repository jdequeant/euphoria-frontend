<template>
  <div id="app" class="min-h-screen bg-gray-200">
    <topbar></topbar>
    <div class="w-full max-w-screen-xl relative mx-auto px-2 sm:px-6 pt-3 pb-40 md:pb-24">
      <router-view/>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import Topbar from '@/common/components/layout/Topbar.vue'

@Component({
  components: { Topbar }
})
export default class App extends Vue {

}
</script>

<style lang="stylus">
</style>
