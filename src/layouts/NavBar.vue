/**
* Created by LinChuQiang on 2017/4/21.
*/
<template>
	<div class = "container-fluid">
		<!-- Brand and toggle get grouped for better mobile display -->
		<div class = "navbar-header">
			<button type = "button" class = "navbar-toggle collapsed" data-toggle = "collapse" data-target = "#bs-example-navbar-collapse-1" aria-expanded = "false">
				<span class = "sr-only">Toggle navigation</span>
				<span class = "icon-bar"></span>
				<span class = "icon-bar"></span>
				<span class = "icon-bar"></span>
			</button>
			<a href="/index.html" class="navbar-brand active">VUESPA<span class = "sr-only">(current)</span></a>
			<!--<router-link to = "/vuespa" class = "navbar-brand">VueSPA<span class = "sr-only">(current)</span></router-link>-->
			<!--<a class="navbar-brand" href="#">Brand</a>-->
		</div>
		
		<!-- Collect the nav links, forms, and other content for toggling -->
		<div class = "collapse navbar-collapse" id = "bs-example-navbar-collapse-1">
			<ul class = "nav navbar-nav">
				<li class = "dropdown">
					<a href = "#" class = "dropdown-toggle" data-toggle = "dropdown" role = "button" aria-haspopup = "true" aria-expanded = "false">其它<span class = "caret"></span>
					</a>
					<ul class = "dropdown-menu">
						<li>
							<a href="/pages/github/app.html">github</a>
						</li>
						<li>
							<a href="/pages/data/app.html">数据</a>
						</li>
						<li>
							<a href = "/pages/rubychina/app.html">rubychina</a>
						</li>
						<li>
							<a href = "/pages/note/app.html">note</a>
						</li>
						<li>
							<a href = "/pages/maizuo/app.html">maizuo</a>
						</li>
						<li>
							<a href = "/pages/maizuo2/app.html">maizuo2</a>
						</li>
						<li>
							<a href = "/pages/eleme/app.html">eleme</a>
						</li>
						<li>
							<a href = "/pages/eleme2/app.html">eleme2</a>
						</li>
						<li>
							<a href = "/pages/meizi/app.html">meizi</a>
						</li>
						<li>
							<a href = "/pages/photoshare/app.html">photoshare</a>
						</li>
						<li>
							<a href = "/pages/todoMvc/app.html">todoMvc</a>
						</li>
						<li>
							<a href = "/pages/todoKoa/app.html">todoKoa</a>
						</li>
					</ul>
				</li>
				<li class = "dropdown">
					<a href = "#" class = "dropdown-toggle" data-toggle = "dropdown" role = "button" aria-haspopup = "true" aria-expanded = "false">博客<span class = "caret"></span>
					</a>
					<ul class = "dropdown-menu">
						<li>
							<a href = "/pages/blog/app.html">blog 生命周期</a>
						</li>
						<li>
							<a href = "/pages/blogE/app.html">blogE 前后端分离</a>
						</li>
					</ul>
				</li>
				<li class = "dropdown">
					<a href = "#" class = "dropdown-toggle" data-toggle = "dropdown" role = "button" aria-haspopup = "true" aria-expanded = "false">云音乐<span class = "caret"></span>
					</a>
					<ul class = "dropdown-menu">
						<li>
							<a href="/pages/cloudmusic/app.html">云音乐<span class = "sr-only">(current)</span></a>
						</li>
						<li>
							<a href = "/pages/cloudmusicA/app.html">cloudmusicA</a>
						</li>
						<li>
							<a href = "/pages/kugou/app.html">kugou</a>
						</li>
						<!--<li role = "separator" class = "divider"></li>-->
						<li>
							<a href = "/pages/cloudmusicS/app.html">cloudmusicS</a>
						</li>
						<li>
							<a href = "/pages/cloudmusicT/app.html">cloudmusicT</a>
						</li>
					</ul>
				</li>
				<li class = "dropdown">
					<a href = "#" class = "dropdown-toggle" data-toggle = "dropdown" role = "button" aria-haspopup = "true" aria-expanded = "false">社区<span class = "caret"></span>
					</a>
					<ul class = "dropdown-menu">
						<li>
							<a href = "/pages/cnode/app.html">cnode</a>
						</li>
						<li>
							<a href = "/pages/cnodeMobile/app.html">cnodeMobile</a>
						</li>
						<li>
							<a href = "/pages/cnodeJ/app.html">cnodeJ</a>
						</li>
						<!--<li role = "separator" class = "divider"></li>-->
						<li>
							<a href = "/pages/cnodeB/app.html">cnodeB</a>
						</li>
						<li>
							<a href = "/pages/cnodeV/app.html">cnodeV</a>
						</li>
					</ul>
				</li>
			</ul>
			<form class = "navbar-form navbar-left">
				<div class = "form-group">
					<input type = "text" class = "form-control" placeholder = "Search">
				</div>
				<button type = "submit" class = "btn btn-default">Submit</button>
			</form>
			<ul class = "nav navbar-nav navbar-right">
				<li>
					<a href="/pages/shoppingcart/app.html">ShoppingCart<span class = "sr-only">(current)</span></a>
				</li>
				<li class = "dropdown">
					<a href = "#" class = "dropdown-toggle" data-toggle = "dropdown" role = "button" aria-haspopup = "true" aria-expanded = "false">知乎<span class = "caret"></span>
					</a>
					<ul class = "dropdown-menu">
						<li>
							<a href = "/pages/zhihuDaily/app.html">zhihuDaily</a>
						</li>
						<li>
							<a href = "/pages/zhihuD/app.html">zhihuD</a>
						</li>
						<li>
							<a href = "/pages/zhihuL/app.html">zhihuL</a>
						</li>
						<li>
							<a href = "/pages/zhihuC/app.html">zhihuC</a>
						</li>
						<li>
							<a href = "/pages/zhihuP/app.html">zhihuP</a>
						</li>
					</ul>
				</li>
			</ul>
		</div><!-- /.navbar-collapse -->
	</div><!-- /.container-fluid -->
</template>
<script>
  export default {
    name:'navBarC',
  }
</script>
