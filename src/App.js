import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SettingsIcon from "@mui/icons-material/Settings";
import SpeedIcon from "@mui/icons-material/Speed";
import BuildIcon from "@mui/icons-material/Build";
import FolderIcon from "@mui/icons-material/Folder";
import Chart from "./Components/chart.js";
import { useNavigate } from "react-router";
import { Routes, Route } from "react-router-dom";
import { styled } from "@mui/material/styles";
import TableChartIcon from "@mui/icons-material/TableChart";
import BarChartIcon from "@mui/icons-material/BarChart";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ListIcon from "@mui/icons-material/List";
import LogoutIcon from "@mui/icons-material/Logout";
import Button from "@mui/material/Button";
import { Dashboard } from "./Components/Dashboard";
import { Cards } from "./Components/Cards";
import { Buttons } from "./Components/Buttons";
import { Colors } from "./Components/Colors";
import { Borders } from "./Components/Borders";
import { Others } from "./Components/Others";
import { Animations } from "./Components/Animations";
import { TableData } from "./Components/Table";
import { NotFound } from "./Components/NotFound";
import { Accordion } from "react-bootstrap";
import { EditUser } from "./Components/Users/EditUser";
import { AddUser } from "./Components/Users/AddUser";

const drawerWidth = 200;

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: " #f0f5f5",
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "63%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function App(props) {
  const usersList = [
    {
      id: 1,
      name: "Zorita Serrano",
      position: "Software Engineer",
      age: 23,
      office: "San Francisco",
      salary: "$115,000",
     
    },
    {
      id: 2,
      name: "Angelica Ramos",
      position: "Chief Executive Officer (CEO)",
      age: 47,
      office: "London",
      salary: "$,200,000",
    
    },
    {
      id: 3,
      name: "Bruno Nash",
      position: "Software Engineer",
      age: 38,
      office: "London",
      salary: "$163,500",

    },
    {
      id: 4,
      name: "Cedric Kelly",
      position: "Senior Javascript Developer",
      age: 23,
      office: "Edinburgh",
      salary: "$433,060",

    },
    {
      id: 5,
      name: "Suki Burks",
      position: "Developer",
      age: 53,
      office: "London",
      salary: "$114,500",
 
    },
    {
      id: 6,
      name: "Jackson Bradshaw",
      position: "Director",
      age: 65,
      office: "New York",
      salary: "$645,750",

    },
  ];

  const [users, setUsers] = useState(usersList);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <PersonIcon />
        Profile
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <SettingsApplicationsIcon />
        Settings
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <ListIcon />
        Activity Log
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleMenuClose}>
        <LogoutIcon />
        Log Out
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={3} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={7} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const navigate = useNavigate();

  const drawer = (
    <div >
      <Toolbar />

      <Divider />

      <List>
        {/* DASHBOARD */}
        <ListItem
          button
          key="Dashboard"
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          <ListItemIcon>
            <SpeedIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <Divider />
        <Typography variant="caption" color="text.secondary" gutterBottom>
          INTERFACE
        </Typography>
        {/* COMPONENTS */}
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <SettingsIcon />
              Components
            </Accordion.Header>
            <Accordion.Body>
              <ListItem
                button
                key="buttons"
                onClick={() => {
                  navigate("/buttons");
                }}
              >
                <ListItemText primary="Buttons" />
              </ListItem>
              <ListItem
                button
                key="cards"
                onClick={() => {
                  navigate("/cards");
                }}
              >
                <ListItemText primary="Cards" />
              </ListItem>
            </Accordion.Body>
          </Accordion.Item>
            {/* UTILITIES */}
          <Accordion.Item eventKey="1">
            <Accordion.Header><BuildIcon />Utilities</Accordion.Header>
            <Accordion.Body>
            <ListItem
              button
              key="colors"
              onClick={() => {
                navigate("/colors");
              }}
            >
              <ListItemText primary="Colors" />
            </ListItem>
            <ListItem
              button
              key="borders"
              onClick={() => {
                navigate("/borders");
              }}
            >
              <ListItemText primary="Borders" />
            </ListItem>
            <ListItem
              button
              key="animations"
              onClick={() => {
                navigate("/animations");
              }}
            >
              <ListItemText primary="Animations" />
            </ListItem>
            <ListItem
              button
              key="others"
              onClick={() => {
                navigate("/others");
              }}
            >
              <ListItemText primary="Others" />
            </ListItem>
            </Accordion.Body>
          </Accordion.Item>
          <Typography variant="caption" color="text.secondary" gutterBottom>
          ADD ONS
        </Typography>
        {/* PAGES */}
          <Accordion.Item eventKey="2" variant="primary">
            <Accordion.Header><FolderIcon />Pages</Accordion.Header>
            <Accordion.Body>
            <ListItem
              button
              key="login"
              onClick={() => {
                navigate("/login");
              }}
            >
              <ListItemText primary="Login" />
            </ListItem>
            <ListItem
              button
              key="register"
              onClick={() => {
                navigate("/register");
              }}
            >
              <ListItemText primary="Register" />
            </ListItem>
            <ListItem
              button
              key="forgotpassword"
              onClick={() => {
                navigate("/forgotpassword");
              }}
            >
              <ListItemText primary="Forgot Password" />
            </ListItem>
            <Typography variant="caption" display="block" gutterBottom>
              OHTER PAGES
            </Typography>
            <ListItem
              button
              key="404page"
              onClick={() => {
                navigate("/404page");
              }}
            >
              <ListItemText primary="404 Page" />
            </ListItem>
            <ListItem
              button
              key="blank"
              onClick={() => {
                navigate("/blankpage");
              }}
            >
              <ListItemText primary="Blank Page" />
            </ListItem>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      
      
        <Divider />
        <Typography variant="caption" color="text.secondary" gutterBottom>
          ADD ONS
        </Typography>
        {/* PAGES */}
       
        <ListItem
          button
          key="charts"
          onClick={() => {
            navigate("/charts");
          }}
        >
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary="Charts" />
        </ListItem>
        <Divider />
        <ListItem
          button
          key="tables"
          onClick={() => {
            navigate("/tables");
          }}
        >
          <ListItemIcon>
            <TableChartIcon />
          </ListItemIcon>
          <ListItemText primary="Tables" />
        </ListItem>
        <Divider />
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        style={{ backgroundColor: "white", color: "black" }}
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Search>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
            <Button variant="contained" color="primary">
              <SearchIcon />
            </Button>
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={3} color="error">
                <NotificationsIcon color="disabled" />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={7} color="error">
                <MailIcon color="disabled" />
              </Badge>
            </IconButton>

            <Divider orientation="vertical" flexItem />
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Typography variant="caption" display="block" gutterBottom>
                Doulas Mcgee
              </Typography>
              <AccountCircle color="disabled" />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/buttons" element={<Buttons />} />
          <Route exact path="/cards" element={<Cards />} />
          <Route exact path="/colors" element={<Colors />} />
          <Route exact path="/borders" element={<Borders />} />
          <Route exact path="/animations" element={<Animations />} />
          <Route exact path="/others" element={<Others />} />
          <Route exact path="/charts" element={<Chart />} />
          <Route exact path="/tables" element={<TableData users={users} setUsers={setUsers}/>} />
          <Route exact path="/404page" element={<NotFound />} />
          <Route exact path="/blankpage" element={<BlankPage />} />
            
        <Route
          path="/tables/edit-user/:id"
          element={<EditUser users={users} setUsers={setUsers} />}
        />
        <Route
          path="/tables/create-user"
          element={<AddUser users={users} setUsers={setUsers} />}
        />
        </Routes>
      </Box>
    </Box>
  );
}

function BlankPage() {
  return (
    <div>
      <h1>Blank Page</h1>
    </div>
  );
}
