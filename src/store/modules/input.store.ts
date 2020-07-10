import Vue from "vue";
import InputService from "@/common/services/input.service";
import {
  FETCH_INPUTS,
  PUBLISH_INPUT,
  EDIT_INPUT,
  DELETE_INPUT,
} from "../types/actions.type";

export const actions = {
  async [PUBLISH_INPUT](context, input) {
    try {
      await InputService.createInput(input);
      context.dispatch('Inputs/'+FETCH_INPUTS, {}, {root: true});
    } catch (e) {
      throw new Error(e);
    }
  },
  async [DELETE_INPUT](context, id) {
    try {
      await InputService.deleteInput(id);
      context.dispatch('Inputs/'+FETCH_INPUTS, {}, {root: true});
    } catch (e) {
      throw new Error(e);
    }
  },
  async [EDIT_INPUT](context, input) {
    try {
      await InputService.updateInput(input.id, input);
      context.dispatch('Inputs/'+FETCH_INPUTS, {}, {root: true});
    } catch (e) {
      throw new Error(e);
    }
  },
};

export default {
  namespaced: true,
  actions,
};
