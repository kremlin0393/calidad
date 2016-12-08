angular.module('starter.controllers', [])
.controller('menuCtrl', ['$scope', '$stateParams','$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$state) {
  $scope.$on('$ionicView.beforeEnter', function () {
  switch(interes){
      case '1':
            $scope.ruta = {
              rut : 'Anemia'}
            break;
      case '2':
            $scope.ruta = {
              rut : 'Diabetes'}
            break;
      case '3':
            $scope.ruta = {
              rut : 'Hipertension'}
            break;
      case '4':
            $scope.ruta = {
              rut : 'Obesidad'}
            break;
    }
  });
  /*$scope.cerrarSesion = function () {
                        _cSQL.cerrar_sesion();
                      perfil = {};
                      interes = '';
                    }*/

}])
   
.controller('registrarInformacionCtrl', ['$scope', '$stateParams','$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http) {
}])
   
.controller('registrarAlimentosCtrl', ['$scope', '$stateParams','$http', '$ionicLoading', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http, $ionicLoading) {
  //registrar_alimentos_Controller($scope, $http, $ionicLoading);
  //$scope.Iniciar_lista();
}])
   
.controller('crearCuentaCtrl', ['$scope', '$stateParams','$state','$http','$ionicPopup','$ionicLoading','$timeout',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$state,$http,$ionicPopup,$ionicLoading,$timeout) {
  crear_cuenta_Controller($scope,$state,$http,$ionicPopup,$ionicLoading,$timeout);
}])
   
.controller('inicioCtrl', ['$scope', '$stateParams','$state','$cordovaSQLite','$http','$ionicLoading','$timeout', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$state,$cordovaSQLite,$http,$ionicLoading,$timeout) {
   /* $scope.$on('$ionicView.beforeEnter', function () {

        window.ionic.Platform.ready(function () {
            IniciarBaseDatos($cordovaSQLite);
            $ionicLoading.show({
                      content: 'Loading',
                      animation: 'fade-in',
                      showBackdrop: true,
                      maxWidth: 200,
                      showDelay: 0
                  })
            _cSQL.usuario_accedio(function (resultado) {
                if (resultado == 0) {
                  $timeout(function() {
                   $ionicLoading.hide();//close the popup after 3 seconds for some reason
                   window.location = "#/side-menu21/login";
                }, 3000);
                    
                } else {
                    _cSQL.log_usuario(function (resultado) { 
                        _cSQL.codigo_acceso(function (resultado1) { 
                            var Url1 = URL+"login.php?id_usuario=" + resultado + "&password=" + resultado1;
                            $http({
                              method : "GET",
                              url : Url1
                            }).then(function mySucces(response) {
                                if(response.data.estado=='1'){
                                    interes = response.data.usuario.interes;
                                    perfil = response.data.usuario;
                                    $timeout(function() {
                                      alert(1);
                                       $ionicLoading.hide();//close the popup after 3 seconds for some reason
                                       $state.go('menu.perfil', {}, {reload: true});
                                    }, 3000);
                                    
                                }
                            },function myError(response) {
                              });
                        });
                    });
                }
            });
        });
    });*/
}])
   
