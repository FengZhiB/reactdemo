export default (state = {
  bannerlist: [],
  prolist: []
}, action) => {
  const { type, data } = action;
  switch (type) {
    case 'CHANGE_HOME_BANNER_LIST':
      return {...state, ...{ bannerlist: data }}
    case 'CHANGE_HOME_PRO_LIST':
      return Object.assign({}, state, { prolist: data })
    default:
      break;
  }
  return state
}