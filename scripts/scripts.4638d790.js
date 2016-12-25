"use strict";angular.module("portfolioApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/about",{templateUrl:"views/about.html",controller:"MainCtrl",controllerAs:"about"}).when("/curriculum",{templateUrl:"views/curriculum.html",controller:"MainCtrl",controllerAs:"curriculum"}).when("/skills",{templateUrl:"views/skills.html",controller:"MainCtrl",controllerAs:"skills"}).when("/contact",{templateUrl:"views/contact.html",controller:"MainCtrl",controllerAs:"contact"}).otherwise({redirectTo:"/about"})}]),angular.module("portfolioApp").controller("MainCtrl",["$scope","$location",function(a,b){a.active=function(){}}]),angular.module("portfolioApp").directive("menuActive",["$location",function(a){return{restrict:"AE",link:function(b){b.$watch(function(){return a.path()},function(b,c){b&&$(function(){var b=a.path().replace("/","");$("#menu").find("li").each(function(){$(this).find("a").attr("href").replace("#","")==b?$(this).css("background-color","rgba(172, 131, 87, 0.30)"):$(this).css("background-color","")})})})}}}]),angular.module("portfolioApp").run(["$templateCache",function(a){a.put("views/about.html",'<div class="content-section-b"> <div class="container-fluid"> <div class="row"> <div class="col-lg-6 col-lg-offset-1 col-sm-push-5 col-sm-5"> <h2 class="section-heading"> About Me </h2> <hr class="section-heading-spacer"> <div class="clearfix"></div> <p class="lead">First things first, Han Shot First! (and Yoda can beat the Lord Sidious)</p> <br> <p class="lead">I\'m 21 y/o, currently living in Brazil. At the moment I\'m working with Freelance Projects and Open Source Codes.</p> <br> <p class="lead">I\'m a Front-End enthusiastic who loves everything about JavaScript. Always trying to learn something new, and also easier ways of doing things. </p> <br> </div> <div class="col-lg-3 col-sm-pull-6 col-sm-3"> <img class="img-responsive img-circle profile-picture" src="images/me2.6ada377b.jpg"> </div> </div> </div> <!-- /.container --> </div> <!-- /.content-section-b -->'),a.put("views/contact.html",'<div class="content-section-a"> <div class="container-fluid"> <div class="row"> <div class="col-lg-12"> <h2 class="section-heading"> Get in contact with me: </h2> <hr class="section-heading-spacer"> <div class="clearfix"></div> <p class="lead"> +55 62 98578-6476 </p> <br> <p class="lead"><a href="mailto:hffmatheus@gmail.com"> hffmatheus@gmail.com </a></p> <br> <p class="lead"><b><a href="https://www.linkedin.com/in/matheushf">LinkedIn</a></b></p> <br> </div> </div> </div> </div>'),a.put("views/curriculum.html",'<div class="content-section-a"> <div class="container-fluid"> <div class="container-fluid"> <div class="row"> <div class="col-lg-12"> <h2 class="section-heading">Curriculum</h2> <hr class="section-heading-spacer"> <div class="clearfix"></div> <p class="lead"> <!--Resume: <a> PDF</a>, <a> Doc</a>\n            <br><br>--> <!--Curriculum: --><a href="/portfolio/download/Curriculo_Matheus_Victor_Faria_Gontijo.pdf" target="_blank"> PDF </a>, <a href="/portfolio/download/Curriculo_Matheus_Victor_Faria_Gontijo.docx" download> Doc</a> </p> <br> <p><b><smal>Updated: 25/12/2016</smal></b></p> </div> </div> </div> </div></div>'),a.put("views/main.html",'<div class="jumbotron"> <h1>\'Allo, \'Allo!</h1> <p class="lead"> <img src="images/yeoman.png" alt="I\'m Yeoman"><br> Always a pleasure scaffolding your apps. </p> <p><a class="btn btn-lg btn-success" ng-href="#/">Splendid!<span class="glyphicon glyphicon-ok"></span></a></p> </div> <div class="row marketing"> <h4>HTML5 Boilerplate</h4> <p> HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites. </p> <h4>Angular</h4> <p> AngularJS is a toolset for building the framework most suited to your application development. </p> <h4>Karma</h4> <p>Spectacular Test Runner for JavaScript.</p> </div>'),a.put("views/skills.html",'<a name="services"></a> <div class="content-section-a"> <div class="container-fluid"> <div class="row"> <div class="col-lg-12"> <div class="clearfix"></div> <h2 class="section-heading"> Skills </h2> </div> </div> <div class="row"> <h2 class="text-center content-heading"> BackEnd </h2> <div class="col-lg-3"></div> <div class="col-lg-9"> <img ng-src="images/backend.0ff2ee0c.png" class="img-responsive"> </div> <div class="clearfix"></div> <h4 class="text-center skill-less-known"> Less Known (learning) </h4> <div class="col-lg-5 col-xs-4"></div> <div class="col-lg-2 col-xs-4 skill-less-known"> <img ng-src="images/rubyonrails.bf11ca88.png" class="img-responsive"> </div> <div class="col-lg-5 col-xs-4"></div> <div class="clearfix"></div> <hr class="section-content-spacer skills"> </div> <div class="row"> <h2 class="text-center content-heading"> FrontEnd </h2> <div class="col-lg-3"></div> <div class="col-lg-9"> <img ng-src="images/frontend.7a5c41e9.png" class="img-responsive"> </div> <div class="clearfix"></div> <h4 class="text-center skill-less-known"> Less Known (learning) </h4> <div class="col-lg-4 col-xs-2"></div> <div class="col-lg-2 col-xs-4 skill-less-known"> <img ng-src="images/react.6cbb89e9.png" class="img-responsive"> </div> <div class="col-lg-2 col-xs-4 skill-less-known"> <img ng-src="images/foundation.ff61f73b.png" class="img-responsive"> </div> <div class="col-lg-4 col-xs-2"></div> <div class="clearfix"></div> <hr class="section-content-spacer skills"> </div> <div class="row"> <h2 class="text-center content-heading"> DataBase </h2> <div class="col-lg-3"></div> <div class="col-lg-9"> <img ng-src="images/database.d3a094f9.png" class="img-responsive"> </div> <div class="clearfix"></div> <h4 class="text-center skill-less-known"> Less Known (learning) </h4> <div class="col-lg-5 col-xs-4"></div> <div class="col-lg-2 col-xs-4 skill-less-known"> <img ng-src="images/mongodb.97c81a54.png" class="img-responsive"> </div> <div class="col-lg-5 col-xs-4"></div> <div class="clearfix"></div> <hr class="section-content-spacer skills"> </div> <div class="row"> <h2 class="text-center content-heading"> Misc </h2> <div class="col-lg-3"></div> <div class="col-lg-9"> <img ng-src="images/misc.0bcbdbb5.png" class="img-responsive"> </div> <div class="clearfix"></div> <h4 class="text-center skill-less-known"> Less Known (learning) </h4> <div class="col-lg-4 col-xs-2"></div> <div class="col-lg-2 col-xs-4 skill-less-known"> <img ng-src="images/chaijs-mocha.c680936e.png" class="img-responsive"> </div> <div class="col-lg-2 col-xs-4 skill-less-known"> <img ng-src="images/karma.4ca4ab8d.png" class="img-responsive"> </div> <div class="col-lg-4 col-xs-2"></div> <div class="clearfix"></div> </div> </div> <!-- /.container --> </div> <!-- /.content-section-a -->')}]);
