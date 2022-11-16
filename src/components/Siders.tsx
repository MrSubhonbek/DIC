import { useState } from "react";
import { Layout, Menu } from "antd";
import { CalculatorOutlined, DollarOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";

const { Sider } = Layout;

export const Siders = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div
        style={{
          height: 32,
          margin: 16,
          background: "rgba(255, 255, 255, 0.3)",
        }}
      />
      <Menu
        theme="dark"
        defaultSelectedKeys={["/currencies"]}
        mode="inline"
        onClick={({ key }) => {
          if (key === "/currencies") navigate("/currencies");
          else navigate("/");
        }}
        items={[
          { label: "Converter", key: "/", icon: <CalculatorOutlined /> },
          { label: "Currencies", key: "/currencies", icon: <DollarOutlined /> },
        ]}
      />
    </Sider>
  );
};