.controller('DiabetesCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
.controller('AnemiaCtrl', ['$scope', '$stateParams','$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$state) {
  /*$scope.$on('$ionicView.beforeEnter', function () {
      $scope.form={};
     // $scope.form.hierro=null;
  });

  $scope.cambiarEstado=function(formsexo){
      if(formsexo=='M'){
        $scope.form.valor=1;
      }else{
         $scope.form.valor=null;
      }
  }
  $scope.doFormAnemia=function(){
    console.log($scope.form.hierro);
    console.log($scope.form.vitaminac);
    console.log($scope.form.edad);
    console.log($scope.form.sexo);
    console.log($scope.form.embarazo);
  

   if($scope.form.hierro ==undefined){
      alert("Debe ingresar un valor de Hierro valido");
      //$state.go('#/side-menu21/{{ruta.rut}}', {}, {reload: true});
    }else if($scope.form.vitaminac==undefined){
      alert("Debe ingresar un valor de Vitamina C valido");
      //$state.go('#/side-menu21/{{ruta.rut}}', {}, {reload: true});
    }else if($scope.form.edad==undefined){
        alert("Debe ingresar un valor de Edad valido");
        //$state.go('#/side-menu21/{{ruta.rut}}', {}, {reload: true});
      }else if($scope.form.sexo==undefined){
        alert("Debe seleccionar su sexo");
        //$state.go('#/side-menu21/{{ruta.rut}}', {}, {reload: true});
      }else if($scope.form.valor==1){
            if($scope.form.embarazo==undefined){
              alert("Debe seleccionar su estado de embarazo");
             // $state.go('#/side-menu21/{{ruta.rut}}', {}, {reload: true});
            }else{
               //$state.go('menu.recomendacion', {}, {reload: true});
            }
      }else{
          if($scope.form.hierro<7){
            alert("El valor de Hierro no supera el mínimo");
          }else if($scope.form.vitaminac<15){
            alert("El valor de Vitamina C no supera el mínimo");
          }//else{
              //$state.go('menu.recomendacion', {}, {reload: true});
          //}
      }
     $scope.form.hierro= parseInt($scope.form.hierro);
     $scope.form.vitaminac= parseInt($scope.form.vitaminac);
     $scope.form.edad= parseInt($scope.form.edad);
     if($scope.form.sexo=='M'){
        $scope.form.embarazo= parseInt($scope.form.embarazo);
      }

      if($scope.form.edad>=1 && $scope.form.edad<=3){
        hierro=7;vitaminac=15;
      }else if($scope.form.edad>=4 && $scope.form.edad<=8){
        hierro=10;vitaminac=25;
      }else if($scope.form.edad>=9 && $scope.form.edad<=13){
        hierro=8;vitaminac=45;
      }else if($scope.form.edad>=14 && $scope.form.edad<=18 && $scope.form.sexo=='H'){
        hierro=11;vitaminac=75;
      }else if($scope.form.edad>=14 && $scope.form.edad<=18 && $scope.form.sexo=='M'){
        hierro=15;vitaminac=65;
      }else if($scope.form.edad>=19 && $scope.form.edad<=50 && $scope.form.sexo=='H'){
        hierro=8;vitaminac=90;
      }else if($scope.form.edad>=19 && $scope.form.edad<=50 && $scope.form.sexo=='M' && $scope.form.embarazo!=1){
        hierro=18;vitaminac=75;
      }else if($scope.form.edad>=51 && $scope.form.sexo=='H'){
        hierro=8;vitaminac=90;
      }else if($scope.form.edad>=51 && $scope.form.sexo=='M'){
        hierro=8;vitaminac=75;
      }else if($scope.form.edad>=14 && $scope.form.edad<=18 && $scope.form.embarazo==1 && $scope.form.sexo=='M'){
        hierro=27;vitaminac=80;
      }else if($scope.form.edad>=19 &&  $scope.form.embarazo==1  && $scope.form.sexo=='M'){
        hierro=27;vitaminac=85;
      }

      $state.go('menu.recomendacion', {}, {reload: true});

      console.log(hierro);
      console.log(vitaminac);
}*/
}])


