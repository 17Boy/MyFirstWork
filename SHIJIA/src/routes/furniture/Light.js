import React from 'react'
import {Link} from 'react-router-dom'
import {Tabs,Icon} from 'antd';
import {queryTextiels, queryMore} from '../../api/detail'

class Light extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            dataItem: []
        }
    }

    async componentDidMount() {
        let data = await queryTextiels('deskLamp');
        if (parseFloat(data.code) === 0) {
            this.setState({dataItem: data.data})
        }
    }

    callback = async key => {
        let data = [];
        switch (key) {
            case '1':
                data = await queryTextiels('deskLamp ');
                if (parseFloat(data.code) === 0) {
                    this.setState({dataItem: data.data})
                }
                break;
            case '2':
                data = await queryMore({
                    category: 'deskLamp',
                    model: 3
                });
                if (parseFloat(data.code) === 0) {
                    this.setState({dataItem: data.data})
                }
                break;
            case '3':
                data = await queryMore({
                    category: 'deskLamp',
                    model: 2
                });
                if (parseFloat(data.code) === 0) {
                    this.setState({dataItem: data.data})
                }
                break;
            case '4':
                data = await queryMore({
                    category: 'deskLamp',
                    model: 1
                });
                if (parseFloat(data.code) === 0) {
                    this.setState({dataItem: data.data})
                }
                break;
            case '5':
                this.props.history.push('/hotsale');
                break;
        }
    };

    render() {
        let TabPane = Tabs.TabPane;
        let data = this.state.dataItem;
        return <div className="textilesBox">
            <h3>
                <Icon type="left" onClick={() => {
               this.props.history.go(-1)
            }}/>灯饰</h3>
            <img src={require('../../static/images/灯饰.png')} alt="家纺" className="mainImg"/>
            <Tabs defaultActiveKey="1" onChange={this.callback}>
                <TabPane tab="全部" key="1">
                    <ul>
                        {data ? data.map((item, index) => {
                            let {name, id, pic, price, category} = item;
                            return <li key={index}>
                                <Link to={{
                                    pathname: '/detail',
                                    search: `?ID=${id}&category=${category}`
                                }}>
                                    <div>
                                        <img src={pic} alt=""/>
                                    </div>
                                    <p>{name}</p>
                                    <b>￥{price}起</b>
                                </Link>
                            </li>
                        }) : ''}
                    </ul>
                </TabPane>
                <TabPane tab="吊灯" key="2">
                    <ul>
                        {data ? data.map((item, index) => {
                            let {name, id, pic, price, category} = item;
                            return <li key={index}>
                                <Link to={{
                                    pathname: '/detail',
                                    search: `?ID=${id}&category=${category}`
                                }}>
                                    <div>
                                        <img src={pic} alt=""/>
                                    </div>
                                    <p>{name}</p>
                                    <b>￥{price}起</b>
                                </Link>
                            </li>
                        }) : ''}
                    </ul>
                </TabPane>
                <TabPane tab="地灯" key="3">
                    <ul>
                        {data ? data.map((item, index) => {
                            let {name, id, pic, price, category} = item;
                            return <li key={index}>
                                <Link to={{
                                    pathname: '/detail',
                                    search: `?ID=${id}&category=${category}`
                                }}>
                                    <div>
                                        <img src={pic} alt=""/>
                                    </div>
                                    <p>{name}</p>
                                    <b>￥{price}起</b>
                                </Link>
                            </li>
                        }) : ''}
                    </ul>
                </TabPane>
                <TabPane tab="台灯" key="4">
                    <ul>
                        {data ? data.map((item, index) => {
                            let {name, id, pic, price, category} = item;
                            return <li key={index}>
                                <Link to={{
                                    pathname: '/detail',
                                    search: `?ID=${id}&category=${category}`
                                }}>
                                    <div>
                                        <img src={pic} alt=""/>
                                    </div>
                                    <p>{name}</p>
                                    <b>￥{price}起</b>
                                </Link>
                            </li>
                        }) : ''}
                    </ul>
                </TabPane>
                <TabPane tab='更多' key="5">
                    <ul>
                        {data ? data.map((item, index) => {
                            let {name, id, pic, price, category} = item;
                            return <li key={index}>
                                <Link to={{
                                    pathname: '/detail',
                                    search: `?ID=${id}&category=${category}`
                                }}>
                                    <div>
                                        <img src={pic} alt=""/>
                                    </div>
                                    <p>{name}</p>
                                    <b>￥{price}起</b>
                                </Link>
                            </li>
                        }) : ''}
                    </ul>
                </TabPane>
            </Tabs>
        </div>
    }
}

export default Light