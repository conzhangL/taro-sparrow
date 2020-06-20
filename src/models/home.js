import { getBrands, getGoodsList, getGoodsDetail,getNavImgList } from "@/services/index";

export default {
  namespace: "home",
  state: {
    navImgList:[],
    brands: [],
    goodsList: [],
    goodsData: null,
  },
  reducers: {
    saveNavImgList(state, { payload }) {
      return { ...state, navImgList: payload };
    },
    saveBrands(state, { payload }) {
        return { ...state, brands: payload };
      },
    saveGoodsList(state, { payload }) {
      return { ...state, goodsList: payload };
    },
    saveGoodsData(state, { payload }) {
      return { ...state, goodsData: payload };
    },
  },
  effects: {
    *getNavImgList({ payload }, { call, put }) {
      const { data } = yield call(getNavImgList);
      yield put({
        type: "saveNavImgList",
        payload: data,
      });
    },
    *getBrands({ payload }, { call, put }) {
        const { data } = yield call(getBrands);
        yield put({
          type: "saveBrands",
          payload: data,
        });
      },
    *getGoodsList({ payload }, { call, put }) {
      const { data } = yield call(getGoodsList);
      yield put({
        type: "saveGoodsList",
        payload: data,
      });
    },

    *getGoodsDetail({ payload }, { call, put }) {
      const { data } = yield call(getGoodsDetail);
      yield put({
        type: "saveGoodsData",
        payload: data,
      });
    },
  },
};
