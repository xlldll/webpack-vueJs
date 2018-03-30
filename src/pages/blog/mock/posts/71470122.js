module.exports = {
  api: '/blog/mock/posts/71470122',
  response: function (req, res) {
    res.json(
      {
        'id': 71470122,
        'created': '2015-04-28T03:50:13Z',
        'updated': '2017-04-11T05:54:52Z',
        'prev': {
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
        'next': {
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
        },
        'title': '输入框输入值自动格式化',
        'author': {
          'name': 'LoeiFy',
          'avatar': 'https://avatars3.githubusercontent.com/u/2193211?v=3',
          'url': 'https://github.com/LoeiFy'
        },
        'content': "<p>这里说的自动格式化是指当用户在输入框里面输入数字，例如银行卡号，为了方便用户输入，希望在输入过程中对输入数字进行加空格处理，优化用户体验</p>\n<p>先看一下例子: <a href=\"http://jsfiddle.net/am0200/qugp8tvL/\">http://jsfiddle.net/am0200/qugp8tvL/</a></p>\n<p>注意例子里面的输入框的类型是 <code>tel</code>，而不是 <code>number</code>，主要原因是 <code>number</code> 类型</p>\n<ul>\n<li>会导致 Android 上某些系统不显示 <code>placeholder</code></li><li>无法插入非数字内容，例如空格</li></ul>\n<h3 id=\"代码实现\">代码实现</h3><p><code>data-gap</code> 代表第几位开始加空格，不为 0</p>\n<div class=\"hljs html\">\n      <div class=\"mark\">html</div>\n      <table><tbody><tr>\n      \n      <td class=\"code\"><pre><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">data-gap</span>=<span class=\"hljs-string\">4</span> <span class=\"hljs-attr\">maxlength</span>=<span class=\"hljs-string\">\"24\"</span> <span class=\"hljs-attr\">size</span>=<span class=\"hljs-string\">\"30\"</span> <span class=\"hljs-attr\">autocomplete</span>=<span class=\"hljs-string\">\"off\"</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"tel\"</span> <span class=\"hljs-attr\">placeholder</span>=<span class=\"hljs-string\">\"请输入卡号\"</span>/&gt;</span></pre></td>\n      </tr></tbody></table>\n      </div><p>原理就是获取用户输入内容，格式化处理完成后再填入输入框</p>\n<div class=\"hljs js\">\n      <div class=\"mark\">javascript</div>\n      <table><tbody><tr>\n      <td class=\"line\"><pre><span>1</span>\n<span>2</span>\n<span>3</span>\n<span>4</span>\n<span>5</span>\n<span>6</span>\n<span>7</span>\n<span>8</span>\n<span>9</span>\n<span>10</span>\n<span>11</span>\n<span>12</span>\n<span>13</span>\n<span>14</span>\n<span>15</span>\n<span>16</span>\n<span>17</span>\n<span>18</span>\n<span>19</span>\n<span>20</span>\n<span>21</span>\n<span>22</span>\n<span>23</span>\n<span>24</span>\n<span>25</span>\n<span>26</span>\n<span>27</span>\n<span>28</span>\n</pre></td>\n      <td class=\"code\"><pre><span class=\"hljs-keyword\">var</span> input = <span class=\"hljs-built_in\">document</span>.querySelectorAll(<span class=\"hljs-string\">'input'</span>)[<span class=\"hljs-number\">0</span>]\n<span class=\"hljs-keyword\">var</span> gap = <span class=\"hljs-built_in\">parseInt</span>(input.getAttribute(<span class=\"hljs-string\">'data-gap'</span>))\n\ninput.oninput = <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\"></span>) </span>{\n  <span class=\"hljs-keyword\">var</span> numbers = <span class=\"hljs-keyword\">this</span>.value.split(<span class=\"hljs-string\">' '</span>).join(<span class=\"hljs-string\">''</span>).split(<span class=\"hljs-string\">''</span>)     <span class=\"hljs-comment\">// 获取原始值</span>\n  <span class=\"hljs-keyword\">var</span> back = <span class=\"hljs-string\">''</span> \n\n  numbers.forEach(<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\">n, i</span>) </span>{\n    back += n + ((i + <span class=\"hljs-number\">1</span>) % gap === <span class=\"hljs-number\">0</span> ? <span class=\"hljs-string\">' '</span> : <span class=\"hljs-string\">''</span>)    <span class=\"hljs-comment\">// 处理加空格</span>\n  })\n\n  <span class=\"hljs-keyword\">var</span> len = back.length\n  <span class=\"hljs-keyword\">var</span> last = back.charAt(len - <span class=\"hljs-number\">1</span>)\n\n  <span class=\"hljs-keyword\">if</span> (last === <span class=\"hljs-string\">' '</span> || <span class=\"hljs-built_in\">isNaN</span>(last)) {\n    back = back.substring(<span class=\"hljs-number\">0</span>, len - <span class=\"hljs-number\">1</span>)    <span class=\"hljs-comment\">// 移除末尾无用字符</span>\n  }\n\n  <span class=\"hljs-keyword\">this</span>.value = back\n\n  <span class=\"hljs-keyword\">var</span> _this = <span class=\"hljs-keyword\">this</span>\n\n  <span class=\"hljs-comment\">// 兼容处理</span>\n  setTimeout(<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\"></span>) </span>{\n    _this.setSelectionRange(len, len)\n    _this.focus()\n  }, <span class=\"hljs-number\">0</span>)\n}</pre></td>\n      </tr></tbody></table>\n      </div><p>获取输入原始值</p>\n<div class=\"hljs js\">\n      <div class=\"mark\">javascript</div>\n      <table><tbody><tr>\n      \n      <td class=\"code\"><pre><span class=\"hljs-selector-tag\">input</span><span class=\"hljs-selector-class\">.value</span><span class=\"hljs-selector-class\">.replace</span>(/\\s+/g, <span class=\"hljs-string\">''</span>)</pre></td>\n      </tr></tbody></table>\n      </div><h3 id=\"扩展\">扩展</h3><p>可以设置格式化分割字符，例如用 <code>-</code> 代替空格，还可以设定不规则位数空格，具体可以修改处理条件即可</p>\n",
        'thumb': '',
        'toc': '<ul>\n<li><a href="#代码实现">代码实现</a></li><li><a href="#扩展">扩展</a></li></ul>\n',
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
      }
    )
  }
}
