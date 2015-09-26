(function(){
    angular.module('phonemodel', ['phone_api']);
    
    angular.module('phonemodel').factory('PhoneModel', function(PhoneApi) {
        var m = {
            loading: false,
            selected_phone: null,
            phones: [
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
            ]
        };

        angular.extend(m, {
            select: select,
            select_image: select_image
        });

        return m;

        function select(p){
            m.loading = true;
            PhoneApi.get_phone(p.id).success(function(phone){
                m.loading = false;
                m.selected_phone = phone;
                m.selected_phone.selected_image = phone.images[0];
            });
        }

        function select_image(img){
            m.selected_phone.selected_image = img;
        }
    });
})();