import { Menu, Drawer, Tooltip } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import {
  ChartNoAxesCombined,
  ShoppingCart,
  Truck,
  UserSearch,
  ShoppingBag,
  HandHelping,
  UserPen,
  UsersRound,
  Settings,
  LogOut,
} from "lucide-react";
import { IoClose } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import logo2 from "../assets/logo2.png";

const menuItems = [
  { key: "dashboard", icon: <UserPen />, label: "Profile", path: "/dashboard" },
  { key: "statistic", icon: <ChartNoAxesCombined />, label: "Statistic", path: "/statistic" },
  { key: "products", icon: <ShoppingCart />, label: "Products", path: "/products" },
  { key: "logistic", icon: <Truck />, label: "Logistics companies", path: "/logistic" },
  { key: "export", icon: <UsersRound />, label: "Export", path: "/export" },
  { key: "import", icon: <UserSearch />, label: "Import", path: "/import" },
  { key: "marcet", icon: <ShoppingBag />, label: "Marcet", path: "/marcet" },
];

const otherItems = [
  { key: "settings", icon: <Settings />, label: "Settings", path: "/settings" },
  { key: "help", icon: <HandHelping />, label: "Help", path: "/help" },
];

const SideBar = ({ onLogout, isMobileOpen, setIsMobileOpen }) => {
  const location = useLocation();

  const selectedKey = (() => {
    const path = location.pathname;
    const all = [...menuItems, ...otherItems];
    const match = all
      .sort((a, b) => b.path.length - a.path.length)
      .find((item) => path.startsWith(item.path));
    return match?.key || "";
  })();

  const renderMenu = (items) =>
    items.map(({ key, icon, label, path }) => ({
      key,
      icon,
      label: (
        <Link to={path} onClick={() => setIsMobileOpen(false)} className="text-white">
          {label}
        </Link>
      ),
    }));

  return (
    <>
      <div className="hidden md:flex flex-col w-64 min-h-screen h-[100%] bg-[#00AE4B] text-white px-6 pt-6">
        <img src={logo2} alt="Logo" className="w-40 h-auto mb-8" />
        <Menu
          mode="inline"
          selectedKeys={[selectedKey]}
          style={{ backgroundColor: "transparent", border: "none", color: "white" }}
          items={renderMenu(menuItems)}
        />
        <div className="mt-8">
          <Menu
            mode="inline"
            selectedKeys={[selectedKey]}
            style={{ backgroundColor: "transparent", border: "none", color: "white" }}
            items={[
              ...renderMenu(otherItems),
              {
                key: "logout",
                icon: <LogoutOutlined />,
                label: (
                  <button onClick={onLogout} className="text-white bg-transparent w-full text-left">
                    Logout
                  </button>
                ),
              },
            ]}
          />
        </div>
      </div>

      <Drawer
        placement="left"
        onClose={() => setIsMobileOpen(false)}
        open={isMobileOpen}
        width={250}
        closeIcon={<IoClose size={24} color="white" />}
        styles={{
          header: { backgroundColor: "#00AE4B" },
          body: { backgroundColor: "#00AE4B" },
        }}
      >
        <div className="text-white px-4 pt-6">
          <h2 className="text-xl font-bold mb-4">Admin CRM</h2>
          <Menu
            mode="inline"
            selectedKeys={[selectedKey]}
            style={{ backgroundColor: "transparent", border: "none", color: "white" }}
            items={renderMenu(menuItems)}
          />
          <div className="mt-8">
            <Menu
              mode="inline"
              selectedKeys={[selectedKey]}
              style={{ backgroundColor: "transparent", border: "none", color: "white" }}
              items={[
                ...renderMenu(otherItems),
                {
                  key: "logout",
                  icon: <LogOut />,
                  label: (
                    <button
                      onClick={() => {
                        setIsMobileOpen(false);
                        onLogout();
                      }}
                      className="text-white w-full text-left"
                    >
                      Logout
                    </button>
                  ),
                },
              ]}
            />
          </div>
        </div>
      </Drawer>

      <style>{`
        .ant-menu-item-selected {
          border: 1px solid white !important;
          border-radius: 8px !important;
          background-color: transparent !important;
        }
        .ant-menu-item {
          margin: 4px 0 !important;
          background-color: transparent !important;
          color: white !important;
        }
      `}</style>
    </>
  );
};

export default SideBar;



