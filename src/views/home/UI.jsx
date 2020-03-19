import React, { Component } from 'react';
import { Carousel } from 'antd-mobile';
import Prolist from '@/components/Prolist'
export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      imgHeight: 176
    }
  }
  componentDidMount () {
    // 请求数据
    console.log(this.props)
    this.props.getBannerlist()
    this.props.getProlist()
  }
  render () {
    const { bannerlist, prolist } = this.props
    return (
      <div className="box">
        <header className="header">首页</header>
        <div className="content">
          <Carousel
            autoplay={true}
            infinite
          >
            {bannerlist.map((val, index) => (
              <a
                key={index}
                href="http://www.alipay.com"
                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
              >
                <img
                  src={`http://daxun.kuboy.top${val}`}
                  alt=""
                  style={{ width: '100%', verticalAlign: 'top' }}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    // this.setState({ imgHeight: 'auto' });
                  }}
                />
              </a>
            ))}
          </Carousel>
          {/* <Prolist prolist={prolist} {...this.props}/> */}
          {/* <Prolist prolist={prolist} history={ this.props.history }/> */}
          <Prolist prolist={prolist} />
        </div>
      </div>
    )
  }
}