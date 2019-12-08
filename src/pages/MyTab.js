import React from 'react'
import {Tabs} from 'antd'

const TabPane = Tabs.TabPane

const callback = (key)=>{
    console.log(key)
}

class MyTab extends React.Component{

    render() {
        return (
        <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="tab1" key="1">
                tab pane 1
            </TabPane>
            <TabPane tab="tab2" key="2">
                tab pane 2
            </TabPane>
            <TabPane tab="tab3" key="3">
                tab pane 3
            </TabPane>
        </Tabs>
        )
    }
}

export default MyTab
