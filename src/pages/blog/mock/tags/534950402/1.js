module.exports = {
  api: '/blog/mock/tags/534950402/1',
  response: function (req, res) {
    res.json(
      {
        'id': 534950402,
        'name': 'Github',
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
          }
        ]
      }
    )
  }
}
