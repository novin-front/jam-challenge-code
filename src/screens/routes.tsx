import DashboardHome from "./pages/Dashboard/DashboardHome/index";
import UserAccount from "./pages/UserAccount";
import UserList from "./pages/UserList/index";
import About from "./pages/About/index";
import CreateUser from "./pages/CreateUser/index";
import UpdateUser from "./pages/UpdateUser/index";
// icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ListAltIcon from "@mui/icons-material/ListAlt";
import MessageIcon from "@mui/icons-material/Message";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { routeTypes } from "../services/types/index";

const routes: routeTypes[] = [
  {
    type: "route",
    name: "پنل کاربری",
    key: "dashboard",
    role: "admin",
    showToMenu: true,
    route: "/index",
    icon: <DashboardIcon />,
    component: <DashboardHome />,
  },
  {
    type: "route",
    name: "ایجاد کاربر جدید",
    key: "createUser",
    role: "admin",
    showToMenu: true,
    route: "/user/create",
    icon: <PersonAddIcon />,
    component: <CreateUser />,
  },
  {
    type: "route",
    name: "مدیریت کارمندان",
    key: "userManagement",
    role: "admin",
    showToMenu: true,
    route: "/user/management",
    icon: <ListAltIcon />,
    component: <UserList />,
  },
  {
    type: "route",
    name: "درباره ما",
    key: "virtual-reality",
    role: "admin",
    showToMenu: true,
    route: "/about",
    icon: <MessageIcon />,
    component: <About />,
  },
  {
    type: "route",
    name: "حساب کاربری",
    key: "userAccount",
    role: "admin",
    showToMenu: true,
    route: "/me",
    icon: <PersonOutlineIcon />,
    component: <UserAccount />,
  },
  {
    type: "route",
    name: "ویرایش کاربر",
    key: "updateUser",
    role: "admin",
    showToMenu: false,
    route: "/user/edit/:id",
    icon: <PersonOutlineIcon />,
    component: <UpdateUser />,
  },
];

export default routes;
