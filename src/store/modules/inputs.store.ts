import InputService from "@/common/services/input.service";
import { FETCH_INPUTS } from "../types/actions.type";
import { SET_INPUTS } from "../types/mutations.type";

const state = {
  inputs: [],
};

const actions = {
  async [FETCH_INPUTS]({ commit }) {
    try {
      const { data } = await InputService.getInputs();
      commit(SET_INPUTS, data);
    } catch (e) {
      throw new Error(e);
    }
  },
};

const mutations = {
  [SET_INPUTS](state, { inputs }) {
    state.inputs = inputs;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};
