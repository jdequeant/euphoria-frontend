<template>
  <label class="custom-label flex self-center" :class="checked && 'checked'">
        <div class="bg-white w-3 h-3 flex justify-center items-center mr-2">
          <input type="checkbox" class="hidden" v-model="checked">
          <svg class="hidden w-4 h-4 text-gray-600 pointer-events-none" viewBox="0 0 172 172"><g fill="none" stroke-width="none" stroke-miterlimit="10" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode:normal"><path d="M0 172V0h172v172z"/><path d="M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z" fill="currentColor" stroke-width="1"/></g></svg>
        </div>
        <span class="select-none">{{ label }}</span>
  </label>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Checkbox extends Vue {
  checked: boolean = false;

  @Prop()
  label!: string;

  @Prop()
  checkedByDefault!: boolean;

  created() {
    this.checked = this.checkedByDefault;
  }
}
</script>

<style lang="stylus">
.custom-label
  margin-bottom: 0
  & > div
    border: 1px solid #4a5568
    cursor: pointer
  &.checked > div
    border: 1px solid #a0aec0
  input:checked + svg
    display: block !important
</style>
