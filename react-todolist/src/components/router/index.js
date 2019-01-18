import Home from '../home/home.jsx';
import News from '../news/news.jsx';
import NewsList from '../news/newslist.jsx';
import Goods from '../shop/goods.jsx';
import ShopList from '../shop/shoplist.jsx';
import Server from '../server/server.jsx';
import About from '../about/about.jsx';
import Login from '../server/login';
import Logout from '../server/logout';

const routes = [
    {
        path: '/',
        exact: true,
        component: Home,
    },
    {
        path: '/news',
        component: News,
    },
    {
        path: '/newsList',
        component: NewsList,
    },
    {
        path: '/shopList',
        component: ShopList,
    },
    {
        path: '/goods',
        component: Goods,
    },
    {
        path: '/server',
        component: Server,
        routes: [
            {
                path: '/server/login',
                component: Login,
            },
            {
                path: '/server/logout',
                component: Logout
            }
        ]
    },
    {
        path: '/about',
        component: About,
    }
];

export default routes;