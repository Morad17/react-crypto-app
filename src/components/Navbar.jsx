import React, { useState, useEffect } from 'react'
import { Button, Typography, Menu } from 'antd'
import { Link } from 'react-router-dom'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons'

import icon from '../assets/images/crypto.png'

const Navbar = () => {
    const [ activeMenu, setActiveMenu ] = useState(true)
    const [ screenSize, setScreenSize ] = useState(null)

    useEffect(() =>{
        const handleResize = () => setScreenSize(window.innerWidth)
        window.addEventListener("resize", handleResize)
        handleResize()
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    useEffect(() =>{
        if(screenSize <= 768) {
            setActiveMenu(false)
        } else {
            setActiveMenu(true)
        }
    })
    return (
    <div className="navbar-container">
        <div className="logo-container">
            <img src={icon} size="large" className="logo-img" />
            <Typography.Title level={2} className="logo-heading">
                <Link to="/">CryptoReact</Link>
            </Typography.Title>
            <Button className="menu-controller-container" onClick={() => setActiveMenu(!activeMenu)}>
            </Button>
        </div>
        { activeMenu && (
            <Menu theme="dark" mode="horizontal">
                <Menu.Item key="home" icon={<HomeOutlined />}>
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key="cry" icon={<FundOutlined />}>
                    <Link to="/cryptocurrencies">cryptocurrencies</Link>
                </Menu.Item>
                <Menu.Item key="" icon={<MoneyCollectOutlined />}>
                    <Link to="/exchanges">Exchanges</Link>
                </Menu.Item>
                <Menu.Item key="" icon={<BulbOutlined />}>
                    <Link to="news">News</Link>
                </Menu.Item>
            </Menu>
        )}
        
    </div>

  )}




export default Navbar