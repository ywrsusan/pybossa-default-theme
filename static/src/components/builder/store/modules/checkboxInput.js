import * as types from '../types';
import utils from '../../utils';

const prop = (value, isVariable) => {
  return { value, isVariable };
};

const initialState = () => {
  return {
    label: prop('', false),
    labelAdded: false,
    checkboxList: [getCheckboxObject()]
  };
};

export const getCheckboxObject = () => {
  return {
    id: prop(utils.uniqueID(), false),
    'pyb-answer': prop('', false),
    label: prop('', false),
    labelAdded: false,
    'initial-value': { ...prop(false, true) },
    isValidForm: true
  };
};

export const state = {
  checkboxInput: {
    form: initialState()
  }
};

export const getters = {
  [types.GET_CHECKBOX_INPUT_FORM]: state => {
    return state.checkboxInput.form;
  },
  [types.GET_CHECKBOX_INPUT_FORM_VALID]: () => {
    return true;
  }
};

export const mutations = {
  [types.MUTATE_CHECKBOX_INPUT_FORM]: (state, payload) => {
    state.checkboxInput.form = payload;
  }
};

export const actions = {
  [types.UPDATE_CHECKBOX_INPUT_FORM]: ({ commit }, payload) => {
    commit(types.MUTATE_TEXT_INPUT_FORM, payload);
  },
  [types.CLEAR_CHECKBOX_INPUT_FORM]: ({ commit }) => {
    commit(types.MUTATE_CHECKBOX_INPUT_FORM, initialState());
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};