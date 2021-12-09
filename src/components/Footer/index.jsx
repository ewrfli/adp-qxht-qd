import { useIntl } from 'umi';
import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';

const Footer = () => {
  const intl = useIntl();
  const defaultMessage = intl.formatMessage({
    id: 'app.copyright.produced',
    defaultMessage: '   企业风险资讯平台',
  });
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear}   企业风险资讯平台`}
      links={[
        {
          key: 'Enterprise Risk',
          title: 'Enterprise',
          href: '',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: '',
          blankTarget: true,
        },
        {
          key: 'Information Platform',
          title: 'Platform',
          href: '',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
