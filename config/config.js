export default {
    plugins:[
        ['umi-plugin-react',{
            dva:true,
            antd:true
        }]
    ],
    routes:[{
        path:'/',
        component:'../layouts',
        routes: [
            {
                path:'/myTabs',
                component:'./MyTab'
            }
            ,
            {
                path:'/user/add',
                component:'./user/UserAdd'
            }
            ,
            {
                path:'/user/list',
                component:'./user/UserList'
            }
        ]
    }]
};
