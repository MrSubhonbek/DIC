import { Layout } from "antd";
import { BrowserRouter } from "react-router-dom";

import { Siders } from "./components";
import { AppRoutes } from "./Routes";

const { Header, Footer, Content } = Layout;

export const App = () => {
  return (
    <BrowserRouter>
      <Layout style={{ minHeight: "100vh" }}>
        <Siders />
        <Layout className="site-layout">
          <Header
            style={{
              padding: 0,
              background: "#fff",
              textAlign: "center",
              fontSize: "2rem",
            }}
          >
            Converter
          </Header>
          <Content style={{ margin: "0 16px" }}>
            <div style={{ padding: 24, minHeight: 360 }}>
              <AppRoutes />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Converter ©2022 Created by Asadulloev Subhonbek
          </Footer>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};
