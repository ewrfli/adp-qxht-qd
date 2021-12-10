import React from 'react';
import { HeartTwoTone, SmileTwoTone } from '@ant-design/icons';
import { Layout, Card, Typography, Alert, Tabs, Radio } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { useIntl } from 'umi';

const { Header, Content, Footer, Sider } = Layout;
const { TabPane } = Tabs;

// const Base = () => {
//   const intl = useIntl();
//   return (
//     <Card></Card>
    
   
//   );
// };

class Base extends React.Component {
  state = { size: 'small' };

  render() {
    const { size } = this.state;
    return (
      <Layout> 
        <Content style={{ padding: '0 0' }}>
          <Card style={{ paddingTop: '0px' }}>
            <Tabs defaultActiveKey="1" type="card" size={size}>
              <TabPane tab="Card Tab 1" key="1">
                Content of card tab 1
              </TabPane>
              <TabPane tab="Card Tab 2" key="2">
                Content of card tab 2
              </TabPane>
              <TabPane tab="Card Tab 3" key="3">
                Content of card tab 3
              </TabPane>
              <TabPane tab="Card Tab 4" key="4">
                Content of card tab 4
              </TabPane>
            </Tabs>
          </Card>
        </Content>
      </Layout>
    );
  }
}


export default Base;
