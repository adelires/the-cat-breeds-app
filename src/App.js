import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { Store } from './store';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

const App = () => {
    return (
        <Provider store={Store}>
            <BrowserRouter>
                <div className="app">
                    <div className="app__sidebar">
                        <Sidebar />
                    </div>
                    <div className="app__content">
                        <div className="app__header">
                            <Header pageTitle="Breeds" />
                        </div>
                        <div className="app__page">
                            <Routes />
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
