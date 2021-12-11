import React from 'react';
import { Line } from '@ant-design/charts';
import { HeartTwoTone, SmileTwoTone } from '@ant-design/icons';
import { Layout, Card, Typography, Alert, Tabs, Radio, Row, Col } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { useIntl } from 'umi';

const { Header, Content, Footer, Sider } = Layout;
const { TabPane } = Tabs;


export class Tab3 extends React.Component {
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


              <Row>
                <Col span={6}> <Card style={{ width: '300px' }}><Line {...config} /></Card> </Col>
                <Col span={6}> <Card style={{ width: '300px' }}><Line {...config} /></Card> </Col>
                <Col span={6}> <Card style={{ width: '300px' }}><Line {...config} /></Card> </Col>
              </Row>

    );
  }
}


export default  Tab3;
