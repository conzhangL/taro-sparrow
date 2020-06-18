import { getUser } from "@/services/index";

export default {
  namespace: "user",
  state: {
    userInfo: {},
  },
  reducers: {
    saveUserInfo(state, { payload }) {
      return { ...state, userInfo: payload };
    },
  },
  effects: {
    *getUser({ payload }, { call, put }) {
      const { data } = yield call(getUser);
      yield put({
        type: "saveUserInfo",
        payload: data.data,
      });
    },
  },
};
