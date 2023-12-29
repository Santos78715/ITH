dashboard.component('homecomponent', {
    templateUrl: 'dashboard.html',
    controller: function() {
        // Controller logic goes here

        this.first_name = "";
        this.last_name = "";
        this.displayFullname = function(){
            this.fullname = "First Name " + this.first_name + "  " + "Last Name : " + this.last_name;
        }
    }
});