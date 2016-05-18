var wkndr = {
  searchCampsites: function(e) {
    e.preventDefault();
    var campsiteName = e.target.querySelector("#campsite-name").value;

    $.get("/campsites?campsite=" + campsiteName, function(res) {
      // determine if res is a single object or a collection
      data = res;
      var html = res.constructor === Array ?
         HandlebarsTemplates['campsites/index']({campsites: res}) :
         HandlebarsTemplates['campsites/show']({campsite: res});
      $("#campsites-container").html(html)
    })
  }
}
