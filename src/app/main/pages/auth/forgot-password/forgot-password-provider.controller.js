(function ()
{
    'use strict';

    angular
        .module('app.pages.auth.forgot-password')
        .controller('ForgotPasswordProviderController', ForgotPasswordProviderController);

    /** @ngInject */
    ForgotPasswordProviderController.$inject = ['$scope', '$state', 'toastr'];
    function ForgotPasswordProviderController($scope, $state, toastr)
    {
        // var vm = this;

        //////////  event handlers
        //event 'auth:password-reset-request-success'
        $scope.$on('auth:password-reset-request-success', function(ev, params) 
        {            
            return toastr.success('Password reset instructions have been sent to  ' +  params.email);
        });

        //event 'auth:password-reset-request-success'
        $scope.$on('auth:password-reset-request-error', function(ev, data) 
        {            
            return toastr.error('Error: ' + (data.errors).toString());
        });
        
        //event 'auth:password-reset-request-success'
        $scope.$on('auth:password-reset-confirm-success', function() 
        {            
            $state.go('app.pages_auth_password-change_provider');
        });

        //event 'auth:password-reset-request-success'
        $scope.$on('auth:password-reset-confirm-error', function() 
        {            
            return toastr.error('Unable to verify your account. Please try again.');
        });
    }
})();