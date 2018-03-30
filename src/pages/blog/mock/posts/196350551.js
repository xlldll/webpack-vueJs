module.exports = {
  api: '/blog/mock/posts/196350551',
  response: function (req, res) {
    res.json(
      {
        'id': 196350551,
        'created': '2016-12-19T07:48:21Z',
        'updated': '2017-02-12T11:58:28Z',
        'prev': {
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
        'next': {
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
        'title': 'Adobe CEP 扩展相关',
        'author': {
          'name': 'LoeiFy',
          'avatar': 'https://avatars3.githubusercontent.com/u/2193211?v=3',
          'url': 'https://github.com/LoeiFy'
        },
        'content': '<p>Adobe 系列通常情况下宿主应用是不会运行未经签名扩展的，只有打包并签名才可以运行。但是可以打开开发者模式</p>\n<h2 id="启用开发者模式">启用开发者模式</h2><blockquote>\n<p>Windows</p>\n</blockquote>\n<p>打开到注册表定位到: ( 高版本类推 )</p>\n<ul>\n<li>CC 2014: <code>HKEY_CURRENT_USER\\Software\\Adobe\\CSXS.5</code></li><li>CC 2015: <code>HKEY_CURRENT_USER\\Software\\Adobe\\CSXS.6</code></li></ul>\n<p>将 <code>PlayerDebugMode</code> 设置为 <code>1</code></p>\n<blockquote>\n<p>macOS</p>\n</blockquote>\n<p>终端输入: ( 同样高版本类推 )</p>\n<p><code>defaults write com.adobe.CSXS.6 PlayerDebugMode 1</code></p>\n<h2 id="扩展签名打包">扩展签名打包</h2><p>使用 Adobe 官方提供的 ZXPSignCmd\n<a href="https://github.com/Adobe-CEP/CEP-Resources/tree/master/ZXPSignCMD">https://github.com/Adobe-CEP/CEP-Resources/tree/master/ZXPSignCMD</a></p>\n<p><img src="https://cloud.githubusercontent.com/assets/2193211/21304385/cae9241a-c5ff-11e6-98fb-1ef0e84ee80e.png" alt="71097-6671c44f605ce86a"></p>\n<p>以下为 macOS 下操作，Windows 类似。先进入文件目录</p>\n<h3 id="创建证书">创建证书</h3><div class="hljs bash">\n      <div class="mark">bash</div>\n      <table><tbody><tr>\n      <td class="line"><pre><span>1</span>\n<span>2</span>\n<span>3</span>\n<span>4</span>\n<span>5</span>\n</pre></td>\n      <td class="code"><pre>./ZXPSignCmd -selfSignedCert <span class="hljs-variable">&lt;countryCode&gt;</span> <span class="hljs-variable">&lt;stateOrProvince&gt;</span> <span class="hljs-variable">&lt;organization&gt;</span> <span class="hljs-variable">&lt;commonName&gt;</span> <span class="hljs-variable">&lt;password&gt;</span> <span class="hljs-variable">&lt;outputPath.p12&gt;</span>\n./ZXPSignCmd -selfSignedCert <span class="hljs-variable">&lt;国家代码&gt;</span> <span class="hljs-variable">&lt;地区&gt;</span> <span class="hljs-variable">&lt;组织名&gt;</span> <span class="hljs-variable">&lt;证书所有者名称&gt;</span> <span class="hljs-variable">&lt;证书密码&gt;</span> <span class="hljs-variable">&lt;证书名.p12&gt;</span>\n\n<span class="hljs-comment"># example</span>\n./ZXPSignCmd -selfSignedCert CN guangzhou lorem.<span class="hljs-keyword">in</span> loeify aksdj4 lorem.p12</pre></td>\n      </tr></tbody></table>\n      </div><h3 id="签名并打包">签名并打包</h3><div class="hljs bash">\n      <div class="mark">bash</div>\n      <table><tbody><tr>\n      <td class="line"><pre><span>1</span>\n<span>2</span>\n<span>3</span>\n<span>4</span>\n<span>5</span>\n</pre></td>\n      <td class="code"><pre>./ZXPSignCmd -sign <span class="hljs-params">&lt;inputDirectory&gt;</span> <span class="hljs-params">&lt;outputZxp&gt;</span> <span class="hljs-params">&lt;p12&gt;</span> <span class="hljs-params">&lt;p12Password&gt;</span>\n./ZXPSignCmd -sign <span class="hljs-params">&lt;要打包的项目目录&gt;</span> <span class="hljs-params">&lt;输出文件路径&gt;</span> <span class="hljs-params">&lt;证书路径&gt;</span> <span class="hljs-params">&lt;证书密码&gt;</span>\n\n<span class="hljs-meta"># example</span>\n./ZXPSignCmd -sign xxx xxx.zxp lorem.p12 aksdj4</pre></td>\n      </tr></tbody></table>\n      </div><p>打包生成后的 <code>zxp</code> 是 <code>zip</code> 一样的可以解压</p>\n<h2 id="手动安装插件">手动安装插件</h2><h3 id="目录">目录</h3><p>将插件解压，放进目录</p>\n<blockquote>\n<p>Windows</p>\n</blockquote>\n<p><code>C:\\Program Files\\Common Files\\Adobe\\CEP\\extensions\\</code></p>\n<blockquote>\n<p>macOS ( 注意是全局 Library，不是用户的 )</p>\n</blockquote>\n<p><code>/Library/Application Support/Adobe/CEP/extensions/</code></p>\n<p>注意最终插件 xxx 放入目录最终应该存在 <code>/extensions/xxx/index.html</code></p>\n<h3 id="启用">启用</h3><p>重启 photoshop，选择 &quot;Window&quot; → &quot;Extensions&quot; → &quot;xxx&quot; 启用 </p>\n<h2 id="参考文章">参考文章</h2><ul>\n<li><a href="http://nullice.com/archives/1741">Adobe CEP 扩展开发教程 「 4 」签名与打包</a></li><li><a href="http://nullice.com/archives/1665">Adobe CEP 扩展开发教程 「 1 」Hello World!</a></li></ul>\n',
        'thumb': 'https://cloud.githubusercontent.com/assets/2193211/21304385/cae9241a-c5ff-11e6-98fb-1ef0e84ee80e.png',
        'toc': '<ul>\n<li><a href="#启用开发者模式">启用开发者模式</a></li><li><a href="#扩展签名打包">扩展签名打包</a><ul>\n<li><a href="#创建证书">创建证书</a></li><li><a href="#签名并打包">签名并打包</a></li></ul>\n</li><li><a href="#手动安装插件">手动安装插件</a><ul>\n<li><a href="#目录">目录</a></li><li><a href="#启用">启用</a></li></ul>\n</li><li><a href="#参考文章">参考文章</a></li></ul>\n',
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
    )
  }
}
