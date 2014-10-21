var DOIS_TELEFONES = [
    {
        "age": 0, 
        "id": "motorola-xoom-with-wi-fi", 
        "imageUrl": "../img/phones/motorola-xoom-with-wi-fi.0.jpg", 
        "name": "Motorola XOOM\u2122 with Wi-Fi", 
        "snippet": "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb)."
    }, 
    {
        "age": 1, 
        "id": "motorola-xoom", 
        "imageUrl": "../img/phones/motorola-xoom.0.jpg", 
        "name": "MOTOROLA XOOM\u2122", 
        "snippet": "The Next, Next Generation\n\nExperience the future with MOTOROLA XOOM, the world's first tablet powered by Android 3.0 (Honeycomb)."
    }
];

var XOOM_WIFI = {
    "additionalFeatures": "Sensors: proximity, ambient light, barometer, gyroscope", 
    "description": "Motorola XOOM with Wi-Fi has a super-powerful dual-core processor and Android\u2122 3.0 (Honeycomb) \u2014 the Android platform designed specifically for tablets. With its 10.1-inch HD widescreen display, you\u2019ll enjoy HD video in a thin, light, powerful and upgradeable tablet.", 
    "id": "motorola-xoom-with-wi-fi", 
    "images": [
        "/img/phones/motorola-xoom-with-wi-fi.0.jpg", 
        "/img/phones/motorola-xoom-with-wi-fi.1.jpg", 
        "/img/phones/motorola-xoom-with-wi-fi.2.jpg", 
        "/img/phones/motorola-xoom-with-wi-fi.3.jpg", 
        "/img/phones/motorola-xoom-with-wi-fi.4.jpg", 
        "/img/phones/motorola-xoom-with-wi-fi.5.jpg"
    ], 
    "name": "Motorola XOOM\u2122 with Wi-Fi", 
};

describe("testes do phonedirectives", function() {

	beforeEach(angular.mock.module('modphonedirectives'));

	afterEach(inject(function($httpBackend){
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    }));

    it('modphonedirectives deve carregar ok', function(){
        expect(!!angular.module('modphonedirectives')).equal(true);
		console.log('carregou o modulo modphonedirectives');
    });

    it('PhoneListCtrl deve carregar phones e poder selecionar um', inject(function($controller, $httpBackend){
	    var scope = {
	        shared_model: {},
	        content: {}
	    };
    	$httpBackend.expectGET('/phones.json').respond(DOIS_TELEFONES);
	    var PhoneListCtrl = $controller('PhoneListCtrl', {$scope:scope});
	    $httpBackend.flush();
	    expect(scope.phones.length).equal(2);

    	$httpBackend.expectGET('/phones/motorola-xoom-with-wi-fi.json').respond(XOOM_WIFI);
	    scope.select(0);
	    $httpBackend.flush();
	    expect(scope.model.selected_phone.additionalFeatures).equal("Sensors: proximity, ambient light, barometer, gyroscope")
    }));


});
