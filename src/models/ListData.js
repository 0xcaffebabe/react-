import request from '../utils/request'

export default {
    namespace: 'list',
    state: {
        data: [1, 2, 3]
    }
    ,
    reducers: {
        addNewData(state){
            let list = [...state.data,Math.random()];

            console.log(list);
            return {
                data:list
            }
        }
    }
    ,
    effects:{
        *initData(params,sagaEffects){
            const {call,put} = sagaEffects;
            const url = "/ds/list";
            let data = yield call(request,url);
            yield put({
                type:"addNewData",
                data: data
            })
        }
    }
}
