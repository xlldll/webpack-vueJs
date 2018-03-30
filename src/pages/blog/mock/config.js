/**
 * Created by LinChuQiang.
 */
module.exports = {
  api: '/blog/mock/config',
  response: function (req, res) {
    res.json(
      [
        {
          'title': 'Recordum',
          'description': 'A Node.js blog tool powered by GitHub.',
          'keywords': 'acyort, nodejs, blog',
          'rss': 'rss.xml',
          'favicon': 'icon.png',
          'url': 'http://acyortjs.github.io',
          'disqus': 'acyort',
          'language': 'en',
          'theme': 'donob',
          'per_page': 5,
          'archives_per_page': 30,
          'thumbnail_mode': 2,
          'menu': {
            'archives': '/archives',
            'categories': '/categories',
            'tags': '/tags',
            'about': '/pages/about'
          },
          'default_category': 'blog',
          'public_dir': '',
          'category_dir': 'category',
          'tag_dir': 'tag',
          'post_dir': 'posts',
          'archives_dir': 'archives',
          'user': 'LoeiFy',
          'repository': 'Recordum',
          'authors': [
            'LoeiFy'
          ],
          'json': 'json',
          'dev': false,
          'root': '/',
          'posts': [
            210285498,
            205319771,
            196350551,
            126817142,
            71470122,
            71329290
          ],
          'pages': [
            {
              'id': 217459107,
              'name': 'about'
            }
          ],
          'categories': [
            {
              'id': '0',
              'name': 'blog',
              'count': 6
            }
          ],
          'tags': [
            {
              'id': '175174882',
              'name': 'Adobe',
              'count': 1
            },
            {
              'id': '175183154',
              'name': 'Extension',
              'count': 1
            },
            {
              'id': '531938099',
              'name': 'Photoshop',
              'count': 1
            },
            {
              'id': '531938577',
              'name': 'Sierra',
              'count': 1
            },
            {
              'id': '531939314',
              'name': 'CustoMac',
              'count': 1
            },
            {
              'id': '534950261',
              'name': 'Nodejs',
              'count': 2
            },
            {
              'id': '534950402',
              'name': 'Github',
              'count': 1
            },
            {
              'id': '534950544',
              'name': 'Blog',
              'count': 2
            },
            {
              'id': '548037602',
              'name': 'Router',
              'count': 1
            },
            {
              'id': '548037617',
              'name': 'React',
              'count': 1
            },
            {
              'id': '548037646',
              'name': 'Vue',
              'count': 1
            },
            {
              'id': '548066947',
              'name': 'Javascript',
              'count': 2
            },
            {
              'id': '548067165',
              'name': 'Grid',
              'count': 1
            }
          ]
        }
      ]
    )
  }
}
