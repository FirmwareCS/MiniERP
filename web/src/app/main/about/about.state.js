'use strict';

(function () {
    angular
        .module('spitfire')
        .config(stateConfiguration);

    var stateSettings = {
        name: 'main.about',
        state: {
            url: '/about',
            templateUrl: 'app/main/about/about.html',
            controller: 'MainAboutController as vm'
        },
        title: {
            textTranslationId: 'main.about.title'
        },
        breadcrumb: {
            titleTranslationId: 'main.about.breadcrumb'
        },
        sidebarKey: 'main.about',
        translations: 'app/main/about'
    };

    stateSettings.state.onEnter = onEnter;
    stateSettings.state.onExit = onExit;

    stateConfiguration.$inject = ['$stateProvider'];

    function stateConfiguration($stateProvider) {
        $stateProvider.state(stateSettings.name, stateSettings.state);
    }

    onEnter.$inject = ['titleService', 'breadcrumbsService', 'sidebarService'];

    function onEnter(titleService, breadcrumbsService, sidebarService) {
        titleService.appendTitle(stateSettings.title);

        breadcrumbsService.addBreadcrumb(stateSettings.breadcrumb);
        sidebarService.setSelected(stateSettings.sidebarKey);
    }

    onExit.$inject = ['titleService', 'breadcrumbsService', 'sidebarService'];

    function onExit(titleService, breadcrumbsService, sidebarService) {
        titleService.removeLastTitle();

        breadcrumbsService.removeLastBreadcrumb();
        sidebarService.clearSelected();
    }

    if (stateSettings.translations) {
        stateSettings.state.resolve = stateSettings.state.resolve || {};
        stateSettings.state.resolve.translations = refreshTranslations;
    }

    refreshTranslations.$inject = ['$translatePartialLoader', '$translate'];

    function refreshTranslations($translatePartialLoader, $translate) {
        $translatePartialLoader.addPart(stateSettings.translations);
        return $translate.refresh();
    }
})();
