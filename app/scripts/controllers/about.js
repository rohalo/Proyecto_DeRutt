'use strict';

/**
 * @ngdoc function
 * @name proyectoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the proyectoApp
 */
angular.module('proyectoApp')
  .controller('AboutCtrl', function ($scope) {

    $scope.modal=function(viaje){
      $
    }

    var viajes=[

      {
        viajeId: 1,
        estacion:"Pino suarez",
        servicio: "Metro",
        fecha:"2017/03/31",
        hora:"01:30"
      },
      {
        viajeId: 2,
        estacion:"Salto del agua",
        servicio: "Metro",
        fecha:"2017/03/31",
        hora:"03:30"
      },
      {
        viajeId: 3,
        estacion:"Pino suarez",
        servicio: "Metro",
        fecha:"2017/03/31",
        hora:"07:30"
      }
    ];

    var celulares=[

      {
        celularID:1,
        dispositivo: "Martin",
          numero: "551869728",
          marca: "Samsung"},
      {
        celularID:1,
        dispositivo: "Carlos",
          numero: "5578927132",
          marca: "HTC"}
  ];

  var tarjetas=[
    {
      tarjetaId: 1,
      numero:"5202987436914835",
      tipo:"mastercard",
      dueno: "Carlos Lazaro"
    },
    {
      tarjetaId: 2,
      numero:"520298747452945",
      tipo:"Visa",
      dueno: "Karen Perez"
    }
  ];

  var marcas=[

    {marcaId: 1,
      fabricante:"Samsung",
      subMarca:"s6 edge"
    },
    {marcaId: 2,
      fabricante:"HTC",
      subMarca:"One m9"
    }

  ];

  var tipoTarjeta=[

    {
      tipoId:1,
      compania:"Visa"
    },
    {
      tipoId:2,
      compania:"MasterCard"
    },
    {
      tipoId:1,
      compania:"Discovery"
    },
    {
      tipoId:1,
      compania:"American Express"
    }
  ];

  $scope.tipoTarjeta=tipoTarjeta;
  $scope.celulares=celulares;
  $scope.marcas=marcas;
  $scope.tarjetas=tarjetas;
  $scope.viajes=viajes;
  });
