angular.module('fish-pond')
.controller('FishTableCtrl', function() {
  this.showDescription = false;
  this.toggleDescription = () => {
    // some code is missing here
    this.showDescription = true;
    //this.data = fishData;
  };
})
.component('fishTableRow', {
  bindings: {
    fish: '<'
  },
  controller: 'FishTableCtrl',
  template: `
    <div>
      <span class="fish-name">{{$ctrl.fish.number}}</span>
      <span class="fish-name">{{$ctrl.fish.name}}</span>
      <span>
        <img ng-src="{{$ctrl.fish.image}}" ng-click = $ctrl.toggleDescription()/>
      </span>
      <span class="fish-description" ng-if="$ctrl.showDescription">where am i ?</span>
    </div>`
});
