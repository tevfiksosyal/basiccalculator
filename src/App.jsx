import React, { useReducer } from 'react';

import TotalDisplay from './components/TotalDisplay.jsx';
import CalcButton from './components/CalcButton.jsx';
import reducer, { initialState } from './store/reducers.jsx';
import {
  applyNumber,
  changeOperation,
  clearDisplay,
  equal,
  clearMemory,
  recallMemory,
  addMemory,
} from './store/actions.jsx';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleApplyNumber = (number) => {
    dispatch(applyNumber(number));
  };
  const handleChangeOperation = (operation) => {
    dispatch(changeOperation(operation));
  };
  const handleClearDisplay = () => {
    dispatch(clearDisplay());
  };
  const handleEqual = () => {
    dispatch(equal());
  };
  const handleClearMemory = () => {
    dispatch(clearMemory());
  };
  const handleRecallMemory = () => {
    dispatch(recallMemory());
  };
  const handleAddMemory = () => {
    dispatch(addMemory());
  };
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.temp} />
            <div className="row details">
              <span id="operation">
                <b>Operation: {state.operation}</b>
              </span>
              <span id="memory">
                <b>Memory: {state.memory}</b>
              </span>
            </div>
            <div className="row">
              <CalcButton value={'M+'} onClick={() => handleAddMemory()} />
              <CalcButton value={'MR'} onClick={() => handleRecallMemory()} />
              <CalcButton value={'MC'} onClick={() => handleClearMemory()} />
            </div>
            <div className="row">
              <CalcButton value={1} onClick={() => handleApplyNumber(1)} />
              <CalcButton value={2} onClick={() => handleApplyNumber(2)} />
              <CalcButton value={3} onClick={() => handleApplyNumber(3)} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => handleApplyNumber(4)} />
              <CalcButton value={5} onClick={() => handleApplyNumber(5)} />
              <CalcButton value={6} onClick={() => handleApplyNumber(6)} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => handleApplyNumber(7)} />
              <CalcButton value={8} onClick={() => handleApplyNumber(8)} />
              <CalcButton value={9} onClick={() => handleApplyNumber(9)} />
            </div>
            <div className="row">
              <CalcButton
                value={'+'}
                onClick={() => handleChangeOperation('+')}
              />
              <CalcButton value={0} onClick={() => handleApplyNumber(0)} />
              <CalcButton
                value={'-'}
                onClick={() => handleChangeOperation('-')}
              />
            </div>
            <div className="row">
              <CalcButton
                value={'*'}
                onClick={() => handleChangeOperation('*')}
              />
              <CalcButton
                value={'/'}
                onClick={() => handleChangeOperation('/')}
              />
              <CalcButton value={'CE'} onClick={() => handleClearDisplay()} />
            </div>

            <div className="row eq_button">
              <CalcButton value={'='} onClick={() => handleEqual()} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
