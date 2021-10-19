import React from 'react'
import millify from 'millify';
import { Typography, Row, Col, Statistic} from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
import {Crypto, News} from '../pages';
import Loader from '../components/Loader';
const { Title } = Typography;



const Homepage = () => {
    const { data, isFetching } = useGetCryptosQuery(10);
    const globalStats = data?.data?.stats;
    // console.log(globalStats);

    if(isFetching) return <Loader/>;
    return (
        <>  <div className="global-stat-container">
            <Title level={2} className="heading">Global Crypto Stats</Title>
            <Row gutter={[32, 32]}>
                <Col span={12}><Statistic title="Total Cryptocurrencies" value= {globalStats.total} /></Col>
                <Col span={12}><Statistic title="Total Exchanges" value= {millify(globalStats.totalExchanges)} /></Col>
                <Col span={12}><Statistic title="Total Market Cap" value= {millify(globalStats.totalMarketCap)} /></Col>
                <Col span={12}><Statistic title="Total 24 Hour Volume" value= {millify(globalStats.total24hVolume)} /></Col>
                <Col span={12}><Statistic title="Total Total Markets" value= {millify(globalStats.totalMarkets)} /></Col>
            </Row>
            </div>
            <div className="top-ten-container">
            <div className="home-heading-container">
                <Title level={2} className="home-title">Top 10 Cryptocurrencies</Title>
                <Title level={3} className="show-more"><Link to='/crypto'>Show More</Link></Title>
            </div>
            </div>
            <Crypto simplified/>
            <div className="home-heading-container">
                <Title level={2} className="home-title">Latest Crytpo News</Title>
                <Title level={3}><Link to='/news'>Show More</Link></Title>
            </div>
            <News simplified/>
        </>
    )
}

export default Homepage
