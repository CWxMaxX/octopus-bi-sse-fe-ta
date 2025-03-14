import "./App.css";
import ActivityLogTable from "./components/ActivityLogTable/ActivityLogTable";

function App({logData}) {
  return (
    <>
      <ActivityLogTable logData={logData} />
    </>
  );
}

export default App;
