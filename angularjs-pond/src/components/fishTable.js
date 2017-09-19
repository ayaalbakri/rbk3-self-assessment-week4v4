angular.module('fish-pond')
.component('fishTable', {
  bindings: {
    fishes: '<'
  },
  template: `
    <div>
      <fish-table-row 
      	fish = 'fish'
      	ng-repeat = fish in $ctrl.fishes by track index 
      ></fish-table-row>
    </div>`
});