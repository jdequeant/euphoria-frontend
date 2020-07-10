<template>
  <div class="w-full max-w-screen-sm lg:ml-64">
    <input-create
      :input="input"
      @submitInput="onSubmitInput"
    >
    </input-create>
    <input-list
      :inputs="inputs"
      :isLoading="isLoading"
      @editInput="onEditInput"
      @deleteInput="onDeleteInput"
    >
    </input-list>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import InputCreate from '@/components/input/InputCreate.vue';
import InputList from '@/components/input/InputList.vue';
import { FETCH_INPUTS, EDIT_INPUT, DELETE_INPUT, PUBLISH_INPUT } from "@/store/types/actions.type";
import { mapActions } from "vuex";

@Component({
  components: { InputCreate, InputList },
  methods: {
    ...mapActions('Inputs', [FETCH_INPUTS]),
  }
})
export default class InputsView extends Vue {
  isLoading: boolean = false;

  input: any = this.getInitialInput();

  getInitialInput() {
    return {
      description: '',
    }
  }

  resetInput() {
    Object.assign(this.$data.input, this.getInitialInput())
  }

  async mounted() {
    this.isLoading = true;
    await this.fetchInputs();
    this.isLoading = false;
  }

  async fetchInputs() {
    await this.$store.dispatch('Inputs/'+FETCH_INPUTS);
  }

  async onEditInput(e, input) {
    // If value hasn't changed, do nothing
    if (e.target.innerText === input.description)
      return;

    const inputData = {
      id: input._id,
      description: e.target.innerText,
      modified_at: Date.now()
    };

    await this.$store.dispatch('Input/'+EDIT_INPUT, inputData);
  }

  async onDeleteInput(id) {
    await this.$store.dispatch('Input/'+DELETE_INPUT, id);
  }

  async onSubmitInput(input) {
    await this.$store.dispatch('Input/'+PUBLISH_INPUT, input);
    this.resetInput();
  }

  get inputs() {
    return this.$store.state.Inputs.inputs;
  }
}
</script>
