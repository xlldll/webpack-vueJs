module.exports = {
  api: '/blog/mock/posts/210285498',
  response: function (req, res) {
    res.json(
      {
        'id': 210285498,
        'created': '2017-02-26T05:00:33Z',
        'updated': '2017-03-16T07:49:41Z',
        'prev': '',
        'next': {
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
        },
        'title': '不依赖服务端实现 react-router 的 browserHistory',
        'author': {
          'name': 'LoeiFy',
          'avatar': 'https://avatars3.githubusercontent.com/u/2193211?v=3',
          'url': 'https://github.com/LoeiFy'
        },
        'content': "<p>SPA 项目基本上都会用到路由 <code>router</code>。react 还有 vue 对应有其路由插件。 react-router 还有 vue-router 都有 hashHistory 和 browserHistory 模式。这里大概说一下两者区别</p>\n<ul>\n<li>hashHistory: 不需要服务器配置，在 URL 生成一个 hash 来跟踪状态，通常在测试环境使用，也可以作为发布环境使用</li><li>browserHistory: 需要服务器端做配置，路径是真实的URL，是 react-router 官方推荐首选</li></ul>\n<p>大多数情况下，browserHistory 模式明显是优于 hashHistory 模式的，但 browserHistory 需要一定的配置</p>\n<h3 id=\"一般方式\">一般方式</h3><p>可以看出，hashHistory 不需要什么配置，但 browserHistory 需要服务端支持，这里简单说一下两种方式做支持，其它方式基本上都是类似</p>\n<blockquote>\n<p>使用 express</p>\n</blockquote>\n<div class=\"hljs js\">\n      <div class=\"mark\">javascript</div>\n      <table><tbody><tr>\n      <td class=\"line\"><pre><span>1</span>\n<span>2</span>\n<span>3</span>\n<span>4</span>\n</pre></td>\n      <td class=\"code\"><pre><span class=\"hljs-keyword\">const</span> app = express()\napp.get(<span class=\"hljs-string\">'*'</span>, <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-params\">(request, response)</span></span>{\n  response.sendFile(path.resolve(__dirname, <span class=\"hljs-string\">'index.html'</span>))\n})</pre></td>\n      </tr></tbody></table>\n      </div><blockquote>\n<p>使用 nginx</p>\n</blockquote>\n<div class=\"hljs perl\">\n      <div class=\"mark\">perl</div>\n      <table><tbody><tr>\n      <td class=\"line\"><pre><span>1</span>\n<span>2</span>\n<span>3</span>\n<span>4</span>\n<span>5</span>\n<span>6</span>\n</pre></td>\n      <td class=\"code\"><pre>server {\n  ...\n  <span class=\"hljs-keyword\">location</span> <span class=\"hljs-title\">/ {\n    try_files</span> $uri /index.html\n  }\n}</pre></td>\n      </tr></tbody></table>\n      </div><p>这里说明一下为什么要这样设置，browserHistory 模式下，URL 是指向真实 URL 的资源路径，当通过真实 URL 访问网站的时候（首页），这个时候可以正常加载我们的网站资源，而用户在非首页下手动刷新网页时，由于路径是指向服务器的真实路径，但该路径下并没有相关资源，用户访问的资源不存在，返回给用户的是 404 错误</p>\n<h3 id=\"另一种方式\">另一种方式</h3><p>通过上面所说的原理，简单起来说就是 browserHistory 模式下，需要每个路由下都要有对应的资源存在，就不会产生 404 错误，所以如果不借助服务端的话，又要实现这种模式，这种场景在自己不能配置服务器时候会碰到，例如把项目部署到 <code>GitHub pages</code> 上。那该怎么办呢</p>\n<blockquote>\n<p>那么就产生 <strong>对应资源</strong> </p>\n</blockquote>\n<p>所以，我们的做法就是在每个 <strong>路由路径</strong> 下，都放置一个跟首页一样的 <code>index.html</code></p>\n<p>下面是做法，当然也是有各种方式的，都是可以类推的</p>\n<p>假定我们有以下的路由设定，这里以 react-router 为例子</p>\n<div class=\"hljs js\">\n      <div class=\"mark\">javascript</div>\n      <table><tbody><tr>\n      <td class=\"line\"><pre><span>1</span>\n<span>2</span>\n<span>3</span>\n<span>4</span>\n<span>5</span>\n<span>6</span>\n<span>7</span>\n<span>8</span>\n<span>9</span>\n<span>10</span>\n<span>11</span>\n<span>12</span>\n</pre></td>\n      <td class=\"code\"><pre>export default (\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Route</span> <span class=\"hljs-attr\">path</span>=<span class=\"hljs-string\">\"/\"</span> <span class=\"hljs-attr\">component</span>=<span class=\"hljs-string\">{App}</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">IndexRoute</span> <span class=\"hljs-attr\">component</span>=<span class=\"hljs-string\">{HomePage}</span> /&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Route</span> <span class=\"hljs-attr\">path</span>=<span class=\"hljs-string\">\"contact-us\"</span> <span class=\"hljs-attr\">component</span>=<span class=\"hljs-string\">{ContactPage}</span> /&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Route</span> <span class=\"hljs-attr\">path</span>=<span class=\"hljs-string\">\"dashboard\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">IndexRoute</span> <span class=\"hljs-attr\">component</span>=<span class=\"hljs-string\">{Verify(Dashboard)}</span> /&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Route</span> <span class=\"hljs-attr\">path</span>=<span class=\"hljs-string\">\"inbox\"</span> <span class=\"hljs-attr\">component</span>=<span class=\"hljs-string\">{Verify(Inbox)}</span> /&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Route</span> <span class=\"hljs-attr\">path</span>=<span class=\"hljs-string\">\"conversation\"</span> <span class=\"hljs-attr\">component</span>=<span class=\"hljs-string\">{Verify(ComposeMessage)}</span> /&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Route</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Route</span> <span class=\"hljs-attr\">path</span>=<span class=\"hljs-string\">\"*\"</span> <span class=\"hljs-attr\">component</span>=<span class=\"hljs-string\">{NotFound}</span> /&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Route</span>&gt;</span>\n)</pre></td>\n      </tr></tbody></table>\n      </div><p>那么就可以路由路径为</p>\n<div class=\"hljs js\">\n      <div class=\"mark\">javascript</div>\n      <table><tbody><tr>\n      <td class=\"line\"><pre><span>1</span>\n<span>2</span>\n<span>3</span>\n<span>4</span>\n<span>5</span>\n<span>6</span>\n<span>7</span>\n<span>8</span>\n<span>9</span>\n</pre></td>\n      <td class=\"code\"><pre><span class=\"hljs-comment\">// routes.js</span>\n<span class=\"hljs-keyword\">const</span> routes = [\n  <span class=\"hljs-string\">'contact-us'</span>,\n  <span class=\"hljs-string\">'dashboard'</span>,\n  <span class=\"hljs-string\">'dashborad/inbox'</span>,\n  <span class=\"hljs-string\">'dashboard/conversation'</span>\n]\n\n<span class=\"hljs-keyword\">module</span>.<span class=\"hljs-keyword\">exports</span> = routes</pre></td>\n      </tr></tbody></table>\n      </div><p>接下来我们就把生成的 <code>index.html</code> 复制到这几个路径下就可以了</p>\n<div class=\"hljs js\">\n      <div class=\"mark\">javascript</div>\n      <table><tbody><tr>\n      <td class=\"line\"><pre><span>1</span>\n<span>2</span>\n<span>3</span>\n<span>4</span>\n<span>5</span>\n<span>6</span>\n<span>7</span>\n</pre></td>\n      <td class=\"code\"><pre><span class=\"hljs-comment\">// deploy.js</span>\n<span class=\"hljs-keyword\">const</span> fs = <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'fs-extra'</span>)\n<span class=\"hljs-keyword\">const</span> routes = <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'routes.js'</span>)\n<span class=\"hljs-keyword\">const</span> path = <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'path'</span>)\nroutes.forEach(<span class=\"hljs-function\">(<span class=\"hljs-params\">route</span>) =&gt;</span> {\n  fs.copySync(<span class=\"hljs-string\">'index.html'</span>, path.join(route, <span class=\"hljs-string\">'index.html'</span>))\n})</pre></td>\n      </tr></tbody></table>\n      </div><p>这样用户访问就不会出现 404 了，SPA 的功能也不受影响，为了方便我们可以把这个生成工具集成到 <code>package.json</code></p>\n<div class=\"hljs json\">\n      <div class=\"mark\">json</div>\n      <table><tbody><tr>\n      <td class=\"line\"><pre><span>1</span>\n<span>2</span>\n<span>3</span>\n<span>4</span>\n<span>5</span>\n</pre></td>\n      <td class=\"code\"><pre>{\n  <span class=\"hljs-attr\">\"script\"</span>: {\n    <span class=\"hljs-attr\">\"build\"</span>: <span class=\"hljs-string\">\"NODE_ENV=production webpack --progress &amp;&amp; node deploy.js\"</span>\n  }\n}</pre></td>\n      </tr></tbody></table>\n      </div><p>ok, 当我们运行 <code>npm run build</code> 时候，就会同时生成对应路径下的 <code>index.html</code>，这样就可以了完成我们所需要的功能了</p>\n<h3 id=\"问题amp思考\">问题 &amp; 思考</h3><blockquote>\n<p>404 页面问题</p>\n</blockquote>\n<p>这个就直接使用服务端 404 页面了，如果是用 <code>GitHub pages</code> 的话，我们可以直接生成一个 <code>404.html</code> 即可。或者是将 404 路由跳转到首页</p>\n<p>还有一种做法，直接把 404 页面弄成跟 index 内容一样，404 时候就是正常的内容页面，这时候页面功能是正常的，并且不需要前面的一对做法了。</p>\n",
        'thumb': '',
        'toc': '<ul>\n<li><a href="#一般方式">一般方式</a></li><li><a href="#另一种方式">另一种方式</a></li><li><a href="#问题思考">问题 &amp; 思考</a></li></ul>\n',
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
    )
  }
}
