import React, { Component } from 'react';
import { connect } from "dva";

class Index extends Component {

  render() {
    const { getFormPost, createPost } = this.props
    const { postCreateData } = this.props.post
    const { userId, title, body } = postCreateData
    console.log('postCreateData')
    console.log(postCreateData)
    console.log('userId')
    console.log(userId)
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
                    <input type="text"  className="input" placeholder="Input User ID"
                       onChange={(e) => getFormPost()} />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <label className="label">Title</label>
                    <input type="text" className="input" placeholder="Input Title"
                           onChange={(e) => getFormPost({postCreateData: {userId: userId, title: e.target.value, body: body}})} />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <label className="label">Body</label>
                    <textarea className="textarea" placeholder="Input Body"
                              onChange={(e) => getFormPost({postCreateData: {userId: userId, title: title, body: e.target.value}})}></textarea>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <footer className="card-footer">
            <div className="card-footer-item">
              <button className="button is-link"
                      onClick={ () => createPost({postCreateData: {userId: userId, title: title, body: body}}) }>Create Post
              </button>
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
  const { post } = state
  return {
    post: post
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (data) => dispatch({ type: 'post/createPost', data }),
    getFormPost: (postCreateData) => {
      console.log(postCreateData)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
