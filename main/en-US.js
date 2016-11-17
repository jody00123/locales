export default {
  vendor: {
    moment: 'en',
    html: 'en',
    player: 'en'
  },
  term: {
    login:  'Sign in',
    signup: 'Sign up',
    guest:  'Guest',
    tags:   'Tags',
    clear:  'Clear',
    send:   'Send',
    cancel: 'Cancel',
    remove: 'Remove',
    ok:     'OK',
    likes:  'like | likes'
  },
  message: {
    list: {
      page: 'Page {page}'
    },
    videoList: {
      title: 'Videos',
      empty: 'Nothing found'
    },
    commentItem: {
      placeholder: 'Write something',
      malleable:   'malleable for {time}'
    },
    commentList: {
      title: '{count} comment | {count} comments',
      empty: 'Nothing yet!'
    },
    footer: {
      support: 'Support:'
    }
  },
  error: {
    generic: {
      network: 'Possible network problem. Please retry later.',
      generic: 'Operation failed due to an unknown error.',
      notLoggedIn: 'Please retry after signing in.',
      permissionDenied: 'Permission denied.'
    },
    user: {
      nullName: 'User name is missing.'
    },
    video: {
      notFound: 'Video not found: it does not exist yet, or might have been removed by site admins.',
      nullId: 'Video ID is missing.',
      likeSuccess: 'Successfully liked.'
    },
    tag: {
      nullTag: 'Tag is missing.',
      tooLong: 'Tag is too long.',
      tooMuch:  'Tag count limit hit.',
      notFound: 'Tag not found.',
      added:    'Tag added.',
      removed:  'Tag removed.',
    },
    search: {
      nullQuery: 'search query is empty'
    },
    comment: {
      sendFail:   'Failed to send comment: {message}',
      amendFail:  'Failed to amend comment: {message}',
      removeFail: 'Failed to remove comment: {message}',
      invalidContent: 'Content is missing or too long.',
      tooFast: 'Your typing speed is awesome! Please retry later.'
    }
  }
};
