var wkndr = {

  searchCampsites: function(e) {
    e.preventDefault()
    const campsiteName = e.target.querySelector("#campsite-name").value // grab campsite name from input
    $.get("/campsites?campsite=" + campsiteName, this.renderCampsites)

  },

  renderCampsites: function(response) { // xhr request
    let html = new String()
    if (response instanceof Array) { // determine if res is a single object or a collection
      const campsites = response
      campsites.forEach(function(campsite) {
        html += HandlebarsTemplates['campsites/show'](campsite) // current solution as handelbars partials don't enjoy the asset pipeline
      })
    } else if (response instanceof Object) {
      const campsite = response
      html = HandlebarsTemplates['campsites/show'](campsite)
    } else { html = "Try searching for something different" }
    $("#campsites-container").html(html)
  }

}
