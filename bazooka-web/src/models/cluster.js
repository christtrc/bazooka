import { cluster } from '@/services/cluster';
const ClusterModel = {
  namespace: 'cluster',
  state: {
    clusterList: {},
    clusterNodeAll: []
  },
  effects: {
    *clusterList({ payload }, { call, put }) {
      const response = yield call(cluster.getClusterPage, payload);
      yield put({
        type: 'getClusterPage',
        payload: response,
      });
    },
    *clusterNodeAll({ payload }, { call, put }) {
      const response = yield call(cluster.getClusterNodeAll, payload);
      yield put({
        type: 'getClusterNodeAll',
        payload: response,
      });
    },
  },
  reducers: {
    getClusterPage(state, { payload = {} }) {
      return {
        ...state,
        clusterList: payload.data || {},
      };
    },
    getClusterNodeAll(state, { payload = {} }) {
      return {
        ...state,
        clusterNodeAll: payload.data || [],
      };
    },
    clearData(state, { payload = {} }) {
      return {
        ...state,
        ...payload
      };
    },
  },
};
export default ClusterModel;
