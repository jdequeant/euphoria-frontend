<template>
<div>
  <!-- Uncategorized input -->
  <div class="bg-white m-3 rounded-lg border border-gray-300 shadow-sm-clear px-4 py-2">
    <div class="flex items-center justify-between leading-tigh">
      <div class="flex">
        <h3 class="text-cardTitle font-bold inline-block">Entrée non catégorisée</h3>
      </div>
      <span class="ellipsis-h font-bold font-serif text-gray-500 cursor-pointer" v-on:click="onClick()"></span>
    </div>
  </div>
  <div class="bg-white m-3 rounded-lg border border-gray-300 shadow-sm-clear px-4 py-2">
    <div class="flex items-center justify-between leading-tigh">
      <div class="flex">
        <h3 class="text-cardTitle font-bold inline-block">Entrée non catégorisée</h3>
      </div>
      <span class="ellipsis-h font-bold font-serif text-gray-500 cursor-pointer" v-on:click="onClick()"></span>
    </div>
    <div class="flex items-center justify-between leading-tigh">
      <span class="text-xs text-gray-600">21 janvier 2020, 10:38</span>
    </div>
  </div>
  <!-- Open task -->
  <div class="bg-white m-3 rounded-lg border border-gray-300 shadow-sm-clear px-4 py-2">
    <div class="flex items-center justify-between leading-tigh">
      <div class="flex">
        <checkbox />
        <h3 class="text-cardTitle font-bold inline-block">Acheter le lait</h3>
      </div>
      <span class="ellipsis-h font-bold font-serif text-gray-500 cursor-pointer" v-on:click="onClick()"></span>
    </div>
  </div>
  <div class="bg-white m-3 rounded-lg border border-gray-400 shadow-sm-clear px-4 py-2">
    <div class="flex items-center justify-between leading-tigh">
      <div class="flex">
        <checkbox />
        <h3 class="text-cardTitle font-bold inline-block">Acheter le lait</h3>
      </div>
      <span class="ellipsis-h font-bold font-serif text-gray-500 cursor-pointer" v-on:click="onClick()"></span>
    </div>
    <div class="flex items-center justify-between leading-tigh">
      <span class="text-xs text-gray-600">Aujourd'hui, 19:30</span>
    </div>
  </div>
  <!-- Closed task -->
  <div class="bg-white m-3 rounded-lg border border-gray-300 shadow-sm-clear px-4 py-2">
    <div class="flex items-center justify-between leading-tigh">
      <div class="flex">
        <checkbox :checkedByDefault="true"></checkbox>
        <h3 class="text-gray-600 font-bold inline-block line-through">Acheter le pain</h3>
      </div>
      <span class="ellipsis-h font-bold font-serif text-gray-500 cursor-pointer" v-on:click="onClick()"></span>
    </div>
  </div>
  <div class="bg-white m-3 rounded-lg border border-gray-300 shadow-sm-clear px-4 py-2">
    <div class="flex items-center justify-between leading-tigh">
      <div class="flex">
        <checkbox :checkedByDefault="true"></checkbox>
        <h3 class="text-gray-600 font-bold inline-block line-through">Acheter le pain</h3>
      </div>
      <span class="ellipsis-h font-bold font-serif text-gray-500 cursor-pointer" v-on:click="onClick()"></span>
    </div>
    <div class="flex items-center justify-between leading-tigh">
      <span class="text-xs text-gray-600"><font-awesome-icon :icon="['fas', 'angle-right']" class="chevron-task-done mr-6px fa-lg fa-lg-1" /> Fait le 30 janvier 2001, 14:20</span>
    </div>
    <hr class="my-1" />
    <div class="flex items-center justify-between leading-tigh">
      <span class="text-xs text-gray-600">Il y a quelques minutes</span>
    </div>
  </div>
  <!-- Event input -->
  <div class="bg-white m-3 rounded-lg border border-gray-300 shadow-sm-clear px-4 py-2">
    <div class="flex items-center justify-between leading-tigh">
      <span class="text-xs text-gray-800"><font-awesome-icon :icon="['far', 'clock']" class="mr-6px fa-lg fa-lg-1" /><span class="text-red-600">24</span> janvier, 14:00</span>
      <span class="ellipsis-h font-bold font-serif text-gray-500 cursor-pointer" v-on:click="onClick()"></span>
    </div>
    <div class="flex items-center justify-between leading-tigh">
      <div class="flex">
        <h3 class="text-cardTitle font-bold inline-block mt-2px mb-1">RDV Scanner</h3>
      </div>
    </div>
  </div>
  <div class="bg-white m-3 rounded-lg border border-gray-300 shadow-sm-clear px-4 py-2">
    <div class="flex items-center justify-between leading-tigh">
      <span class="text-xs text-gray-800"><font-awesome-icon :icon="['far', 'clock']" class="mr-6px fa-lg fa-lg-1" /><span class="text-red-600">24</span> janvier, 14:00</span>
      <span class="ellipsis-h font-bold font-serif text-gray-500 cursor-pointer" v-on:click="onClick()"></span>
    </div>
    <div class="flex items-center justify-between leading-tigh">
      <div class="flex">
        <h3 class="text-cardTitle font-bold inline-block mt-2px mb-1">RDV Scanner</h3>
      </div>
    </div>
    <hr class="my-1" />
    <div class="flex items-center justify-between leading-tigh">
      <span class="text-xs text-gray-600">21 janvier 2020, 10:38</span>
      <span class="text-xs text-black font-bold">Dans 5 jours</span>
    </div>
  </div>
  <!-- Old event input -->
  <div class="bg-white m-3 rounded-lg border border-gray-300 shadow-sm-clear px-4 py-2">
    <div class="flex items-center justify-between leading-tigh">
      <span class="text-xs text-gray-600"><font-awesome-icon :icon="['far', 'clock']" class="mr-6px fa-lg fa-lg-1" />24 janvier, 14:00</span>
      <span class="ellipsis-h font-bold font-serif text-gray-500 cursor-pointer" v-on:click="onClick()"></span>
    </div>
    <div class="flex items-center justify-between leading-tigh">
      <div class="flex">
        <h3 class="text-gray-600 font-bold inline-block mt-2px mb-1 line-through">RDV Scanner</h3>
      </div>
    </div>
    <hr class="my-1" />
    <div class="flex items-center justify-between leading-tigh">
      <span class="text-xs text-gray-600">Il y a 3h</span>
    </div>
  </div>
  <div class="container-fluid">
    <div class="text-center">
      <div v-if="!isLoading">
        <h2 v-if="inputs && inputs.length === 0">No input found at the moment</h2>
      </div>
      <div v-else>
        <h2>Loading...</h2>
      </div>
    </div>

    <div class="">
      <table class="table table-bordered" v-if="!isLoading">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Done</th>
            <th scope="col">Deleted</th>
            <th scope="col">Created at</th>
            <th scope="col">Modified at</th>
          </tr>
        </thead>
        <tbody class="bg-white">
          <tr v-for="input in inputs" :input="input" :key="input._id">
            <td contenteditable @blur="editInput($event, input)">{{ input.description }}</td>
            <td>{{ input.done }}</td>
            <td>{{ input.deleted }}</td>
            <td>{{ input.created_at | datetime }}</td>
            <td>{{ input.modified_at | datetime }}</td>
            <td>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group" style="margin-bottom: 20px;">
                  <button class="btn btn-sm btn-outline-secondary" v-on:click="deleteInput(input._id)">Delete</button>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Checkbox from '@/common/components/form/Checkbox.vue';

@Component({
  components: { Checkbox }
})
export default class InputList extends Vue {
  @Prop()
  isLoading: boolean = false;

  @Prop()
  inputs: any;

  deleteInput(id) {
    this.$emit('deleteInput', id);
  }

  editInput(event, input) {
    this.$emit('editInput', event, input);
  }

  onClick () {
    window.alert('clicked')
  }
}
</script>

<style lang="stylus">
.ellipsis-h:after
    content: " \B7\B7\B7 "
.fa-lg-1
    font-size: 1.15em
.svg-inline--fa.fa-lg-1
    vertical-align: -0.17em
h3
    font-size: 12px !important
    line-height: 12px
svg.chevron-task-done
    margin-right: 0 !important
    height: 15px
</style>
