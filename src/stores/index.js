/*
* 所有的stores都放到这里来整合吧
* */
import indexStore from './indexStore';
import loginStore from './loginStore';

const stores = {
  indexStore,
  loginStore
}

export default stores;
