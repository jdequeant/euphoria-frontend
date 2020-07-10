<template>
  <header>
    <div class="topbar flex bg-white border-gray-400 text-black shadow-inner border-b static top-0 inset-x-0 z-100 h-16 items-center">
      <div class="flex w-full relative mx-auto px-2 sm:px-6">
        <div class="inline-block self-center">
          <img id="logo" src="favicon-310.png" class="h-10 w-10 mx-3" />
        </div>
        <div class="inline-block self-center">
          <span class="text-baseplus font-semibold leading-tight">Eυρнoria GтD</span>
          <p class="text-xs font-mono hidden lg:block">An easy GTD tool to increase productivity an free your mind.</p>
          <p class="text-xs font-mono block lg:hidden"><currentDatetime></currentDatetime></p>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CurrentDatetime from '@/common/components/CurrentDatetime.vue'

@Component({
  components: { CurrentDatetime }
})
export default class Topbar extends Vue {
}
</script>

<style lang="stylus">
.topbar
  transform: translate3d(0, 0, 0);
  transition: 0.25s all ease-out;

.topbar-hidden
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
</style>
