
dashboard.config(function ($stateProvider, $urlRouterProvider){
    
    var hellostate = {
        name: 'Hello',
        url: '/hello',
        views:  {
            'formview':{
                template: '<homecomponent></homecomponent>',
                controller: ''
                },
            'chartview':{
                    template: '<chartcomponent></chartcomponent>'
                }
            }
            
        }
    $stateProvider.state(hellostate);
});


