function showMorePosts() {
  $("#more_posts").show();
}

function setClickHandler(){
  $("#more_link").click(function() {
    showMorePosts();
  });
}

$(document).ready(function(){
  setClickHandler();
});
