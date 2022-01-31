import React, {Suspense} from 'react'
import {Route, Routes} from "react-router-dom"
import {Navigate} from "react-router"
import Author from "../../Author"
import AllTweets from "../../AllTweets"

const Error = React.lazy(() => import('../../Error'));

const RouteSwitch = () => {
    return (
        <Suspense fallback={<div>Загрузка...</div>}>
            <Routes>
                <Route path={'/author'} element={<Author/>}/>
                <Route path={'/tweets'} element={<AllTweets/>}/>
                <Route path={'*'} element={<Error/>}/>
                <Route
                    path={"/"}
                    element={<Navigate to="/author"/>}
                />
            </Routes>
        </Suspense>
    );
};

export default RouteSwitch;