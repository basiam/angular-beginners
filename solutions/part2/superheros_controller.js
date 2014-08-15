function SuperherosController($scope) {

  $scope.superheros = [
    { name: "Batman", image: "../../assets/images/batman.jpg", superpower: "batmobile" },
    { name: "Spiderman", image: "../../assets/images/spiderman.jpg", superpower: "spider's power" },
    { name: "Batman", image: "../../assets/images/superman.jpg", superpower: "flying and super-strength" },
    { name: "Catwoman", image: "../../assets/images/catwoman.jpg", superpower: "cat's powers" }
  ];

  $scope.newHero = {};

  $scope.addNewHero = function() {
    $scope.superheros.push($scope.newHero);
    $scope.newHero = {};
  };

}
