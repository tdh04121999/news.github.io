$(document).ready(function(){
    var img_thumb_click,img_thumb_first;
    img_thumb_first = $("#list-thumb li:first-child a").children('img').attr('src');
    // console.log(img_thumb_first);
    // hiển thị hình ảnh mặc định
    $("#show img").attr('src',img_thumb_first);

    $("#list-thumb li:first-child").addClass('active');
    $("#show img").css('border','1px solid #000000');
    // hiển thị hình ảnh khi được chọn
    $("#list-thumb li a").click(function(){
        // lấy src của thumb bị click
        img_thumb_click = $(this).children("img").attr("src");
        // console.log(img_thumb_click);
        
        // gán src của thumb cho #show
        $("#show img").attr('src',img_thumb_click);

        // PHẦN NÂNG CẤP :D BẰNG CÁCH DÙNG CLASS
        $("#list-thumb li a").parent("li").removeClass('active');
        $(this).parent('li').addClass('active');

        return false;
    });
    //  ĐÂY LÀ CÁCH ĐẦU TIÊN LÀM
    /* $("#list-thumb li a").click(function(event){
        $("#list-thumb li a").css('border','none');
        $(this).css('border','1px solid #000000');
        return false; 
    }); */
});