.controller('ObesidadCtrl', ['$scope', '$stateParams','$state',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$state) {

  $scope.$on('$ionicView.beforeEnter', function () {
  $scope.form={};
  $scope.form.sexo='H';
});


$scope.doForm=function(){
  console.log($scope.form.altura);
  console.log($scope.form.peso);
  console.log($scope.form.edad);
  $scope.form.altura= parseFloat($scope.form.altura)
  $scope.form.peso= parseFloat($scope.form.peso)
  $scope.form.edad= parseFloat($scope.form.edad)
  
  var alturaMetro= $scope.form.altura/100;
  if($scope.form.altura<0){
      alert("La altura que introduzca debe ser positiva")
  }
  else if($scope.form.altura<20){
      alert("Ha introducido la altura en metros. Por favor, multipliquela por 100 para introducirla en centimetros.")
  }
  else {
    if($scope.form.peso==""){
        alert("Por favor, introduce tu peso.");
      }
    else if($scope.form.peso<0){
      alert("El peso que introduzca debe ser positivo.");
    }
    else if($scope.form.edad==""){
    alert("Por favor, introduce una edad.");
    }
    else{
      var edadimc=0;
      var imcmax=0;
      var imcmin=0;
      if($scope.form.edad<=24){edadimc=0;imcmin=18.5;imcmax=24.1;}
      if($scope.form.edad>=25 && $scope.form.edad<=34){edadimc=0.7;imcmin=20;imcmax=25;}
      if($scope.form.edad>=35 && $scope.form.edad<=44){edadimc=1.4;imcmin=21;imcmax=26;}
      if($scope.form.edad>=45 && $scope.form.edad<=54){edadimc=2.1;imcmin=22;imcmax=27;}
      if($scope.form.edad>=55 && $scope.form.edad<=64){edadimc=2.8;imcmin=23;imcmax=28;}
      if($scope.form.edad>=65 ){edadimc=3.5;imcmin=24;imcmax=29;}
      var alturaCuadrado=alturaMetro*alturaMetro;
       imc=$scope.form.peso/alturaCuadrado;
          imc=Math.round(imc*10)/10;
      if(imc<16+edadimc){
        IMCdetallado="Delgadez Severa";
        Contenido="Tu IMC indica que: Tienes una delgadez severa. Tienes una cantidad baja de grasa en el cuerpo. Tus defensas inmunitarias podrian disminuir. Deberias visitar a un medico para asegurarte que estas bien, ya que podria ser un criterio de hospitalizacion. Te aconsejamos una dieta equilibrada y ejercicio para ganar peso y aumentar tu masa de muscular.";
      }
      else if(imc<17+edadimc){
        IMCdetallado="Delgadez Moderada";
        Contenido='Tu IMC indica que: Tienes una delgadez moderada. Tu bajo peso podria hacer disminuir tus defensas inmunitarias. Deberias visitar a un medico para asegurarte que estas bien. Te aconsejamos una dieta equilibrada y ejercicio para ganar peso y aumentar tu masa de muscular.';
      }
      else if(imc<18.5+edadimc){
        IMCdetallado="Delgadez Aceptable"; 
        Contenido='Tu IMC indica que: Tienes una delgadez aceptable. Tu bajo peso podria hacer disminuir tus defensas inmunitarias.</br> Deberias visitar a un medico para asegurarte que estas bien. Te aconsejamos una dieta equilibrada y ejercicio para ganar peso y aumentar tu masa muscular.';
      }
      else if(imc<24.9+edadimc){
        IMCdetallado="Peso Normal";
        Contenido='Tu IMC indica que: Tienes un Peso Normal y Saludable. Tu IMC es ideal. Tienes una cantidad sana de grasa en el cuerpo, que es asociado con una vida mas larga, y bajas posibilidades de enfermedad grave. Coincidencia o no, la gente percibe las personas con este IMC mas atractivas esteticamente.';
        
      }
      else if(imc<29.9+edadimc){
        IMCdetallado="Sobrepeso";
        Contenido='Tu IMC indica que: Tienes un sobre peso preobeso. Estas aumentando el riesgo de enfermedades con tu peso actual. Deberias perder peso cambiando de dieta y haciendo mas ejercicio.';
      }
      else if(imc<35+edadimc){
        IMCdetallado="Obeso: Tipo I";
        Contenido='Tu IMC indica que: Tienes una Obesidad grado I. Tu exceso de Peso te pone en peligro para un problema cardiaco, diabetes, hipertension, enfermedad de vesicula y algunos canceres. Deberias perder peso cambiando de dieta y haciendo mas ejercicio.';
      }
      else if(imc<40+edadimc){
        IMCdetallado="Obeso: Tipo II";
        Contenido='Tu IMC indica que: Tienes una Obesidad grado II. Tu exceso de Peso te pone en peligro para un problema cardiaco, diabetes, hipertension, enfermedad de vesicula y algunos canceres. Deberias perder peso cambiando de dieta y haciendo mas ejercicio.';
      }
      else if(imc>45+edadimc){
        IMCdetallado="Obeso: Tipo III";
        Contenido='Tu IMC indica que: Tienes una Obesidad grado III. Tu exceso de Peso te pone en peligro para un problema cardiaco, diabetes, hipertension, enfermedad de vesicula y algunos canceres. Deberias perder peso cambiando de dieta y haciendo mas ejercicio.';
      }
      if($scope.form.sexo=='H'){
        pesoIdeal=($scope.form.altura-100)-(($scope.form.altura-150)/4);
      }else{
        pesoIdeal=($scope.form.altura-100)-(($scope.form.altura-150)/2);
      }

      //Calculo peso minimo
      pesoMaximo=(alturaCuadrado*(imcmax));
      pesoMaximo=Math.round(pesoMaximo*10)/10;   
        /*CALCULO PESO MINIMO*/   
      pesoMinimo=(alturaCuadrado*(imcmin));
      pesoMinimo=Math.round(pesoMinimo*10)/10;
      console.log(pesoMinimo);
      console.log(pesoMaximo);
      console.log(pesoIdeal);
      console.log(IMCdetallado);

        $state.go('menu.recomendacion', {}, {reload: true});
    }
  }
};


}])

.controller('HipertensionCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

  //hipertension_Controller($scope);
}])

.controller('seleccionarCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
}])
   
.controller('perfilCtrl', ['$scope', '$stateParams','$http','$ionicLoading','$timeout',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$http,$ionicLoading,$timeout) {

 //$scope.perfil = perfil;
$scope.$on('$ionicView.beforeEnter', function () {
  //perfil_Controller($scope,$http,$ionicLoading,$timeout);
  //$scope.mostrar();
  //alert(perfil+'  1234');
  $scope.perfil = perfil;
});
}])
   
.controller('recomendacionCtrl', ['$scope', '$stateParams','$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state) {
  $scope.$on('$ionicView.beforeEnter', function () {
  $scope.pesoIdeal= pesoIdeal;
  $scope.pesoMinimo=pesoMinimo;
  $scope.pesoMaximo=pesoMaximo;
  $scope.IMCdetallado=IMCdetallado;
  $scope.Contenido=Contenido;
  $scope.imc=imc;
})
}])
   
.controller('loginCtrl', ['$scope', '$stateParams','$state','$ionicLoading','$timeout','$ionicPopup','$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$state,$ionicLoading,$timeout,$ionicPopup,$http) {
  //login_Controller($scope,$state,$ionicLoading,$timeout,$ionicPopup,$http);
}])
 