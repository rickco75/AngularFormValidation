namespace AngularJsDesign.Services {

    export class MovieService {
        private MovieResource;

        public listMovies() {
            return this.MovieResource.query();
        }

        constructor($resource: ng.resource.IResourceService) {
            this.MovieResource = $resource('/api/movies');
        }
    }
    angular.module('AngularJsDesign').service('movieService', MovieService);
    export class MyService {

    }
    angular.module('AngularJsDesign').service('myService', MyService);
    }
