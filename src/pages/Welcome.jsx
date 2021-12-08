import React, { useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Alert, Typography, Carousel, Layout, Space } from 'antd';
import { useIntl, FormattedMessage } from 'umi';
import styles from './Welcome.less';

// const [size, setSize] = useState('middle');

const { Header, Footer, Sider, Content } = Layout;

const contentStyle = {
  height: '280px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const CodePreview = ({ children }) => (
  <pre className={styles.pre}>

  </pre>
);

const Welcome = () => {
  // const intl = useIntl();
  const [size, setSize] = useState('middle');
  return (
    <Layout>
      <Space direction="vertical" size={size}> 

          <Carousel autoplay style={{ width: '100%' }}>
            <div>
              <h3 style={contentStyle}>1</h3>
            </div>
            <div>
              <h3 style={contentStyle}>2</h3>
            </div>
            <div>
              <h3 style={contentStyle}>3</h3>
            </div>
            <div>
              <h3 style={contentStyle}>4</h3>
            </div>
          </Carousel>

        <Card>
          <div style={contentStyle}></div>
        </Card>

        <Card>
          <div style={contentStyle}></div>
        </Card>

      </Space>
    </Layout>
   
    
  );
};

export default Welcome;
