var config = {
    style:  'mapbox://styles/caleb-thomas-smith/cl9ufe17h002r15pb6wurazsk',
    accessToken: 'pk.eyJ1IjoiY2FsZWItdGhvbWFzLXNtaXRoIiwiYSI6ImNsNXY2aTVvODAxcHgzY204Y3VtaXdvbDgifQ.ymP724CF_-YRwPfKRN7_GA',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'Coastal Flooding in New York City',
    subtitle: 'How is climate change affecting public housing in New York City?',
    byline: 'By Caleb Smith',
    para1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis dignissim augue, non fermentum leo. Sed vitae rhoncus sem. Praesent suscipit, dolor eget suscipit accumsan, lorem lacus consectetur nulla, sed iaculis libero justo vel mauris. Nam id congue leo. Curabitur pellentesque fringilla massa, id ornare libero vehicula eget. Ut rutrum dui tristique leo pretium, at lobortis felis lacinia. Fusce lacinia magna a feugiat interdum. Fusce sodales dolor in quam interdum congue. Vivamus congue, arcu vitae sagittis lacinia, diam urna venenatis nibh, vitae vulputate sem mi non odio.',
    para2: 'Aliquam euismod, nibh ac sodales auctor, dui nibh consectetur libero, sed malesuada risus metus non turpis. Nunc sit amet fringilla magna, nec sagittis velit. Fusce blandit arcu eget ipsum efficitur, vitae ornare neque fringilla. Phasellus bibendum enim ac urna sodales, facilisis viverra sem pharetra. Vestibulum eu velit neque. Curabitur fermentum, ante ac feugiat fringilla, risus tortor iaculis risus, non molestie nisl magna id purus. Nunc ut diam nec risus pulvinar elementum vitae eu lorem. Nulla iaculis dui nec hendrerit facilisis. Maecenas ac lorem tempor, aliquam diam eget, tincidunt libero. Cras a leo eu ipsum venenatis rhoncus id a magna. Integer malesuada dapibus gravida. In eu elit gravida, viverra justo luctus, scelerisque dolor. Nunc ut orci laoreet dolor cursus pretium ac at odio. Integer non ultrices magna. Aenean nec tempor sem, a laoreet dolor. Praesent consequat ligula sit amet sapien dignissim congue.',
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
        },
        {
            id: 'interlude',
            alignment: 'center',
            hidden: false,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies tempor purus, eget tempus sem bibendum vel. Maecenas at justo non felis accumsan condimentum vitae et leo. Sed sodales nec risus maximus congue. Ut quis tincidunt leo. Pellentesque sapien nisl, congue tempus mauris in, pulvinar mattis turpis. Nullam sit amet justo egestas, laoreet mauris ut, pulvinar ipsum. Pellentesque vehicula imperdiet iaculis. Nam in tellus metus. Donec a est non orci efficitur ornare id mattis eros. Aliquam vel facilisis ligula. Nullam tincidunt, sapien vitae bibendum consequat, nibh eros eleifend ligula, et aliquam enim justo eget felis. Sed nec vehicula metus. Pellentesque rutrum dui quis egestas hendrerit. Nullam auctor et tortor sit amet congue.',
            video: 'images/902-1_902-2364-PD2_preview.mp4',
            location: {
                center: [-74.00641, 40.67552],
                zoom: 16.22,
                pitch: 37.00,
                bearing: 73.60,
            },
        },
    ]
};
