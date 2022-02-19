function updateMap() {
    fetch('data.json')
        .then(response => response.json())
        .then(resp => {
            // console.log(resp);
            console.log(resp.data);
            resp.data.forEach(element => {
                let latitude = element.latitude;
                let longitude = element.longitude;
                let ninfected = element.infected;
                // Set marker options.
                let col = "white";
                if (ninfected <= 50)
                col = "rgb(0,255,0)";
                else if (ninfected <= 100)
                col = "#32cd32";
                else if (ninfected <= 150)
                col = "#008000";
                else if (ninfected <= 200)
                col = "#ffa500";
                else if (ninfected <= 250)
                col = "#ff8c00";
                else if (ninfected <= 300)
                col = "#ff0000";
                else if (ninfected <= 500)
                col = "#dc143c";
                else if (ninfected <= 1000)
                col = "#8b0000";
                else 
                col = "#bf4f51";
                const marker = new mapboxgl.Marker({
                    color: col,
                    draggable: false,
                }).setLngLat([longitude,latitude])
                .setPopup(new mapboxgl.Popup().setHTML(`<h1 style = 'color: ${col}'>${ninfected}</h2>`))
                    .addTo(map);
            });
        })
}
updateMap();
setInterval(updateMap, 120000);
