angular
  .module('Webmail', ['ngSanitize'])
  .controller('WebmailCtrl', function($scope, $location) {
    $scope.dossiers = [
      {
        value: 'RECEPTION',
        label: 'Boite de réception',
        emails: [
          {
            id: 1,
            from: 'Albator',
            to: 'Rudy',
            subject: 'Je reviens',
            date: new Date(2000, 0, 20),
            content:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis.'
          },
          {
            id: 2,
            from: 'Capitaine Flam',
            to: 'Rudy',
            subject: "Bisous de l'espace",
            date: new Date(2002, 3, 21),
            content:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>.'
          },
          {
            id: 3,
            from: 'Pikachu',
            to: 'Rudy',
            subject: 'Pika pika !',
            date: new Date(2014, 4, 15),
            content:
              'Pika pika ! Chuuuuuu. Pika pika ! Chuuuuuu. Pika pika ! Chuuuuuu. Pika pika ! Pika pika ? Piiiiika Chuuuuuu. Pika pika ! Pikachu. Pika pika pika.'
          },
          {
            id: 4,
            from: 'Barbapapa',
            to: 'Rudy',
            subject: 'Hulahup Barbatruc',
            date: new Date(2014, 4, 13),
            content:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>.'
          }
        ]
      },
      {
        value: 'ARCHIVES',
        label: 'Archives',
        emails: [
          {
            id: 5,
            from: 'Candy',
            to: 'Rudy',
            subject: 'Bon anniversaire',
            date: new Date(2014, 4, 16),
            content:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis.'
          },
          {
            id: 6,
            from: 'Hiro Nakamura',
            to: 'Rudy',
            subject: 'Konichiwa',
            date: new Date(2014, 4, 19),
            content:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>.'
          },
          {
            id: 7,
            from: 'Asuka Langley Soryu',
            to: 'Rudy',
            subject: 'Ca va chier',
            date: new Date(2017, 9, 01),
            content:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis.'
          }
        ]
      },
      {
        value: 'ENVOYES',
        label: 'Envoyés',
        emails: [
          {
            id: 8,
            from: 'Rudy',
            to: 'Albator',
            subject: 'Bien la famille ?',
            date: new Date(2014, 4, 15),
            content:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis.'
          },
          {
            id: 9,
            from: 'Rudy',
            to: 'Capitaine Flam',
            subject: 'Gloubiboulga Night',
            date: new Date(2016, 1, 30),
            content:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>.'
          }
        ]
      },
      {
        value: 'SPAM',
        label: 'Courrier indésirable',
        emails: [
          {
            id: 10,
            from: 'Rue du discount',
            to: 'Rudy',
            subject: "Envie d'un nouveau frigo ?",
            date: new Date(2012, 1, 15),
            content:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis.'
          },
          {
            id: 11,
            from: 'Sofinnoga',
            to: 'Rudy',
            subject: "Besoin d'argent ?",
            date: new Date(2012, 4, 15),
            content:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>.'
          }
        ]
      }
    ];
    $scope.dossierCourant = null;
    $scope.emailSelectionner = null;

    $scope.selectionDossier = function(dossier) {
      $scope.dossierCourant = dossier;
      $scope.emailSelectionner = null;
    };

    $scope.selectionEmail = function(email) {
      $scope.emailSelectionner = email;
    };

    $scope.versEmail = function(dossier, email) {
      $location.path('/' + dossier.value + '/' + email.id);
    };

    //tri

    $scope.champTri = null;
    $scope.triDescendant = false;
    $scope.triEmails = function(champ) {
      if ($scope.champTri == champ) {
        $scope.triDescendant = !$scope.triDescendant;
      } else {
        $scope.champTri = champ;
        $scope.triDescendant = false;
      }
    };

    $scope.cssChevronTri = function(champ) {
      return {
        glyphicon: $scope.champTri == champ,
        'glyphicon-chevron-up':
          $scope.champTri == champ && !$scope.triDescendant,
        'glyphicon-chevron-down':
          $scope.champTri == champ && $scope.triDescendant
      };
    };

    //Recherche
    $scope.recherche = null;
    $scope.razRecherche = function() {
      $scope.recherche = null;
    };

    $scope.$watch(
      function() {
        return $location.path();
      },
      function(newPath) {
        var tabPath = newPath.split('/');
        if (tabPath.length > 1) {
          var valDossier = tabPath[1];
          $scope.dossiers.forEach(function(item) {
            if (item.value == valDossier) {
              $scope.selectionDossier(item);
            }
          });
          if (tabPath.length > 2) {
            var idMail = tabPath[2];
            $scope.dossierCourant.emails.forEach(function(mail) {
              if (mail.id == idMail) {
                $scope.selectionEmail(mail);
              }
            });
          }
        }
      }
    );
  })
  .filter('surbrillanceRecherche', function() {
    return function(input, recherche) {
      if (recherche) {
        return input.replace(
          new RegExp('(' + recherche + ')', 'gi'),
          "<span class='surbrillanceRecherche'>$1</span>"
        );
      }
      return input;
    };
  });
