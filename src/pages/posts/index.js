import React, { Component } from 'react';
import { connect } from "dva";
import Link from "umi/link";

class Index extends Component {

  componentDidMount() {
    const { findAllPost } = this.props
    findAllPost()
  }

  _renderPost = () => {
    const { listPost } = this.props.post
    return (
      <ul>
        {
          listPost.map((item, index) =>
            <li key={ index }>
              { item.id }, { item.title }
              <Link to={ '/posts/' + item.id }>Show Detail</Link>
            </li>
          )
        }
      </ul>
    )

  }

  render() {
    const { appName, count } = this.props.post
    const { countUp, countDown, loading } = this.props
    return (
      <div>
        <h1>Posts</h1>
        <h4>App Name: { appName }</h4>
        <h1>Count: { count }</h1>
        <button onClick={ () => countDown(1) }>-1</button>
        <button onClick={ () => countUp(1) }>+1</button>
        <br/>
        {
          !loading ? this._renderPost() : 'Loading...'
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  const { post, loading } = state
  return {
    post: post,
    loading: loading.effects['post/findAllPost'] ?? true
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    findAllPost: () => dispatch({ type: 'post/findAllPost' }),
    countUp: (number) => dispatch({ type: 'post/countUp', number }),
    countDown: (number) => dispatch({ type: 'post/countDown', number })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
