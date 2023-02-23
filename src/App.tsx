import { useState } from 'react';
import {Route, Routes} from "react-router-dom";
import {BaseComponent} from "./components/BasComponent";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<BaseComponent />}
      />
    </Routes>
  )
}
export default App
