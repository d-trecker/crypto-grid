import React, {useState, useEffect} from 'react'
import {Button, Menu, Typography} from 'antd';
import { Link } from 'react-router-dom';
import {HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined} from '@ant-design/icons';
import "./style.css";
export const Navbar = () => {
    const [ activeMenu, setActiveMenu ] = useState(true);
    const [screenSize, setScreenSize ] = useState(undefined);

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);
        window.addEventListener('resize', handleResize);

        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if(screenSize <= 800) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }
    }, [screenSize]);


    return (
        <div className= "nav-container">
            <div className= "logo-container">
                {/* <Avatar/> */}
                <Typography.Title level={2} className="logo">
                    <Link to="/">The Crypto Grid</Link>
                </Typography.Title>
                <Button className= "menu-control-container" onClick={() => setActiveMenu(!activeMenu)}><MenuOutlined/></Button>
            </div>
            {activeMenu && (
            <Menu theme="dark" className="ant-menu">
                <Menu.Item key={'homes'} icon={<HomeOutlined/>} >
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key={'cryptoss'} icon={<FundOutlined/>}>
                    <Link to="/crypto">Crypto Currencies</Link>
                </Menu.Item>
                <Menu.Item key={'exchangess'} icon={<MoneyCollectOutlined/>}>
                    <Link to="/exchanges">Exchanges</Link>
                </Menu.Item>
                <Menu.Item key={'newss'} icon={<BulbOutlined/>}>
                    <Link to="/news">News</Link>
                </Menu.Item>
            </Menu>
            )}
        </div>
    );
};
export default Navbar;