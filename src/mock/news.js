/**
 * Created by LinChuQiang.
 */
module.exports = {
  api: '/mock/news',
  response: function (req, res) {
    res.json(
      [
          {'newsid': '101', 'pubtime': '2016-10-29', 'title': '\u63a2\u7d22\u4e4b\u8def', 'desc': '\u662f\u624b\u673a\u56e2\u961f\u7684\u63a2\u7d22\u4e4b\u8def', 'isdelected': false},
          {'newsid': '102', 'pubtime': '2016-10-30', 'title': '\u7cfb\u7edf\u4e4b\u6218', 'desc': '\u5982\u4f55\u652f\u6301\u4e1a\u52a1\u89e3\u51b3', 'isdelected': false},
          {'newsid': '103', 'pubtime': '2016-10-31', 'title': '\u5927\u6587\u4ef6\u5b58\u50a8', 'desc': '\u80cc\u540e\u7684\u4f60\u4e0d\u5f97\u4e0d\u77e5\u7684\u6280\u672f', 'isdelected': true},
          {'newsid': '104', 'pubtime': '2016-11-29', 'title': '\u98de\u5929\u8fdb\u5316', 'desc': '\u963f\u91cc\u5df4\u5df4\u6280\u672f\u59d4\u5458\u4f1a', 'isdelected': true}
      ]
    )
  }
}
