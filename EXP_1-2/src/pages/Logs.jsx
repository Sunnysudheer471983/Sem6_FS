import {useSelector, useDispatch} from "react-redux";
import { fetchLogs } from "../store/logsSlice";
import { useEffect } from "react";
const Logs = () => {
  const dispatch = useDispatch();
  const {data,status,error} = useSelector((state) => state.logs);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchLogs());
    }},[status,dispatch]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }
if (status === "failed") {
    return <p>Error: {error}</p>;
  }

  return (
    <div style={{padding: "1rem"}}>
      <h3>Daily Logs (redux)</h3>
      <ul>
        {data.map(log => (
          <li key={log.id}>
           {log.activity} -{log.carbon} Kgs CO2
          </li>
        ))}
      </ul>
    </div>
  );
};


export default Logs;
