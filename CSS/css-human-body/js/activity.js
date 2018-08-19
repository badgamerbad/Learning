window.addEventListener('load', adjust_content);
window.addEventListener('resize', adjust_content);
function adjust_content(){
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    var top_menu = document.getElementById("top-menu");

    var menu_title = document.getElementById("menu-title");
    var menu_title_p = document.getElementById("menu-title-p");
    
    var content = document.getElementById('content');

    var search_box = document.getElementById('search-box');

    var content_left = document.getElementById('content-left');
    var content_left_header_p = document.getElementById('content-left-header-p');
    var content_left_footer_p = document.getElementById('content-left-footer-p');
    var content_left_mid_overflowing_container = document.getElementById("content-left-mid-overflowing-container");
    var content_left_mid_row = document.getElementsByClassName('content-left-mid-row');

    var content_right = document.getElementById('content-right');
    
    if(width > height){
        // content_left.style.width = (width/2) - (width/76.8) + "px";
        // var menu_title_p__computed_style = menu_title_p.currentStyle || window.getComputedStyle(menu_title_p);
        // var top_menu__computed_style = top_menu.currentStyle || window.getComputedStyle(top_menu);
        // content_left.style.height = height - ( get_style_in_numerics(menu_title_p__computed_style.height) + get_style_in_numerics(menu_title_p__computed_style.marginTop) + get_style_in_numerics(menu_title_p__computed_style.marginBottom) ) - ( get_style_in_numerics(top_menu__computed_style.height) + get_style_in_numerics(top_menu__computed_style.marginTop) + get_style_in_numerics(top_menu__computed_style.marginBottom) ) - (width/120) + "px";
        // content_left.style.marginLeft = (width/120) + "px";
        // content_left.style.display = "inline-block";
        // var content_left__computed_style = content_left.currentStyle || window.getComputedStyle(content_left);
        // var content_left_header_p__computed_style = content_left_header_p.currentStyle || window.getComputedStyle(content_left_header_p);
        // var content_left_footer_p__computed_style = content_left_footer_p.currentStyle || window.getComputedStyle(content_left_footer_p);
        // content_left_mid_overflowing_container.style.height = get_style_in_numerics(content_left__computed_style.height) - ( get_style_in_numerics(content_left_header_p__computed_style.marginTop) + get_style_in_numerics(content_left_header_p__computed_style.height) + get_style_in_numerics(content_left_header_p__computed_style.marginBottom) ) - ( get_style_in_numerics(content_left_footer_p__computed_style.marginTop) + get_style_in_numerics(content_left_footer_p__computed_style.height) + get_style_in_numerics(content_left_footer_p__computed_style.marginBottom) ) + "px";
        
        // content_right.style.width = (width/2) - (width/76.8) + "px";
        // content_right.style.height = height - ( get_style_in_numerics(menu_title_p__computed_style.height) + get_style_in_numerics(menu_title_p__computed_style.marginTop) + get_style_in_numerics(menu_title_p__computed_style.marginBottom) ) - ( get_style_in_numerics(top_menu__computed_style.height) + get_style_in_numerics(top_menu__computed_style.marginTop) + get_style_in_numerics(top_menu__computed_style.marginBottom) ) - (width/120) + "px";
        // content_right.style.marginLeft = (width/120) + "px";
        // content_right.style.display = "inline-block";
    }
    else{
        // content_left.style.display = "block";
        // content_left.style.width = width - 15 + "px";
        // content_left.style.height = ((height-50)/2) - 15 + "px";
        // content_right.style.display = "block";
        // content_right.style.width = width - 15 + "px";
        // content_right.style.height = ((height-50)/2) - 15 + "px";
    }

    document.getElementById("p-width-height").innerHTML = "width : " + width + " height : " + height;
}

function get_style_in_numerics(style_variable){
    var style_in_numeric = parseInt(style_variable.replace("px", ""));
    return style_in_numeric;
}


var bottom_menu_button = document.getElementById('bottom-menu-button');
var mouse_move_body = document.getElementById('mouse-move-body');

bottom_menu_button.onclick = function(event){
    mouse_move_body.style.display = "block";
}

mouse_move_body.onmousemove = function(event){
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    
    var bottom_menu_button__computed_style = bottom_menu_button.currentStyle || window.getComputedStyle(bottom_menu_button);
    bottom_menu_button.style.right = width - event.clientX - get_style_in_numerics(bottom_menu_button__computed_style.width)/1 + "px";
    bottom_menu_button.style.bottom = height - event.clientY - get_style_in_numerics(bottom_menu_button__computed_style.height)/1 + "px";   //change 1 -> 2 when different button will be used
    mouse_move_body.style.display = "none";
}

var count_tmp = 9;
var test_div_creater = document.getElementById("test-div-creater");
test_div_creater.onclick = function(event){
    var innerHtmlContent = 
        '<div class="display-inline-table">'+
            '<div class="font-size-3vmax">Task '+count_tmp+'</div>'+
            '<div class="font-size-1-5vmax">Contains 1000 items</div>'+
        '</div>'+
        '<div class="content-div-mid-row-main-icon float-left">'+
            '<div class="icon icon-tasks"></div>'+
        '</div>'+
        '<div class="float-right dropdown">'+
            '<button type="button" class="no-border no-background font-size-4vmax delete-button font-color-inherit" onclick="deleteItem(this);"><div class="icon icon-trash-o"></div></button>\n'+
            '<button type="button" class="dropbtn no-border no-background font-size-4vmax edit-button font-color-inherit"><div class="icon icon-bars"></div></button>'+
        '</div>';
    var div = document.createElement("div");
    div.className += " content-div-mid-row display-table";
    div.innerHTML = innerHtmlContent;
    document.getElementById("content-div-mid-overflowing-container").appendChild(div);
    count_tmp++;
}

var content_left_header_menu_button = document.getElementById("content-div-header-menu-button");
content_left_header_menu_button.onclick = function(event){
    var content = document.getElementById('content');
    var content_left_header_menu = document.getElementById('content-div-header-menu');
    var content_left_header_menu__computed_style = content_left_header_menu.currentStyle || window.getComputedStyle(content_left_header_menu);
    content.style.marginBottom = get_style_in_numerics(content_left_header_menu__computed_style.paddingTop) + get_style_in_numerics(content_left_header_menu__computed_style.height) + "px";
}

var deleteItem = function(object){
    object.parentNode.parentNode.parentNode.removeChild(object.parentNode.parentNode)
}

var show_hide_search_box = function(){
    var search_box = document.getElementById('search-box');
    var search_box_filter = document.getElementById('search-box-filter');
    var content_path_placeholder = document.getElementById('content-path-placeholder');
    var content_menu = document.getElementById('content-menu');

    var search_box_computed_style = search_box.currentStyle || window.getComputedStyle(search_box);

    if(search_box_computed_style.display === "none"){
        search_box.style.display = "flex";
        search_box_filter.style.display = "block";
        content_path_placeholder.style.display = "none";
        content_menu.style.display = "none";
    }
    else{
        search_box.style.display = "none";
        search_box_filter.style.display = "none";
        content_path_placeholder.style.display = "block";
        content_menu.style.display = "";
    }
}