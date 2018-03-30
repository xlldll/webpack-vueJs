module.exports = {
  api: '/blog/mock/tags/531938577/1',
  response: function (req, res) {
    res.json(
      {
        'id': 531938577,
        'name': 'Sierra',
        'posts': [
          {
            'id': 205319771,
            'created': '2017-02-04T03:34:16Z',
            'updated': '2017-03-17T01:18:48Z',
            'title': '记录一下折腾黑苹果过程',
            'author': {
              'name': 'LoeiFy',
              'avatar': 'https://avatars3.githubusercontent.com/u/2193211?v=3',
              'url': 'https://github.com/LoeiFy'
            },
            'summary': '<p>也算是完成了读书时候的心愿，以前读书时候老想着弄个黑苹果，但是一直没有成功。最近折腾安装前后花的时间就两三天那样，参考了一堆前人经验，所以不会很折腾，总体上算是完美的</p>\n',
            'thumb': 'https://cloud.githubusercontent.com/assets/2193211/22615077/d8cde9de-eac7-11e6-98be-6531cc36bc61.png',
            'category': {
              'id': 0,
              'name': 'blog'
            },
            'tags': [
              {
                'id': 531939314,
                'name': 'CustoMac'
              },
              {
                'id': 531938577,
                'name': 'Sierra'
              }
            ]
          }
        ]
      }
    )
  }
}
