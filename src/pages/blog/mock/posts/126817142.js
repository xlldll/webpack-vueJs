module.exports = {
  api: '/blog/mock/posts/126817142',
  response: function (req, res) {
    res.json(
      {
        'id': 126817142,
        'created': '2016-01-15T06:44:56Z',
        'updated': '2017-03-01T12:46:11Z',
        'prev': {
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
        },
        'next': {
          'id': 71470122,
          'created': '2015-04-28T03:50:13Z',
          'updated': '2017-04-11T05:54:52Z',
          'title': '输入框输入值自动格式化',
          'author': {
            'name': 'LoeiFy',
            'avatar': 'https://avatars3.githubusercontent.com/u/2193211?v=3',
            'url': 'https://github.com/LoeiFy'
          },
          'summary': '<p>这里说的自动格式化是指当用户在输入框里面输入数字，例如银行卡号，为了方便用户输入，希望在输入过程中对输入数字进行加空格处理，优化用户体验</p>\n',
          'thumb': '',
          'category': {
            'id': 0,
            'name': 'blog'
          },
          'tags': [
            {
              'id': 548066947,
              'name': 'Javascript'
            }
          ]
        },
        'title': 'Mirror - 基于 issues 的博客工具',
        'author': {
          'name': 'LoeiFy',
          'avatar': 'https://avatars3.githubusercontent.com/u/2193211?v=3',
          'url': 'https://github.com/LoeiFy'
        },
        'content': "<p>Mirror 是一个简单的博客工具，基于 GitHub API 获取 issues 数据，然后展示在页面上。</p>\n<p>该工具的方便之处在于只需要在 issue 上写你的博客文章，你的网站会自动更新博客内容。</p>\n<p>借助 GitHub，你可以轻松的用 markdown 书写你的博客内容，永久保存，不用担心数据丢失问题。还可以非常方便上传博客图片，拖入编辑器即可。</p>\n<p>该博客工具非常适合以 issue 作为自己博客的用户，无痛生成博客网站，对原来内容毫无影响</p>\n<p>Mirror 还支持多用户协作，你可以方便的设置哪些用户写的内容可以显示在博客网站上，避免无关内容</p>\n<p>Mirror 生成的博客网站很小，整体大小 <code>60kb</code> 左右（未 gzip 压缩情况），所以访问起来也很快。项目依赖： <code>axios</code>, <code>smoothscroll-polyfill</code>, <code>github-markdown-css</code>, <code>es6-promise</code></p>\n<p>Mirror 在移动端同时有很好的浏览体验</p>\n<h2 id=\"预览地址\">预览地址</h2><p><a href=\"http://mirror.am0200.com/\">http://mirror.am0200.com/</a></p>\n<p>你可以点击底部的 <code>SandBox</code> 按钮，然后写入你需要测试的项目 issues，然后就可以直接看到博客内容，例如可以输入 玉伯 的博客地址：</p>\n<div class=\"hljs\">\n      \n      <table><tbody><tr>\n      <td class=\"line\"><pre><span>1</span>\n<span>2</span>\n<span>3</span>\n<span>4</span>\n<span>5</span>\n<span>6</span>\n<span>7</span>\n</pre></td>\n      <td class=\"code\"><pre>title: blog\n\nuser: lifesinger\n\nrepo: blog\n\nper page: 10</pre></td>\n      </tr></tbody></table>\n      </div><p>点击 <code>Start</code>，你就可以看到 玉伯 的博客了。同样方法你可以测试你的 issue 博客</p>\n<h2 id=\"项目地址\">项目地址</h2><p><a href=\"https://github.com/LoeiFy/Mirror\">https://github.com/LoeiFy/Mirror</a></p>\n<p>更详细的介绍可以看项目说明</p>\n<h2 id=\"如何安装\">如何安装</h2><p>安装很简单，需要一个 nodejs 环境，一个简单的命令即可，如果没有 nodejs 环境，可以直接下载资源包自己配置，后面会有说明</p>\n<div class=\"hljs bash\">\n      <div class=\"mark\">bash</div>\n      <table><tbody><tr>\n      \n      <td class=\"code\"><pre>$ sudo npm <span class=\"hljs-keyword\">install</span> Mirror -g</pre></td>\n      </tr></tbody></table>\n      </div><h2 id=\"使用\">使用</h2><h3 id=\"新建\">新建</h3><div class=\"hljs bash\">\n      <div class=\"mark\">bash</div>\n      <table><tbody><tr>\n      <td class=\"line\"><pre><span>1</span>\n<span>2</span>\n</pre></td>\n      <td class=\"code\"><pre><span class=\"hljs-variable\">$ </span>cd newblog\n<span class=\"hljs-variable\">$ </span>mirror init</pre></td>\n      </tr></tbody></table>\n      </div><p>或者</p>\n<div class=\"hljs bash\">\n      <div class=\"mark\">bash</div>\n      <table><tbody><tr>\n      \n      <td class=\"code\"><pre><span class=\"hljs-variable\">$ </span>mirror init newblog</pre></td>\n      </tr></tbody></table>\n      </div><p>完成后你的 blog 就在 newblog 这里</p>\n<h3 id=\"配置你的blog\">配置你的 blog</h3><p>修改 <code>config.yml</code></p>\n<div class=\"hljs yml\">\n      <div class=\"mark\">yml</div>\n      <table><tbody><tr>\n      <td class=\"line\"><pre><span>1</span>\n<span>2</span>\n<span>3</span>\n<span>4</span>\n<span>5</span>\n<span>6</span>\n<span>7</span>\n<span>8</span>\n<span>9</span>\n<span>10</span>\n<span>11</span>\n<span>12</span>\n<span>13</span>\n<span>14</span>\n<span>15</span>\n<span>16</span>\n<span>17</span>\n<span>18</span>\n<span>19</span>\n</pre></td>\n      <td class=\"code\"><pre><span class=\"hljs-meta\"># 标题</span>\ntitle: Mirror\n\n<span class=\"hljs-meta\"># github 用户名</span>\nuser: LoeiFy\n\n<span class=\"hljs-meta\"># blog 内容来源 repo</span>\nrepo: Recordum\n\n<span class=\"hljs-meta\"># 多用户，设定哪些用户写的 issue 内容可以展示出来，项目的用户名会自动包括进来</span>\n<span class=\"hljs-meta\"># 多个用户用逗号（英文逗号）隔开，例如：user0,user1</span>\nauthors: \n\n<span class=\"hljs-meta\"># 分页</span>\nper_page: <span class=\"hljs-number\">10</span>\n\n<span class=\"hljs-meta\"># 是否显示 sandbox，设置是否允许用户手动写入 issue 地址进行快速预览</span>\n<span class=\"hljs-meta\"># 默认 false</span>\nsandbox: <span class=\"hljs-literal\">false</span></pre></td>\n      </tr></tbody></table>\n      </div><p>获取你的 token，复制进 <code>token.txt</code>。这个 token 只有只读权限，用于提高 api 访问次数，不会有其他问题。</p>\n<p><a href=\"https://github.com/settings/tokens\">https://github.com/settings/tokens</a></p>\n<p><img src=\"https://cloud.githubusercontent.com/assets/2193211/20244206/d4d72a80-a9b2-11e6-9c0d-bb557cab90ec.png\" alt=\"token\"></p>\n<h3 id=\"生成博客\">生成博客</h3><div class=\"hljs bash\">\n      <div class=\"mark\">bash</div>\n      <table><tbody><tr>\n      \n      <td class=\"code\"><pre><span class=\"hljs-variable\">$ </span>mirror build</pre></td>\n      </tr></tbody></table>\n      </div><h3 id=\"发布你的blog\">发布你的 blog</h3><p>你可以添加域名到 <code>CNAME</code></p>\n<p>push 文件到一个 repo 的 <code>gh-pages</code> 分支</p>\n<p>参考例子：<a href=\"https://github.com/LoeiFy/Mirror/tree/gh-pages\">https://github.com/LoeiFy/Mirror/tree/gh-pages</a></p>\n<h3 id=\"最后\">最后</h3><p>现在你可以在 github issue  上写博客了，内容会同步更新</p>\n<blockquote>\n<p>一个例子</p>\n</blockquote>\n<p>在 <a href=\"https://github.com/LoeiFy/Recordum/issues\">https://github.com/LoeiFy/Recordum/issues</a> 这个 issue 上写博客内容，对应网站 <a href=\"http://mirror.am0200.com/\">http://mirror.am0200.com/</a> 会自动同步更新内容</p>\n<h2 id=\"另一种安装方式\">另一种安装方式</h2><p>你可以直接下载资源包，下载最新的 release，然后打开 <code>index.html</code> 进行配置，按照例子进行配置即可</p>\n<p><a href=\"https://github.com/LoeiFy/Mirror/raw/master/mirror.zip\">https://github.com/LoeiFy/Mirror/raw/master/mirror.zip</a></p>\n<div class=\"hljs html\">\n      <div class=\"mark\">html</div>\n      <table><tbody><tr>\n      <td class=\"line\"><pre><span>1</span>\n<span>2</span>\n<span>3</span>\n<span>4</span>\n<span>5</span>\n<span>6</span>\n<span>7</span>\n<span>8</span>\n<span>9</span>\n<span>10</span>\n<span>11</span>\n</pre></td>\n      <td class=\"code\"><pre>&lt;!-- index.html<span class=\"hljs-function\"> --&gt;</span>\n\n&lt;script&gt;\n\n<span class=\"hljs-regexp\">// blog config here\n//</span> token should be separated <span class=\"hljs-keyword\">by</span> <span class=\"hljs-string\">'#'</span>. example: <span class=\"hljs-number\">5</span><span class=\"hljs-comment\">#c31bffc137f44faf7efc4a84da827g7ca2cfeaa</span>\n<span class=\"hljs-regexp\">// example:\n//</span> <span class=\"hljs-built_in\">window</span>.config = {<span class=\"hljs-string\">\"title\"</span>:<span class=\"hljs-string\">\"rorriM\"</span>,<span class=\"hljs-string\">\"user\"</span>:<span class=\"hljs-string\">\"acyortjs\"</span>,<span class=\"hljs-string\">\"repo\"</span>:<span class=\"hljs-string\">\"acyortjs.github.io\"</span>,<span class=\"hljs-string\">\"token\"</span>:<span class=\"hljs-string\">\"5<span class=\"hljs-subst\">#c31bffc137f44faf7efc4a84da827g7ca2cfeaa</span>\"</span>,<span class=\"hljs-string\">\"authors\"</span>:<span class=\"hljs-string\">\"LoeiFy,User0\"</span>,<span class=\"hljs-string\">\"per_page\"</span>:<span class=\"hljs-number\">1</span>,<span class=\"hljs-string\">\"sandbox\"</span>:<span class=\"hljs-literal\">false</span>}\n<span class=\"hljs-built_in\">window</span>.config = {<span class=\"hljs-string\">\"title\"</span>:<span class=\"hljs-string\">\"\"</span>,<span class=\"hljs-string\">\"user\"</span>:<span class=\"hljs-string\">\"\"</span>,<span class=\"hljs-string\">\"repo\"</span>:<span class=\"hljs-string\">\"\"</span>,<span class=\"hljs-string\">\"token\"</span>:<span class=\"hljs-string\">\"\"</span>,<span class=\"hljs-string\">\"authors\"</span>:<span class=\"hljs-string\">\"\"</span>,<span class=\"hljs-string\">\"per_page\"</span>:<span class=\"hljs-string\">\"\"</span>, <span class=\"hljs-string\">\"sandbox\"</span>:<span class=\"hljs-literal\">false</span>}\n\n&lt;/script&gt;</pre></td>\n      </tr></tbody></table>\n      </div><p>配置好后，可以先尝试本地预览，需要一个本地服务器，放上去访问 <code>index.html</code> 即可，测试没问题就可以把全部文件上传到对应地址即可，也可以放到 GitHub pages 上</p>\n<h2 id=\"名字来源\">名字来源</h2><p><code>Mirror</code> 是 <code>DJ Okawari</code> 所作的专辑</p>\n<p><img src=\"https://cloud.githubusercontent.com/assets/2193211/12321915/c66d8b12-baeb-11e5-9612-b188f5272e3b.jpg\" alt=\"mirror\"></p>\n",
        'thumb': 'https://cloud.githubusercontent.com/assets/2193211/20244206/d4d72a80-a9b2-11e6-9c0d-bb557cab90ec.png',
        'toc': '<ul>\n<li><a href="#预览地址">预览地址</a></li><li><a href="#项目地址">项目地址</a></li><li><a href="#如何安装">如何安装</a></li><li><a href="#使用">使用</a><ul>\n<li><a href="#新建">新建</a></li><li><a href="#配置你的blog">配置你的 blog</a></li><li><a href="#生成博客">生成博客</a></li><li><a href="#发布你的blog">发布你的 blog</a></li><li><a href="#最后">最后</a></li></ul>\n</li><li><a href="#另一种安装方式">另一种安装方式</a></li><li><a href="#名字来源">名字来源</a></li></ul>\n',
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
    )
  }
}
