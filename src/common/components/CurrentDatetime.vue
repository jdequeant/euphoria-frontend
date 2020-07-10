<template>
  <span>{{ now }}</span>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { format } from 'date-fns'
import fr from 'date-fns/locale/fr'

declare global {
  interface Window {
    locale: any;
  }
}
window.locale = fr

@Component
export default class CurrentDatetime extends Vue {
  now: string | null = null;
  interval: number | null = null;
  format = format;

  created() {
    this.interval = setInterval(() => this.now = this.getNow(), 1000);
  }

  getNow() {
    return format(new Date(), 'dddd DD MMMM YYYY, HH:mm:ss', { locale: window.locale });
  }
}
</script>

<style lang="stylus">
</style>
