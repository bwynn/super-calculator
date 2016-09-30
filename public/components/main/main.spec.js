describe('MainController', function() {
    var $controller, MainController;

    beforeEach(angular.mock.module('ui.router'));
    beforeEach(angular.mock.module('components.main'));

    beforeEach(inject(function(_$controller_) {
        $controller = _$controller_;

        MainController = $controller('MainController');
    }));

    it('should be defined', function() {
        expect(MainController).toBeDefined();
    });
});
