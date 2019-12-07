import React from 'react';

class HelloWorld extends React.Component{

    constructor(props, context) {
        super(props, context);
        this.state = {
            dataList : [1,2,3]
        };
    }

    // 组件挂载后调用
    componentDidMount() {
        console.log("组件挂载后...");
    }

    render() { // 重写渲染方法
        return <div>
            <ul>
                {
                    this.state.dataList.map((value,index)=>{
                      return <li>{value}</li>
                    })
                }
            </ul>
            <button onClick={()=>{
                let list = this.state.dataList;
                list.push(Math.random());
                this.setState({dataList:list})
            }}>click</button>
        </div>
    }
}

export default HelloWorld; // 导出该类
