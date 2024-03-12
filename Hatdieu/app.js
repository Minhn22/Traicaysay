$(document).ready(function(){
    // Khi di chuột vào info-box
    $(".info-box").mouseenter(function(){
        // Thêm class "highlight" cho phần tử "Chi tiết sản phẩm"
        $(this).find(".detail").addClass("highlight");
    });
    // Khi di chuột ra khỏi info-box
    $(".info-box").mouseleave(function(){
        // Xóa class "highlight" cho phần tử "Chi tiết sản phẩm"
        $(this).find(".detail").removeClass("highlight");
    });
});
