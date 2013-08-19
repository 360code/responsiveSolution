/*
 * @Author      changbin.wangcb
 * @Date        2013.08.09
 * @Description 行业响应式demo
 */

(function($){
	var isIE6 = $.util.ua.ie6,
    	home = {
    		init: function(){
    			for(var i in this.Parts){
	                this.Parts[i].init();
	            }
    		}
    	};

    var Parts = (home.Parts = {});

    Parts.lazyLoad = {
    	init: function(){
    		$.use('web-datalazyload', function(){
			    FE.util.datalazyload.register({
			        containers : $('#content')
			    });
			});
    	}
    };

    Parts.category = {
        init: function(){
            var win = $(window),
                $category = $('#content div.mod-category');

            new FE.operation.module.Category({
                parentCategoriesListId:'main-category',
                parentCategoriesSelector:'li.item',
                subCategorySelector:'.o-extra'
            });
            
            $('.cell-category-list').each(function(){
                var t = $(this);
                t.height(t.closest('.o-extra').height());
            });

            $('#header div.ali-nav-category').click(function(){
                if( win.width() < 1259 ){
                    if( $category.is(':visible') ){
                        $category.slideUp();
                    }else{
                        $category.slideDown();
                    }
                }
            });
        }
    };

    Parts.mainSlider = {
        init: function(){
            var bannerNode=$('.mod-banner'),
                triggerBox=bannerNode.find('.header');  

            $.use('ui-tabs-effect,ui-tabs-lazyload', function(){
                var mainTab = bannerNode.tabs({
                    boxSelector:'.content li',
                    titleSelector:'.header li',
                    effect:'fade'
                });
            });
        }
    };

    Parts.brand = {
        init: function(){
            var container = $('#content div.mod-brand-activity');

            $.use('ui-tabs-effect', function(){
                var mainTab = container.find('div.content').tabs({
                    isAutoPlay: false,
                    boxSelector:'li',
                    effect:'scroll',
                    scrollType: 'loop',
                    perItem: 1
                });

                $('a.arrow-r', container).click(function(e){
                    e.preventDefault();

                    mainTab.tabs('next');
                });
            });
        }
    };

    Parts.floor1 = {
        init: function(){
            var container = $('#content div.mod-floor1 div.offer');

            $.use('ui-tabs-effect, ui-tabs-lazyload', function(){
                var mainTab = container.find('div.wrap').tabs({
                    isAutoPlay: false,
                    boxSelector:'li',
                    effect:'scroll',
                    scrollType: 'loop',
                    perItem: 1
                });

                $('a.arrow-r', container).click(function(e){
                    e.preventDefault();

                    mainTab.tabs('next');
                });
            });
        }
    };

    Parts.floor2 = {
        init: function(){
            var container = $('#content div.mod-floor2 div.offer');

            $.use('ui-tabs-effect, ui-tabs-lazyload', function(){
                var mainTab = container.find('div.wrap').tabs({
                    isAutoPlay: false,
                    boxSelector:'li',
                    effect:'scroll',
                    scrollType: 'loop',
                    perItem: 1
                });

                $('a.arrow-r', container).click(function(e){
                    e.preventDefault();

                    mainTab.tabs('next');
                });
            });
        }
    };

    Parts.actvie = {
        init: function(){
            var container = $('#content div.mod-active div.cell-content');

            $.use('ui-tabs-effect, ui-tabs-lazyload', function(){
                var mainTab = container.find('div.offer').tabs({
                    isAutoPlay: false,
                    boxSelector:'li',
                    effect:'scroll',
                    scrollType: 'loop',
                    perItem: 1
                });

                $('a.arrow-r', container).click(function(e){
                    e.preventDefault();

                    mainTab.tabs('next');
                });
            });
        }
    };
	
	$(function(){
		home.init();
	});
	
})(jQuery);