'use strict';
App.factory('CountryService', ['$http', '$q', function ($http, $q) {
        return {
            fetchAllCountries: function () {
                return $http.get('http://localhost:8080/country/').then(function (response) {
                    return response.data;
                }, function (errResponse) {
                    console.error('Error while fetching countries');
                    return $q.reject(errResponse);
                });
            },
            createCountry: function (customer) {
                return $http.post('http://localhost:8080/country/', country).then(function (response) {
                    return response.data;
                }, function (errResponse) {
                    console.error('Error while creating country');
                    return $q.reject(errResponse);
                });
            },
            updateCountry: function (country, countryId) {
                console.log("XXX", country);
                return $http.post('http://localhost:8080/countryUpdate/', country).then(function (response) {
                    return response.data;
                }, function (errResponse) {
                    console.error('Error while updating country');
                    return $q.reject(errResponse);
                });
            },
            deleteCountry: function (countryId) {
                return $http.get('http://localhost:8080/countryDelete/' + countryId).then(function (response) {
                    return response.data;
                }, function (errResponse) {
                    console.error('Error while deleting country');
                    return $q.reject(errResponse);
                });
            }
        };
    }]);