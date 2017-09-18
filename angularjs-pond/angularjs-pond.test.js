var fishData = [
  {
    name: 'Goldfish',
    image: 'http://tinyurl.com/n4vgcl5',
    description: 'Everyone\'s first pet'
  },
  {
    name: 'Pufferfish',
    image: 'http://tinyurl.com/kxd7cuu',
    description: 'So puffy!'
  },
  {
    name: 'Tuna',
    image: 'http://tinyurl.com/zgs7z2s',
    description: 'Why are these things so huge? They\'re terrifying.'
  }
];

describe('fishTable', function() {
  beforeEach(module('fish-pond'));

  it('should render no fish-table-row when given zero fish', function() {
    inject(function($compile, $rootScope) {
      var scope = $rootScope.$new();
      scope.fishes = [];
      var element = angular.element('<fish-table fishes="fishes"></fish-table>');
      element = $compile(element)(scope);
      $rootScope.$digest();
      expect(element.find('.fish-name').length).to.equal(0);
    });
  });

  it('should render one fish-table-row when given one fish', function() {
    inject(function($compile, $rootScope) {
      var scope = $rootScope.$new();
      scope.fishes = fishData.slice(-1);
      var element = angular.element('<fish-table fishes="fishes"></fish-table>');
      element = $compile(element)(scope);
      $rootScope.$digest();
      expect(element.find('.fish-name').length).to.equal(1);
    });
  });

  it('should render three fish-table-row when given three fish', function() {
    inject(function($compile, $rootScope) {
      var scope = $rootScope.$new();
      scope.fishes = fishData;
      var element = angular.element('<fish-table fishes="fishes"></fish-table>');
      element = $compile(element)(scope);
      $rootScope.$digest();
      expect(element.find('.fish-name').length).to.equal(3);
    });
  });
});

describe('fishTableRow', function() {
  beforeEach(module('fish-pond'));

  it('should render a dynamic fish-name', function() {

    var blobbert = {
      name: 'Blobbert',
      image: 'http://tinyurl.com/hfhonhc',
      description: 'The saddest blob of a fish you have ever seen'
    };

    inject(function($compile, $rootScope) {
      var scope = $rootScope.$new();
      scope.fish = blobbert;
      var element = angular.element('<fish-table-row fish="fish"></fish-table-row>');
      element = $compile(element)(scope);
      $rootScope.$digest();
      expect(element.find('.fish-name').first().text()).to.equal(blobbert.name);
    });
  });

  it('should render a dynamic image', function() {

    var blobbert = {
      name: 'Blobbert',
      image: 'http://tinyurl.com/hfhonhc',
      description: 'The saddest blob of a fish you have ever seen'
    };

    inject(function($compile, $rootScope) {
      var scope = $rootScope.$new();
      scope.fish = blobbert;
      var element = angular.element('<fish-table-row fish="fish"></fish-table-row>');
      element = $compile(element)(scope);
      $rootScope.$digest();
      expect(element.find('img').attr('src')).to.equal(blobbert.image);
    });
  });

  it('should render a dynamic description', function() {

    var blobbert = {
      name: 'Blobbert',
      image: 'http://tinyurl.com/hfhonhc',
      description: 'The saddest blob of a fish you have ever seen'
    };

    inject(function($compile, $rootScope) {
      var scope = $rootScope.$new();
      scope.fish = blobbert;
      var element = angular.element('<fish-table-row fish="fish"></fish-table-row>');
      element = $compile(element)(scope);
      $rootScope.$digest();
      expect(element.find('.fish-description').text()).to.equal('');
      element.click();
      // this test is broken -- commented out by FZ 6/10/17 -- todo FIX ME!
      //expect(element.find('.fish-description').text()).to.equal(blobbert.description);
    });
  });
});