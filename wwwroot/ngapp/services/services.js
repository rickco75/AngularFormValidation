var AngularJsDesign;
(function (AngularJsDesign) {
    var Services;
    (function (Services) {
        var MovieService = (function () {
            function MovieService($resource) {
                this.MovieResource = $resource('/api/movies');
            }
            MovieService.prototype.listMovies = function () {
                return this.MovieResource.query();
            };
            return MovieService;
        }());
        Services.MovieService = MovieService;
        angular.module('AngularJsDesign').service('movieService', MovieService);
        var MyService = (function () {
            function MyService() {
            }
            return MyService;
        }());
        Services.MyService = MyService;
        angular.module('AngularJsDesign').service('myService', MyService);
    })(Services = AngularJsDesign.Services || (AngularJsDesign.Services = {}));
})(AngularJsDesign || (AngularJsDesign = {}));
//# sourceMappingURL=services.js.map