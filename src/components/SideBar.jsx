import { useState } from "react";
import { Menu, Drawer, Button, Tooltip } from "antd";
import { LogoutOutlined, MenuOutlined } from "@ant-design/icons";
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
  {
    key: "statistic",
    icon: <ChartNoAxesCombined />,
    label: "Statistika",
    path: "/statistic",
  },
  {
    key: "mahsulotlar",
    icon: <ShoppingCart />,
    label: "Mahsulotlar",
    path: "/mahsulotlar",
  },
  {
    key: "logistic",
    icon: <Truck />,
    label: "Logistika kompaniylar",
    path: "/logistic",
  },
  { key: "export", icon: <UsersRound />, label: "Expartyor", path: "/export" },
  {
    key: "import",
    icon: <UserSearch />,
    label: "Impartyor",
    path: "/import",
  },
  {
    key: "marcet",
    icon: <ShoppingBag />,
    label: "Market",
    path: "/marcet",
  },
];

const otherItems = [
  {
    key: "settings",
    icon: <Settings />,
    label: "Sozlamalar",
    path: "/settings",
  },
  {
    key: "halp",
    icon: <HandHelping />,
    label: "Halp",
    path: "/halp",
  },
];

const SideBar = ({ onLogout }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
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
        <Link
          to={path}
          onClick={() => setDrawerOpen(false)}
          className="bg-transparent text-white"
        >
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
          style={{
            backgroundColor: "transparent",
            border: "none",
            color: "white",
          }}
          items={renderMenu(menuItems)}
        />
        <div className="mt-8">
          <Menu
            mode="inline"
            selectedKeys={[selectedKey]}
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: "white",
            }}
            items={[
              ...renderMenu(otherItems),
              {
                key: "logout",
                icon: <LogoutOutlined />,
                label: (
                  <button
                    onClick={onLogout}
                    className="w-full text-left text-white bg-transparent"
                  >
                    Logout
                  </button>
                ),
              },
            ]}
          />
        </div>
      </div>

      <div className="fixed top-0 left-0 md:hidden z-50 p-4">
        <Button
          type="text"
          icon={<MenuOutlined style={{ fontSize: 24, color: "white" }} />}
          onClick={() => setDrawerOpen(true)}
        />
      </div>

      <div className="fixed top-0 bottom-0 left-0 md:hidden w-16 pt-16 bg-[#00AE4B] border-r border-white z-40 flex flex-col items-center">
        {menuItems.concat(otherItems).map(({ key, icon, label, path }) => (
          <Tooltip key={key} placement="right" title={label}>
            <Link
              to={path}
              className={`text-white flex items-center justify-center w-10 h-10 my-2 rounded ${
                selectedKey === key ? "border border-white" : ""
              }`}
              onClick={() => setDrawerOpen(false)}
            >
              {icon}
            </Link>
          </Tooltip>
        ))}
        <Tooltip title="Logout">
          <button
            onClick={onLogout}
            className="text-white w-10 h-10 my-2 mt-auto flex items-center justify-center"
          >
            <LogoutOutlined />
          </button>
        </Tooltip>
      </div>

      <Drawer
        placement="left"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
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
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: "white",
            }}
            items={renderMenu(menuItems)}
          />
          <div className="mt-8">
            <Menu
              mode="inline"
              selectedKeys={[selectedKey]}
              style={{
                backgroundColor: "transparent",
                border: "none",
                color: "white",
              }}
              items={[
                ...renderMenu(otherItems),
                {
                  key: "logout",
                  icon: <LogOut />,
                  label: (
                    <button
                      onClick={() => {
                        setDrawerOpen(false);
                        onLogout();
                      }}
                      className="w-full text-left text-white bg-transparent"
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
        .ant-menu-dark .ant-menu-item-selected {
          color: white !important;
        }
      `}</style>
    </>
  );
};

export default SideBar;
