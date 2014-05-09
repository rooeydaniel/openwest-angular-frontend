'use strict';

angular.module('TaskApp.filters', [])
    .filter('taskSearchFilter', function () {
        return function (items, searchText) {
            var filtered = [];

            angular.forEach(items, function (item) {
                if (searchText != '' && searchText != undefined) {
                    if (item.name.indexOf(searchText) != -1 || item.description.indexOf(searchText) != -1) {
                        filtered.push(item);
                    }
                } else {
                    filtered.push(item);
                }
            });

            return filtered;
        };
    });