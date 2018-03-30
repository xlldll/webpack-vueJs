module.exports = {
  api: '/blog/mock/tags/548037617/1',
  response: function (req, res) {
    res.json(
      {
        'id': 548037617,
        'name': 'React',
        'posts': [
          {
            'id': 210285498,
            'created': '2017-02-26T05:00:33Z',
            'updated': '2017-03-16T07:49:41Z',
            'title': '不依赖服务端实现 react-router 的 browserHistory',
            'author': {
              'name': 'LoeiFy',
              'avatar': 'https://avatars3.githubusercontent.com/u/2193211?v=3',
              'url': 'https://github.com/LoeiFy'
            },
            'summary': '<p>SPA 项目基本上都会用到路由 <code>router</code>。react 还有 vue 对应有其路由插件。 react-router 还有 vue-router 都有 hashHistory 和 browserHistory 模式。这里大概说一下两者区别</p>\n',
            'thumb': '',
            'category': {
              'id': 0,
              'name': 'blog'
            },
            'tags': [
              {
                'id': 534950261,
                'name': 'Nodejs'
              },
              {
                'id': 548037617,
                'name': 'React'
              },
              {
                'id': 548037602,
                'name': 'Router'
              },
              {
                'id': 548037646,
                'name': 'Vue'
              }
            ]
          }
        ]
      }
    )
  }
}
