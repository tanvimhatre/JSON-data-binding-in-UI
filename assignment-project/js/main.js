$(document).ready(function () {
     $('.monthly-footer').attr('style', 'display:none');
     $('.tabs-content .maintab-switch li a').click(function () {
          var item = $(this).attr("href");
          // alert(item);
          if (item == "#yearly") {
               $('.yearly-footer').attr('style', 'display:block');
               $('.monthly-footer').attr('style', 'display:none');
          } else {
               $('.yearly-footer').attr('style', 'display:none');
               $('.monthly-footer').attr('style', 'display:block');
          }
     });
});