ymaps.ready(init);

function init() {
    var map = new ymaps.Map('map', {
        center: [59.94734305434222,30.30816648725314],
        zoom: 12,
        controls: ['zoomControl'],
        behaviors: ["drag"]
    });
    console.log("abobas");

    var placemark = new ymaps.Placemark([59.9604193558028,30.30456207450879],{
        hintContent: '<div class = "map__hint">ул.Name</div>',
        balloonContent: [
            '<div class = "map__balloon">',
            'Самый вкусный кофе на улице name!',
            '</div>'
        ].join('')
    },
    {
        iconLayout: 'default#image',
        iconImageHref: 'assets/images/F4Pic.jpg',
        iconImageSize: [35, 40]        
    });

    var placemark1 = new ymaps.Placemark([59.92710039858427,30.241046888864467],{
        hintContent: '<div class = "map__hint">ул.Name</div>',
        balloonContent: [
            '<div class = "map__balloon">',
            'Самый вкусный кофе на улице name!',
            '</div>'
        ].join('')
    },
    {
        iconLayout: 'default#image',
        iconImageHref: 'assets/images/F4Pic.jpg',
        iconImageSize: [35, 40]        
    });

    var placemark2 = new ymaps.Placemark([59.9301160479719,30.319839460885955],{
        hintContent: '<div class = "map__hint">ул.Name</div>',
        balloonContent: [
            '<div class = "map__balloon">',
            'Самый вкусный кофе на улице name!',
            '</div>'
        ].join('')
    },
    {
        iconLayout: 'default#image',
        iconImageHref: 'assets/images/F4Pic.jpg',
        iconImageSize: [35, 40]        
    });

    map.geoObjects.add(placemark);
    map.geoObjects.add(placemark1);
    map.geoObjects.add(placemark2);
}

