var config = {
    style: 'mapbox://styles/caleb-thomas-smith/cl9ufe17h002r15pb6wurazsk',
    accessToken: 'pk.eyJ1IjoiY2FsZWItdGhvbWFzLXNtaXRoIiwiYSI6ImNsNXY2aTVvODAxcHgzY204Y3VtaXdvbDgifQ.ymP724CF_-YRwPfKRN7_GA',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'Public and Affordable Housing Flood Risk',
    subtitle: 'How is climate change affecting public housing in New York City?',
    byline: 'By Caleb Smith',
    footer: '<p>Data from <a href="https://data.cityofnewyork.us/">NYC Open Data</a></p> and Wikipedia',
    chapters: [
        {
            id: 'chapter1',
            alignment: 'left',
            hidden: false,
            title: 'In the fall of 2012, New York City was hit with hurricane that left tens of thousands of public housing residents without power for days or even weeks',
            description: 'New York City Housing Authority public housing developments were affected. 24,000 government-subsidized apartments and 40,000 rent-stabilized apartments were also affected. With rising sea levels from climate change and the promise of more flooding, which areas and who will likely be most affected? How is affordable housing construction responding to this?',
            location: {
                center: [-73.97494, 40.71823],
                zoom: 12.56,
                pitch: 60.00,
                bearing: 7.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'chapter2',
            alignment: 'right',
            hidden: false,
            title: 'Red Hook Houses',
            image: 'images/redhookflooded.jpg',
            description: 'Red Hook Houses, the largest public housing facility in Brooklyn, was flooded by more than 6 feet of flood water througha combination of storm surge and sewer overflow. Residents were without power and fresh water for month, causing mold issues that affected the health of residents.',
            location: {
                center: [-74.00641, 40.67552],
                zoom: 16.22,
                pitch: 37.00,
                bearing: 73.60,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
