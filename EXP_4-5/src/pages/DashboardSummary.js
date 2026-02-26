import { useSelector } from "react-redux";
import { useMemo } from "react";
import StatsCard from "../components/StatsCard";
import { Stack } from "@mui/material";

const DashboardSummary = () => {
  const logs = useSelector((state) => state.logs.data);

  const totalCarbon = useMemo(() => {
    console.log("Calculating total carbon...");
    return logs.reduce((sum, log) => sum + log.carbon, 0);
  }, [logs]);

  return (
    <Stack direction="row" spacing={3} justifyContent="center">
      <StatsCard title="Total Activities" value={logs.length} />
      <StatsCard title="Total CO₂ (kg)" value={totalCarbon} />
    </Stack>
  );
};

export default DashboardSummary;
