import './App.css';
import Footer from './Footer';
import Header from './Header';
import MyGrid from './components/MyGrid';
import React from 'react';
import ButtonRow from './components/ButtonRow';
import AdvancedSearchGrid from './components/AdvancedSearchGrid';
import CustomerIDInfoGrid from './components/CustomerIDInfoGrid';
import AnalyticsView from './components/AnalyticsVIew';

function App() {
  const [currentSelection, setSelection] = React.useState("");
  let [rows, setRows] = React.useState([]);
  const [selectedRows, selectRow] = React.useState([]);
  const [inputVal, setinputVal] = React.useState("");
  const [predictedRows, setPredictedRows] = React.useState({});

  const [advancedSearchOptions, setAdvancedSearchOptions] = React.useState({
    isactive: false,
  });
  const value = { value: "" };
  console.log(value);

  
  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "#2C4350",
      }}
    >
      <div>
        <Header />
      </div>
      <div>
        <ButtonRow
          setSelection={setSelection}
          selectedRows={selectedRows}
          inputVal={inputVal}
          predictedRows={predictedRows}
          setPredictedRows={setPredictedRows}
          currentSelection={currentSelection}
          value={value}
          advancedSearchOptions={advancedSearchOptions}
          setAdvancedSearchOptions={setAdvancedSearchOptions}
          setinputVal={setinputVal}
        />
        {advancedSearchOptions.isActive ? (
          <AdvancedSearchGrid
            predictedRows={predictedRows}
            advancedSearchOptions={advancedSearchOptions}
            setRows={setRows}
            selectedRows={selectedRows}
            selectRow={selectRow}

          />
        ) : inputVal.length > 0 ? (
          <CustomerIDInfoGrid
            predictedRows={predictedRows}
            selectedRows={selectedRows}
            selectRow={selectRow}
            setinputVal={setinputVal}
            value={value}
            inputVal={inputVal}
          />
        ) : currentSelection == "b2" ?  <AnalyticsView /> :
        (
            <MyGrid
            />
        
        )}
        <Footer />
      </div>
    </div>
  );
}

export default App;
