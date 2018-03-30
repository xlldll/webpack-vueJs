module.exports = {
  api: '/blog/mock/tags/534950544/1',
  response: function (req, res) {
    res.json(
      {
        'id': 534950544,
        'name': 'Blog',
        'posts': [
          {
            'id': 126817142,
            'created': '2016-01-15T06:44:56Z',
            'updated': '2017-03-01T12:46:11Z',
            'title': 'Mirror - 基于 issues 的博客工具',
            'author': {
              'name': 'LoeiFy',
              'avatar': 'https://avatars3.githubusercontent.com/u/2193211?v=3',
              'url': 'https://github.com/LoeiFy'
            },
            'summary': '',
            'thumb': 'https://cloud.githubusercontent.com/assets/2193211/20244206/d4d72a80-a9b2-11e6-9c0d-bb557cab90ec.png',
            'category': {
              'id': 0,
              'name': 'blog'
            },
            'tags': [
              {
                'id': 534950544,
                'name': 'Blog'
              },
              {
                'id': 534950402,
                'name': 'Github'
              },
              {
                'id': 534950261,
                'name': 'Nodejs'
              }
            ]
          },
          {
            'id': 71329290,
            'created': '2015-04-27T16:00:36Z',
            'updated': '2017-03-30T11:08:04Z',
            'title': '创建类似 http://ithinkimight.com/ 随机大小排布界面',
            'author': {
              'name': 'LoeiFy',
              'avatar': 'https://avatars3.githubusercontent.com/u/2193211?v=3',
              'url': 'https://github.com/LoeiFy'
            },
            'summary': '<p><code>ithinkimight.com</code> 这个网站图片来自 Instagram，图片随机大小，位置也是随机，图片可以重叠，但是并没有 <strong>过分</strong> 重叠。这种随机大小，位置排版页面元素跟平常的整齐 <code>grid</code> 或者 <code>瀑布流</code> 风格很不一样，下面我们尝试一下实现类似效果</p>\n',
            'thumb': '',
            'category': {
              'id': 0,
              'name': 'blog'
            },
            'tags': [
              {
                'id': 534950544,
                'name': 'Blog'
              },
              {
                'id': 548067165,
                'name': 'Grid'
              },
              {
                'id': 548066947,
                'name': 'Javascript'
              }
            ]
          }
        ]
      }
    )
  }
}
