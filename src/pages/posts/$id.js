import React, { Component } from 'react';
import { connect } from "dva";

class $Id extends Component {

  componentDidMount() {
    const { id } = this.props.match.params
    const { findPostDetail } = this.props
    findPostDetail(id)
  }

  _renderPostDetail = () => {
    const { postDetail } = this.props.post
    return (
      <div>
        { postDetail.id }, { postDetail.title }, { postDetail.body }
      </div>
    )
  }

  render() {

    const { id } = this.props.match.params
    const { loading } = this.props

    return (
      <div>
        <h1>Hello ID: { id }</h1> <br/>
        {
          !loading ? this._renderPostDetail() : 'Loading...'
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { loading, post } = state
  return {
    post: post,
    loading: loading.effects['post/findPostDetail'] ?? true
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    findPostDetail: (id) => dispatch({ type: 'post/findPostDetail', id })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)($Id);
