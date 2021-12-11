import React from 'react';
import { Line } from '@ant-design/charts';
import { HeartTwoTone, SmileTwoTone } from '@ant-design/icons';
import { Layout, Card, Typography, Alert, Tabs, Radio, Row, Col } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { useIntl } from 'umi';
import { Tab1 } from './tab1'
import { Tab2 } from './tab2'
import { Tab3 } from './tab3'
import { Tab4 } from './tab4'
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
              <TabPane tab="基本信息" key="1">
                <Tab1></Tab1>
              </TabPane>

              <TabPane tab="预警信息" key="2">
                <Tab2></Tab2>
              </TabPane>


              <TabPane tab="周边风险" key="3">
              <Tab3></Tab3>
              </TabPane>

              <TabPane tab="自身风险" key="4">
              <Tab4></Tab4>
              </TabPane>
            </Tabs>
          {/* </Card> */}
        </Content>
      </Layout>
    );
  }
}


export default Base;
