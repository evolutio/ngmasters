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
	beforeEach(angular.mock.module('myapp'));

	afterEach(inject(function($httpBackend){
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    }));

    it('modphonedirectives deve carregar ok', function(){
        expect(!!angular.module('modphonedirectives')).equal(true);
		console.log('carregou o modulo modphonedirectives');
    });

    //Exemplo de como testar um controller
    it('PhoneListCtrl deve carregar phones e poder selecionar um', inject(function($controller, $httpBackend){
	    var scope = {
	        shared_model: {},
	        content: {}
	    };
    	$httpBackend.expectGET('/phones.json').respond(DOIS_TELEFONES);
	    var PhoneListCtrl = $controller('PhoneListCtrl', {$scope:scope});
	    $httpBackend.flush();
	    expect(scope.phones.length).equal(2);
	    console.log('PhoneListCtrl carregou 2 telefones do "back"')

    	$httpBackend.expectGET('/phones/motorola-xoom-with-wi-fi.json').respond(XOOM_WIFI);
	    scope.select(0);
	    $httpBackend.flush();
	    expect(scope.model.selected_phone.additionalFeatures).equal("Sensors: proximity, ambient light, barometer, gyroscope")
	    console.log('PhoneListCtrl seleciona telefones direitinho')
    }));

    //Exemplo de como testar uma diretiva (sqn... = nao ta funcionando ainda)
	it('<phone-list> deve mostrar uma tabela de telefones', inject(function($compile, $rootScope, $httpBackend){
		var scope = $rootScope.$new();
		$httpBackend.expectGET('/phones.json').respond(DOIS_TELEFONES);
		var el = $compile('<phone-list></phone-list>')(scope);
		// $rootScope.$digest(); //Ver https://stackoverflow.com/questions/23871901/trouble-unit-testing-directives-that-use-templateurl
		$httpBackend.flush();
		var $el = $(el)
	    console.log('<phone-list> gerou um elemento html')
		expect($el.find('table').find('tr').length).equal(3);
	    console.log('<phone-list> tem uma tabela com 3 linhas (uma deleas eh o header)')
		var linha1 = $el.find('table').find('tr')[1];
		var $linha1 = $(linha1)
		var celula_1_3 = $linha1.find('td')[2];
		expect($(celula_1_3).html().indexOf('Experience the future with Motorola XOOM with Wi-Fi') > 0).equal(true);
	    console.log('<phone-list> mostra snippet do telefone na tabela')
	}));



});
