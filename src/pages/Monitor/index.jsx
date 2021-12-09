import React from 'react';
import { HeartTwoTone, SmileTwoTone } from '@ant-design/icons';
import { Card, Typography, Alert } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { useIntl } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import { Input } from 'antd';
import { history } from 'umi';
import { Applications } from './applications';

const handleFormSubmit = (value) => {
  // eslint-disable-next-line no-console
  console.log(value);
};

const Monitor = () => {
  const intl = useIntl();
  return (
    <PageContainer
      content={
        <div
          style={{
            textAlign: 'center',
          }}
        >
          <Input.Search
            placeholder="请输入"
            enterButton="搜索"
            size="large"
            onSearch={handleFormSubmit}
            style={{
              maxWidth: 522,
              width: '100%',
            }}
          />
        </div>
      }
    >
      <Applications></Applications>
    </PageContainer>
  );
};

export default Monitor;
