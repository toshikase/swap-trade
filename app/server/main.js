Contracts.allow({
  insert: function (userId, doc) {
    // ユーザはログインしていなければならなく、ドキュメントはユーザによって
    // 所有されなければなりません。
    return (userId && doc.owner === userId);
  },
  update: function (userId, doc, fields, modifier) {
    // 所有しているドキュメントのみ変更が許されます
    return doc.owner === userId;
  },
  remove: function (userId, doc) {
    // 所有しているドキュメントのみ削除が許されます
    return doc.owner === userId;
  },
  fetch: ['owner']
});
