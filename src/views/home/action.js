import { getBannerlistData, getProlistData } from '@/api/home';
export function getBannerlist () {
  console.log(1)
  return (dispatch) => {
    getBannerlistData({
      url: '/pro/banner'
    }).then(res => {
      console.log(res)
      // 修改状态
      dispatch({
        type: 'CHANGE_HOME_BANNER_LIST',
        data: res.data.data
      })
    })
  }
}

export function getProlist () {
  console.log(2)
  return (dispatch) => {
    getProlistData({
      url: '/pro'
    }).then(res => {
      console.log(res)
      dispatch({
        type: 'CHANGE_HOME_PRO_LIST',
        data: res.data.data
      })
    })
  }
}