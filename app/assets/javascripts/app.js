var wkndr = {
  searchCampsites: function(e) {
    e.preventDefault();
    var campsiteName = e.target.querySelector("#campsite-name").value;

    $.get("/campsites?campsite=" + campsiteName, function(res) {
      console.log("res:", res);
    })
  }
}
