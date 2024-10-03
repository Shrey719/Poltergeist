function create_new_tab() {
    let newTabBtn = document.createElement("button")
    newTabBtn.innerText = "New Tab"
    let newTabFrame = document.createElement("iframe")
    newTabFrame.src = "/search_gateway.html"
    newTabFrame.height = "90%"
    newTabFrame.width = "99%"
    newTabFrame.class = "search_frame"
}