import React from 'react';
import { Line } from '@ant-design/charts';
import { HeartTwoTone, SmileTwoTone } from '@ant-design/icons';
import { Layout, Card, Typography, Alert, Tabs, Radio } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { useIntl } from 'umi';

const { Header, Content, Footer, Sider } = Layout;
const { TabPane } = Tabs;


class Base extends React.Component {
  state = { size: 'small' };

  render() {
    const { size } = this.state;
    const data = [
      { year: '1991', value: 3 },
      { year: '1992', value: 4 },
      { year: '1993', value: 3.5 },
      { year: '1994', value: 5 },
      { year: '1995', value: 4.9 },
      { year: '1996', value: 6 },
      { year: '1997', value: 7 },
      { year: '1998', value: 9 },
      { year: '1999', value: 13 },
    ];
    const config = {
      data,
      height: 400,
      xField: 'year',
      yField: 'value',
      point: {
        size: 5,
        shape: 'diamond',
      },
    };
    return (
      <Layout> 
        <Content style={{ padding: '0 0' }}>
          {/* <Card style={{ paddingTop: '0px' }}> */}
            <Tabs defaultActiveKey="1" type="card" size={size}>
              <TabPane tab="Card Tab 1" key="1">
                <Card style={{ width: '500px' }}><Line {...config} /></Card>
                <Card style={{ width: '500px' }}><Line {...config} /></Card>
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
          {/* </Card> */}
        </Content>
      </Layout>
    );
  }
}


export default Base;
