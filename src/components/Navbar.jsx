import React from 'react'
import { Button, Meny, Typography, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons'

import icon from '../assets/images/cryptocurrency.png'

const Navbar = () => {
    return (
    <div className="navbar-container">
        <div className="logo-container">
            <Avatar src={icon} size="large" />
            <Typography.Title level={2} className="logo" />
            <Link to="/">CryptoReact</Link>
            {/* <Button className="menu-controller-container">
            </Button> */}
        </div>
    </div>

  )}




export default Navbar