import React from 'react';
// import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import './list.scss';
const Com = (props) =>{
  const { prolist } = props
  return (
    <ul className="list">
      {
        prolist.map(item => (
          <li className="item" key={ item.proid } onClick={ () => {
            console.log(props)
            props.history.push('/detail/' + item.proid)
          }}>
            { item.proname }
          </li>
          // <Link to={ '/detail/' + item.proid } className="item" key={ item.proid }>
          //   { item.proname }
          // </Link>
        ))
      }
    </ul>
  )
}
export default withRouter(Com)