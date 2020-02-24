var showText = function (target, message, index, interval) {
if (index < message.length) {
  $(target).append(message[index++]);
  setTimeout(function () { showText(target, message, index, interval); }, interval);
}
}
$(function () {
  showText("#Intro", "Welcome to THINK Casablanca", 0, 50);
 });

 $("a[href='#footer']").click(function() {
   $("html, body").animate({ scrollTop: $(document).height() }, "slow");
   return false;
 });

if(localStorage.userID!=null ||localStorage.userID !=undefined){
  $("#Logout").show();
  $("#signup").hide();
  $("#login").hide();
  $("#Logged").show();
  $("#NotLogged").hide();
}
