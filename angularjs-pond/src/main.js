//DO NOT MODIFY THIS FILE

var fishData = [
  {
    name: 'Goldfish',
    number : 1,
    image: 'http://tinyurl.com/n4vgcl5',
    description: 'Everyone\'s first pet'
  },
  {
    name: 'Pufferfish',
    number : 2,
    image: 'http://tinyurl.com/kxd7cuu',
    description: 'So puffy!'
  },
  {
    name: 'Tuna',
    number : 3,
    image: 'http://tinyurl.com/zgs7z2s',
    description: 'Why are these things so huge? They\'re terrifying.'
  }
];

angular.module('fish-pond', [])
.component('app', {
  controller: function() {
    this.fishes = fishData;
  },
  template: '<fish-table fishes="$ctrl.fishes"></fish-table>',
});
