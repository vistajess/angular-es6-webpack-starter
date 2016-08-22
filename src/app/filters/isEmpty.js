import angular from 'angular';

let isEmptyModule = angular.module('filter.isEmpty',[])
                      .filter('isEmpty',() => {
                          let bar;
                          return (obj) => {
                              for (bar in obj) {
                                  if (obj.hasOwnProperty(bar)) return false
                              }
                              return true;
                          }
                        })

export default isEmptyModule;