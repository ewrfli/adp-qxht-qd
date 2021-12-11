import React, { useState, useEffect } from 'react';
import { Line, Bullet } from '@ant-design/charts';
import { HeartTwoTone, SmileTwoTone } from '@ant-design/icons';
import { Layout, Card, Typography, Alert, Tabs, Radio, Row, Col, Space } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { useIntl } from 'umi';
import  Analysis from '../analysis'

const { Header, Content, Footer, Sider } = Layout;
const { TabPane } = Tabs;


export class Tab1 extends React.Component {
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

    //
 
    return (
      <Layout> 
        <Content style={{ padding: '0 0' }}>
          <Space direction="vertical">

            {/* <Analysis></Analysis> */}
            <Row>
              <Col span={16}>
                 <Card style={{ width: '1200px' }}>
                   '企业基本信息：
                   前台系统是供用户使用的最终界面，也就是网站的首页：搜索栏，资讯展示，平台特色功能展与使用教程，然后是企业风险信息模块：用户搜索到目标企业点击可进入企业基本信息模块，同时Tab栏还有企业周边风险模块，企业自身风险模块。付费服务模块：用户可选择订阅不同服务按每月或每季度或每年订阅等。资讯与交流模块：在此界面展示最新的相关企业相关风险的新闻信息。 '
                 </Card> 
              </Col>
            </Row>

            <Row>
              <Col span={6}> <Card style={{ width: '290px' }}><Line {...config} /></Card> </Col>
              <Col span={6}> <Card style={{ width: '290px' }}><Line {...config} /></Card> </Col>
              <Col span={6}> <Card style={{ width: '290px' }}><Line {...config} /></Card> </Col>
              <Col span={6}> <Card style={{ width: '290px' }}><Line {...config} /></Card> </Col>
            </Row>

            <Row>
              <Col span={6}> <Card style={{ width: '300px' }}></Card> </Col>
            </Row>
          </Space>
        </Content>
      </Layout>

    );
  }
}


export default  Tab1;
