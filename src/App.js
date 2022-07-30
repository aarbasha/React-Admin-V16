import React from "react"
import RouterIndex from "./Routers/RouterIndex";
import { Provider } from 'react-redux'
import { store } from "./Redux/Store";
const App = () => {


  return (
    <Provider store={store}>

      <div className="App">
        <RouterIndex />
      </div>


    </Provider>
  );
}

export default App;
