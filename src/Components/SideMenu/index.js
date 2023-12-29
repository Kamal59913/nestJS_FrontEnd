import {
  AppstoreOutlined,
  AntCloudOutlined,
  UserOutlined,
  RobotOutlined
} from "@ant-design/icons";
import { Menu } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './robot.css'

function SideMenu() {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  const navigate = useNavigate();
  return (
    <div className="SideMenu">
      <Menu
        className="SideMenuVertical"
        mode="vertical"
        onClick={(item) => {
          navigate(item.key);
        }}
        selectedKeys={[selectedKeys]}
      >
        <Menu.Item
          className="boldMenuItem"
          key="#"
          icon={<RobotOutlined />}
        >
          Telegram Bot
        </Menu.Item>
        <Menu.Item
          key="/"
          icon={<AntCloudOutlined />}
        >
          Weather Details
        </Menu.Item>
        <Menu.Item
          key="/adminlogin"
          icon={<AppstoreOutlined />}
        >
          Admin Login
        </Menu.Item>
        <Menu.Item
          key="/subscribe"
          icon={<UserOutlined />}
        >
          User Subscription
        </Menu.Item>
      </Menu>
    </div>
  );
}
export default SideMenu;
