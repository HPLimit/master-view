import React from 'react';
import {Switch, Route, NavLink} from 'react-router-dom';
import router from './app/route';
import asyncComponent from './app/component/asyncComponent';

export default async function App(currentPath = "/") {
    let arrRouter = await Promise.all(Object.keys(router).map(async (key)=>{
        let {path,  getComponent} = router[key];
        let Component;
        if(currentPath == path){
            Component =  await getComponent().then(module => module.default);
        }else{
            Component = asyncComponent(() => getComponent().then(module => module.default))
        }

        router[key].component = Component;
        return router[key]
    }))

    class App extends React.Component{
        render() {
            return (
                <div id="wrap-app">
                    <nav>
                        <ul>
                            {arrRouter.map(({path, title})=>{
                                return <li key={path}><NavLink to={path}>{title}</NavLink></li>
                            })}
                        </ul>
                    </nav>
                    <Switch>
                        {arrRouter.map(({path, exact, component: Component})=>{
                            return <Route key={path} path={path} exact={exact} component={Component}/>
                        })}
                    </Switch>
                </div>
            );
        }
    }

    return App;
}
