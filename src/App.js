import "./App.css";
import * as React from "react";
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
import Chart from "./chart.js";
import { useNavigate } from "react-router";
import { Routes, Route } from "react-router-dom";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
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
import { Dashboard } from "./Dashboard";
import { Cards } from "./Cards";
import { Buttons } from "./Buttons";
import { Colors } from "./Colors";
import { Borders } from "./Borders";
import { Others } from "./Others";
import { Animations } from "./Animations";

const drawerWidth = 200;

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "#4e73df",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: " #f0f5f5",
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
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
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
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
    <div style={{backgroundColor:"#4e73df"}}>
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
          <ListItemText primary="Dashboard"  />
        </ListItem>
        <Divider />
        <Typography variant="caption" color="text.secondary" gutterBottom>
          INTERFACE
        </Typography>
        {/* COMPONENTS */}
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
         
        >
  
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header"  >
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <Typography>Components</Typography>
          </AccordionSummary>
          <Typography variant="caption" color="text.secondary" gutterBottom>
            CUSTOM COMPONENTS
          </Typography>

          <AccordionDetails>
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
          </AccordionDetails>
        </Accordion>
        {/* UTILITIES */}
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <ListItemIcon>
              <BuildIcon />
            </ListItemIcon>
            <Typography>Utilities</Typography>
          </AccordionSummary>
          <Typography variant="caption" color="text.secondary" gutterBottom>
            CUSTOM UTILITIES
          </Typography>

          <AccordionDetails>
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
          </AccordionDetails>
        </Accordion>
        <Divider />
        <Typography variant="caption" color="text.secondary" gutterBottom>
          ADD ONS
        </Typography>
        {/* PAGES */}
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <ListItemIcon>
              <FolderIcon />
            </ListItemIcon>
            <Typography>Pages</Typography>
          </AccordionSummary>
          <Typography variant="caption" display="block" gutterBottom>
            LOGIN SCREENS
          </Typography>

          <AccordionDetails>
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
          </AccordionDetails>
        </Accordion>
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
              <AccountCircle color="disabled"/>
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
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/buttons" element={<Buttons />} />
          <Route exact path="/cards" element={<Cards />} />
          <Route exact path="/colors" element={<Colors />} />
          <Route exact path="/borders" element={<Borders />} />
          <Route exact path="/animations" element={<Animations />} />
          <Route exact path="/others" element={<Others />} />
          <Route exact path="/charts" element={<Chart />} />
          <Route exact path="/tables" element={<Table />} />
        </Routes>
      </Box>
    </Box>
  );
}

function Table() {
  return (
    <div>
      <h1>Tables</h1>
    </div>
  )
}