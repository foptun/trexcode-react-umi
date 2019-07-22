import { findAllPost, findPostDetail, createPost } from "@/services/post.service";

export default {
  namespace: 'post',
  state: {
    appName: 'React Umi FopTun',
    count: 1,
    listPost: [],
    postDetail: {},
    postCreateData: {
      userId: '1',
      title: 'xxx',
      body: 'aaa'
    }
  },
  effects: {
    * findAllPost(_, { call, put }) {
      const listPost = yield call(findAllPost)
      console.log(listPost)
      yield put({ type: 'reduxSaveListPost', listPost: listPost })
    },
    * findPostDetail({ id }, { call, put }) {
      const postDetail = yield call(findPostDetail, id)
      console.log(postDetail)
      yield put({ type: 'reduxSavePostDetail', postDetail: postDetail })
    },
    * createPost({ data }, { call, put }) {
      const postCreateData = yield call(createPost, data)
      console.log(postCreateData)
      yield put({ type: 'reduxSaveCreatePost', postCreateData: postCreateData })
    }
  },
  reducers: {
    getFormPost(state, { postCreateData }) {
      console.log('getFormPost Change')
      console.log(postCreateData)
      const {userId, title, body} = postCreateData
      return {
        ...state,
        postCreateData: {
          userId: userId,
          title: title,
          body: body
        }
      }
    },
    reduxSaveCreatePost(state, { postCreateData }) {
      console.log('reduxSaveCreatePost')
      return {
        ...state,
        postCreateData: postCreateData
      }
    },
    reduxSaveListPost(state, { listPost }) {
      console.log('reduxSaveListPost')
      return {
        ...state,
        listPost: listPost
      }
    },
    reduxSavePostDetail(state, { postDetail }) {
      console.log('reduxSavePostDetail')
      return {
        ...state,
        postDetail: postDetail
      }
    },
    countUp(state, { number }) {
      console.log('countUp Click')
      return {
        ...state,
        count: state.count + number
      }
    },
    countDown(state, { number }) {
      console.log('countDown Click = ' + number)
      return {
        ...state,
        count: state.count - number
      }
    }
  }
}
