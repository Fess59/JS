require("react-hot-loader/patch")
import * as DCT from "DCT";
import { React, ReactDOM } from "Global";
import { App } from 'Forms';
import { AppContainer } from "react-hot-loader";

//return DCT.Execute(() => {
//});

//ReactDOM.render(
//    <App />, document.getElementById("root")
//);

const rootEl = document.getElementById("root");
ReactDOM.render(
    <AppContainer>
        <App />
    </AppContainer>,
    rootEl
);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept(App, () => {
        const NextApp = App.default;
        ReactDOM.render(
            <AppContainer>
                <NextApp />
            </AppContainer>
            ,
            rootEl
        );
    });
}
