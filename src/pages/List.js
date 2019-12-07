import React from 'react'
import {connect} from 'dva'

const namespace = 'list'

const map = (state)=>{
    const list = state[namespace].data;
    return {
        list
    }
};

const map1 = (dispatch)=>{
    return {
        addNewData:()=>{
            dispatch(
                {
                    type:namespace+"/addNewData"
                }
            )
        }
        ,
        initData:()=>{
            dispatch({
                type:namespace+"/initData"
            })
        }
    }
}

@connect(map,map1)
class List extends React.Component{

    componentDidMount() {
        this.props.initData();
    }

    render() {
        return <ul>
            {
                this.props.list.map((v,i)=>{
                    return <li>{v}</li>
                })
            }
            <button onClick={()=>{
                this.props.addNewData()
            }}>
                点击
            </button>
        </ul>
    }
}

export default List;
