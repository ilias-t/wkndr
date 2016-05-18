var wkndr = {

  searchCampsites: function(e) {
    e.preventDefault()
    const campsiteName = e.target.querySelector("#campsite-name").value // grab campsite name from input

    $.get("/campsites?campsite=" + campsiteName, this.renderCampsites)

  },

  renderCampsites: function(response) { // xhr request
    window.html = new String()
    window.data = response

    if (response.constructor === Array) { // determine if res is a single object or a collection
      const campsites = response
      campsites.forEach(function(campsite) {
        html += HandlebarsTemplates['campsites/show'](campsite) // current solution as handelbars partials don't enjoy the asset pipeline
      })
    } else {
      const campsite = response
      html = HandlebarsTemplates['campsites/show'](campsite)
    }

    // const html = res.constructor === Array ?
    //    HandlebarsTemplates['campsites/index']({campsites: res}) :
    //    HandlebarsTemplates['campsites/show']({campsite: res});
    $("#campsites-container").html(html)
  }

}
