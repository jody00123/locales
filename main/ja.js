export default {
  vendor: {
    moment: 'ja',
    html: 'ja',
    player: 'ja'
  },
  term: {
    login:  'ログイン',
    signup: '会員登録',
    guest:  'ゲスト',
    tags:   'タグ',
    clear:  'クリア',
    send:   '送信する',
    cancel: 'キャンセル',
    remove: '削除する',
    ok:     'OK',
    likes:  'いいね!'
  },
  message: {
    list: {
      page: 'ページ {page}'
    },
    videoList: {
      title: '動画',
      empty: '該当する動画は見つかりませんでした'
    },
    commentItem: {
      placeholder: 'コメントを入力する',
      malleable:   '{time}内に編集できる'
    },
    commentList: {
      title: 'コメント ({count})',
      empty: 'コメントはありません'
    },
    footer: {
      support: 'サポート：'
    }
  },
  error: {
    generic: {
      network: '通信中にエラーが発生しました。',
      generic: '失敗しました。',
      notLoggedIn: 'まずログインしてください',
      permissionDenied: 'この権限はありません'
    },
    user: {
      nullName: 'ユーザー名が入力されていません。'
    },
    video: {
      notFound: '動画が見つかりませんでした。投稿されていないか、削除された可能性があります。',
      nullId: '動画IDが入力されていません。',
      likeSuccess: '「いいね!」しました。'
    },
    tag: {
      nullTag:  'タグが入力されていません。',
      tooLong:  'タグの文字数が超えています。',
      tooMuch:  'タグ数が制限に達しています。',
      notFound: '該当するタグは見つかりませんでした。',
      added:    'タグを追加しました。',
      removed:  'タグを削除しました。',
    },
    search: {
      nullQuery: 'キーワードを入力してください。'
    },
    comment: {
      sendFail:   '送信できませんでした：{message}',
      amendFail:  '編集できませんでした：{message}',
      removeFail: '削除できませんでした：{message}',
      invalidContent: 'コメントが入力されていない、またはコメントの字数が制限を超えています。',
      tooFast: 'コメントするスピードが速すぎます、しばらく待ってからもう一度コメントしてください。'
    }
  }
};
