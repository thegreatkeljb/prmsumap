const elemMap = document.getElementById('map');

let mapClicked = false;

const mapHash = {
    'admin': {
        selectedMap: "map-admin.png"
    },
    'grad': {
        selectedMap: "map-grad.png"
    },
    'ccit': {
        selectedMap: "map-ccit.png"
    },
    'con': {
        selectedMap: "map-con.png"
    },
    'cit': {
        selectedMap: "map-cit.png"
    },
    'coe': {
        selectedMap: "map-coe.png"
    },
    'cthm': {
        selectedMap: "map-cthm.png"
    },
    'caba': {
        selectedMap: "map-caba.png"
    },
    'cte': {
        selectedMap: "map-cte.png"
    },
    'comfortroom': {
        selectedMap: "comfortroom.png"
    },
    'cafe': {
        selectedMap: "cafeteria.png"
    },
    'cas': {
        selectedMap: "map-cas.png"
    }
}

function marker(id) {
    if (!mapClicked) {
        mapClicked = true;
        if (mapHash[id]) {
            const selected = mapHash[id];
            elemMap.src = "assets/maps/" + selected.selectedMap;
        }
    } else {
        elemMap.src = "assets/maps/map.png";
        mapClicked = false;
    }
}



var scale = 1,
    imgElement = document.getElementById('map'),
    panning = false,
    pointX = 0,
    pointY = 0,
    start = { x: 0, y: 0 },
    zoom = document.getElementById("zoom");

// Get the dimensions of the div that contains the image
var divWidth = zoom.clientWidth;
var divHeight = zoom.clientHeight;

// Get the dimensions of the image
var imgWidth = imgElement.width;
var imgHeight = imgElement.height;

function setTransform() {
    if (scale <= 1) {
        // Reset the image if the scale is less than or equal to 1
        scale = 1;
        pointX = 0;
        pointY = 0;
        panning = false;
        start = { x: 0, y: 0 };
        zoom.style.transform = "translate(" + 0 + "px, " + 0 + "px) scale(" + 1 + ")";
    } else {
        // Apply transformation with boundaries checking
        var minX = Math.min(0, divWidth - imgWidth * scale);
        var minY = Math.min(0, divHeight - imgHeight * scale);

        pointX = Math.max(minX, Math.min(pointX, 0));
        pointY = Math.max(minY, Math.min(pointY, 0));

        zoom.style.transform = "translate(" + pointX + "px, " + pointY + "px) scale(" + scale + ")";
    }
}

if (!mapClicked) {
    zoom.onmousedown = function (e) {
        e.preventDefault();
        start = { x: e.clientX - pointX, y: e.clientY - pointY };
        console.log('x', scale)
        console.log('y', pointX)
        console.log('z', pointY)
        panning = true;
    }
    
    zoom.onmouseup = function (e) {
        panning = false;
    }
    
    zoom.onmousemove = function (e) {
        e.preventDefault();
        if (!panning) {
            return;
        }
        pointX = (e.clientX - start.x);
        pointY = (e.clientY - start.y);
        setTransform();
    }
    
    zoom.onwheel = function (e) {
        e.preventDefault();
        var xs = (e.clientX - pointX) / scale;
        var ys = (e.clientY - pointY) / scale;
        var delta = (e.wheelDelta ? e.wheelDelta : -e.deltaY);
        (delta > 0) ? (scale *= 1.2) : (scale /= 1.2);
        pointX = e.clientX - xs * scale;
        pointY = e.clientY - ys * scale;

        if (!mapClicked) {
            if (scale > 2.5) {
                imgElement.src = '2.png';
                imgElement.alt = 'Image 2';
            } else {
                imgElement.src = 'assets/maps/map.png';
                imgElement.alt = 'Image 1';
            }  
        }
         
        setTransform();
    }
}

