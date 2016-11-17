export default {
  vendor: {
    moment: 'zh-cn',
    html: 'zh-Hans',
    player: 'zh'
  },
  term: {
    login:  '登录',
    signup: '注册',
    guest:  '未登录',
    tags:   '标签',
    clear:  '清除',
    send:   '发送',
    cancel: '取消',
    remove: '删除',
    ok:     '确认',
    likes:  '个赞'
  },
  message: {
    list: {
      page: '第 {page} 页'
    },
    videoList: {
      title: '视频',
      empty: '没有符合条件的视频'
    },
    commentItem: {
      placeholder: '输入评论',
      malleable:   '{time}内可修改'
    },
    commentList: {
      title: '评论（{count} 条）',
      empty: '暂无评论'
    },
    footer: {
      support: '问题反馈：'
    }
  },
  error: {
    generic: {
      network: '网络错误，请稍后重试',
      generic: '未知错误',
      notLoggedIn: '尚未登录，请登录后再试',
      permissionDenied: '权限不足'
    },
    user: {
      nullName: '未传入用户名'
    },
    video: {
      notFound: '视频不存在：视频可能未被投稿，或已被删除。',
      nullId: '未传入视频ID。',
      likeSuccess: '成功赞了一下。'
    },
    tag: {
      nullTag:  '未传入标签。',
      tooLong:  '标签内容过长。',
      tooMuch:  '已达到标签数上限。',
      notFound: '标签未找到。',
      added:    '标签已添加。',
      removed:  '标签已删除。',
    },
    search: {
      nullQuery: '未输入内容。'
    },
    comment: {
      sendFail:   '发送评论失败：{message}',
      amendFail:  '修改评论失败：{message}',
      removeFail: '删除评论失败：{message}',
      invalidContent: '未传入评论内容或评论过长。',
      tooFast: '评论过快，请稍后重试。'
    }
  }
};
