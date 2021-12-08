import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Alert, Typography } from 'antd';
import { useIntl, FormattedMessage } from 'umi';
import styles from './index.less';

const CodePreview = ({ children }) => (
  <pre className={styles.pre}>

  </pre>
);

const BBS = () => {
  // const intl = useIntl();
  return (
    <Card>
    </Card>
  );
};

export default BBS;
