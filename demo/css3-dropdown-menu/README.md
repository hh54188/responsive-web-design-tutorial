# 备注

## 参考教程
- [http://line25.com/tutorials/how-to-create-a-pure-css-dropdown-menu](http://line25.com/tutorials/how-to-create-a-pure-css-dropdown-menu)
- [http://designmodo.com/css3-dropdown-menu/](http://designmodo.com/css3-dropdown-menu/)
- [http://red-team-design.com/css3-dropdown-menu/](http://red-team-design.com/css3-dropdown-menu/)


## 关于处理`<a>`标签若干原因
`height`与`line-height`最终决定于应用在`<a>`标签上，有以下几个考虑：
1. `height`与`line-height`目的是用于控制文字的垂直居中，且文字主要存在于`<a>`标签中
所以直接应用于该元素即可，虽然也可以应用于父元素`<li>`。但是应用于`<a>`更加直观，
以后更方便修改
2. `height`不可用于父元素`<li>`上，因为，`<li>`中还需要存放该栏的子菜单。在窄屏上的菜单
，菜单项是垂直排列的，，所以子菜单也是垂直展开，子菜单可以把父元素也就是`<li>`垂直撑开，
所以不能给`<li>`固定高度
3. **应该使用padding代替`width`和`text-align:center`!**: 
	- （优势）为了让文字水平居中（与其他选项保持间隔），我必须使用两个属性：`width`和`text-align:center`。但使用padding一个就搞定了！
	- （优势）使用padding能够让不同item之间的距离保持一致，而如果通过设置`width`保证`width`优先的话不够美观


## 清除浮动（以下二选一）：
1. 可以通过直接固定`nav`的高度为50px
2. 可以在`.nav-container`后添加伪元素，并且在该伪元素上应用清楚浮动的样式