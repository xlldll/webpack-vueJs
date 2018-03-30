module.exports = {
  api: '/blog/mock/posts/71329290',
  response: function (req, res) {
    res.json(
      {
        'id': 71329290,
        'created': '2015-04-27T16:00:36Z',
        'updated': '2017-03-30T11:08:04Z',
        'prev': {
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
        'next': '',
        'title': '创建类似 http://ithinkimight.com/ 随机大小排布界面',
        'author': {
          'name': 'LoeiFy',
          'avatar': 'https://avatars3.githubusercontent.com/u/2193211?v=3',
          'url': 'https://github.com/LoeiFy'
        },
        'content': "<p><code>ithinkimight.com</code> 这个网站图片来自 Instagram，图片随机大小，位置也是随机，图片可以重叠，但是并没有 <strong>过分</strong> 重叠。这种随机大小，位置排版页面元素跟平常的整齐 <code>grid</code> 或者 <code>瀑布流</code> 风格很不一样，下面我们尝试一下实现类似效果</p>\n<p>从网站源文件上看并不能看出网站是如何随机排布这些图片，因为是后端直接输出图片的位置参数，并不是前端实现的位置计算。不过这里有一种简单方法，可以实现类似效果。先看一下具体效果</p>\n<h3 id=\"例子以及实际运用效果\">例子以及实际运用效果</h3><p><a href=\"http://jsfiddle.net/am0200/1mn5xbf8/\">http://jsfiddle.net/am0200/1mn5xbf8/</a></p>\n<p><a href=\"http://stone.am0200.com/\">http://stone.am0200.com/</a></p>\n<h3 id=\"实现思路\">实现思路</h3><p>首先把 container 划分为 4 个块，然后需要随机定位的 4 个块分别放到这 4 个区域，最后定义这 4 个块距离左边跟上边的最远，最近距离即可</p>\n<h3 id=\"实现代码\">实现代码</h3><p>html 部分，我们只是生成 4 个容器，每个容器都可以放置一张图片</p>\n<div class=\"hljs html\">\n      <div class=\"mark\">html</div>\n      <table><tbody><tr>\n      <td class=\"line\"><pre><span>1</span>\n<span>2</span>\n<span>3</span>\n<span>4</span>\n<span>5</span>\n<span>6</span>\n</pre></td>\n      <td class=\"code\"><pre>&lt;section&gt;\n    &lt;<span class=\"hljs-keyword\">div</span> <span class=\"hljs-built_in\">id</span>=<span class=\"hljs-string\">\"d0\"</span>&gt;&lt;/<span class=\"hljs-keyword\">div</span>&gt;\n    &lt;<span class=\"hljs-keyword\">div</span> <span class=\"hljs-built_in\">id</span>=<span class=\"hljs-string\">\"d1\"</span>&gt;&lt;/<span class=\"hljs-keyword\">div</span>&gt;\n    &lt;<span class=\"hljs-keyword\">div</span> <span class=\"hljs-built_in\">id</span>=<span class=\"hljs-string\">\"d2\"</span>&gt;&lt;/<span class=\"hljs-keyword\">div</span>&gt;\n    &lt;<span class=\"hljs-keyword\">div</span> <span class=\"hljs-built_in\">id</span>=<span class=\"hljs-string\">\"d3\"</span>&gt;&lt;/<span class=\"hljs-keyword\">div</span>&gt;\n&lt;/section&gt;</pre></td>\n      </tr></tbody></table>\n      </div><p>css 部分，我们使用绝对定位来设置每个容器的主要位置</p>\n<div class=\"hljs css\">\n      <div class=\"mark\">css</div>\n      <table><tbody><tr>\n      <td class=\"line\"><pre><span>1</span>\n<span>2</span>\n<span>3</span>\n<span>4</span>\n<span>5</span>\n<span>6</span>\n<span>7</span>\n<span>8</span>\n<span>9</span>\n<span>10</span>\n<span>11</span>\n<span>12</span>\n<span>13</span>\n<span>14</span>\n<span>15</span>\n<span>16</span>\n<span>17</span>\n<span>18</span>\n<span>19</span>\n<span>20</span>\n<span>21</span>\n<span>22</span>\n<span>23</span>\n<span>24</span>\n</pre></td>\n      <td class=\"code\"><pre><span class=\"hljs-selector-tag\">section</span> {\n    <span class=\"hljs-attribute\">width</span>: <span class=\"hljs-number\">100%</span>;\n    <span class=\"hljs-attribute\">height</span>: <span class=\"hljs-number\">100%</span>;\n    <span class=\"hljs-attribute\">position</span>: relative;\n}\n<span class=\"hljs-selector-tag\">section</span> <span class=\"hljs-selector-tag\">div</span> {\n    <span class=\"hljs-attribute\">position</span>: absolute;\n}\n<span class=\"hljs-selector-id\">#d0</span> {\n    <span class=\"hljs-attribute\">left</span>: <span class=\"hljs-number\">50%</span>;\n    <span class=\"hljs-attribute\">top</span>: <span class=\"hljs-number\">0</span>;\n}\n<span class=\"hljs-selector-id\">#d1</span> {\n    <span class=\"hljs-attribute\">top</span>: <span class=\"hljs-number\">50%</span>;\n    <span class=\"hljs-attribute\">left</span>: <span class=\"hljs-number\">50%</span>;\n}\n<span class=\"hljs-selector-id\">#d2</span> {\n    <span class=\"hljs-attribute\">left</span>: <span class=\"hljs-number\">0</span>;\n    <span class=\"hljs-attribute\">top</span>: <span class=\"hljs-number\">50%</span>;\n}\n<span class=\"hljs-selector-id\">#d3</span> {\n    <span class=\"hljs-attribute\">left</span>: <span class=\"hljs-number\">0</span>;\n    <span class=\"hljs-attribute\">top</span>: <span class=\"hljs-number\">0</span>;\n}</pre></td>\n      </tr></tbody></table>\n      </div><p>js 部分，我们设置 4 个块随机大小，并且随机上下左右距离，需要注意的是，这个距离是有一定的范围的</p>\n<div class=\"hljs js\">\n      <div class=\"mark\">javascript</div>\n      <table><tbody><tr>\n      <td class=\"line\"><pre><span>1</span>\n<span>2</span>\n<span>3</span>\n<span>4</span>\n<span>5</span>\n<span>6</span>\n<span>7</span>\n<span>8</span>\n<span>9</span>\n<span>10</span>\n<span>11</span>\n<span>12</span>\n<span>13</span>\n<span>14</span>\n<span>15</span>\n<span>16</span>\n<span>17</span>\n<span>18</span>\n<span>19</span>\n<span>20</span>\n<span>21</span>\n<span>22</span>\n<span>23</span>\n<span>24</span>\n<span>25</span>\n<span>26</span>\n<span>27</span>\n<span>28</span>\n<span>29</span>\n<span>30</span>\n<span>31</span>\n<span>32</span>\n<span>33</span>\n<span>34</span>\n<span>35</span>\n<span>36</span>\n<span>37</span>\n<span>38</span>\n<span>39</span>\n<span>40</span>\n<span>41</span>\n<span>42</span>\n<span>43</span>\n<span>44</span>\n<span>45</span>\n</pre></td>\n      <td class=\"code\"><pre><span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\">rd</span>(<span class=\"hljs-params\">n,m</span>)</span>{\n    <span class=\"hljs-keyword\">var</span> c = m-n+<span class=\"hljs-number\">1</span>;  \n    <span class=\"hljs-keyword\">return</span> <span class=\"hljs-built_in\">Math</span>.floor(<span class=\"hljs-built_in\">Math</span>.random() * c + n);\n}\n\n<span class=\"hljs-keyword\">var</span> w = <span class=\"hljs-built_in\">parseInt</span>($(<span class=\"hljs-string\">'section'</span>).width()),\n    h = <span class=\"hljs-built_in\">parseInt</span>($(<span class=\"hljs-string\">'section'</span>).height());\n\n$(<span class=\"hljs-string\">'div'</span>).each(<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\"></span>) </span>{\n    <span class=\"hljs-keyword\">var</span> wh = rd(<span class=\"hljs-number\">150</span>, <span class=\"hljs-number\">200</span>)\n    $(<span class=\"hljs-keyword\">this</span>).css({\n        <span class=\"hljs-attr\">width</span>: wh,\n        <span class=\"hljs-attr\">height</span>: wh\n    })\n})\n\n<span class=\"hljs-keyword\">var</span> d0 = <span class=\"hljs-built_in\">parseInt</span>($(<span class=\"hljs-string\">'#d0'</span>).width()),\n    d1 = <span class=\"hljs-built_in\">parseInt</span>($(<span class=\"hljs-string\">'#d1'</span>).width()),\n    d2 = <span class=\"hljs-built_in\">parseInt</span>($(<span class=\"hljs-string\">'#d2'</span>).width()),\n    d3 = <span class=\"hljs-built_in\">parseInt</span>($(<span class=\"hljs-string\">'#d3'</span>).width());\n\n<span class=\"hljs-keyword\">var</span> a1 = rd(-(d0 / <span class=\"hljs-number\">4</span>), w / <span class=\"hljs-number\">2</span> - d0),\n    a2 = rd(<span class=\"hljs-number\">0</span>, h / <span class=\"hljs-number\">2</span> - d0 / <span class=\"hljs-number\">4</span> * <span class=\"hljs-number\">3</span>);\n\n<span class=\"hljs-keyword\">var</span> b1 = rd(-(d1 / <span class=\"hljs-number\">4</span>), w / <span class=\"hljs-number\">2</span> - d1),\n    b2 = rd(-(d1 / <span class=\"hljs-number\">4</span>), h / <span class=\"hljs-number\">2</span> - d1);\n\n<span class=\"hljs-keyword\">var</span> c1 = rd(<span class=\"hljs-number\">0</span>, w / <span class=\"hljs-number\">2</span> - d2 / <span class=\"hljs-number\">4</span> * <span class=\"hljs-number\">3</span>),\n    c2 = rd(-(d2 / <span class=\"hljs-number\">4</span>), h / <span class=\"hljs-number\">2</span> - d2);    \n\n<span class=\"hljs-keyword\">var</span> e1 = rd(<span class=\"hljs-number\">0</span>, w / <span class=\"hljs-number\">2</span> - d3 / <span class=\"hljs-number\">4</span> * <span class=\"hljs-number\">3</span>),\n    e2 = rd(<span class=\"hljs-number\">0</span>, h / <span class=\"hljs-number\">2</span> - d3 / <span class=\"hljs-number\">4</span> * <span class=\"hljs-number\">3</span>); \n\n\n$(<span class=\"hljs-string\">'#d0'</span>).css(<span class=\"hljs-string\">'margin-left'</span>, a1 +<span class=\"hljs-string\">'px'</span>)\n$(<span class=\"hljs-string\">'#d0'</span>).css(<span class=\"hljs-string\">'margin-top'</span>, a2 +<span class=\"hljs-string\">'px'</span>)\n\n$(<span class=\"hljs-string\">'#d1'</span>).css(<span class=\"hljs-string\">'margin-left'</span>, b1 +<span class=\"hljs-string\">'px'</span>)\n$(<span class=\"hljs-string\">'#d1'</span>).css(<span class=\"hljs-string\">'margin-top'</span>, b2 +<span class=\"hljs-string\">'px'</span>)\n\n$(<span class=\"hljs-string\">'#d2'</span>).css(<span class=\"hljs-string\">'margin-left'</span>, c1 +<span class=\"hljs-string\">'px'</span>)\n$(<span class=\"hljs-string\">'#d2'</span>).css(<span class=\"hljs-string\">'margin-top'</span>, c2 +<span class=\"hljs-string\">'px'</span>)\n\n$(<span class=\"hljs-string\">'#d3'</span>).css(<span class=\"hljs-string\">'margin-left'</span>, e1 +<span class=\"hljs-string\">'px'</span>)\n$(<span class=\"hljs-string\">'#d3'</span>).css(<span class=\"hljs-string\">'margin-top'</span>, e2 +<span class=\"hljs-string\">'px'</span>)</pre></td>\n      </tr></tbody></table>\n      </div><h3 id=\"其他问题\">其他问题</h3><p>这种定位简单方便，但是如果是单数块的时候，就要做一下相关处理了</p>\n",
        'thumb': '',
        'toc': '<ul>\n<li><a href="#例子以及实际运用效果">例子以及实际运用效果</a></li><li><a href="#实现思路">实现思路</a></li><li><a href="#实现代码">实现代码</a></li><li><a href="#其他问题">其他问题</a></li></ul>\n',
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
    )
  }
}
