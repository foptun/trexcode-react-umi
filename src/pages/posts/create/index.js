import React, { Component } from 'react';
import { connect } from "dva";

class Index extends Component {

  render() {
    const { getFormPost, createPost, loading } = this.props
    const { postCreateData } = this.props.post
    console.log('postCreateData')
    console.log(postCreateData)
    return (
      <div>
        <h1 className="title is-1">Create Post</h1>
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">
              Form Create Post
            </p>
          </header>
          <div className="card-content">
            <div className="content">
              <form>
                <div className="field">
                  <div className="control">
                    <label className="label">User ID</label>
                    <input type="text" className="input" placeholder="Input User ID"
                           onChange={
                             (e) => getFormPost({
                               postCreateData: {
                                 ...postCreateData,
                                 userId: e.target.value
                               }
                             })
                           }/>
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <label className="label">Title</label>
                    <input type="text" className="input" placeholder="Input Title"
                           onChange={ (e) => getFormPost({
                             postCreateData: {
                               ...postCreateData,
                               title: e.target.value
                             }
                           }) }/>
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <label className="label">Body</label>
                    <textarea className="textarea" placeholder="Input Body"
                              onChange={ (e) => getFormPost({
                                postCreateData: {
                                  ...postCreateData, body: e.target.value
                                }
                              }) }></textarea>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <footer className="card-footer">
            <div className="card-footer-item">
              {
                !loading ? (
                  <button className="button is-link"
                          onClick={
                            () => createPost({
                              postCreateData: {
                                ...postCreateData
                              }
                            })
                          }>

                    Create Post
                  </button>
                ) : 'Loading...'
              }


            </div>
          </footer>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('==========')
  console.log(state)
  console.log('==========')
  const { post, loading } = state
  return {
    post: post,
    loading: loading.effects['post/createPost']
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (data) => dispatch({ type: 'post/createPost', data }),
    getFormPost: (postCreateData) => dispatch({ type: 'post/getFormPost', postCreateData })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
