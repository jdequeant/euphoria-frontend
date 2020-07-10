import ApiService from '@/common/services/api.service'

const resource = 'input';

const InputService = {
  getInputs() {
    return ApiService.query(resource, {});
  },
  getInput(id) {
    return ApiService.get(resource, id);
  },
  createInput(data) {
    return ApiService.post(resource, data);
  },
  updateInput(id, data) {
    return ApiService.update(resource, id, data);
  },
  deleteInput(id) {
    return ApiService.delete(resource, id);
  }
};

export default InputService;
