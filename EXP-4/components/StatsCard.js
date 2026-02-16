import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const StatsCard = React.memo(({ title, value }) => {
  console.log(`Rendered: ${title}`);
  return (
    <Card sx={{ minWidth: 200 }}>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="h4" color="primary">
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
});

export default StatsCard;
