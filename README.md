# jQuery滚动插件
此插件可实现marquee标签类似功能，支持左右横向滚动，向上滚动
***


##dom格式
	<div class="marquee landscape" data-direction="left" data-speed="50" data-width="10000">
		<div class="marquee-container">
			<ul class="marquee-list">
                <li>MacBook</li>
                <li>MacBook Pro</li>
                <li>MacBook Air</li>
                <li>Apple Watch</li>
                <li>iPhone</li>
                <li>iPad</li>
	        </ul>
	    </div>
	</div>

##用法
1、使用dom元素data-*配置参数
 
	$(".landscape").marquee();
 
2、使用初始化参数

	(".landscape").marquee({ direction:"right", speed: 50, width:10000 });
	(".vertical").marquee({ direction:"up", speed: 50 });

##参数说明

- direction 滚动方向 字符型 可取值 left | right | up 默认值left
- speed 滚动速度 数值型 默认值 50
- width marquee-container容器宽度 数值型 默认值 10000 向上滚动此参数无效