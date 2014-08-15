
superheroApp.controller('SuperherosController', function($scope, $modal) {

  $scope.superheros = [
    { name: "Batman", image: "../../assets/images/batman.jpg", superpower: "batmobile" },
    { name: "Spiderman", image: "../../assets/images/spiderman.jpg", superpower: "spider's power" },
    { name: "Batman", image: "../../assets/images/superman.jpg", superpower: "flying and super-strength" },
    { name: "Catwoman", image: "../../assets/images/catwoman.jpg", superpower: "cat's powers" }
    /* SOMETHING IS MISSING HERE */
  ];

  $scope.newHero = {};

  $scope.addNewHero = function() {
    $scope.superheros.push($scope.newHero);
    $scope.newHero = {};
  };

  $scope.showBigImage = function(hero) {
    $scope.hero = hero;
    $scope.modal = $modal.open(
      {
        scope: $scope,
        template: '<img ng-src="{{ hero.image }}" alt="{{hero.name}}"/>'
       }
    );
  };


})

