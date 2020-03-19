import { connect } from 'react-redux';
import UI from './UI';
import { getBannerlist, getProlist } from './action'

const mapStateToProps = (state) => {
  console.log(state) // 拿到的是所有的状态管理器管理的数据
  return {
    bannerlist: state.home.bannerlist,
    prolist: state.home.prolist
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBannerlist () {
      // getBannerlist()
      dispatch(getBannerlist())
    },
    getProlist () {
      // getProlist()
      dispatch(getProlist())
    }
  }
}

const Com = connect(mapStateToProps, mapDispatchToProps)(UI);
export default Com