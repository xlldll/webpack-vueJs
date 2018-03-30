module.exports = {
  api: '/blog/mock/tags/531938099/1',
  response: function (req, res) {
    res.json(
      {
        'id': 531938099,
        'name': 'Photoshop',
        'posts': [
          {
            'id': 196350551,
            'created': '2016-12-19T07:48:21Z',
            'updated': '2017-02-12T11:58:28Z',
            'title': 'Adobe CEP 扩展相关',
            'author': {
              'name': 'LoeiFy',
              'avatar': 'https://avatars3.githubusercontent.com/u/2193211?v=3',
              'url': 'https://github.com/LoeiFy'
            },
            'summary': '<p>Adobe 系列通常情况下宿主应用是不会运行未经签名扩展的，只有打包并签名才可以运行。但是可以打开开发者模式</p>\n',
            'thumb': 'https://cloud.githubusercontent.com/assets/2193211/21304385/cae9241a-c5ff-11e6-98fb-1ef0e84ee80e.png',
            'category': {
              'id': 0,
              'name': 'blog'
            },
            'tags': [
              {
                'id': 175174882,
                'name': 'Adobe'
              },
              {
                'id': 175183154,
                'name': 'Extension'
              },
              {
                'id': 531938099,
                'name': 'Photoshop'
              }
            ]
          }
        ]
      }
    )
  }
}
