import React from 'react';
import { Line, Bullet } from '@ant-design/charts';
import { HeartTwoTone, SmileTwoTone } from '@ant-design/icons';
import { Layout, Card, Typography, Alert, Tabs, Radio, Row, Col } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { useIntl } from 'umi';

const { Header, Content, Footer, Sider } = Layout;
const { TabPane } = Tabs;


export class Tab2 extends React.Component {
  state = { size: 'small' };

  render() {
    const { size } = this.state;
    const data = [
      {
        title: '公司1',
        ranges: [30, 90, 120],
        measures: [65],
        target: 80,
      },
      {
        title: '公司2',
        ranges: [30, 90, 120],
        measures: [50],
        target: 100,
      },
      {
        title: '公司3',
        ranges: [30, 90, 120],
        measures: [40],
        target: 85,
      },
      {
        title: '公司4',
        ranges: [30, 90, 120],
        measures: [50],
        target: 100,
      },
    ];
    const config = {
      data,
      measureField: 'measures',
      rangeField: 'ranges',
      targetField: 'target',
      xField: 'title',
      color: {
        range: ['#FFbcb8', '#FFe0b0', '#bfeec8'],
        measure: '#5B8FF9',
        target: '#39a3f4',
      },
      label: {
        measure: {
          position: 'middle',
          style: {
            fill: '#fff',
          },
        },
      },
      xAxis: {
        line: null,
      },
      yAxis: false,
      // 自定义 legend
      legend: {
        custom: true,
        position: 'bottom',
        items: [
          {
            value: '差',
            name: '差',
            marker: {
              symbol: 'square',
              style: {
                fill: '#FFbcb8',
                r: 5,
              },
            },
          },
          {
            value: '良',
            name: '良',
            marker: {
              symbol: 'square',
              style: {
                fill: '#FFe0b0',
                r: 5,
              },
            },
          },
          {
            value: '优',
            name: '优',
            marker: {
              symbol: 'square',
              style: {
                fill: '#bfeec8',
                r: 5,
              },
            },
          },
          {
            value: '实际值',
            name: '实际值',
            marker: {
              symbol: 'square',
              style: {
                fill: '#5B8FF9',
                r: 5,
              },
            },
          },
          {
            value: '目标值',
            name: '目标值',
            marker: {
              symbol: 'line',
              style: {
                stroke: '#39a3f4',
                r: 5,
              },
            },
          },
        ],
      },
    };
    return (


              <Row>
                <Col span={6}> <Card style={{ width: '300px' }}><Bullet {...config} /></Card> </Col>
                <Col span={6}> <Card style={{ width: '300px' }}><Bullet {...config} /></Card> </Col>
                <Col span={6}> <Card style={{ width: '300px' }}><Bullet {...config} /></Card> </Col>
                <Col span={6}> <Card style={{ width: '300px' }}><Bullet {...config} /></Card> </Col>
              </Row>

    );
  }
}


export default  Tab2;
