import { observable, action, configure, runInAction } from 'mobx';
import { login } from '../services/loginService';
configure({ enforceActions: 'always' });

class loginStore {

  @observable loading = false

  @action setValue = (key, value) => {
    this[key] = value;
  }

  @action loginAction = async (data) => {
    try {
      this.loading = true;
      const res = await login(data);
      runInAction(() => {
        this.loading = false;
      });
      return res;
    } catch (e) {
      console.error(e);
      return e;
    }
  }

}

export default new loginStore()
