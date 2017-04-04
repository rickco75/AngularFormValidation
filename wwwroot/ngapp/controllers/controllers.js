var AngularJsDesign;
(function (AngularJsDesign) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController(movieService) {
                this.message = 'Hello from the home page!';
                this.movies = movieService.listMovies();
            }
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        var AboutController = (function () {
            function AboutController() {
                this.message = 'Hello from the about page!';
            }
            return AboutController;
        }());
        Controllers.AboutController = AboutController;
    })(Controllers = AngularJsDesign.Controllers || (AngularJsDesign.Controllers = {}));
})(AngularJsDesign || (AngularJsDesign = {}));
//# sourceMappingURL=controllers.js.map