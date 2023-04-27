import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import CardView from "./components/CardView";
import { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  return (
    <>
      <Router>
        <Alert alert={alert} />
        <div className="flex justify-end items-center min-h-screen min-w-max bg-[#D8D8D8]">
          <div className="mx-auto">
            <Routes>
              <Route
                exact
                path="/"
                index
                element={<CardView showAlert={showAlert} />}
              />
              <Route
                exact
                path="/form1"
                element={<Step1 showAlert={showAlert} />}
              />
              <Route
                exact
                path="/form2"
                element={<Step2 showAlert={showAlert} />}
              />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
