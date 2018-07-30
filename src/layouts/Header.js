import { Menu, Icon } from 'antd';
import Link from 'umi/link';

function Header({ location }) {
  return (
    <Menu
      selectedKeys={[location.pathname]}
      mode="horizontal"
      theme="dark"
    >
      <Menu.Item key="/">
        <Link to="/"><Icon type="home" />首页</Link>
      </Menu.Item>
      <Menu.Item key="/users">
        <Link to="/users"><Icon type="bars" />用户管理</Link>
      </Menu.Item>
      <Menu.Item key="/ukk">
        <a href="">ukk测试</a>
      </Menu.Item>
      <Menu.Item key="/uuk">
      <a href="">uuk测试</a>
      </Menu.Item>
      <Menu.Item key="/404">
        <Link to="/page-you-dont-know"><Icon type="frown-circle" />404</Link>
      </Menu.Item>
    </Menu>
  )
}

export default Header;
