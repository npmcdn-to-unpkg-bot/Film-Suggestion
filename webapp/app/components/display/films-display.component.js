System.register(['angular2/core', './film-view.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, film_view_component_1;
    var FilmsDisplayComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (film_view_component_1_1) {
                film_view_component_1 = film_view_component_1_1;
            }],
        execute: function() {
            FilmsDisplayComponent = (function () {
                function FilmsDisplayComponent() {
                    this.tagSelected = new core_1.EventEmitter();
                }
                FilmsDisplayComponent.prototype.ngOnInit = function () {
                };
                FilmsDisplayComponent.prototype.addTag = function ($event) {
                    this.tagSelected.emit($event);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], FilmsDisplayComponent.prototype, "films", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], FilmsDisplayComponent.prototype, "tagSelected", void 0);
                FilmsDisplayComponent = __decorate([
                    core_1.Component({
                        selector: 'films-display',
                        templateUrl: 'app/components/display/films-display.component.html',
                        directives: [film_view_component_1.FilmViewComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], FilmsDisplayComponent);
                return FilmsDisplayComponent;
            }());
            exports_1("FilmsDisplayComponent", FilmsDisplayComponent);
        }
    }
});
//# sourceMappingURL=films-display.component.js.map