angular.module('fish-pond')
.controller('FishTableCtrl', function() {
  this.showDescription = false;
  this.toggleDescription = () => {
    // some code is missing here
  };
})
.component('fishTableRow', {
  bindings: {
    fish: '<'
  },
  controller: 'FishTableCtrl',
  template: `
    <div>
      <span class="fish-name">1</span>
      <span class="fish-name">Nemoo</span>
      <span>
        <img src="http://tinyurl.com/h8o5szh" />
      </span>
      <span class="fish-description" ng-if="$ctrl.showDescription">where am i ?</span>
    </div>`
});
