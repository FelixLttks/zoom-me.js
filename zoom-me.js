var zoomOffset = 0;

window.addEventListener('scroll', (event) => {
    update_zoom();
});

function update_zoom() {
    var zoomContainer = document.getElementById('zoom-container');
    var zoomImage = document.getElementById('zoom');
    var content = document.getElementById('content');

    var zoomSpeed = zoomContainer.dataset.zoomspeed;
    var zoomFactor = zoomContainer.dataset.zoom;

    console.log(zoomOffset)

    if (zoomFactor - window.pageYOffset / zoomSpeed < 1) {
        //no zooming
        if (zoomOffset == 0) zoomOffset = zoomFactor * zoomSpeed - zoomSpeed - 30;
        zoomImage.style.transform = `scale(1)`;
        zoomContainer.style.position = "relative";
        zoomContainer.style.top = `${zoomOffset}px`;
        content.style.top = `${zoomOffset}px`;
        content.style.zIndex = "0";
    } else {
        //zooming
        zoomImage.style.transform = `scale(${zoomFactor -window.pageYOffset/zoomSpeed})`;
        zoomContainer.style.position = "fixed";
        zoomContainer.style.top = "0";
        content.style.zIndex = "-1";
        zoomContainer.style.zIndex = "1";
    }
}

update_zoom();