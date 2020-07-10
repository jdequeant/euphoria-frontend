<template>
<div>
  <div class="col-md-12 form-wrapper">
    <form id="create-post-form" @submit.prevent="submitInput">
      <div class="form-group">
        <div class="input-group">
          <input
            type="text"
            id="description"
            name="description"
            class="form-control border-gray-300"
            v-model="input.description"
            placeholder="Enter description"
          >
          <div class="input-group-append">
            <button class="btn btn-success border-success-600" type="submit">Publish</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class InputCreate extends Vue {
  @Prop()
  input: any;

  submitInput() {
    this.$emit('submitInput', this.input);
  }
}
</script>
