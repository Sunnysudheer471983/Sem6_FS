import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="static" color="success">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6">EcoTrack</Typography>
        <div>
          <Button color="inherit" component={Link} to="/">Dashboard</Button>
          <Button color="inherit" component={Link} to="/logs">Logs</Button>
          <Button color="inherit" component={Link} to="/login">Login</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
