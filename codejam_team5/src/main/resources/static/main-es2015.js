(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about-us/about-us.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about-us/about-us.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>about-us works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<div class=\"container\">\r\n\r\n                <!-- <nav mat-tab-nav-bar>\r\n                                <a mat-tab-link\r\n                                   *ngFor=\"let link of navLinks\"\r\n                                   [routerLink]=\"link.path\"\r\n                                   routerLinkActive >\r\n                                  {{link.label}}\r\n                                </a>\r\n                 </nav> -->\r\n                 <br/>\r\n<br/>\r\n\r\n        <!-- <a class=\"nav-link\" [routerLink]=\"['/campaignlist']\" routerLinkActive=\"active\">List of Active Campaigns</a>\r\n        &nbsp;&nbsp;\r\n        <a class=\"nav-link\" [routerLink]=\"['/campaignlist']\" routerLinkActive=\"active\">List of Funds</a> -->\r\n<br/>\r\n<br/>\r\n\r\n        <router-outlet></router-outlet>\r\n\r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/footer/footer.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/footer/footer.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer\">\r\n        <section class=\"footer-row\">\r\n            <nav>\r\n                <ul class=\"nav nav-inline\">\r\n                    <li><a href=\"https://www.principal.com/terms-of-use\">Terms of Use</a></li>\r\n                    <li><a href=\"https://www.principal.com/products-services-disclosures\">Disclosures</a></li>\r\n                    <li><a href=\"https://www.principal.com/privacy-policies\">Privacy</a></li>\r\n                    <li><a href=\"https://www.principal.com/security-policies\">Security</a></li>\r\n                    <li><a href=\"https://www.principal.com/about-us/our-company/policies/report-fraud-or-unethical-conduct\">Report Fraud</a></li>\r\n                    <li><a href=\"#placeholder\">Site Map</a></li>\r\n                </ul>\r\n            </nav>\r\n            <div class=\"footer-legal\">\r\n                <p>&copy; 2016, Principal Financial Services, Inc.</p>\r\n                <p>Securities offered through Principal Securities, Inc., <a href=\"http://www.sipc.org\">member SIPC</a></p>\r\n            </div>\r\n        </section>\r\n    </footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/header/header.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/header/header.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-default navbar-fixed-top\">\r\n  <div class=\"container-fluid\">\r\n    <!-- Brand and toggle get grouped for better mobile display -->\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\"\r\n        data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a class=\"navbar-principal-brand\" [routerLink]=\"['/welcome']\"></a>\r\n    </div>\r\n\r\n    <!-- Collect the nav links, forms, and other content for toggling -->\r\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li *ngIf=\"isLoggedIn\" ><a [routerLink]=\"['/home']\">Home<span class=\"sr-only\">(current)</span></a></li>\r\n\r\n        <li ><a [routerLink]=\"['/aboutUs']\">About Us<span class=\"sr-only\">(current)</span></a></li>\r\n        \r\n      </ul>\r\n  \r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n       <li class=\"nav-item\" *ngIf=\"getUserRole()==2\">\r\n              <a class=\"nav-link\" [routerLink]=\"['/fundRaiserHome']\">Your Start-ups<span class=\"sr-only\">(current)</span></a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"isLoggedIn\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/home']\">Welcome {{ userName }}<span class=\"sr-only\">(current)</span></a>\r\n        </li>\r\n        <li *ngIf=\"getUserRole()==1\" class=\"nav-item\">\r\n            <a  class=\"nav-link\" [routerLink]=\"['/cart']\"> <i class=\"fa fa-shopping-cart\"></i>Orders<span class=\"badge\">{{cartSize}}</span><span class=\"sr-only\">(current)</span></a>\r\n          </li>\r\n        <li class=\"nav-item\" *ngIf=\"!isLoggedIn\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/login']\">Log In</a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"!isLoggedIn\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/signUp']\">Sign up</a>\r\n        </li>\r\n\r\n        <li class=\"nav-item\" *ngIf=\"isLoggedIn\">\r\n          <a class=\"nav-link\" (click)=\"logOut()\">Log Out</a>\r\n        </li>\r\n      </ul>\r\n    </div><!-- /.navbar-collapse -->\r\n  </div><!-- /.container-fluid -->\r\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main-page/main-page.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main-page/main-page.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"hero\">\r\n    <div class=\"hero-img\" style=\"background-image: url('http://ux.pilot.principal.com/images/hero-left.jpg');\"></div>\r\n    <div class=\"hero-copy hero-copy-right\">\r\n        <h1 class=\"hero-title\">You can also be a part of Start-up Journey</h1>\r\n        <p>Our global reach, investment expertise, and robust assessment help you identify and invest in start-up.</p>\r\n        <a href=\"#\" class=\"btn btn-primary\"><span class=\"cta-text\">Why Principal</span></a>\r\n\r\n    </div>\r\n</div>\r\n\r\n<div class=\"container full_width_with_container_three\">\r\n    <div class=\"row \">\r\n        <div class=\"col-xs-12\">\r\n            <div class=\"row row-md-flex bg-white ds-tout-container\">\r\n                <div class=\"col-xs-12 col-md-4 tout\">\r\n                    <a href=\"https://www.principalfunds.com/individual-investor/why-principal-funds/about-us\">\r\n                        <div class=\"tout-icon\">\r\n                            <img src=\"https://www.principalfunds.com/sites/default/files/styles/micro_content/public/images/cta/icon-briefcase-purple.png?itok=N5eazP7V\" alt=\"tout-icon\" class=\"img-responsive\">\r\n                        </div>\r\n                        <div class=\"tout-content\">\r\n                            <div class=\"tout-header\">\r\n                                <h2>Expertise and experience</h2>\r\n                            </div>\r\n\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n\r\n                <div class=\"col-xs-12 col-md-4 tout\">\r\n                    <a href=\"https://www.principalfunds.com/individual-investor/why-principal-funds/how-we-work/multi-boutique-approach\">\r\n                        <div class=\"tout-icon\">\r\n                            <img src=\"https://www.principalfunds.com/sites/default/files/styles/micro_content/public/images/cta/icon-wrench-purple_2.png?itok=PEs5eqml\" alt=\"tout-icon\" class=\"img-responsive\">\r\n                        </div>\r\n                        <div class=\"tout-content\">\r\n                            <div class=\"tout-header\">\r\n                                <h2>Robust Assessment</h2>\r\n                            </div>\r\n                            \r\n                        </div>\r\n                    </a>\r\n                </div>\r\n\r\n                <div class=\"col-xs-12 col-md-4 tout\">\r\n                    <a href=\"https://www.principalfunds.com/individual-investor/why-principal-funds/about-us/asset-allocation\">\r\n                        <div class=\"tout-icon\">\r\n                            <img src=\"https://www.principalfunds.com/sites/default/files/styles/micro_content/public/images/cta/icon-consolidate-purple.png?itok=hnnmwa1J\" alt=\"tout-icon\" class=\"img-responsive\">\r\n                        </div>\r\n                        <div class=\"tout-content\">\r\n                            <div class=\"tout-header\">\r\n                                <h2>Global Reach</h2>\r\n                            </div>\r\n                          \r\n                        </div>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n<app-campaign-list></app-campaign-list>\r\n<br><br>\r\n\r\n<app-fund-list></app-fund-list>\r\n<br><br>\r\n<app-buyback-list></app-buyback-list>\r\n<br>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/project/components/buyback-compact/buyback-compact.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/project/components/buyback-compact/buyback-compact.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"homepageLayout\">\r\n    <div class=\"campaignCarousel\">\r\n        <div class=\"campaignCarousel-carousel\" style=\"margin-left: 0px;\">\r\n                <div>\r\n                        <div class=\"campaignCarousel-carouselCard\">\r\n                            <div class=\"baseDiscoverableCard\">\r\n                                <a [routerLink]=\"['/buybacklist' , buybackDetails.mainCampaign.campaignDetail.id]\" routerLinkActive=\"active\">\r\n\r\n                                    <div class=\"baseDiscoverableCard-image\">\r\n                                        <img height=300px src=\"{{imageUrl}}\"  \r\n                                            style=\"width:100%\">\r\n                                    </div>\r\n                                     <div class=\"baseDiscoverableCard-content\">\r\n                                            <div>\r\n                                                    <div class=\"baseDiscoverableCard-header\">\r\n                                                        <div class=\"projectTypeHeader\">\r\n                                                            <div class=\"projectTypeHeader-label projectTypeHeader-label--campaign\">\r\n                                                                Open\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"baseDiscoverableCard-contentTop\">\r\n                                                        <div class=\"baseDiscoverableCard-title\">\r\n                                                                {{buybackDetails.mainCampaign.campaignDetail.name}}\r\n                                                        </div>   \r\n                                                    </div>\r\n                                                    <div>\r\n                                                        <div class=\"baseDiscoverableCard-body\">\r\n                                                           {{buybackDetails.mainCampaign.campaignDetail.short_pitch}}\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div>\r\n                                                        <small class=\"baseDiscoverableCard-categoryLink\">Fintech</small>\r\n                                                        <div>\r\n                                                            <div>\r\n                                                                <div class=\"fundingDiscoverableCard-raisedContainer\">\r\n                                                                    <div>\r\n                                                                        <span class=\"fundingDiscoverableCard-unitsRaisedNumber\">\r\n                                                                           {{amountAlreadyInvested}}\r\n                                                                        </span>\r\n                                                                        <span class=\"fundingDiscoverableCard-unitsRaisedText\">\r\n                                                                            USD Invested\r\n                                                                        </span>\r\n                                                                    </div>\r\n                                                                    <div>\r\n                                                                        <span class=\"fundingDiscoverableCard-unitsRaisedNumber\">\r\n                                                                           {{amountReturn | number : '1.2-2'}}\r\n                                                                        </span>\r\n                                                                        <span class=\"fundingDiscoverableCard-unitsRaisedText\">\r\n                                                                            USD Return\r\n                                                                        </span>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"fundingDiscoverableCard-footerBottom\">\r\n                                                                <div>\r\n                                                                   \r\n                                                                    \r\n                                                                </div>\r\n                                                        </div>\r\n                                                    </div>            \r\n                                            </div>        \r\n                                    </div>\r\n                                </a>\r\n                            </div>\r\n                        </div>            \r\n                </div>\r\n        </div>\r\n    </div>\r\n</div>    ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/project/components/buyback-detail/buyback-detail.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/project/components/buyback-detail/buyback-detail.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<head>\r\n  <meta charset=\"utf-8\">\r\n  <meta http-equiv=\"x-ua-compatible\" content=\"ie=edge\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n  <meta name=\"description\" content=\"\">\r\n  <meta name=\"author\" content=\"\">\r\n  <title></title>\r\n  <base href=\"/\">\r\n  <!-- Horizon CSS -->\r\n  <link href=\"https://www.principalcdn.com/css/horizon/v2/horizon.min.css\" rel=\"stylesheet\">\r\n  <!-- Application specific CSS -->\r\n\r\n  <!-- Optional favicon and apple/android homescreen icons -->\r\n  <meta name=\"mobile-web-app-capable\" content=\"yes\">\r\n  <link rel=\"shortcut icon\" type=\"image/x-icon\" href=\"https://www.principalcdn.com/css/horizon/v2/favicon.ico\">\r\n  <link rel=\"shortcut icon\" type=\"image/x-icon\" href=\"https://www.principalcdn.com/css/horizon/v2/apple-touch-icon.png\">\r\n  <link href=\"https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap\" rel=\"stylesheet\">\r\n  <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\r\n</head>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-8\">\r\n\r\n\r\n      <br /><br />\r\n      <div class=\"embed-responsive embed-responsive-16by9\">\r\n        <!-- <iframe class=\"embed-responsive-item\" src=\"...\"></iframe> -->\r\n        <iframe width=\"680px\" height=\"400px\" class=\"embed-responsive-item\" [src]=trustedUrl></iframe>\r\n      </div>\r\n\r\n\r\n      <br /><br />\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-11\">\r\n          <mat-tab-group>\r\n            <mat-tab label=\"Description\">\r\n              <div class=\"callout bg-gray-lightest\">\r\n                <h3>{{buybackDetails.mainCampaign.campaignDetail.short_pitch}}</h3>\r\n                <p>\r\n                  {{buybackDetails.mainCampaign.campaignDetail.description}}\r\n                </p>\r\n              </div>\r\n            </mat-tab>\r\n            <mat-tab label=\"Financials\">\r\n              <li *ngFor=\"let report of buybackDetails.mainCampaign?.campaignFinancialReports\">\r\n                <p>Year : {{report.year}}</p>\r\n                <p>Amount : {{report.value}}</p>\r\n                <p>Report Valuation : {{report.report}}</p>\r\n              </li>\r\n            </mat-tab>\r\n\r\n\r\n            <mat-tab label=\"Team\">\r\n              <li *ngFor=\"let person of buybackDetails.mainCampaign?.campaignTeams\">\r\n                <p>Person : {{person.name}}</p>\r\n                <p>Profile : {{person.profile}}</p>\r\n                <p>Contact : {{person.email_id}}</p>\r\n                <p>--------------------------</p>\r\n              </li>\r\n\r\n            </mat-tab>\r\n            <mat-tab label=\"FAQs\">\r\n              <li *ngFor=\"let qa of buybackDetails.mainCampaign?.campaignFandQs\">\r\n                <p>Question : {{qa.question}}</p>\r\n                <p>Answer : {{qa.answer}}</p>\r\n                <p>--------------------------</p>\r\n              </li>\r\n\r\n            </mat-tab>\r\n          </mat-tab-group>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"col-lg-4\">\r\n\r\n      <div class=\"campaignLayout-topContent-right\">\r\n        <div>\r\n          <br /> <br />\r\n          <div class=\"fundingColor basicsSection-statusLabel t-label--sm\">\r\n            Startup\r\n          </div>\r\n          <div class=\"basicsSection-title widescreen t-h4--sansSerif\">\r\n            {{buybackDetails.mainCampaign.campaignDetail.name}}\r\n          </div>\r\n          <div class=\"basicsSection-tagline widescreen t-body--sansSerif--lg\">\r\n            {{buybackDetails.mainCampaign.campaignDetail.short_pitch}}\r\n          </div>\r\n\r\n          <div class=\"basicCampaignOwner\">\r\n\r\n            <div class=\"columns is-gapless\">\r\n              <div>\r\n                <span><i class=\"fa fa-bar-chart fa-3x\" style=\"color:rgb(209, 203, 203)\"></i></span>\r\n              </div>\r\n              <div class=\"column\">\r\n                <div class=\"basicsCampaignOwner-details\">\r\n                  <div>\r\n                    <span class=\"campainCategory\"\r\n                      style=\"color:green\">{{buybackDetails.mainCampaign.campaignDetail.category}}</span>\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n\r\n          </div>\r\n\r\n\r\n          <div class=\"fund-bar\">\r\n\r\n            <div class=fundingDiscoverableCard-footerBottom>\r\n              <div>\r\n                <div class=\"fundingDiscoverableCard-raisedContainer\">\r\n                  <div>\r\n                    <span *ngIf=\"amountAlreadyInvested>0\" class=\"fundingDiscoverableCard-unitsRaisedNumber\">\r\n                      You Have Invested : $ {{amountAlreadyInvested}}\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"fund-bar\">\r\n\r\n            <div class=fundingDiscoverableCard-footerBottom>\r\n              <div>\r\n                <div class=\"fundingDiscoverableCard-raisedContainer\">\r\n                  <div>\r\n                    <span *ngIf=\"amountAlreadyInvested>0\" class=\"fundingDiscoverableCard-unitsRaisedNumber\">\r\n                      Return Percent :{{buybackDetails.buyback_return_percentage}} %\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"fund-bar\">\r\n\r\n            <div class=fundingDiscoverableCard-footerBottom>\r\n              <div>\r\n                <div class=\"fundingDiscoverableCard-raisedContainer\">\r\n                  <div>\r\n                    <span *ngIf=\"amountAlreadyInvested>0\" class=\"fundingDiscoverableCard-unitsRaisedNumber\">\r\n                      Current Investment Value : {{currentInvestmentValue}} $\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n\r\n          <div class=\"form-inline\" style=\"margin-top:30px\">\r\n            <div>\r\n              <mat-card-actions>\r\n                 &nbsp;&nbsp;\r\n                <input class=\"showOnlyLine\" style=\"text-align: right;\" size=\"8\" [(ngModel)]=\"percentage\" /> % &nbsp;&nbsp;\r\n\r\n                <button type=\"button\" class=\"btn btn-primary\" mat-button (click)=\"checkOut()\">Sell</button>\r\n                &nbsp;&nbsp;\r\n\r\n              </mat-card-actions>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/project/components/buyback-list/buyback-list.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/project/components/buyback-list/buyback-list.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"isInvestorLoggedIn\" class=\"container\">\r\n  \r\n    <div class=\"panel panel-primary\">\r\n        <div class=\"panel-heading\">\r\n          <h2 class=\"panel-title\"> BuyBacks</h2>\r\n        </div>\r\n        <div class=\"panel-body\">\r\n            <div *ngFor=\"let singleBuyback of buybackList; let i = index\">\r\n                <div *ngIf=\"i % 3== 0\" class=\"row\">\r\n                  <div class=\"col-lg-4\" *ngIf=\"buybackList.length  > i+0\">\r\n                    <app-buyback-compact [buybackDetails]=\"buybackList[0]\"></app-buyback-compact>\r\n                  </div>\r\n                  <div class=\"col-lg-4\" *ngIf=\"buybackList.length  > i+1\">\r\n                    <app-buyback-compact [buybackDetails]=\"buybackList[1]\"></app-buyback-compact>\r\n                  </div>\r\n                  <div class=\"col-lg-4\" *ngIf=\"buybackList.length  > i+2\">\r\n                    <app-buyback-compact [buybackDetails]=\"buybackList[2]\"></app-buyback-compact>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n        </div>\r\n      </div>\r\n</div>\r\n\r\n<br><br>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/project/components/campaign-compact/campaign-compact.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/project/components/campaign-compact/campaign-compact.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<div class=\"homepageLayout\">\r\n        <div class=\"campaignCarousel\">\r\n            <div class=\"campaignCarousel-carousel\" style=\"margin-left: 0px;\">\r\n                    <div>\r\n                        \r\n                            <div class=\"campaignCarousel-carouselCard\">\r\n                                <div class=\"baseDiscoverableCard\">\r\n                                    <a [routerLink]=\"['/campaignlist' , mainCampaign.campaignDetail.id]\" routerLinkActive=\"active\">\r\n\r\n                                        <div class=\"baseDiscoverableCard-image\">\r\n                                            <img height=250px src=\"{{imageUrl}}\"  \r\n                                                style=\"width:100%\">\r\n                                        </div>\r\n                                         <div class=\"baseDiscoverableCard-content\">\r\n                                                <div>\r\n                                                        <div class=\"baseDiscoverableCard-header\">\r\n                                                            <div class=\"projectTypeHeader\">\r\n                                                                <div class=\"projectTypeHeader-label projectTypeHeader-label--campaign\">\r\n                                                                    Open\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"baseDiscoverableCard-contentTop\">\r\n                                                            <div class=\"baseDiscoverableCard-title\">\r\n                                                                    {{mainCampaign.campaignDetail.name}}\r\n                                                            </div>   \r\n                                                        </div>\r\n                                                        <div>\r\n                                                            <div class=\"baseDiscoverableCard-body\">\r\n                                                               {{mainCampaign.campaignDetail.short_pitch}}\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div>\r\n                                                            <small class=\"baseDiscoverableCard-categoryLink\">Fintech</small>\r\n                                                            <span style=\"float:right; color:green\" *ngIf=\"amountAlreadyInvested>0\">Invested</span>\r\n                                                            <div>\r\n                                                                <div>\r\n                                                                    <div class=\"fundingDiscoverableCard-raisedContainer\">\r\n                                                                        <div>\r\n                                                                            <span class=\"fundingDiscoverableCard-unitsRaisedNumber\">\r\n                                                                                $ {{mainCampaign.campaignDetail.capitalRaisedIndividually + mainCampaign.campaignDetail.capitalRaisedInFunds}}\r\n                                                                            </span>\r\n                                                                            <span class=\"fundingDiscoverableCard-unitsRaisedText\">\r\n                                                                                USD raised\r\n                                                                            </span>\r\n                                                                        </div>\r\n                                                                        <div class=\"fundingDiscoverableCard-unitsRaisedNumber\">\r\n                                                                                {{100 * (mainCampaign.campaignDetail.capitalRaisedIndividually + mainCampaign.campaignDetail.capitalRaisedInFunds)/mainCampaign.campaignDetail.fund_required | number : '1.2-2'}}%\r\n                                                                        </div>\r\n                                                                    </div>\r\n                                                                    <div class=\"campaignFundingBar campaignFundingBar--compact\">\r\n                                                                            <div class=\"campaignFundingBar-progress campaignFundingBar-progress--full campaignFundingBar-progress--progress\"  [style.width.%]=\"100 * (mainCampaign.campaignDetail.capitalRaisedIndividually + mainCampaign.campaignDetail.capitalRaisedInFunds)/mainCampaign.campaignDetail.fund_required>100?100:100 * (mainCampaign.campaignDetail.capitalRaisedIndividually + mainCampaign.campaignDetail.capitalRaisedInFunds)/mainCampaign.campaignDetail.fund_required\">                                                        \r\n                                                                            </div>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <div class=\"fundingDiscoverableCard-footerBottom\">\r\n                                                                    <div>\r\n                                                                        <i class=\"fa fa-clock-o\"></i>\r\n                                                                        <span class=\"fundingDiscoverableCard-timeLeft\">\r\n                                                                                {{daysLeft}} days left\r\n                                                                        </span>\r\n                                                                        \r\n                                                                    </div>\r\n                                                            </div>\r\n                                                        </div>            \r\n                                                </div>        \r\n                                        </div>\r\n                                    </a>\r\n                                </div>\r\n                            </div>            \r\n                    </div>\r\n            </div>\r\n        </div>\r\n</div>    ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/project/components/campaign-detail/campaign-detail.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/project/components/campaign-detail/campaign-detail.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<head>\r\n  <meta charset=\"utf-8\">\r\n  <meta http-equiv=\"x-ua-compatible\" content=\"ie=edge\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n  <meta name=\"description\" content=\"\">\r\n  <meta name=\"author\" content=\"\">\r\n  <title></title>\r\n  <base href=\"/\">\r\n  <!-- Horizon CSS -->\r\n  <link href=\"https://www.principalcdn.com/css/horizon/v2/horizon.min.css\" rel=\"stylesheet\">\r\n  <!-- Application specific CSS -->\r\n\r\n  <!-- Optional favicon and apple/android homescreen icons -->\r\n  <meta name=\"mobile-web-app-capable\" content=\"yes\">\r\n  <link rel=\"shortcut icon\" type=\"image/x-icon\" href=\"https://www.principalcdn.com/css/horizon/v2/favicon.ico\">\r\n  <link rel=\"shortcut icon\" type=\"image/x-icon\" href=\"https://www.principalcdn.com/css/horizon/v2/apple-touch-icon.png\">\r\n  <link href=\"https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap\" rel=\"stylesheet\">\r\n  <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\r\n</head>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-8\">\r\n\r\n      <!-- <h2>{{mainCampaignDetail.campaignDetail.name}}</h2> -->\r\n      <br /><br />\r\n      <!-- <iframe width=\"680\" height=\"400\" [src]=trustedUrl frameborder=\"0\" allowfullscreen></iframe> -->\r\n      <div class=\"embed-responsive embed-responsive-16by9\">\r\n        <!-- <iframe class=\"embed-responsive-item\" src=\"...\"></iframe> -->\r\n        <iframe class=\"embed-responsive-item\" [src]=trustedUrl></iframe>\r\n      </div>\r\n\r\n      <br /><br />\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-11\">\r\n          <mat-tab-group>\r\n            <mat-tab label=\"Story\">\r\n              <div class=\"callout bg-gray-lightest\">\r\n                <div>\r\n                  <h3>{{mainCampaignDetail.campaignDetail.short_pitch}}</h3>\r\n                  <p>\r\n                    {{mainCampaignDetail.campaignDetail.description}}\r\n                  </p>\r\n                </div>\r\n                <div style=\"margin-top:20px; margin-bottom:20px\">\r\n                  <h4 class=\"campainCategory\" style=\"color: #0091da;\">Team</h4>\r\n                </div>\r\n                <div style=\"display:flex\">\r\n\r\n\r\n                  <div class=\"employee_v5\" *ngFor=\"let person of mainCampaignDetail.campaignTeams; let i=index\"\r\n                    style=\"flex-grow: 1\">\r\n                    <span class=\"teamMemberName\"> {{person.name}} </span>\r\n                    <div class=\"teamMemberRole\">{{person.profile}}</div>\r\n                    <div class=\"networks\">\r\n                      <a href={{person.email_id}}><i class=\"fa fa-linkedin\" style=\"color: #0091da;\"></i></a>\r\n                    </div>\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n            </mat-tab>\r\n            <mat-tab label=\"Financials\">\r\n              <!-- <div class=\"callout bg-gray-lightest\"> -->\r\n              <div class=\"cpanel panel-default\">\r\n\r\n                <img src=\"https://codejamimage.s3.ap-south-1.amazonaws.com/financials.PNG\" alt=\"tout-icon\"\r\n                  class=\"img-responsive\">\r\n\r\n                <!-- <div *ngFor=\"let report of mainCampaignDetail.campaignFinancialReports\">\r\n                 <p>Year : {{report.year}}</p>\r\n                <p>Amount : {{report.value}}</p>\r\n                <p>Report Valuation : {{report.report}}</p> \r\n                <h4 *ngIf=\"report.report == 'Revenue'\"> {{report.year}} <br></h4>\r\n                <p>{{report.report}} : {{report.value}}</p>\r\n                </div> -->\r\n              </div>\r\n            </mat-tab>\r\n\r\n\r\n            <!-- <mat-tab label=\"Team\">\r\n              <div class=\"employee_v5\" *ngFor=\"let person of mainCampaignDetail.campaignTeams;\">\r\n                <span class=\"teamMemberName\"> {{person.name}} </span>\r\n                <div class=\"teamMemberRole\">{{person.profile}}</div>\r\n                <div class=\"networks\">\r\n                    <a href={{person.email_id}}><i class=\"fa fa-envelope\" style=\"color: gray\"></i></a>\r\n                </div>\r\n              </div>\r\n            </mat-tab> -->\r\n            <mat-tab label=\"FAQs\">\r\n              <div class=\"routerContentSection-content callout bg-gray-lightest\">\r\n\r\n                <div class=\"faqSection-container\">\r\n                  <h5 class=\"campainCategory\" style=\"color: #0091da;\">Frequently Asked Questions</h5>\r\n                  <div class=\"campaignFaq-container\" *ngFor=\"let singleqa of mainCampaignDetail.campaignFandQs;\">\r\n                    <div class=\"campaignFaq-question t-weight--medium t-body--sansSerif--lg\">\r\n                      {{singleqa.question}}\r\n                    </div>\r\n                    <div class=\"campaignFaq-answer t-body--sansSerif--lg\">\r\n                      {{singleqa.answer}}\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </mat-tab>\r\n            <mat-tab label=\"Principal's Assessment\">\r\n              <div class=\"routerContentSection-content callout bg-gray-lightest\">\r\n\r\n                <div class=\"faqSection-container\">\r\n                  <h5 class=\"campainCategory\" style=\"color: #0091da;\">Assessed Parameters</h5>\r\n                  <div class=\"campaignFaq-container\">\r\n                    <div class=\"campaignFaq-question t-body--sansSerif--lg\">\r\n                      <ul>\r\n                        <li> Founders Value Systems</li>\r\n                        <li> Founders background</li>\r\n                        <li> Their passion</li>\r\n                        <li> Startups’ team</li>\r\n                        <li> Founders motivation and energy level</li>\r\n                        <li> Credibility of the founders and core team (Educational and Professional background)</li>\r\n                        <li> Uniqueness of solution</li>\r\n                        <li> Innovative (Patent would also be an indicator)</li>\r\n                        <li> Approach</li>\r\n                        <li> Technology differentiator</li>\r\n                        <li> Business differentiator</li>\r\n                        <li> USP</li>\r\n                        <li> Startup Business model</li>\r\n                        <li> Stability / Sustainability of startups</li>\r\n                        <li> Revenue stream and cost benefits</li>\r\n                        <li> Relevance to business</li>\r\n                        <li> Principal business strategy</li>\r\n                        <li> Fintech -> Theme alignment (Explore partnership opportunities with existing business)</li>\r\n                        <li> Existing customer base</li>\r\n                        <!-- <li>      Engagement with other corporates and investors (Yes Bank startup engagement which Deutsche bank acquired -> such possibilities to be kept in mind)</li> -->\r\n                        <li> Funding status</li>\r\n                        <li> Current valuation</li>\r\n                      </ul>\r\n                    </div>\r\n                    <i class=\"fa fa-file-pdf-o\" style=\"font-size:30px;color:red;\" aria-hidden=\"true\"></i>\r\n                    <span>Complete Assessment Report.pdf</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </mat-tab>\r\n          </mat-tab-group>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-4\">\r\n      <div class=\"campaignLayout-topContent-right\">\r\n        <div>\r\n          <br /> <br />\r\n          <div class=\"fundingColor basicsSection-statusLabel t-label--sm\">\r\n            Startup\r\n          </div>\r\n          <div class=\"basicsSection-title widescreen t-h4--sansSerif\">\r\n            {{mainCampaignDetail.campaignDetail.name}}\r\n          </div>\r\n          <div class=\"basicsSection-tagline widescreen t-body--sansSerif--lg\">\r\n            {{mainCampaignDetail.campaignDetail.short_pitch}}\r\n          </div>\r\n\r\n          <div class=\"basicCampaignOwner\">\r\n\r\n            <div class=\"columns is-gapless\">\r\n              <div>\r\n                <span><i class=\"fa fa-bar-chart fa-3x\" style=\"color:rgb(209, 203, 203)\"></i></span>\r\n              </div>\r\n              <div class=\"column\">\r\n                <div class=\"basicsCampaignOwner-details\">\r\n                  <div>\r\n                    <span class=\"campainCategory\"\r\n                      style=\"color:green\">{{mainCampaignDetail.campaignDetail.category}}</span>\r\n                  </div>\r\n                  <div class=\"basicsCampaignOwner-details-trust t-body--sansSerif\">\r\n                    <div class=\"basicsCampaignOwner-details-city\">\r\n                      <span>{{mainCampaignDetail.campaignDetail.investors}} Investors | </span>\r\n                      <span>{{mainCampaignDetail.campaignDetail.number_of_fund}} Funds</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"fund-bar\">\r\n            <div>\r\n              <div>\r\n                <div class=\"fundingDiscoverableCard-raisedContainer\">\r\n                  <div>\r\n                    <span class=\"fundingDiscoverableCard-unitsRaisedNumber\">\r\n                      $\r\n                      {{mainCampaignDetail.campaignDetail.capitalRaisedIndividually + mainCampaignDetail.campaignDetail.capitalRaisedInFunds}}\r\n                    </span>\r\n                    <span class=\"fundingDiscoverableCard-unitsRaisedText\">\r\n                      USD raised\r\n                    </span>\r\n                  </div>\r\n                  <div class=\"fundingDiscoverableCard-unitsRaisedNumber\">\r\n                    {{percentageInvested}}%\r\n                  </div>\r\n                </div>\r\n                <div class=\"campaignFundingBar campaignFundingBar--compact\">\r\n                  <div\r\n                    class=\"campaignFundingBar-progress campaignFundingBar-progress--full campaignFundingBar-progress--progress\"\r\n                    [style.width.%]=\"100 * (mainCampaignDetail.campaignDetail.capitalRaisedIndividually + mainCampaignDetail.campaignDetail.capitalRaisedInFunds)/mainCampaignDetail.campaignDetail.fund_required\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=fundingDiscoverableCard-footerBottom>\r\n              <div>\r\n                <div class=\"fundingDiscoverableCard-raisedContainer\">\r\n                  <div>\r\n                    <span *ngIf=\"amountAlreadyInvested>0\" class=\"fundingDiscoverableCard-unitsRaisedNumber\">\r\n                      You have invested : $ {{amountAlreadyInvested}}\r\n                    </span>\r\n                  </div>\r\n                  <div class=\"fundingDiscoverableCard-unitsRaisedNumber\">\r\n                    <i class=\"fa fa-clock-o\"></i>\r\n                    <span class=\"fundingDiscoverableCard-timeLeft\">\r\n                      {{daysLeft}} days left\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"form-inline\" style=\"margin-top:30px\">\r\n            <div *ngIf=\"getUserRole()==1\">\r\n              <mat-card-actions>\r\n                <i class=\"fa fa-dollar\"></i> &nbsp;&nbsp;\r\n                <input class=\"showOnlyLine\" style=\"text-align: right;\" size=\"8\" [(ngModel)]=\"amount\" /> &nbsp;&nbsp;\r\n                <button *ngIf=\"amountAlreadyInvested==0\" type=\"button\" class=\"btn btn-primary\" mat-button\r\n                  (click)=\"addToCart()\">Invest</button>\r\n                <button *ngIf=\"amountAlreadyInvested>0\" type=\"button\" class=\"btn btn-primary\" mat-button\r\n                  (click)=\"addToCart()\">Edit Investment</button>\r\n                &nbsp;&nbsp;\r\n                <!-- &nbsp;&nbsp;<input  class=\"form-control\" size=\"15\" [(ngModel)]=\"amount\" /> \r\n                    <i class=\"fa fa-dollar\"></i> -->\r\n              </mat-card-actions>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-inline\">\r\n            <div *ngIf=\"getUserRole()==2\">\r\n              <mat-card-actions>\r\n                <button type=\"button\" class=\"btn btn-primary\" mat-button>Edit Campaign</button>\r\n              </mat-card-actions>\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"!isLoggedIn()\">\r\n            <mat-card-actions>\r\n              <button type=\"button\" class=\"btn btn-primary\" mat-button (click)=\"addToCart()\">Invest</button>\r\n            </mat-card-actions>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/project/components/campaign-list/campaign-list.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/project/components/campaign-list/campaign-list.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div class=\"panel panel-primary\">\r\n        <div class=\"panel-heading\">\r\n          <h2 class=\"panel-title\">Startups</h2>\r\n        </div>\r\n        <div class=\"panel-body\">\r\n          <div *ngFor=\"let mainCampaignDetail of mainCampaignDetails; let i = index\">\r\n            <div *ngIf=\"i % 3== 0\" class=\"row\">\r\n              <div class=\"col-lg-4\" *ngIf=\"listSize  > i+0\">\r\n                <app-campaign-compact [mainCampaign]=\"mainCampaignDetails[i]\"></app-campaign-compact>\r\n              </div>\r\n              <div class=\"col-lg-4\" *ngIf=\"listSize  > i+1\">\r\n                <app-campaign-compact [mainCampaign]=\"mainCampaignDetails[i+1]\"></app-campaign-compact>\r\n              </div>\r\n              <div class=\"col-lg-4\" *ngIf=\"listSize  > i+2\">\r\n                <app-campaign-compact [mainCampaign]=\"mainCampaignDetails[i+2]\"></app-campaign-compact>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/project/components/fund-compact/fund-compact.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/project/components/fund-compact/fund-compact.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"homepageLayout\">\r\n    <div class=\"campaignCarousel\">\r\n        <div class=\"campaignCarousel-carousel\" style=\"margin-left: 0px;\">\r\n                <div>\r\n                        <div class=\"campaignCarousel-carouselCard\">\r\n                            <div class=\"baseDiscoverableCard\">\r\n                                <a [routerLink]=\"['/fundlist' , fundDetail.id]\" routerLinkActive=\"active\">\r\n\r\n                                    <div class=\"baseDiscoverableCard-image\">\r\n                                        <img height=300px src=\"{{tempurl}}\"\r\n                                            style=\"width:100%\">\r\n                                    </div>\r\n                                     <div class=\"baseDiscoverableCard-content\">\r\n                                            <div>\r\n                                                    <div class=\"baseDiscoverableCard-header\">\r\n                                                        <div class=\"projectTypeHeader\">\r\n                                                            <div class=\"projectTypeHeader-label projectTypeHeader-label--campaign\">\r\n                                                                Open\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"baseDiscoverableCard-contentTop\">\r\n                                                        <div class=\"baseDiscoverableCard-title\">\r\n                                                                {{fundDetail.fund_name}}\r\n                                                        </div>   \r\n                                                    </div>\r\n                                                    <div>\r\n                                                        <div class=\"baseDiscoverableCard-body\">\r\n                                                           {{fundDetail.short_description}}\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div>\r\n                                                        <small class=\"baseDiscoverableCard-categoryLink\">Diversified</small>\r\n                                                        <span style=\"float:right; color:green\" *ngIf=\"amountAlreadyInvested>0\">Invested</span>\r\n                                                        <div>\r\n                                                            <div>\r\n                                                                <div class=\"fundingDiscoverableCard-raisedContainer\">\r\n                                                                    <div>\r\n                                                                        <span class=\"fundingDiscoverableCard-unitsRaisedNumber\">\r\n                                                                            $ {{fundDetail.capitalRaisedInThisFund}}\r\n                                                                        </span>\r\n                                                                        <span class=\"fundingDiscoverableCard-unitsRaisedText\">\r\n                                                                            USD raised\r\n                                                                        </span>\r\n                                                                    </div>\r\n                                                                    <div class=\"fundingDiscoverableCard-unitsRaisedNumber\">\r\n                                                                            \r\n                                                                    </div>\r\n                                                                </div>\r\n                                                                <div class=\"campaignFundingBar campaignFundingBar--compact\">\r\n                                                                        <div class=\"campaignFundingBar-progress campaignFundingBar-progress--full campaignFundingBar-progress--progress\" [style.width.%]=\"45\">                                                        \r\n                                                                        </div>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"fundingDiscoverableCard-footerBottom\">\r\n                                                                <div>\r\n                                                                    <i class=\"fa fa-clock-o\"></i>\r\n                                                                    <span class=\"fundingDiscoverableCard-timeLeft\">\r\n                                                                            {{daysLeft}} days left\r\n                                                                    </span>\r\n                                                                    \r\n                                                                </div>\r\n                                                        </div>\r\n                                                    </div>            \r\n                                            </div>        \r\n                                    </div>\r\n                                </a>\r\n                            </div>\r\n                        </div>            \r\n                </div>\r\n        </div>\r\n    </div>\r\n</div>    ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/project/components/fund-detail/fund-detail.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/project/components/fund-detail/fund-detail.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<head>\r\n    <meta charset=\"utf-8\">\r\n    <meta http-equiv=\"x-ua-compatible\" content=\"ie=edge\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n    <meta name=\"description\" content=\"\">\r\n    <meta name=\"author\" content=\"\">\r\n    <title></title>\r\n    <base href=\"/\">\r\n    <!-- Horizon CSS -->\r\n    <link href=\"https://www.principalcdn.com/css/horizon/v2/horizon.min.css\" rel=\"stylesheet\">\r\n    <!-- Application specific CSS -->\r\n    \r\n    <!-- Optional favicon and apple/android homescreen icons -->\r\n    <meta name=\"mobile-web-app-capable\" content=\"yes\">\r\n    <link rel=\"shortcut icon\" type=\"image/x-icon\" href=\"https://www.principalcdn.com/css/horizon/v2/favicon.ico\">\r\n    <link rel=\"shortcut icon\" type=\"image/x-icon\" href=\"https://www.principalcdn.com/css/horizon/v2/apple-touch-icon.png\">\r\n      <link href=\"https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap\" rel=\"stylesheet\">\r\n    <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\r\n</head>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-8\">\r\n      <div class=\"row\">\r\n\r\n        <h2>{{fundDetail.fund_name}}</h2>\r\n        <br /><br />\r\n        <iframe width=\"640\" height=\"400\" [src]=trustedUrl frameborder=\"0\" allowfullscreen></iframe>\r\n      </div>\r\n\r\n      <br /><br />\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-11\">\r\n          <mat-tab-group>\r\n            <mat-tab label=\"Fund Details\">\r\n              <div class=\"callout bg-gray-lightest\">\r\n                <h3>{{fundDetail.short_description}}</h3>\r\n                <p>\r\n                  {{fundDetail.long_description}}\r\n                </p>\r\n\r\n                <ul>\r\n                  <p>Name : {{fundDetail.fundPortfolioManager[0].name}}</p>\r\n                  <p>Profile : {{fundDetail.fundPortfolioManager[0].description}}</p>\r\n                </ul>\r\n\r\n              </div>\r\n            </mat-tab>\r\n\r\n            <mat-tab label=\"Campaigns\">\r\n              <!-- <div *ngFor=\"let singlecampaignDetail of fundDetail.fundCampaignsList;\">\r\n                <div class=\"row\">\r\n                  <app-campaign-compact [mainCampaign]=\"singlecampaignDetail\"></app-campaign-compact>\r\n                </div>\r\n              </div> -->\r\n              <div class=\"callout bg-gray-lightest\">             \r\n                  <div class=\"panel-body\">\r\n                    <div *ngFor=\"let singlecampaignDetail of fundDetail.fundCampaignsList; let i = index\">\r\n                      <div *ngIf=\"i % 3== 0\" class=\"row\">\r\n                        <div class=\"col-lg-4\" *ngIf=\"fundDetail.fundCampaignsList.length  > i\">\r\n                          <app-campaign-compact [mainCampaign]=\"fundDetail.fundCampaignsList[i]\"></app-campaign-compact>\r\n                        </div>\r\n                        <div class=\"col-lg-4\" *ngIf=\"fundDetail.fundCampaignsList.length  > i+1\">\r\n                          <app-campaign-compact [mainCampaign]=\"fundDetail.fundCampaignsList[i+1]\"></app-campaign-compact>\r\n                        </div>\r\n                        <div class=\"col-lg-4\" *ngIf=\"fundDetail.fundCampaignsList.length  > i+2\">\r\n                          <app-campaign-compact [mainCampaign]=\"fundDetail.fundCampaignsList[i+2]\"></app-campaign-compact>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n\r\n            </mat-tab>\r\n\r\n            <mat-tab label=\"Performance\">\r\n              \r\n                <div class=\"routerContentSection-content callout bg-gray-lightest\">\r\n\r\n                    <div class=\"faqSection-container\">\r\n                      <h5 class=\"campainCategory\" style=\"color: #0091da;\">Assessed Parameters</h5>\r\n                      <div class=\"campaignFaq-container\">\r\n                        <div class=\"campaignFaq-question t-body--sansSerif--lg\">\r\n                          <ul>\r\n                            <li> Founders Value Systems</li>\r\n                            <li> Founders background</li>\r\n                            <li> Their passion</li>\r\n                            <li> Startups’ team</li>\r\n                            <li> Founders motivation and energy level</li>\r\n                            <li> Credibility of the founders and core team (Educational and Professional background)</li>\r\n                            <li> Uniqueness of solution</li>\r\n                            <li> Innovative (Patent would also be an indicator)</li>\r\n                            <li> Approach</li>\r\n                            <li> Technology differentiator</li>\r\n                            <li> Business differentiator</li>\r\n                            <li> USP</li>\r\n                            <li> Startup Business model</li>\r\n                            <li> Stability / Sustainability of startups</li>\r\n                            <li> Revenue stream and cost benefits</li>\r\n                            <li> Relevance to business</li>\r\n                            <li> Principal business strategy</li>\r\n                            <li> Fintech -> Theme alignment (Explore partnership opportunities with existing business)</li>\r\n                            <li> Existing customer base</li>\r\n                            <!-- <li>      Engagement with other corporates and investors (Yes Bank startup engagement which Deutsche bank acquired -> such possibilities to be kept in mind)</li> -->\r\n                            <li> Funding status</li>\r\n                            <li> Current valuation</li>\r\n                          </ul>\r\n                        </div>\r\n                        <i class=\"fa fa-file-pdf-o\" style=\"font-size:30px;color:red;\" aria-hidden=\"true\"></i>\r\n                        <span>Complete Assessment Report.pdf</span>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n            </mat-tab>\r\n            <mat-tab label=\"FAQs\">\r\n\r\n\r\n                <div class=\"routerContentSection-content callout bg-gray-lightest\">\r\n                  \r\n                    <div class=\"faqSection-container\">\r\n                      <h5 class=\"campainCategory\" style=\"color: #0091da;\">Frequently Asked Questions</h5>\r\n                      <div class=\"campaignFaq-container\" *ngFor=\"let qa of fundDetail.fundFandQs\">\r\n                        <div class=\"campaignFaq-question t-weight--medium t-body--sansSerif--lg\">\r\n                            {{qa.question}}\r\n                        </div>\r\n                        <div class=\"campaignFaq-answer t-body--sansSerif--lg\">\r\n                            {{qa.answer}}\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n              <!-- <li *ngFor=\"let qa of fundDetail.fundFandQs\">\r\n                <p>Question : {{qa.question}}</p>\r\n                <p>Answer : {{qa.answer}}</p>\r\n                <p>--------------------------</p>\r\n              </li> -->\r\n            </mat-tab>\r\n          </mat-tab-group>\r\n        </div>\r\n\r\n\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-4\">\r\n        <div class=\"campaignLayout-topContent-right\">\r\n            <div>\r\n              <br/> <br/>\r\n              <div class=\"fundingColor basicsSection-statusLabel t-label--sm\">\r\n                Fund\r\n              </div>\r\n              <div class=\"basicsSection-title widescreen t-h4--sansSerif\">\r\n                  {{fundDetail.fund_name}}\r\n              </div>\r\n              <div class=\"basicsSection-tagline widescreen t-body--sansSerif--lg\">\r\n                  {{fundDetail.short_description}}\r\n              </div>\r\n              \r\n              <div class=\"basicCampaignOwner\">\r\n    \r\n                    <div class=\"columns is-gapless\" style=\"margin-top:10px;margin-bottom: 10px\">\r\n                      <div>\r\n                        <span><i class=\"fa fa-bar-chart fa-3x\" style=\"color:rgb(209, 203, 203)\"></i></span>\r\n                      </div>\r\n                      <div class=\"column\"> \r\n                          <div class=\"basicsCampaignOwner-details\">\r\n                            <div>\r\n                            <span class=\"campainCategory\" style=\"color:green\">{{fundDetail.category}}</span>\r\n                            </div>\r\n                            <div class=\"basicsCampaignOwner-details-trust t-body--sansSerif\">\r\n                              <div class=\"basicsCampaignOwner-details-city\">\r\n                                <span>{{fundDetail.investors}} Investors | </span>  \r\n                                <span>{{numberOfCampaigns}} Campaigns</span>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                      </div>\r\n    \r\n                    </div>\r\n                \r\n              </div>\r\n              <div class=\"fund-bar\">\r\n                  <div>\r\n                      <div>\r\n                          <div class=\"fundingDiscoverableCard-raisedContainer\">\r\n                              <div>\r\n                                  <span class=\"fundingDiscoverableCard-unitsRaisedNumber\">\r\n                                      $ {{fundDetail.capitalRaisedInThisFund}}\r\n                                  </span>\r\n                                  <span class=\"fundingDiscoverableCard-unitsRaisedText\">\r\n                                      USD raised\r\n                                  </span>\r\n                              </div>\r\n                              <div class=\"fundingDiscoverableCard-unitsRaisedNumber\">\r\n                                  {{percentageInvested}}%\r\n                              </div>\r\n                          </div>\r\n                          <div class=\"campaignFundingBar campaignFundingBar--compact\">\r\n                                  <div class=\"campaignFundingBar-progress campaignFundingBar-progress--full campaignFundingBar-progress--progress\" [style.width.%]=\"percentageInvested\">                                                        \r\n                                  </div>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n                  <div class=fundingDiscoverableCard-footerBottom>\r\n                      <div>\r\n                          <div class=\"fundingDiscoverableCard-raisedContainer\">\r\n                              <div>\r\n                                  <span *ngIf=\"amountAlreadyInvested>0\" class=\"fundingDiscoverableCard-unitsRaisedNumber\">\r\n                                      You have invested : $ {{amountAlreadyInvested}}\r\n                                  </span>\r\n                              </div>\r\n                              <div class=\"fundingDiscoverableCard-unitsRaisedNumber\">\r\n                                  <i class=\"fa fa-clock-o\"></i>\r\n                                  <span class=\"fundingDiscoverableCard-timeLeft\">\r\n                                      {{daysLeft}} days left\r\n                                  </span>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n    \r\n              </div> \r\n              <div class=\"form-inline\" style=\"margin-top:30px\">\r\n                  <div *ngIf=\"getUserRole()==1\">\r\n                    <mat-card-actions>\r\n                        <i class=\"fa fa-dollar\"></i> &nbsp;&nbsp; \r\n                      <input style=\"text-align: right;\"   class=\"showOnlyLine\" size=\"8\" [(ngModel)]=\"amount\" />  &nbsp;&nbsp;\r\n                        <button *ngIf=\"amountAlreadyInvested==0\" type=\"button\" class=\"btn btn-primary\" mat-button (click)=\"addToCart()\">Invest</button>\r\n                        <button *ngIf=\"amountAlreadyInvested>0\"  type=\"button\" class=\"btn btn-primary\" mat-button (click)=\"addToCart()\">Edit Investment</button>\r\n                        &nbsp;&nbsp;\r\n                        \r\n                    </mat-card-actions>\r\n                  </div>\r\n                </div>\r\n                \r\n                <div *ngIf=\"!isLoggedIn()\">\r\n                    <mat-card-actions>\r\n                      <button type=\"button\" class=\"btn btn-primary\"  mat-button (click)=\"addToCart()\">Invest</button>\r\n                    </mat-card-actions>\r\n                </div>\r\n            </div>\r\n          </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/project/components/fund-list/fund-list.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/project/components/fund-list/fund-list.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n\r\n  <div class=\"panel panel-primary\">\r\n    <div class=\"panel-heading\">\r\n      <h1 class=\"panel-title\">Funds</h1>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n      <div *ngFor=\"let singleFund of fundList; let i = index\">\r\n        <div *ngIf=\"i % 3== 0\" class=\"row\">\r\n          <div class=\"col-lg-4\" *ngIf=\"listSize  > i+0\">\r\n            <app-fund-compact [fundDetail]=\"fundList[i]\"></app-fund-compact>\r\n          </div>\r\n          <div class=\"col-lg-4\" *ngIf=\"listSize  > i+1\">\r\n            <app-fund-compact [fundDetail]=\"fundList[i+1]\"></app-fund-compact>\r\n          </div>\r\n          <div class=\"col-lg-4\" *ngIf=\"listSize  > i+2\">\r\n            <app-fund-compact [fundDetail]=\"fundList[i+2]\"></app-fund-compact>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/project/components/fund-raiser-home/fund-raiser-home.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/project/components/fund-raiser-home/fund-raiser-home.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<app-my-campaignlist></app-my-campaignlist>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/project/components/my-campaignlist/my-campaignlist.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/project/components/my-campaignlist/my-campaignlist.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"container\">\r\n        <div class=\"campaignCarousel-header t-h4--serif\">\r\n          My Startups\r\n        </div>\r\n        <div *ngFor=\"let mainCampaignDetail of mainCampaignDetails; let i = index\">\r\n          <div *ngIf=\"i % 3== 0\" class=\"row\">\r\n            <div class=\"col-lg-4\" *ngIf=\"listSize  > i+0\">\r\n              <app-campaign-compact [mainCampaign]=\"mainCampaignDetails[i]\"></app-campaign-compact>\r\n              <!-- {{mainCampaignDetails[i].campaignDetail | json}} -->\r\n            </div>\r\n            <div class=\"col-lg-4\" *ngIf=\"listSize  > i+1\">\r\n              <app-campaign-compact [mainCampaign]=\"mainCampaignDetails[i+1]\"></app-campaign-compact>\r\n            </div>\r\n            <div class=\"col-lg-4\" *ngIf=\"listSize  > i+2\">\r\n              <app-campaign-compact [mainCampaign]=\"mainCampaignDetails[i+2]\"></app-campaign-compact>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/project/components/my-campaigns/my-campaigns.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/project/components/my-campaigns/my-campaigns.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>my-campaigns works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/components/cart/cart.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/components/cart/cart.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<!-- {{currentOrders | json}} -->\r\n\r\n<div class=\"text-center\">\r\n<h1 *ngIf=\"currentOrders.length==0 && currentSellOrders.length==0\"><label><a class=\"nav-link\" [routerLink]=\"['/home']\" routerLinkActive=\"active\">\r\n  Your cart is empty! </a></label></h1></div>\r\n<div class=\"table-responsive\" *ngIf=\"currentOrders.length > 0\">\r\n    <table class=\"table mb-0\" >\r\n        <thead>\r\n            <tr>\r\n\r\n                <th>Id</th>\r\n                <th>Investment Type</th>\r\n                <th>Name</th>\r\n                <th>Amount</th>\r\n                <th>Current Invested Amount</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let currentOrder of currentOrders;let i = index\">\r\n                <td>\r\n                    {{i+1}}\r\n                </td>\r\n                <td>\r\n                    {{currentOrder.invest_type=='I'?'Startup':'Fund'}}\r\n                </td>\r\n                <td>\r\n                    <a *ngIf=\"currentOrder.invest_type=='I'\" class=\"nav-link\" [routerLink]=\"['/campaignlist' , currentOrder.item_id]\" routerLinkActive=\"active\">  {{currentOrder.item_name}}</a>\r\n                    <a *ngIf=\"currentOrder.invest_type=='F'\" class=\"nav-link\" [routerLink]=\"['/fundlist' , currentOrder.item_id]\" routerLinkActive=\"active\">  {{currentOrder.item_name}}</a> \r\n                </td> \r\n                \r\n                <td>  <input class=\"form-control\" style=\"text-align: right;\" [(ngModel)]=\"currentOrder.amount\" placeholder=\"currentOrder.amount\"/></td>\r\n                <th style=\"text-align: right;\">  {{currentInvestmentAmountForOrder(currentOrder.invest_type,currentOrder.item_id)}}</th>\r\n                <td>  <i class=\"fa fa-times\" (click)=\"removeItem(currentOrder)\"></i></td>\r\n              \r\n\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n<!--  -->\r\n<!--  -->\r\n\r\n\r\n<!-- {{currentOrders | json}} -->\r\n\r\n<!-- <h1 *ngIf=\"currentSellOrders.length==0\"><label><a class=\"nav-link\" [routerLink]=\"['/home']\" routerLinkActive=\"active\">Go to Sell</a></label></h1> -->\r\n<div class=\"table-responsive\" *ngIf=\"currentSellOrders.length > 0\">\r\n    <table class=\"table mb-0\" >\r\n        <thead>\r\n            <tr>\r\n\r\n                <th>Id</th>\r\n                <th>Name</th>\r\n                <th>Quoted Return Percent</th>\r\n                <th>Current Investment amount</th>\r\n                <th>Declared Percentage</th>\r\n                <th>After Sell Investment Out</th>\r\n               \r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let currentOrder of currentSellOrders;let i = index\">\r\n                <td>\r\n                    {{i+1}}\r\n                </td>\r\n                \r\n                <td>\r\n                    <a *ngIf=\"currentOrder.invest_type=='I'\" class=\"nav-link\" [routerLink]=\"['/buybacklist' , currentOrder.item_id]\" routerLinkActive=\"active\">  {{currentOrder.item_name}}</a>\r\n                </td>\r\n                <td>\r\n                        {{currentOrder.buyBackPercentage}}\r\n                </td>\r\n                <td>\r\n                        {{currentOrder.remainingAmount * currentOrder.buyBackPercentage/ (100 -currentOrder.declaredPercenatege )}}\r\n                </td>\r\n                <td>\r\n                        {{currentOrder.declaredPercenatege}}\r\n                </td>\r\n                <td>\r\n                        {{currentOrder.remainingAmount}}\r\n                </td>\r\n\r\n                <td>  </td>\r\n                <td>  <i class=\"fa fa-times\" (click)=\"removeSellItem(currentOrder)\"></i></td>\r\n\r\n\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>\r\n\r\n<div *ngIf=\"(currentSellOrders.length > 0) || (currentOrders.length > 0)\">\r\n        <button *ngIf=\"!conditionsAccepted\" type=\"button\" class=\"btn btn-primary btn-lg\" data-toggle=\"modal\" data-target=\"#my-modal\">\r\n                Confirm Investment <i class=\"fa fa-chevron-right\"></i>\r\n        </button>\r\n</div>\r\n\r\n\r\n<!-- Button trigger modal -->\r\n   \r\n    \r\n  \r\n  <div *ngIf=\"(currentSellOrders.length > 0) || (currentOrders.length > 0)\">\r\n        <button *ngIf=\"conditionsAccepted\" type=\"button\" class=\"btn btn-primary btn-lg\" data-toggle=\"modal\" data-target=\"#my-modal-2\">\r\n                Submit <i class=\"fa fa-chevron-right\"></i>\r\n        </button> \r\n        &nbsp;  <label class=\"text-success\" *ngIf=\"conditionsAccepted\">Terms and Conditions Accepted.</label>\r\n\r\n  </div>   \r\n   \r\n  \r\n      <!-- Modal -->\r\n      <div class=\"modal fade\" id=\"my-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"my-modal-label\">\r\n        <div class=\"modal-dialog\">\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n              <h2 class=\"modal-title\" id=\"my-modal-label\">Terms and Conditions</h2>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <h5>As you are relatively new to SAFE investments, we need to be sure you understand all of the risks around\r\n                    what you are getting into:</h5>\r\n                    <br>\r\n                    <label class=\"container\">Very few Start-ups investments are success and return big profits to investors.\r\n                        <input type=\"checkbox\">\r\n                        <span class=\"checkmark\"></span>\r\n                      </label>\r\n                      <br>\r\n                      <label class=\"container\">If the Start-ups you invest in fails, then will unlikely to get you investment back\r\n                        <input type=\"checkbox\">\r\n                        <span class=\"checkmark\"></span>\r\n                      </label>\r\n                      <br>\r\n                      <label class=\"container\">The only available modes to sell you shares would Buyback, IPO Listing or Next round\r\n                        of funding series.\r\n                        <input type=\"checkbox\">\r\n                        <span class=\"checkmark\"></span>\r\n                      </label>\r\n                      <br>\r\n                      <label class=\"container\">It’s better to spread your risk by investing in multiple Start - ups instead of\r\n                        investing in one\r\n                        <input type=\"checkbox\">\r\n                        <span class=\"checkmark\"></span>\r\n                      </label>\r\n                      <br>\r\n                      <label class=\"container\">Principal will be medium to negotiate the terms with Start up and sale funds on my\r\n                        behalf.\r\n                        <input type=\"checkbox\">\r\n                        <span class=\"checkmark\"></span>\r\n                      </label>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n              <button type=\"button\" class=\"btn btn-link\" data-dismiss=\"modal\">Close</button>\r\n              <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"acceptConditions()\">Accept</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"modal fade\" id=\"my-modal-2\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"my-modal-label-2\">\r\n            <div class=\"modal-dialog\">\r\n              <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n                  <br><br><h4 class=\"modal-title text-center\" id=\"my-modal-label-2\">Your investment is successfully saved.</h4>\r\n                </div>\r\n               \r\n                <div class=\"modal-footer\">\r\n                  <button type=\"button\" class=\"btn btn-link\" data-dismiss=\"modal\">Close</button>\r\n                  <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"checkOut()\">Ok</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n    </div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/components/sell/sell.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/components/sell/sell.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<!-- {{currentOrders | json}} -->\r\n\r\n<h1 *ngIf=\"currentOrders.length==0\"><label><a class=\"nav-link\" [routerLink]=\"['/home']\" routerLinkActive=\"active\">Please Add Startups/Funds to Invest !!</a></label></h1>\r\n<div class=\"table-responsive\" *ngIf=\"currentOrders.length > 0\">\r\n    <table class=\"table mb-0\" >\r\n        <thead>\r\n            <tr>\r\n\r\n                <th>Id</th>\r\n                <th>Name</th>\r\n                <th>Quoted Return Percent</th>\r\n                <th>Current Investment amount</th>\r\n                <th>Declared Percentage</th>\r\n                <th>After Sell Investment Out</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let currentOrder of currentOrders;let i = index\">\r\n                <td>\r\n                    {{i+1}}\r\n                </td>\r\n                \r\n                <td>\r\n                    <a *ngIf=\"currentOrder.invest_type=='I'\" class=\"nav-link\" [routerLink]=\"['/campaignlist' , currentOrder.item_id]\" routerLinkActive=\"active\">  {{currentOrder.item_name}}</a>\r\n                </td>\r\n                <td>  <input [(ngModel)]=\"currentOrder.amount\" placeholder=\"currentOrder.amount\"/></td>\r\n                <td>  <i class=\"fa fa-times\" (click)=\"removeItem(currentOrder)\"></i></td>\r\n\r\n\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>\r\n\r\n<div *ngIf=\"currentOrders.length > 0\">\r\n        <button mat-button (click)=\"checkOut()\">Check Out</button>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/components/user-investments/user-investments.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/components/user-investments/user-investments.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>user-investments works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/components/userhome/userhome.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/components/userhome/userhome.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<app-campaign-list></app-campaign-list>\r\n<br><br>\r\n<app-fund-list></app-fund-list>\r\n<br><br>\r\n<app-buyback-list></app-buyback-list>\r\n<br>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/login.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/login.component.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card container body-content\">\r\n  <!-- <div class=\"card-header\">\r\n    {{pageTitle}}\r\n  </div> -->\r\n\r\n  <div class=\"\">\r\n    <form novalidate (ngSubmit)=\"login(loginForm)\" #loginForm=\"ngForm\" autocomplete=\"off\">\r\n      <fieldset>\r\n\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-6 col-sm-offset-3\">\r\n            <div class=\"form-group\">\r\n              <label for=\"userNameId\">Email</label>\r\n              <div>\r\n                <input class=\"form-control\" id=\"userNameId\" type=\"text\" placeholder=\"Email (required)\" required\r\n                  ngModel name=\"userName\" #userNameVar=\"ngModel\"\r\n                  [ngClass]=\"{'is-invalid': (userNameVar.touched || userNameVar.dirty) && !userNameVar.valid }\" />\r\n                <span class=\"invalid-feedback help-block text-danger\">\r\n                  <span *ngIf=\"userNameVar.errors?.required && (userNameVar.touched || userNameVar.dirty) && !userNameVar.valid\">\r\n                    Email is required.\r\n                  </span>\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-6 col-sm-offset-3\">\r\n            <div class=\"form-group\">\r\n              <label for=\"passwordId\">Password</label>\r\n\r\n              <div>\r\n                <input class=\"form-control\" id=\"passwordId\" type=\"password\" placeholder=\"Password (required)\" required\r\n                  ngModel name=\"password\" #passwordVar=\"ngModel\"\r\n                  [ngClass]=\"{'is-invalid': (passwordVar.touched || passwordVar.dirty) && !passwordVar.valid }\" />\r\n                <span class=\"invalid-feedback help-block text-danger\">\r\n                  <span *ngIf=\"passwordVar.errors?.required && (passwordVar.touched || passwordVar.dirty)\">\r\n                    Password is required.\r\n                  </span>\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <br>\r\n        <div class=\"row\">\r\n          <div class=\" col-sm-6 col-sm-offset-3\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"form-group form-group-sm col-lg-9\">\r\n                <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!loginForm.valid\">\r\n                  Log In\r\n                </button>\r\n                &nbsp;\r\n                <button class=\"btn btn-warning\" type=\"button\" [routerLink]=\"['/home']\">\r\n                  Cancel\r\n\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </fieldset>\r\n    </form>\r\n  </div>\r\n\r\n  <div class=\"alert alert-danger\" *ngIf=\"errorMessage\">{{errorMessage}}\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/about-us/about-us.component.css":
/*!*************************************************!*\
  !*** ./src/app/about-us/about-us.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvYWJvdXQtdXMvYWJvdXQtdXMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/about-us/about-us.component.ts":
/*!************************************************!*\
  !*** ./src/app/about-us/about-us.component.ts ***!
  \************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutUsComponent = class AboutUsComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-us',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about-us.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about-us/about-us.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about-us.component.css */ "./src/app/about-us/about-us.component.css")).default]
    })
], AboutUsComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-page/main-page.component */ "./src/app/main-page/main-page.component.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");





const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                { path: '', redirectTo: 'welcome', pathMatch: 'full' },
                { path: 'welcome', component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__["MainPageComponent"] },
                { path: 'aboutUs', component: _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_4__["AboutUsComponent"] },
            ])
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvYXBwLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'equitycrowdfunding';
        this.navLinks = [
            { label: "List of Active Campaigns", path: "campaignlist" },
            { label: "List of Funds", path: "welcome" }
        ];
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main-page/main-page.component */ "./src/app/main-page/main-page.component.ts");
/* harmony import */ var _project_project_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./project/project.module */ "./src/app/project/project.module.ts");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout/layout.module */ "./src/app/layout/layout.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _core_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/shared/shared.module */ "./src/app/core/shared/shared.module.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");











let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_5__["MainPageComponent"],
            _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_10__["AboutUsComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _project_project_module__WEBPACK_IMPORTED_MODULE_6__["ProjectModule"],
            _layout_layout_module__WEBPACK_IMPORTED_MODULE_7__["LayoutModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _core_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/core/services/cart.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/cart.service.ts ***!
  \***********************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CartService = class CartService {
    constructor() {
        this.currentOrders = [];
        this.currentSellOrders = [];
    }
    addToCart(order) {
        var itemavailable = false;
        this.currentOrders.forEach(element => {
            if ((element.item_id == order.item_id && element.invest_type == order.invest_type)) {
                element.amount = order.amount;
                itemavailable = true;
            }
        });
        if (!itemavailable) {
            this.currentOrders.push(order);
        }
    }
    removeFromCart(order) {
        var tempCurrentOrders = [];
        this.currentOrders.forEach(element => {
            if (!(element.item_id == order.item_id && element.invest_type == order.invest_type)) {
                tempCurrentOrders.push(element);
            }
        });
        this.currentOrders = tempCurrentOrders;
    }
    getCurrentCartOrders() {
        return this.currentOrders;
    }
    setCurrentCartOrders(orders) {
        return this.currentOrders = orders;
    }
    clearCart() {
        this.currentOrders = [];
        console.log('clear cart called');
    }
    getCurrentCartSize() {
        var size = 0;
        if (this.currentSellOrders != null) {
            size += this.currentSellOrders.length;
        }
        if (this.currentOrders != null) {
            size += this.currentOrders.length;
        }
        return size;
    }
    addToSellCart(order) {
        var itemavailable = false;
        this.currentSellOrders.forEach(element => {
            if ((element.item_id == order.item_id && element.invest_type == order.invest_type)) {
                element.remainingAmount = order.remainingAmount;
                element.buyBackPercentage = order.buyBackPercentage;
                element.declaredPercenatege = order.declaredPercenatege;
                itemavailable = true;
            }
        });
        if (!itemavailable) {
            this.currentSellOrders.push(order);
        }
    }
    removeFromSellCart(order) {
        var tempCurrentOrders = [];
        this.currentSellOrders.forEach(element => {
            if (!(element.item_id == order.item_id && element.invest_type == order.invest_type)) {
                tempCurrentOrders.push(element);
            }
        });
        this.currentSellOrders = tempCurrentOrders;
    }
    getCurrentSellCartOrders() {
        return this.currentSellOrders;
    }
    setCurrentSellCartOrders(orders) {
        return this.currentSellOrders = orders;
    }
    clearSellCart() {
        this.currentSellOrders = [];
        console.log('clear cart called');
    }
};
CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CartService);



/***/ }),

/***/ "./src/app/core/services/http.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/http.service.ts ***!
  \***********************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let HttpService = class HttpService {
    constructor(http) {
        this.http = http;
        //baseUrl: string = "http://192.168.51.120:5000/api/";
        // baseUrl : string = "";
        //baseUrl : string = "http://testbb.us-east-1.elasticbeanstalk.com/api/"
        this.baseUrl = "/api/";
    }
    getRestData(url) {
        // const username: string = this.sessionStorage.retrieve('username');
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        // headers =headers.append('username', username);
        return this.http.get(this.baseUrl + url, { headers: headers, responseType: 'text', observe: 'response', withCredentials: false });
    }
    postRestData(url, body) {
        // const username: string = this.sessionStorage.retrieve('username');
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        // headers =headers.append('username', username);
        return this.http.post(this.baseUrl + url, body, { headers: headers, responseType: 'text', observe: 'response', withCredentials: false });
    }
    createUrl(url) {
        return this.baseUrl + url;
    }
};
HttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HttpService);



/***/ }),

/***/ "./src/app/core/shared/safe.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/core/shared/safe.pipe.ts ***!
  \******************************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



let SafePipe = class SafePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
};
SafePipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
SafePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'safe'
    })
], SafePipe);



/***/ }),

/***/ "./src/app/core/shared/shared.module.ts":
/*!**********************************************!*\
  !*** ./src/app/core/shared/shared.module.ts ***!
  \**********************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _safe_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./safe.pipe */ "./src/app/core/shared/safe.pipe.ts");







let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_safe_pipe__WEBPACK_IMPORTED_MODULE_6__["SafePipe"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
        ],
        exports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _safe_pipe__WEBPACK_IMPORTED_MODULE_6__["SafePipe"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/layout/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/layout/footer/footer.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/layout/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/layout/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/layout/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/layout/header/header.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/layout/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_user_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/user/auth.service */ "./src/app/user/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/cart.service */ "./src/app/core/services/cart.service.ts");





let HeaderComponent = class HeaderComponent {
    constructor(authService, router, cartService) {
        this.authService = authService;
        this.router = router;
        this.cartService = cartService;
        this.loginButtonString = "Login";
    }
    ngOnInit() {
        if (this.authService.isLoggedIn) {
            this.loginButtonString = 'Welcome' + this.authService.currentUser.name;
            console.log(this.loginButtonString);
        }
    }
    get isLoggedIn() {
        return this.authService.isLoggedIn;
    }
    getUserRole() {
        return this.authService.getRole();
    }
    get userName() {
        if (this.authService.currentUser) {
            return this.authService.currentUser.name;
        }
        return '';
    }
    logOut() {
        this.authService.logout();
        this.cartService.clearCart();
        this.router.navigate(['/home']);
    }
    get cartSize() {
        return this.cartService.getCurrentCartSize();
    }
};
HeaderComponent.ctorParameters = () => [
    { type: src_app_user_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_core_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/layout/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/layout/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/layout/footer/footer.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../main-page/main-page.component */ "./src/app/main-page/main-page.component.ts");
/* harmony import */ var _user_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../user/login.component */ "./src/app/user/login.component.ts");
/* harmony import */ var _core_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/shared/shared.module */ "./src/app/core/shared/shared.module.ts");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../user/user.module */ "./src/app/user/user.module.ts");










let LayoutModule = class LayoutModule {
};
LayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _core_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _user_user_module__WEBPACK_IMPORTED_MODULE_9__["UserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                // { path: '', redirectTo: 'welcome', pathMatch: 'full' },
                { path: 'welcome', component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_6__["MainPageComponent"] },
                { path: 'login', component: _user_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
            ])
        ],
        exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
    })
], LayoutModule);



/***/ }),

/***/ "./src/app/main-page/main-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/main-page/main-page.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvbWFpbi1wYWdlL21haW4tcGFnZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/main-page/main-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main-page/main-page.component.ts ***!
  \**************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MainPageComponent = class MainPageComponent {
    constructor() { }
    ngOnInit() {
    }
};
MainPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main-page/main-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-page.component.css */ "./src/app/main-page/main-page.component.css")).default]
    })
], MainPageComponent);



/***/ }),

/***/ "./src/app/project/components/buyback-compact/buyback-compact.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/project/components/buyback-compact/buyback-compact.component.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\r\n    box-sizing: border-box;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: antialiased;\r\n}\r\n\r\na {\r\n  color: inherit;\r\n  text-decoration: inherit;\r\n}\r\n\r\na:-webkit-any-link {\r\n    color: -webkit-link;\r\n    cursor: pointer;\r\n}\r\n\r\n/* .homepageLayout {\r\n    padding-left: 2rem;\r\n    padding-right: 2rem;\r\n    max-width: 1280px;\r\n} */\r\n\r\n/*ECF - Purvi Jain Changes*/\r\n\r\n.homepageLayout {\r\n    padding-left: 0rem;\r\n    padding-right: 0rem;\r\n    max-width: 1280px;\r\n}\r\n\r\n.campaignCarousel {\r\n    overflow: hidden;\r\n    width: 100%;\r\n    margin: auto;\r\n}\r\n\r\n.campaignCarousel-header {\r\n    margin: 0;\r\n}\r\n\r\n.t-h4--serif {\r\n    font-size: 2.5rem;\r\n    font-weight: 400;\r\n    letter-spacing: 0;\r\n    line-height: 1.3;\r\n    font-family: ff-more-web-pro,Georgia,\"Serif\";\r\n}\r\n\r\n.campaignCarousel-carousel, .campaignCarousel-header{\r\n    display: flex;\r\n    align-items: baseline;\r\n}\r\n\r\n.campaignCarousel-header {\r\n    justify-content: space-between;\r\n}\r\n\r\n.campaignCarousel-carouselCard {\r\n    /* width: 275px; */\r\n    margin-top: 3.5rem;\r\n    /* margin-right: 2.5rem; */\r\n}\r\n\r\n.baseDiscoverableCard {\r\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n    transition: 0.3s;\r\n    width: 99%; /*Purvi Jain*/\r\n    border: 1px solid #ddd;\r\n    border-radius: 2px;\r\n    cursor: pointer;\r\n    transition: all .3s cubic-bezier(.16,.8,.45,1);\r\n    position: relative;\r\n    background-color: #fff;\r\n}\r\n\r\n.baseDiscoverableCard:hover {\r\n    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.432);\r\n  }\r\n\r\n.baseDiscoverableCard-content {\r\n    padding: 0 1rem 1rem;\r\n    text-align: left;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n}\r\n\r\n.baseDiscoverableCard-image {\r\n    width: 100%;\r\n    background-position: 50%;\r\n    background-size: cover;\r\n}\r\n\r\n.baseDiscoverableCard-header {\r\n    padding-top: .75rem;\r\n}\r\n\r\n.projectTypeHeader {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.projectTypeHeader-label.projectTypeHeader-label--campaign {\r\n    color: #088366;\r\n}\r\n\r\n.projectTypeHeader-label {\r\n    letter-spacing: 1px;\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.baseDiscoverableCard-contentTop{\r\n    display: flex;\r\n    margin-top: .75rem;\r\n}\r\n\r\n.baseDiscoverableCard-title{\r\n    font-weight: 600;\r\n    font-size: 2.25rem;\r\n}\r\n\r\n.baseDiscoverableCard-body {\r\n    font-size: 1.1rem;\r\n    line-height: 1.5;\r\n    color: #6a6a6a;\r\n    margin-top: .25rem;\r\n    margin-bottom: .25rem;\r\n}\r\n\r\n.baseDiscoverableCard-categoryLink {\r\n    letter-spacing: 1px;\r\n    color: #6a6a6a;\r\n}\r\n\r\n.fundingDiscoverableCard-raisedContainer {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.fundingDiscoverableCard-unitsRaisedNumber {\r\n    font-weight: 600;\r\n}\r\n\r\n.fundingDiscoverableCard-unitsRaisedText {\r\n    color: #6a6a6a;\r\n    font-size: .75rem;\r\n}\r\n\r\n.fundingDiscoverableCard-raisedPercentage{\r\n    color: #6a6a6a;\r\n    font-size: .90rem;\r\n}\r\n\r\n.campaignFundingBar.campaignFundingBar--compact {\r\n    height: 7px;\r\n}\r\n\r\n.campaignFundingBar{\r\n    position: relative;\r\n    height: 10px;\r\n    width: 100%;\r\n    border-radius: 5px;\r\n    background: #ddd;\r\n}\r\n\r\n.campaignFundingBar-progress.campaignFundingBar-progress--compact {\r\n    height: 7px;\r\n}\r\n\r\n.campaignFundingBar-progress {\r\n    position: absolute;\r\n    height: 10px;\r\n    background: #34ca96;\r\n    border-radius: 5px 0 0 5px;\r\n}\r\n\r\n.campaignFundingBar-progress.campaignFundingBar-progress--full {\r\n    border-radius: 5px;\r\n}\r\n\r\n.fundingDiscoverableCard-footerBottom {\r\n    margin-top: .5rem;\r\n    color: #6a6a6a;\r\n}\r\n\r\n.fundingDiscoverableCard-timeLeft {\r\n    margin-left: .25rem;\r\n}\r\n\r\n/*ECF - Purvi Jain Changes*/\r\n\r\n.col-lg-4 {\r\n    padding-left: -15px !important;\r\n    padding-right: -15x !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wcm9qZWN0L2NvbXBvbmVudHMvYnV5YmFjay1jb21wYWN0L2J1eWJhY2stY29tcGFjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLG1DQUFtQztJQUNuQyxvQ0FBb0M7QUFDeEM7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsd0JBQXdCO0FBQzFCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBQ0E7Ozs7R0FJRzs7QUFDSCwyQkFBMkI7O0FBQzNCO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBR0E7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsNENBQTRDO0FBQ2hEOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDLGdCQUFnQjtJQUNoQixVQUFVLEVBQUUsYUFBYTtJQUN6QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZiw4Q0FBOEM7SUFDOUMsa0JBQWtCO0lBQ2xCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGlEQUFpRDtFQUNuRDs7QUFFRjtJQUNJLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQSwyQkFBMkI7O0FBQzNCO0lBQ0ksOEJBQThCO0lBQzlCLDhCQUE4QjtBQUNsQyIsImZpbGUiOiJhcHAvcHJvamVjdC9jb21wb25lbnRzL2J1eWJhY2stY29tcGFjdC9idXliYWNrLWNvbXBhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG59XHJcblxyXG5hIHtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XHJcbn1cclxuXHJcbmE6LXdlYmtpdC1hbnktbGluayB7XHJcbiAgICBjb2xvcjogLXdlYmtpdC1saW5rO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi8qIC5ob21lcGFnZUxheW91dCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xyXG4gICAgbWF4LXdpZHRoOiAxMjgwcHg7XHJcbn0gKi9cclxuLypFQ0YgLSBQdXJ2aSBKYWluIENoYW5nZXMqL1xyXG4uaG9tZXBhZ2VMYXlvdXQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcmVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogMHJlbTtcclxuICAgIG1heC13aWR0aDogMTI4MHB4O1xyXG59XHJcblxyXG4uY2FtcGFpZ25DYXJvdXNlbCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcblxyXG4uY2FtcGFpZ25DYXJvdXNlbC1oZWFkZXIge1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4udC1oNC0tc2VyaWYge1xyXG4gICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS4zO1xyXG4gICAgZm9udC1mYW1pbHk6IGZmLW1vcmUtd2ViLXBybyxHZW9yZ2lhLFwiU2VyaWZcIjtcclxufVxyXG5cclxuLmNhbXBhaWduQ2Fyb3VzZWwtY2Fyb3VzZWwsIC5jYW1wYWlnbkNhcm91c2VsLWhlYWRlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbn1cclxuXHJcbi5jYW1wYWlnbkNhcm91c2VsLWhlYWRlciB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5jYW1wYWlnbkNhcm91c2VsLWNhcm91c2VsQ2FyZCB7XHJcbiAgICAvKiB3aWR0aDogMjc1cHg7ICovXHJcbiAgICBtYXJnaW4tdG9wOiAzLjVyZW07XHJcbiAgICAvKiBtYXJnaW4tcmlnaHQ6IDIuNXJlbTsgKi9cclxufVxyXG5cclxuLmJhc2VEaXNjb3ZlcmFibGVDYXJkIHtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKTtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICB3aWR0aDogOTklOyAvKlB1cnZpIEphaW4qL1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuM3MgY3ViaWMtYmV6aWVyKC4xNiwuOCwuNDUsMSk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uYmFzZURpc2NvdmVyYWJsZUNhcmQ6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNDMyKTtcclxuICB9XHJcblxyXG4uYmFzZURpc2NvdmVyYWJsZUNhcmQtY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAwIDFyZW0gMXJlbTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmJhc2VEaXNjb3ZlcmFibGVDYXJkLWltYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmJhc2VEaXNjb3ZlcmFibGVDYXJkLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nLXRvcDogLjc1cmVtO1xyXG59XHJcblxyXG4ucHJvamVjdFR5cGVIZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLnByb2plY3RUeXBlSGVhZGVyLWxhYmVsLnByb2plY3RUeXBlSGVhZGVyLWxhYmVsLS1jYW1wYWlnbiB7XHJcbiAgICBjb2xvcjogIzA4ODM2NjtcclxufVxyXG5cclxuLnByb2plY3RUeXBlSGVhZGVyLWxhYmVsIHtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5cclxuLmJhc2VEaXNjb3ZlcmFibGVDYXJkLWNvbnRlbnRUb3B7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLXRvcDogLjc1cmVtO1xyXG59XHJcblxyXG4uYmFzZURpc2NvdmVyYWJsZUNhcmQtdGl0bGV7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAyLjI1cmVtO1xyXG59XHJcblxyXG4uYmFzZURpc2NvdmVyYWJsZUNhcmQtYm9keSB7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBjb2xvcjogIzZhNmE2YTtcclxuICAgIG1hcmdpbi10b3A6IC4yNXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IC4yNXJlbTtcclxufVxyXG5cclxuLmJhc2VEaXNjb3ZlcmFibGVDYXJkLWNhdGVnb3J5TGluayB7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgY29sb3I6ICM2YTZhNmE7XHJcbn1cclxuXHJcbi5mdW5kaW5nRGlzY292ZXJhYmxlQ2FyZC1yYWlzZWRDb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmZ1bmRpbmdEaXNjb3ZlcmFibGVDYXJkLXVuaXRzUmFpc2VkTnVtYmVyIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5mdW5kaW5nRGlzY292ZXJhYmxlQ2FyZC11bml0c1JhaXNlZFRleHQge1xyXG4gICAgY29sb3I6ICM2YTZhNmE7XHJcbiAgICBmb250LXNpemU6IC43NXJlbTtcclxufVxyXG5cclxuLmZ1bmRpbmdEaXNjb3ZlcmFibGVDYXJkLXJhaXNlZFBlcmNlbnRhZ2V7XHJcbiAgICBjb2xvcjogIzZhNmE2YTtcclxuICAgIGZvbnQtc2l6ZTogLjkwcmVtO1xyXG59XHJcblxyXG4uY2FtcGFpZ25GdW5kaW5nQmFyLmNhbXBhaWduRnVuZGluZ0Jhci0tY29tcGFjdCB7XHJcbiAgICBoZWlnaHQ6IDdweDtcclxufVxyXG5cclxuLmNhbXBhaWduRnVuZGluZ0JhcntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2RkZDtcclxufVxyXG5cclxuLmNhbXBhaWduRnVuZGluZ0Jhci1wcm9ncmVzcy5jYW1wYWlnbkZ1bmRpbmdCYXItcHJvZ3Jlc3MtLWNvbXBhY3Qge1xyXG4gICAgaGVpZ2h0OiA3cHg7XHJcbn1cclxuXHJcbi5jYW1wYWlnbkZ1bmRpbmdCYXItcHJvZ3Jlc3Mge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzM0Y2E5NjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCAwIDAgNXB4O1xyXG59XHJcblxyXG4uY2FtcGFpZ25GdW5kaW5nQmFyLXByb2dyZXNzLmNhbXBhaWduRnVuZGluZ0Jhci1wcm9ncmVzcy0tZnVsbCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5mdW5kaW5nRGlzY292ZXJhYmxlQ2FyZC1mb290ZXJCb3R0b20ge1xyXG4gICAgbWFyZ2luLXRvcDogLjVyZW07XHJcbiAgICBjb2xvcjogIzZhNmE2YTtcclxufVxyXG5cclxuLmZ1bmRpbmdEaXNjb3ZlcmFibGVDYXJkLXRpbWVMZWZ0IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAuMjVyZW07XHJcbn1cclxuXHJcbi8qRUNGIC0gUHVydmkgSmFpbiBDaGFuZ2VzKi9cclxuLmNvbC1sZy00IHtcclxuICAgIHBhZGRpbmctbGVmdDogLTE1cHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IC0xNXggIWltcG9ydGFudDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/project/components/buyback-compact/buyback-compact.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/project/components/buyback-compact/buyback-compact.component.ts ***!
  \*********************************************************************************/
/*! exports provided: BuybackCompactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuybackCompactComponent", function() { return BuybackCompactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/http.service */ "./src/app/core/services/http.service.ts");
/* harmony import */ var src_app_user_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/user/auth.service */ "./src/app/user/auth.service.ts");





let BuybackCompactComponent = class BuybackCompactComponent {
    constructor(route, http, authService) {
        this.route = route;
        this.http = http;
        this.authService = authService;
        this.amountAlreadyInvested = 0;
        this.userRole = 25;
        this.amountReturn = 0;
        this.daysLeft = 0;
    }
    ngOnInit() {
        console.log("single buyback...");
        console.log(this.buybackDetails);
        this.userRole = this.authService.getRole();
        this.imageUrl = "https://images.pexels.com/photos/2933265/pexels-photo-2933265.jpeg?cs=srgb&dl=action-adult-bike-2933265.jpg&fm=";
        if (this.buybackDetails.mainCampaign.campaignMedias != null) {
            this.buybackDetails.mainCampaign.campaignMedias.forEach(element => {
                if (!element.file_location.toString().includes("youtube")) {
                    this.imageUrl = element.file_location.toString();
                }
            });
        }
        if (this.userRole == 1) {
            this.amountAlreadyInvested = this.authService.amountInvestedInInvestment(this.buybackDetails.mainCampaign.campaignDetail.id, 'I');
            this.amountReturn = this.amountAlreadyInvested * (this.buybackDetails.buyback_return_percentage / 100);
        }
        let myDate = new Date(this.buybackDetails.mainCampaign.campaignDetail.start_date);
        let endDate = new Date(this.buybackDetails.mainCampaign.campaignDetail.end_date);
        let diffc = 0;
        diffc = endDate.getTime() - myDate.getTime();
        this.daysLeft = Math.round(Math.abs(diffc / (1000 * 60 * 60 * 24)));
    }
};
BuybackCompactComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_core_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
    { type: src_app_user_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BuybackCompactComponent.prototype, "buybackDetails", void 0);
BuybackCompactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-buyback-compact',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./buyback-compact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/project/components/buyback-compact/buyback-compact.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./buyback-compact.component.css */ "./src/app/project/components/buyback-compact/buyback-compact.component.css")).default]
    })
], BuybackCompactComponent);



/***/ }),

/***/ "./src/app/project/components/buyback-detail/buyback-detail.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/project/components/buyback-detail/buyback-detail.component.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\r\n    box-sizing: border-box;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: antialiased;\r\n    font-family: benton-sans,Helvetica,\"Sans-serif\";\r\n}\r\n\r\n\r\n.annual_report .numbers-block {\r\n    text-align: Center;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n    margin: 10px;\r\n    width: 225px;\r\n}\r\n\r\n\r\n.flexbox-row-center {\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    -webkit-flex-wrap: wrap;\r\n    justify-content: center;\r\n    -webkit-justify-content: center;\r\n}\r\n\r\n\r\n.report-icons{\r\n    width: 61px;\r\n    height: 73px\r\n}\r\n\r\n\r\n.column.is-narrow {\r\n    flex: none;\r\n}\r\n\r\n\r\n.column {\r\n    margin: 0;\r\n    padding: 0 !important;\r\n    display: block;\r\n}\r\n\r\n\r\n.campaignLayout-topContent .campaignLayout-topContent-right {\r\n    width: 390px;\r\n    margin-left: 1.5rem;\r\n}\r\n\r\n\r\ndiv {\r\n    display: block;\r\n}\r\n\r\n\r\n.basicsSection-statusLabel.widescreen{\r\n    text-transform: uppercase;\r\n    display: block;\r\n    font-weight: 600;\r\n}\r\n\r\n\r\n.fundingColor {\r\n    color: #088366;\r\n}\r\n\r\n\r\n.t-label--sm {\r\n    font-size: 1.3rem;\r\n}\r\n\r\n\r\n.t-label--sm {\r\n    font-weight: 600;\r\n    line-height: 1.5;\r\n    text-transform: uppercase;\r\n    letter-spacing: 1px;\r\n}\r\n\r\n\r\n.basicsSection-title.widescreen{\r\n    display: block;\r\n}\r\n\r\n\r\n.t-h4--sansSerif {\r\n    font-weight: 600;\r\n}\r\n\r\n\r\n.t-h4--sansSerif {\r\n    letter-spacing: 0;\r\n    line-height: 1.4;\r\n    font-size:2.5rem;\r\n}\r\n\r\n\r\n.basicsSection-title{\r\n    margin-top: 8px;\r\n}\r\n\r\n\r\n.basicsSection-tagline.widescreen {\r\n    display: block;\r\n    margin: .25rem 0 1rem;\r\n}\r\n\r\n\r\n.t-body--sansSerif--lg {\r\n    font-size: 1.5rem;\r\n    line-height: 1.5;\r\n    font-weight: 500;\r\n    letter-spacing: 0;\r\n}\r\n\r\n\r\n.basicsCampaignOwner {\r\n    padding: 0 0 .75rem;\r\n}\r\n\r\n\r\n.columns.is-gapless {\r\n    margin-left: 0;\r\n    margin-right: 0;\r\n    margin-top: 0;\r\n    display: flex;\r\n}\r\n\r\n\r\n.basicsCampaignOwner-icon.column.is-narrow {\r\n    margin: auto;\r\n}\r\n\r\n\r\n.column.is-narrow {\r\n    flex: none;\r\n}\r\n\r\n\r\n.basicsCampaignOwner-details {\r\n    margin-left: 8px;\r\n    margin-top:0px;\r\n}\r\n\r\n\r\n.basicsCampaignOwner-details-trust {\r\n    margin-top: 0;\r\n}\r\n\r\n\r\n.t-body--sansSerif{\r\n    font-size: .875rem;\r\n    line-height: 1.5;\r\n}\r\n\r\n\r\n.t-body--sansSerif{\r\n    font-weight: 500;\r\n    letter-spacing: 0;\r\n}\r\n\r\n\r\n.basicsCampaignOwner-details-city{\r\n    display: inline;\r\n    font-size: 1.5rem;\r\n}\r\n\r\n\r\na {\r\n  color: inherit;\r\n  text-decoration: inherit;\r\n}\r\n\r\n\r\na:-webkit-any-link {\r\n    color: -webkit-link;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.baseDiscoverableCard-categoryLink {\r\n    letter-spacing: 1px;\r\n    color: #6a6a6a;\r\n}\r\n\r\n\r\n.fundingDiscoverableCard-raisedContainer {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-bottom: .5rem;\r\n}\r\n\r\n\r\n.fundingDiscoverableCard-unitsRaisedNumber {\r\n    font-weight: 600;\r\n}\r\n\r\n\r\n.fundingDiscoverableCard-unitsRaisedText {\r\n    color: #6a6a6a;\r\n    font-size: 1.2rem;\r\n}\r\n\r\n\r\n.fundingDiscoverableCard-raisedPercentage{\r\n    color: #6a6a6a;\r\n    font-size: .90rem;\r\n}\r\n\r\n\r\n.campaignFundingBar.campaignFundingBar--compact {\r\n    height: 20px;\r\n}\r\n\r\n\r\n.campaignFundingBar{\r\n    position: relative;\r\n    height: 20px;\r\n    width: 100%;\r\n    border-radius: 5px;\r\n    background: #ddd;\r\n}\r\n\r\n\r\n.campaignFundingBar-progress.campaignFundingBar-progress--compact {\r\n    height: 20px;\r\n}\r\n\r\n\r\n.campaignFundingBar-progress {\r\n    position: absolute;\r\n    height: 20px;\r\n    background:#0091da;\r\n    border-radius: 5px 0 0 5px;\r\n}\r\n\r\n\r\n.campaignFundingBar-progress.campaignFundingBar-progress--full {\r\n    border-radius: 20px;\r\n}\r\n\r\n\r\n.fundingDiscoverableCard-footerBottom {\r\n    margin-top: .5rem;\r\n    color: #6a6a6a;\r\n}\r\n\r\n\r\n.fundingDiscoverableCard-timeLeft {\r\n    margin-left: .25rem;\r\n}\r\n\r\n\r\n.fund-bar{\r\n    margin-top: 1rem;\r\n}\r\n\r\n\r\n.routerContentSection-content {\r\n    margin-top: 2rem;\r\n}\r\n\r\n\r\n.faqSection-container {\r\n    padding-top: 8px;\r\n    padding-bottom: 24px;\r\n}\r\n\r\n\r\n.campaignFaq-container {\r\n    padding-top: 24px;\r\n}\r\n\r\n\r\n.t-weight--medium {\r\n    font-weight: 600;\r\n}\r\n\r\n\r\n.campaignFaq-question {\r\n    margin-bottom: 8px;\r\n}\r\n\r\n\r\n.campaignFaq-answer {\r\n    color: #6a6a6a;\r\n}\r\n\r\n\r\n.employee_v5 {\r\n    width: 200px;\r\n    margin: 20px;\r\n    position: relative;\r\n    text-align: center;\r\n}\r\n\r\n\r\n.employee-content{\r\n    padding-top: 0px;\r\n}\r\n\r\n\r\n.teamMemberName{\r\n    font-size: 1.12em;\r\n    font-weight: bold;\r\n    color: goldenrod;\r\n    text-align: center;\r\n}\r\n\r\n\r\n.teamMemberRole{\r\n    font-size: .875em;\r\n    margin-bottom: 3px;\r\n    margin-top: 3px;\r\n    margin: 0;\r\n    padding: 0;\r\n    text-align: center;\r\n}\r\n\r\n\r\n.networks{\r\n    margin-top: 1px;\r\n    text-align: center;\r\n}\r\n\r\n\r\nul {\r\n    list-style: none;\r\n}\r\n\r\n\r\nul li:before {\r\n  content: '✓';\r\n}\r\n\r\n\r\n.showOnlyLine{\r\n    background: transparent;\r\n    border: none;\r\n    border-bottom: 1px solid #000000;\r\n}\r\n\r\n\r\n.campainCategory{\r\n    font-weight: bold;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wcm9qZWN0L2NvbXBvbmVudHMvYnV5YmFjay1kZXRhaWwvYnV5YmFjay1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixtQ0FBbUM7SUFDbkMsb0NBQW9DO0lBQ3BDLCtDQUErQztBQUNuRDs7O0FBR0E7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7O0FBQ0M7SUFLRyxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLCtCQUErQjtBQUNuQzs7O0FBQ0E7SUFDSSxXQUFXO0lBQ1g7QUFDSjs7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7OztBQUNBO0lBQ0ksU0FBUztJQUNULHFCQUFxQjtJQUNyQixjQUFjO0FBQ2xCOzs7QUFFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7OztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOzs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7O0FBR0E7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkI7OztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7OztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7OztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCOzs7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7O0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7OztBQUNBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixhQUFhO0lBQ2IsYUFBYTtBQUNqQjs7O0FBQ0E7SUFDSSxZQUFZO0FBQ2hCOzs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7OztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOzs7QUFFQTtFQUNFLGNBQWM7RUFDZCx3QkFBd0I7QUFDMUI7OztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7OztBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7OztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixvQkFBb0I7QUFDeEI7OztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7OztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7OztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiwwQkFBMEI7QUFDOUI7OztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOzs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7OztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCOzs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixvQkFBb0I7QUFDeEI7OztBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCOzs7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7OztBQUNBO0lBQ0ksY0FBYztBQUNsQjs7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7OztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixTQUFTO0lBQ1QsVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7OztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixnQ0FBZ0M7QUFDcEM7OztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6ImFwcC9wcm9qZWN0L2NvbXBvbmVudHMvYnV5YmFjay1kZXRhaWwvYnV5YmFjay1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgZm9udC1mYW1pbHk6IGJlbnRvbi1zYW5zLEhlbHZldGljYSxcIlNhbnMtc2VyaWZcIjtcclxufVxyXG5cclxuXHJcbi5hbm51YWxfcmVwb3J0IC5udW1iZXJzLWJsb2NrIHtcclxuICAgIHRleHQtYWxpZ246IENlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICB3aWR0aDogMjI1cHg7XHJcbn1cclxuIC5mbGV4Ym94LXJvdy1jZW50ZXIge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAtd2Via2l0LWZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4ucmVwb3J0LWljb25ze1xyXG4gICAgd2lkdGg6IDYxcHg7XHJcbiAgICBoZWlnaHQ6IDczcHhcclxufVxyXG5cclxuLmNvbHVtbi5pcy1uYXJyb3cge1xyXG4gICAgZmxleDogbm9uZTtcclxufVxyXG4uY29sdW1uIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uY2FtcGFpZ25MYXlvdXQtdG9wQ29udGVudCAuY2FtcGFpZ25MYXlvdXQtdG9wQ29udGVudC1yaWdodCB7XHJcbiAgICB3aWR0aDogMzkwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMS41cmVtO1xyXG59XHJcblxyXG5kaXYge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5iYXNpY3NTZWN0aW9uLXN0YXR1c0xhYmVsLndpZGVzY3JlZW57XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uZnVuZGluZ0NvbG9yIHtcclxuICAgIGNvbG9yOiAjMDg4MzY2O1xyXG59XHJcblxyXG4udC1sYWJlbC0tc20ge1xyXG4gICAgZm9udC1zaXplOiAxLjNyZW07XHJcbn1cclxuXHJcblxyXG4udC1sYWJlbC0tc20ge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxufVxyXG5cclxuLmJhc2ljc1NlY3Rpb24tdGl0bGUud2lkZXNjcmVlbntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4udC1oNC0tc2Fuc1NlcmlmIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi50LWg0LS1zYW5zU2VyaWYge1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS40O1xyXG4gICAgZm9udC1zaXplOjIuNXJlbTtcclxufVxyXG5cclxuLmJhc2ljc1NlY3Rpb24tdGl0bGV7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbn1cclxuLmJhc2ljc1NlY3Rpb24tdGFnbGluZS53aWRlc2NyZWVuIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAuMjVyZW0gMCAxcmVtO1xyXG59XHJcbi50LWJvZHktLXNhbnNTZXJpZi0tbGcge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG59XHJcbi5iYXNpY3NDYW1wYWlnbk93bmVyIHtcclxuICAgIHBhZGRpbmc6IDAgMCAuNzVyZW07XHJcbn1cclxuLmNvbHVtbnMuaXMtZ2FwbGVzcyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5iYXNpY3NDYW1wYWlnbk93bmVyLWljb24uY29sdW1uLmlzLW5hcnJvdyB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5jb2x1bW4uaXMtbmFycm93IHtcclxuICAgIGZsZXg6IG5vbmU7XHJcbn1cclxuXHJcbi5iYXNpY3NDYW1wYWlnbk93bmVyLWRldGFpbHMge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgIG1hcmdpbi10b3A6MHB4O1xyXG59XHJcblxyXG4uYmFzaWNzQ2FtcGFpZ25Pd25lci1kZXRhaWxzLXRydXN0IHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuXHJcbi50LWJvZHktLXNhbnNTZXJpZntcclxuICAgIGZvbnQtc2l6ZTogLjg3NXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbn1cclxuXHJcbi50LWJvZHktLXNhbnNTZXJpZntcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcclxufVxyXG5cclxuLmJhc2ljc0NhbXBhaWduT3duZXItZGV0YWlscy1jaXR5e1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbmEge1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcclxufVxyXG5cclxuYTotd2Via2l0LWFueS1saW5rIHtcclxuICAgIGNvbG9yOiAtd2Via2l0LWxpbms7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmJhc2VEaXNjb3ZlcmFibGVDYXJkLWNhdGVnb3J5TGluayB7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgY29sb3I6ICM2YTZhNmE7XHJcbn1cclxuXHJcbi5mdW5kaW5nRGlzY292ZXJhYmxlQ2FyZC1yYWlzZWRDb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xyXG59XHJcblxyXG4uZnVuZGluZ0Rpc2NvdmVyYWJsZUNhcmQtdW5pdHNSYWlzZWROdW1iZXIge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmZ1bmRpbmdEaXNjb3ZlcmFibGVDYXJkLXVuaXRzUmFpc2VkVGV4dCB7XHJcbiAgICBjb2xvcjogIzZhNmE2YTtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG59XHJcblxyXG4uZnVuZGluZ0Rpc2NvdmVyYWJsZUNhcmQtcmFpc2VkUGVyY2VudGFnZXtcclxuICAgIGNvbG9yOiAjNmE2YTZhO1xyXG4gICAgZm9udC1zaXplOiAuOTByZW07XHJcbn1cclxuXHJcbi5jYW1wYWlnbkZ1bmRpbmdCYXIuY2FtcGFpZ25GdW5kaW5nQmFyLS1jb21wYWN0IHtcclxuICAgIGhlaWdodDogMjBweDtcclxufVxyXG5cclxuLmNhbXBhaWduRnVuZGluZ0JhcntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2RkZDtcclxufVxyXG5cclxuLmNhbXBhaWduRnVuZGluZ0Jhci1wcm9ncmVzcy5jYW1wYWlnbkZ1bmRpbmdCYXItcHJvZ3Jlc3MtLWNvbXBhY3Qge1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uY2FtcGFpZ25GdW5kaW5nQmFyLXByb2dyZXNzIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGJhY2tncm91bmQ6IzAwOTFkYTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCAwIDAgNXB4O1xyXG59XHJcblxyXG4uY2FtcGFpZ25GdW5kaW5nQmFyLXByb2dyZXNzLmNhbXBhaWduRnVuZGluZ0Jhci1wcm9ncmVzcy0tZnVsbCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4uZnVuZGluZ0Rpc2NvdmVyYWJsZUNhcmQtZm9vdGVyQm90dG9tIHtcclxuICAgIG1hcmdpbi10b3A6IC41cmVtO1xyXG4gICAgY29sb3I6ICM2YTZhNmE7XHJcbn1cclxuXHJcbi5mdW5kaW5nRGlzY292ZXJhYmxlQ2FyZC10aW1lTGVmdCB7XHJcbiAgICBtYXJnaW4tbGVmdDogLjI1cmVtO1xyXG59XHJcblxyXG4uZnVuZC1iYXJ7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcbi5yb3V0ZXJDb250ZW50U2VjdGlvbi1jb250ZW50IHtcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbn1cclxuLmZhcVNlY3Rpb24tY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjRweDtcclxufVxyXG4uY2FtcGFpZ25GYXEtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmctdG9wOiAyNHB4O1xyXG59XHJcbi50LXdlaWdodC0tbWVkaXVtIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5jYW1wYWlnbkZhcS1xdWVzdGlvbiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuLmNhbXBhaWduRmFxLWFuc3dlciB7XHJcbiAgICBjb2xvcjogIzZhNmE2YTtcclxufVxyXG5cclxuLmVtcGxveWVlX3Y1IHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmVtcGxveWVlLWNvbnRlbnR7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG59XHJcblxyXG4udGVhbU1lbWJlck5hbWV7XHJcbiAgICBmb250LXNpemU6IDEuMTJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IGdvbGRlbnJvZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnRlYW1NZW1iZXJSb2xle1xyXG4gICAgZm9udC1zaXplOiAuODc1ZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubmV0d29ya3N7XHJcbiAgICBtYXJnaW4tdG9wOiAxcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbnVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuICBcclxudWwgbGk6YmVmb3JlIHtcclxuICBjb250ZW50OiAn4pyTJztcclxufVxyXG5cclxuLnNob3dPbmx5TGluZXtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDAwMDA7XHJcbn0gICAgXHJcblxyXG4uY2FtcGFpbkNhdGVnb3J5e1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/project/components/buyback-detail/buyback-detail.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/project/components/buyback-detail/buyback-detail.component.ts ***!
  \*******************************************************************************/
/*! exports provided: BuybackDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuybackDetailComponent", function() { return BuybackDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/http.service */ "./src/app/core/services/http.service.ts");
/* harmony import */ var src_app_core_services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/cart.service */ "./src/app/core/services/cart.service.ts");
/* harmony import */ var src_app_user_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/user/auth.service */ "./src/app/user/auth.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");







let BuybackDetailComponent = class BuybackDetailComponent {
    constructor(router, sanitizer, route, http, cartService, authService) {
        this.router = router;
        this.sanitizer = sanitizer;
        this.route = route;
        this.http = http;
        this.cartService = cartService;
        this.authService = authService;
        this.pageTitle = 'Buy Back Detail';
        this.amountAlreadyInvested = 0;
        this.percentage = 0;
        this.currentInvestmentValue = 0;
        this.sellOrder = {
            item_id: 0,
            item_name: '',
            invest_type: 'I',
            buyBackPercentage: 0,
            declaredPercenatege: 0,
            user_id: this.authService.currentUser.id,
            remainingAmount: 0
        };
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            const id = params.get('id');
            console.log(id);
            this.getBuybackDetails(+id);
        });
    }
    getAmountFromCart(campaignId) {
        var percentage = 0;
        this.cartService.getCurrentSellCartOrders().forEach(element => {
            if ((element.item_id == campaignId)) {
                percentage = element.declaredPercenatege;
            }
        });
        return percentage;
    }
    getBuybackDetails(campaignid) {
        // var url = "getMainCampaignDetailsOnCampaignId/" +campaignid ;
        var url = "getBuyBackMainCampaignDetail/" + campaignid;
        this.http.getRestData(url).subscribe(data => {
            if (data.status == 200) {
                console.log(campaignid + '--------campaign id');
                let responseJson = JSON.parse((data.body));
                this.buybackDetails = responseJson;
                console.log(this.buybackDetails);
                this.amountAlreadyInvested = this.authService.amountInvestedInInvestment(campaignid, 'I');
                this.currentInvestmentValue = this.amountAlreadyInvested * (this.buybackDetails.buyback_return_percentage / 100);
                this.percentage = this.getAmountFromCart(campaignid);
                // video content
                var tempurl = "https://www.youtube.com/embed/bNpx7gp";
                if (this.buybackDetails.mainCampaign.campaignMedias != null) {
                    this.buybackDetails.mainCampaign.campaignMedias.forEach(element => {
                        if (element.file_location.toString().includes("youtube")) {
                            tempurl = element.file_location.toString();
                        }
                    });
                }
                this.trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(tempurl);
                console.log(this.percentage);
            }
            else {
                console.log("error in get rest data");
                this.buybackDetails = null;
            }
        }, error => {
            console.log("error in get rest data");
        });
    }
    checkOut() {
        console.log('checkOut-sell called');
        this.cartValue = this.amountAlreadyInvested * (1 - this.percentage / 100);
        this.sellOrder.item_id = this.buybackDetails.mainCampaign.campaignDetail.id;
        this.sellOrder.item_name = this.buybackDetails.mainCampaign.campaignDetail.name;
        this.sellOrder.invest_type = 'I';
        this.sellOrder.user_id = this.authService.currentUser.id;
        this.sellOrder.buyBackPercentage = this.buybackDetails.buyback_return_percentage;
        this.sellOrder.declaredPercenatege = this.percentage;
        this.sellOrder.remainingAmount = this.cartValue;
        this.cartService.addToSellCart(this.sellOrder);
        console.log(this.cartService.currentSellOrders);
    }
};
BuybackDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_core_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
    { type: src_app_core_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"] },
    { type: src_app_user_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
BuybackDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-buyback-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./buyback-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/project/components/buyback-detail/buyback-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./buyback-detail.component.css */ "./src/app/project/components/buyback-detail/buyback-detail.component.css")).default]
    })
], BuybackDetailComponent);



/***/ }),

/***/ "./src/app/project/components/buyback-list/buyback-list.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/project/components/buyback-list/buyback-list.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".campaignCarousel-header {\r\n    margin: 0;\r\n}\r\n\r\n.t-h4--serif {\r\n    font-size: 3.5rem;\r\n    font-weight: 400;\r\n    letter-spacing: 0;\r\n    line-height: 1.3;\r\n    font-family: ff-more-web-pro,Georgia,\"Serif\";\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wcm9qZWN0L2NvbXBvbmVudHMvYnV5YmFjay1saXN0L2J1eWJhY2stbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLDRDQUE0QztBQUNoRCIsImZpbGUiOiJhcHAvcHJvamVjdC9jb21wb25lbnRzL2J1eWJhY2stbGlzdC9idXliYWNrLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYW1wYWlnbkNhcm91c2VsLWhlYWRlciB7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi50LWg0LS1zZXJpZiB7XHJcbiAgICBmb250LXNpemU6IDMuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbiAgICBmb250LWZhbWlseTogZmYtbW9yZS13ZWItcHJvLEdlb3JnaWEsXCJTZXJpZlwiO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/project/components/buyback-list/buyback-list.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/project/components/buyback-list/buyback-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: BuybackListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuybackListComponent", function() { return BuybackListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/http.service */ "./src/app/core/services/http.service.ts");
/* harmony import */ var src_app_user_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/user/auth.service */ "./src/app/user/auth.service.ts");





let BuybackListComponent = class BuybackListComponent {
    constructor(route, http, authService) {
        this.route = route;
        this.http = http;
        this.authService = authService;
        this.listSize = 0;
    }
    ngOnInit() {
        if (this.authService.currentUser != null) {
            this.user = this.authService.getCurrentUser();
            console.log(this.user);
            this.getActiveInvestedBuybacks(this.user.id);
        }
    }
    get isInvestorLoggedIn() {
        return this.authService.getRole() == 1;
    }
    getActiveInvestedBuybacks(userid) {
        this.listSize = 0;
        var url = "getBuyBackMainCampaignDetails/" + userid;
        this.http.getRestData(url).subscribe(data => {
            if (data.status == 200) {
                let responseJson = JSON.parse((data.body));
                this.buybackList = responseJson;
                console.log(this.buybackList);
                this.buybackList.forEach(element => {
                    this.listSize++;
                });
                console.log(this.buybackList);
            }
            else {
                console.log("error in get rest data");
                this.buybackList = null;
            }
        }, error => {
            console.log("error in get rest data");
        });
    }
};
BuybackListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_core_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
    { type: src_app_user_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
BuybackListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-buyback-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./buyback-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/project/components/buyback-list/buyback-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./buyback-list.component.css */ "./src/app/project/components/buyback-list/buyback-list.component.css")).default]
    })
], BuybackListComponent);



/***/ }),

/***/ "./src/app/project/components/campaign-compact/campaign-compact.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/project/components/campaign-compact/campaign-compact.component.css ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\r\n    box-sizing: border-box;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: antialiased;\r\n}\r\n\r\na {\r\n  color: inherit;\r\n  text-decoration: inherit;\r\n}\r\n\r\na:-webkit-any-link {\r\n    color: -webkit-link;\r\n    cursor: pointer;\r\n}\r\n\r\n/*ECF - Purvi Jain Changes*/\r\n\r\n.homepageLayout {\r\n    padding-left: 0rem;\r\n    padding-right: 0rem;\r\n    max-width: 1280px;\r\n}\r\n\r\n.campaignCarousel {\r\n    overflow: hidden;\r\n    width: 100%;\r\n    margin: auto;\r\n}\r\n\r\n.campaignCarousel-header {\r\n    margin: 0;\r\n}\r\n\r\n.t-h4--serif {\r\n    font-size: 2.5rem;\r\n    font-weight: 400;\r\n    letter-spacing: 0;\r\n    line-height: 1.3;\r\n    font-family: ff-more-web-pro,Georgia,\"Serif\";\r\n}\r\n\r\n.campaignCarousel-carousel, .campaignCarousel-header{\r\n    display: flex;\r\n    align-items: baseline;\r\n}\r\n\r\n.campaignCarousel-header {\r\n    justify-content: space-between;\r\n}\r\n\r\n/*Purvi Jain*/\r\n\r\n.campaignCarousel-carouselCard {\r\n    /* width: 275px; */\r\n    margin-top: 3.5rem;\r\n    /* margin-right: 2.5rem; */\r\n}\r\n\r\n.baseDiscoverableCard {\r\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n    transition: 0.3s;\r\n    width: 99%; /*Purvi Jain*/\r\n    border: 1px solid #ddd;\r\n    border-radius: 2px;\r\n    cursor: pointer;\r\n    transition: all .3s cubic-bezier(.16,.8,.45,1);\r\n    position: relative;\r\n    background-color: #fff;\r\n}\r\n\r\n.baseDiscoverableCard:hover {\r\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n  }\r\n\r\n.baseDiscoverableCard-content {\r\n    padding: 0 1rem 1rem;\r\n    text-align: left;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n}\r\n\r\n.baseDiscoverableCard-image {\r\n    width: 100%;\r\n    background-position: 50%;\r\n    background-size: cover;\r\n}\r\n\r\n.baseDiscoverableCard-header {\r\n    padding-top: .75rem;\r\n}\r\n\r\n.projectTypeHeader {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.projectTypeHeader-label.projectTypeHeader-label--campaign {\r\n    color: #088366;\r\n}\r\n\r\n.projectTypeHeader-label {\r\n    letter-spacing: 1px;\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.baseDiscoverableCard-contentTop{\r\n    display: flex;\r\n    margin-top: .75rem;\r\n}\r\n\r\n.baseDiscoverableCard-title{\r\n    font-weight: 600;\r\n    font-size: 2.25rem;\r\n}\r\n\r\n.baseDiscoverableCard-body {\r\n    font-size: 1.1rem;\r\n    line-height: 1.5;\r\n    color: #6a6a6a;\r\n    margin-top: .25rem;\r\n    margin-bottom: .25rem;\r\n}\r\n\r\n.baseDiscoverableCard-categoryLink {\r\n    letter-spacing: 1px;\r\n    color: #6a6a6a;\r\n}\r\n\r\n.fundingDiscoverableCard-raisedContainer {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.fundingDiscoverableCard-unitsRaisedNumber {\r\n    font-weight: 600;\r\n}\r\n\r\n.fundingDiscoverableCard-unitsRaisedText {\r\n    color: #6a6a6a;\r\n    font-size: .75rem;\r\n}\r\n\r\n.fundingDiscoverableCard-raisedPercentage{\r\n    color: #6a6a6a;\r\n    font-size: .90rem;\r\n}\r\n\r\n.campaignFundingBar.campaignFundingBar--compact {\r\n    height: 7px;\r\n}\r\n\r\n.campaignFundingBar{\r\n    position: relative;\r\n    height: 10px;\r\n    width: 100%;\r\n    border-radius: 5px;\r\n    background: #ddd;\r\n}\r\n\r\n.campaignFundingBar-progress.campaignFundingBar-progress--compact {\r\n    height: 7px;\r\n}\r\n\r\n.campaignFundingBar-progress {\r\n    position: absolute;\r\n    height: 10px;\r\n    background: #34ca96;\r\n    border-radius: 5px 0 0 5px;\r\n}\r\n\r\n.campaignFundingBar-progress.campaignFundingBar-progress--full {\r\n    border-radius: 5px;\r\n}\r\n\r\n.fundingDiscoverableCard-footerBottom {\r\n    margin-top: .5rem;\r\n    color: #6a6a6a;\r\n}\r\n\r\n.fundingDiscoverableCard-timeLeft {\r\n    margin-left: .25rem;\r\n}\r\n\r\n/*ECF - Purvi Jain Changes*/\r\n\r\n.col-lg-4 {\r\n    padding-left: -15px !important;\r\n    padding-right: -15x !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wcm9qZWN0L2NvbXBvbmVudHMvY2FtcGFpZ24tY29tcGFjdC9jYW1wYWlnbi1jb21wYWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsbUNBQW1DO0lBQ25DLG9DQUFvQztBQUN4Qzs7QUFFQTtFQUNFLGNBQWM7RUFDZCx3QkFBd0I7QUFDMUI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQSwyQkFBMkI7O0FBQzNCO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsNENBQTRDO0FBQ2hEOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQSxhQUFhOztBQUNiO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSx1Q0FBdUM7SUFDdkMsZ0JBQWdCO0lBQ2hCLFVBQVUsRUFBRSxhQUFhO0lBQ3pCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLDhDQUE4QztJQUM5QyxrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksNENBQTRDO0VBQzlDOztBQUVGO0lBQ0ksb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCx3QkFBd0I7SUFDeEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUdBLDJCQUEyQjs7QUFDM0I7SUFDSSw4QkFBOEI7SUFDOUIsOEJBQThCO0FBQ2xDIiwiZmlsZSI6ImFwcC9wcm9qZWN0L2NvbXBvbmVudHMvY2FtcGFpZ24tY29tcGFjdC9jYW1wYWlnbi1jb21wYWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxufVxyXG5cclxuYSB7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xyXG59XHJcblxyXG5hOi13ZWJraXQtYW55LWxpbmsge1xyXG4gICAgY29sb3I6IC13ZWJraXQtbGluaztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLypFQ0YgLSBQdXJ2aSBKYWluIENoYW5nZXMqL1xyXG4uaG9tZXBhZ2VMYXlvdXQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcmVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogMHJlbTtcclxuICAgIG1heC13aWR0aDogMTI4MHB4O1xyXG59XHJcblxyXG4uY2FtcGFpZ25DYXJvdXNlbCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5jYW1wYWlnbkNhcm91c2VsLWhlYWRlciB7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi50LWg0LS1zZXJpZiB7XHJcbiAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbiAgICBmb250LWZhbWlseTogZmYtbW9yZS13ZWItcHJvLEdlb3JnaWEsXCJTZXJpZlwiO1xyXG59XHJcblxyXG4uY2FtcGFpZ25DYXJvdXNlbC1jYXJvdXNlbCwgLmNhbXBhaWduQ2Fyb3VzZWwtaGVhZGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxufVxyXG5cclxuLmNhbXBhaWduQ2Fyb3VzZWwtaGVhZGVyIHtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLypQdXJ2aSBKYWluKi9cclxuLmNhbXBhaWduQ2Fyb3VzZWwtY2Fyb3VzZWxDYXJkIHtcclxuICAgIC8qIHdpZHRoOiAyNzVweDsgKi9cclxuICAgIG1hcmdpbi10b3A6IDMuNXJlbTtcclxuICAgIC8qIG1hcmdpbi1yaWdodDogMi41cmVtOyAqL1xyXG59XHJcblxyXG4uYmFzZURpc2NvdmVyYWJsZUNhcmQge1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgIHdpZHRoOiA5OSU7IC8qUHVydmkgSmFpbiovXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyBjdWJpYy1iZXppZXIoLjE2LC44LC40NSwxKTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5iYXNlRGlzY292ZXJhYmxlQ2FyZDpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcclxuICB9XHJcblxyXG4uYmFzZURpc2NvdmVyYWJsZUNhcmQtY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAwIDFyZW0gMXJlbTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmJhc2VEaXNjb3ZlcmFibGVDYXJkLWltYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmJhc2VEaXNjb3ZlcmFibGVDYXJkLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nLXRvcDogLjc1cmVtO1xyXG59XHJcblxyXG4ucHJvamVjdFR5cGVIZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLnByb2plY3RUeXBlSGVhZGVyLWxhYmVsLnByb2plY3RUeXBlSGVhZGVyLWxhYmVsLS1jYW1wYWlnbiB7XHJcbiAgICBjb2xvcjogIzA4ODM2NjtcclxufVxyXG5cclxuLnByb2plY3RUeXBlSGVhZGVyLWxhYmVsIHtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5cclxuLmJhc2VEaXNjb3ZlcmFibGVDYXJkLWNvbnRlbnRUb3B7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLXRvcDogLjc1cmVtO1xyXG59XHJcblxyXG4uYmFzZURpc2NvdmVyYWJsZUNhcmQtdGl0bGV7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAyLjI1cmVtO1xyXG59XHJcblxyXG4uYmFzZURpc2NvdmVyYWJsZUNhcmQtYm9keSB7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBjb2xvcjogIzZhNmE2YTtcclxuICAgIG1hcmdpbi10b3A6IC4yNXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IC4yNXJlbTtcclxufVxyXG5cclxuLmJhc2VEaXNjb3ZlcmFibGVDYXJkLWNhdGVnb3J5TGluayB7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgY29sb3I6ICM2YTZhNmE7XHJcbn1cclxuXHJcbi5mdW5kaW5nRGlzY292ZXJhYmxlQ2FyZC1yYWlzZWRDb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmZ1bmRpbmdEaXNjb3ZlcmFibGVDYXJkLXVuaXRzUmFpc2VkTnVtYmVyIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5mdW5kaW5nRGlzY292ZXJhYmxlQ2FyZC11bml0c1JhaXNlZFRleHQge1xyXG4gICAgY29sb3I6ICM2YTZhNmE7XHJcbiAgICBmb250LXNpemU6IC43NXJlbTtcclxufVxyXG5cclxuLmZ1bmRpbmdEaXNjb3ZlcmFibGVDYXJkLXJhaXNlZFBlcmNlbnRhZ2V7XHJcbiAgICBjb2xvcjogIzZhNmE2YTtcclxuICAgIGZvbnQtc2l6ZTogLjkwcmVtO1xyXG59XHJcblxyXG4uY2FtcGFpZ25GdW5kaW5nQmFyLmNhbXBhaWduRnVuZGluZ0Jhci0tY29tcGFjdCB7XHJcbiAgICBoZWlnaHQ6IDdweDtcclxufVxyXG5cclxuLmNhbXBhaWduRnVuZGluZ0JhcntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2RkZDtcclxufVxyXG5cclxuLmNhbXBhaWduRnVuZGluZ0Jhci1wcm9ncmVzcy5jYW1wYWlnbkZ1bmRpbmdCYXItcHJvZ3Jlc3MtLWNvbXBhY3Qge1xyXG4gICAgaGVpZ2h0OiA3cHg7XHJcbn1cclxuXHJcbi5jYW1wYWlnbkZ1bmRpbmdCYXItcHJvZ3Jlc3Mge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzM0Y2E5NjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCAwIDAgNXB4O1xyXG59XHJcblxyXG4uY2FtcGFpZ25GdW5kaW5nQmFyLXByb2dyZXNzLmNhbXBhaWduRnVuZGluZ0Jhci1wcm9ncmVzcy0tZnVsbCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5mdW5kaW5nRGlzY292ZXJhYmxlQ2FyZC1mb290ZXJCb3R0b20ge1xyXG4gICAgbWFyZ2luLXRvcDogLjVyZW07XHJcbiAgICBjb2xvcjogIzZhNmE2YTtcclxufVxyXG5cclxuLmZ1bmRpbmdEaXNjb3ZlcmFibGVDYXJkLXRpbWVMZWZ0IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAuMjVyZW07XHJcbn1cclxuXHJcblxyXG4vKkVDRiAtIFB1cnZpIEphaW4gQ2hhbmdlcyovXHJcbi5jb2wtbGctNCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IC0xNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAtMTV4ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/project/components/campaign-compact/campaign-compact.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/project/components/campaign-compact/campaign-compact.component.ts ***!
  \***********************************************************************************/
/*! exports provided: CampaignCompactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignCompactComponent", function() { return CampaignCompactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/http.service */ "./src/app/core/services/http.service.ts");
/* harmony import */ var src_app_user_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/user/auth.service */ "./src/app/user/auth.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var src_app_core_services_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/cart.service */ "./src/app/core/services/cart.service.ts");







let CampaignCompactComponent = class CampaignCompactComponent {
    constructor(router, sanitizer, route, http, cartService, authService) {
        this.router = router;
        this.sanitizer = sanitizer;
        this.route = route;
        this.http = http;
        this.cartService = cartService;
        this.authService = authService;
        this.amountAlreadyInvested = 0;
        this.userRole = 25;
        this.daysLeft = 0;
    }
    ngOnInit() {
        this.userRole = this.authService.getRole();
        this.imageUrl = "https://images.pexels.com/photos/2933265/pexels-photo-2933265.jpeg?cs=srgb&dl=action-adult-bike-2933265.jpg&fm=";
        if (this.mainCampaign.campaignMedias != null) {
            this.mainCampaign.campaignMedias.forEach(element => {
                if (!element.file_location.toString().includes("youtube")) {
                    this.imageUrl = element.file_location.toString();
                }
            });
        }
        if (this.userRole == 1) {
            this.campaignDetail = this.mainCampaign.campaignDetail;
            this.amountAlreadyInvested = this.authService.amountInvestedInInvestment(this.campaignDetail.id, 'I');
        }
        let myDate = new Date();
        let endDate = new Date(this.mainCampaign.campaignDetail.end_date);
        let diffc = 0;
        diffc = endDate.getTime() - myDate.getTime();
        this.daysLeft = Math.round(Math.abs(diffc / (1000 * 60 * 60 * 24)));
    }
};
CampaignCompactComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_core_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
    { type: src_app_core_services_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"] },
    { type: src_app_user_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CampaignCompactComponent.prototype, "mainCampaign", void 0);
CampaignCompactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-campaign-compact',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./campaign-compact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/project/components/campaign-compact/campaign-compact.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./campaign-compact.component.css */ "./src/app/project/components/campaign-compact/campaign-compact.component.css")).default]
    })
], CampaignCompactComponent);



/***/ }),

/***/ "./src/app/project/components/campaign-detail/campaign-detail.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/project/components/campaign-detail/campaign-detail.component.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\r\n    box-sizing: border-box;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: antialiased;\r\n    font-family: benton-sans,Helvetica,\"Sans-serif\";\r\n}\r\n\r\n\r\n.annual_report .numbers-block {\r\n    text-align: Center;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n    margin: 10px;\r\n    width: 225px;\r\n}\r\n\r\n\r\n.flexbox-row-center {\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    -webkit-flex-wrap: wrap;\r\n    justify-content: center;\r\n    -webkit-justify-content: center;\r\n}\r\n\r\n\r\n.report-icons{\r\n    width: 61px;\r\n    height: 73px\r\n}\r\n\r\n\r\n.column.is-narrow {\r\n    flex: none;\r\n}\r\n\r\n\r\n.column {\r\n    margin: 0;\r\n    padding: 0 !important;\r\n    display: block;\r\n}\r\n\r\n\r\n.campaignLayout-topContent .campaignLayout-topContent-right {\r\n    width: 390px;\r\n    margin-left: 1.5rem;\r\n}\r\n\r\n\r\ndiv {\r\n    display: block;\r\n}\r\n\r\n\r\n.basicsSection-statusLabel.widescreen{\r\n    text-transform: uppercase;\r\n    display: block;\r\n    font-weight: 600;\r\n}\r\n\r\n\r\n.fundingColor {\r\n    color: #088366;\r\n}\r\n\r\n\r\n.t-label--sm {\r\n    font-size: 1.3rem;\r\n}\r\n\r\n\r\n.t-label--sm {\r\n    font-weight: 600;\r\n    line-height: 1.5;\r\n    text-transform: uppercase;\r\n    letter-spacing: 1px;\r\n}\r\n\r\n\r\n.basicsSection-title.widescreen{\r\n    display: block;\r\n}\r\n\r\n\r\n.t-h4--sansSerif {\r\n    font-weight: 600;\r\n}\r\n\r\n\r\n.t-h4--sansSerif {\r\n    letter-spacing: 0;\r\n    line-height: 1.4;\r\n    font-size:2.5rem;\r\n}\r\n\r\n\r\n.basicsSection-title{\r\n    margin-top: 8px;\r\n}\r\n\r\n\r\n.basicsSection-tagline.widescreen {\r\n    display: block;\r\n    margin: .25rem 0 1rem;\r\n}\r\n\r\n\r\n.t-body--sansSerif--lg {\r\n    font-size: 1.5rem;\r\n    line-height: 1.5;\r\n    font-weight: 500;\r\n    letter-spacing: 0;\r\n}\r\n\r\n\r\n.basicsCampaignOwner {\r\n    padding: 0 0 .75rem;\r\n}\r\n\r\n\r\n.columns.is-gapless {\r\n    margin-left: 0;\r\n    margin-right: 0;\r\n    margin-top: 0;\r\n    display: flex;\r\n}\r\n\r\n\r\n.basicsCampaignOwner-icon.column.is-narrow {\r\n    margin: auto;\r\n}\r\n\r\n\r\n.column.is-narrow {\r\n    flex: none;\r\n}\r\n\r\n\r\n.basicsCampaignOwner-details {\r\n    margin-left: 8px;\r\n    margin-top:0px;\r\n}\r\n\r\n\r\n.basicsCampaignOwner-details-trust {\r\n    margin-top: 0;\r\n}\r\n\r\n\r\n.t-body--sansSerif{\r\n    font-size: .875rem;\r\n    line-height: 1.5;\r\n}\r\n\r\n\r\n.t-body--sansSerif{\r\n    font-weight: 500;\r\n    letter-spacing: 0;\r\n}\r\n\r\n\r\n.basicsCampaignOwner-details-city{\r\n    display: inline;\r\n    font-size: 1.5rem;\r\n}\r\n\r\n\r\na {\r\n  color: inherit;\r\n  text-decoration: inherit;\r\n}\r\n\r\n\r\na:-webkit-any-link {\r\n    color: -webkit-link;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.baseDiscoverableCard-categoryLink {\r\n    letter-spacing: 1px;\r\n    color: #6a6a6a;\r\n}\r\n\r\n\r\n.fundingDiscoverableCard-raisedContainer {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-bottom: .5rem;\r\n}\r\n\r\n\r\n.fundingDiscoverableCard-unitsRaisedNumber {\r\n    font-weight: 600;\r\n}\r\n\r\n\r\n.fundingDiscoverableCard-unitsRaisedText {\r\n    color: #6a6a6a;\r\n    font-size: 1.2rem;\r\n}\r\n\r\n\r\n.fundingDiscoverableCard-raisedPercentage{\r\n    color: #6a6a6a;\r\n    font-size: .90rem;\r\n}\r\n\r\n\r\n.campaignFundingBar.campaignFundingBar--compact {\r\n    height: 20px;\r\n}\r\n\r\n\r\n.campaignFundingBar{\r\n    position: relative;\r\n    height: 20px;\r\n    width: 100%;\r\n    border-radius: 5px;\r\n    background: #ddd;\r\n}\r\n\r\n\r\n.campaignFundingBar-progress.campaignFundingBar-progress--compact {\r\n    height: 20px;\r\n}\r\n\r\n\r\n.campaignFundingBar-progress {\r\n    position: absolute;\r\n    height: 20px;\r\n    background:#0091da;\r\n    border-radius: 5px 0 0 5px;\r\n}\r\n\r\n\r\n.campaignFundingBar-progress.campaignFundingBar-progress--full {\r\n    border-radius: 20px;\r\n}\r\n\r\n\r\n.fundingDiscoverableCard-footerBottom {\r\n    margin-top: .5rem;\r\n    color: #6a6a6a;\r\n}\r\n\r\n\r\n.fundingDiscoverableCard-timeLeft {\r\n    margin-left: .25rem;\r\n}\r\n\r\n\r\n.fund-bar{\r\n    margin-top: 1rem;\r\n}\r\n\r\n\r\n.routerContentSection-content {\r\n    margin-top: 2rem;\r\n}\r\n\r\n\r\n.faqSection-container {\r\n    padding-top: 8px;\r\n    padding-bottom: 24px;\r\n}\r\n\r\n\r\n.campaignFaq-container {\r\n    padding-top: 24px;\r\n}\r\n\r\n\r\n.t-weight--medium {\r\n    font-weight: 600;\r\n}\r\n\r\n\r\n.campaignFaq-question {\r\n    margin-bottom: 8px;\r\n}\r\n\r\n\r\n.campaignFaq-answer {\r\n    color: #6a6a6a;\r\n}\r\n\r\n\r\n.employee_v5 {\r\n    width: 200px;\r\n   \r\n    position: relative;\r\n    text-align: center;\r\n}\r\n\r\n\r\n.employee-content{\r\n    padding-top: 0px;\r\n}\r\n\r\n\r\n.teamMemberName{\r\n    font-size: 1.12em;\r\n    font-weight: bold;\r\n   \r\n    text-align: center;\r\n}\r\n\r\n\r\n.teamMemberRole{\r\n    font-size: .875em;\r\n    margin-bottom: 3px;\r\n    margin-top: 3px;\r\n    margin: 0;\r\n    padding: 0;\r\n    text-align: center;\r\n}\r\n\r\n\r\n.networks{\r\n    margin-top: 1px;\r\n    text-align: center;\r\n}\r\n\r\n\r\nul {\r\n    list-style: none;\r\n}\r\n\r\n\r\nul li:before {\r\n  content: '✓';\r\n}\r\n\r\n\r\n.showOnlyLine{\r\n    background: transparent;\r\n    border: none;\r\n    border-bottom: 1px solid #000000;\r\n}\r\n\r\n\r\n.campainCategory{\r\n    font-weight: bold;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wcm9qZWN0L2NvbXBvbmVudHMvY2FtcGFpZ24tZGV0YWlsL2NhbXBhaWduLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLG1DQUFtQztJQUNuQyxvQ0FBb0M7SUFDcEMsK0NBQStDO0FBQ25EOzs7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixZQUFZO0FBQ2hCOzs7QUFDQztJQUtHLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsK0JBQStCO0FBQ25DOzs7QUFDQTtJQUNJLFdBQVc7SUFDWDtBQUNKOzs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7O0FBQ0E7SUFDSSxTQUFTO0lBQ1QscUJBQXFCO0lBQ3JCLGNBQWM7QUFDbEI7OztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOzs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7OztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOzs7QUFHQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2Qjs7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxlQUFlO0FBQ25COzs7QUFDQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7QUFDekI7OztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOzs7QUFDQTtJQUNJLG1CQUFtQjtBQUN2Qjs7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGFBQWE7SUFDYixhQUFhO0FBQ2pCOzs7QUFDQTtJQUNJLFlBQVk7QUFDaEI7OztBQUVBO0lBQ0ksVUFBVTtBQUNkOzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7OztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOzs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7OztBQUVBO0VBQ0UsY0FBYztFQUNkLHdCQUF3QjtBQUMxQjs7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7O0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjs7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG9CQUFvQjtBQUN4Qjs7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7OztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOzs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7OztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDBCQUEwQjtBQUM5Qjs7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7OztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7OztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7O0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7OztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG9CQUFvQjtBQUN4Qjs7O0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7OztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCOzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7O0FBQ0E7SUFDSSxjQUFjO0FBQ2xCOzs7QUFFQTtJQUNJLFlBQVk7O0lBRVosa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7OztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjs7SUFFakIsa0JBQWtCO0FBQ3RCOzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOzs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7OztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOzs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGdDQUFnQztBQUNwQzs7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoiYXBwL3Byb2plY3QvY29tcG9uZW50cy9jYW1wYWlnbi1kZXRhaWwvY2FtcGFpZ24tZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgIGZvbnQtZmFtaWx5OiBiZW50b24tc2FucyxIZWx2ZXRpY2EsXCJTYW5zLXNlcmlmXCI7XHJcbn1cclxuXHJcblxyXG4uYW5udWFsX3JlcG9ydCAubnVtYmVycy1ibG9jayB7XHJcbiAgICB0ZXh0LWFsaWduOiBDZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgd2lkdGg6IDIyNXB4O1xyXG59XHJcbiAuZmxleGJveC1yb3ctY2VudGVyIHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgLXdlYmtpdC1mbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLnJlcG9ydC1pY29uc3tcclxuICAgIHdpZHRoOiA2MXB4O1xyXG4gICAgaGVpZ2h0OiA3M3B4XHJcbn1cclxuXHJcbi5jb2x1bW4uaXMtbmFycm93IHtcclxuICAgIGZsZXg6IG5vbmU7XHJcbn1cclxuLmNvbHVtbiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmNhbXBhaWduTGF5b3V0LXRvcENvbnRlbnQgLmNhbXBhaWduTGF5b3V0LXRvcENvbnRlbnQtcmlnaHQge1xyXG4gICAgd2lkdGg6IDM5MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEuNXJlbTtcclxufVxyXG5cclxuZGl2IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uYmFzaWNzU2VjdGlvbi1zdGF0dXNMYWJlbC53aWRlc2NyZWVue1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmZ1bmRpbmdDb2xvciB7XHJcbiAgICBjb2xvcjogIzA4ODM2NjtcclxufVxyXG5cclxuLnQtbGFiZWwtLXNtIHtcclxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG59XHJcblxyXG5cclxuLnQtbGFiZWwtLXNtIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbn1cclxuXHJcbi5iYXNpY3NTZWN0aW9uLXRpdGxlLndpZGVzY3JlZW57XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnQtaDQtLXNhbnNTZXJpZiB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4udC1oNC0tc2Fuc1NlcmlmIHtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICAgIGZvbnQtc2l6ZToyLjVyZW07XHJcbn1cclxuXHJcbi5iYXNpY3NTZWN0aW9uLXRpdGxle1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG59XHJcbi5iYXNpY3NTZWN0aW9uLXRhZ2xpbmUud2lkZXNjcmVlbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogLjI1cmVtIDAgMXJlbTtcclxufVxyXG4udC1ib2R5LS1zYW5zU2VyaWYtLWxnIHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcclxufVxyXG4uYmFzaWNzQ2FtcGFpZ25Pd25lciB7XHJcbiAgICBwYWRkaW5nOiAwIDAgLjc1cmVtO1xyXG59XHJcbi5jb2x1bW5zLmlzLWdhcGxlc3Mge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4uYmFzaWNzQ2FtcGFpZ25Pd25lci1pY29uLmNvbHVtbi5pcy1uYXJyb3cge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uY29sdW1uLmlzLW5hcnJvdyB7XHJcbiAgICBmbGV4OiBub25lO1xyXG59XHJcblxyXG4uYmFzaWNzQ2FtcGFpZ25Pd25lci1kZXRhaWxzIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICBtYXJnaW4tdG9wOjBweDtcclxufVxyXG5cclxuLmJhc2ljc0NhbXBhaWduT3duZXItZGV0YWlscy10cnVzdCB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcblxyXG4udC1ib2R5LS1zYW5zU2VyaWZ7XHJcbiAgICBmb250LXNpemU6IC44NzVyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG59XHJcblxyXG4udC1ib2R5LS1zYW5zU2VyaWZ7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbn1cclxuXHJcbi5iYXNpY3NDYW1wYWlnbk93bmVyLWRldGFpbHMtY2l0eXtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcblxyXG5hIHtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XHJcbn1cclxuXHJcbmE6LXdlYmtpdC1hbnktbGluayB7XHJcbiAgICBjb2xvcjogLXdlYmtpdC1saW5rO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5iYXNlRGlzY292ZXJhYmxlQ2FyZC1jYXRlZ29yeUxpbmsge1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIGNvbG9yOiAjNmE2YTZhO1xyXG59XHJcblxyXG4uZnVuZGluZ0Rpc2NvdmVyYWJsZUNhcmQtcmFpc2VkQ29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcclxufVxyXG5cclxuLmZ1bmRpbmdEaXNjb3ZlcmFibGVDYXJkLXVuaXRzUmFpc2VkTnVtYmVyIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5mdW5kaW5nRGlzY292ZXJhYmxlQ2FyZC11bml0c1JhaXNlZFRleHQge1xyXG4gICAgY29sb3I6ICM2YTZhNmE7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG5cclxuLmZ1bmRpbmdEaXNjb3ZlcmFibGVDYXJkLXJhaXNlZFBlcmNlbnRhZ2V7XHJcbiAgICBjb2xvcjogIzZhNmE2YTtcclxuICAgIGZvbnQtc2l6ZTogLjkwcmVtO1xyXG59XHJcblxyXG4uY2FtcGFpZ25GdW5kaW5nQmFyLmNhbXBhaWduRnVuZGluZ0Jhci0tY29tcGFjdCB7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5jYW1wYWlnbkZ1bmRpbmdCYXJ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQ6ICNkZGQ7XHJcbn1cclxuXHJcbi5jYW1wYWlnbkZ1bmRpbmdCYXItcHJvZ3Jlc3MuY2FtcGFpZ25GdW5kaW5nQmFyLXByb2dyZXNzLS1jb21wYWN0IHtcclxuICAgIGhlaWdodDogMjBweDtcclxufVxyXG5cclxuLmNhbXBhaWduRnVuZGluZ0Jhci1wcm9ncmVzcyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiMwMDkxZGE7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHggMCAwIDVweDtcclxufVxyXG5cclxuLmNhbXBhaWduRnVuZGluZ0Jhci1wcm9ncmVzcy5jYW1wYWlnbkZ1bmRpbmdCYXItcHJvZ3Jlc3MtLWZ1bGwge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLmZ1bmRpbmdEaXNjb3ZlcmFibGVDYXJkLWZvb3RlckJvdHRvbSB7XHJcbiAgICBtYXJnaW4tdG9wOiAuNXJlbTtcclxuICAgIGNvbG9yOiAjNmE2YTZhO1xyXG59XHJcblxyXG4uZnVuZGluZ0Rpc2NvdmVyYWJsZUNhcmQtdGltZUxlZnQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC4yNXJlbTtcclxufVxyXG5cclxuLmZ1bmQtYmFye1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG4ucm91dGVyQ29udGVudFNlY3Rpb24tY29udGVudCB7XHJcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG59XHJcbi5mYXFTZWN0aW9uLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDI0cHg7XHJcbn1cclxuLmNhbXBhaWduRmFxLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjRweDtcclxufVxyXG4udC13ZWlnaHQtLW1lZGl1bSB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uY2FtcGFpZ25GYXEtcXVlc3Rpb24ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG59XHJcbi5jYW1wYWlnbkZhcS1hbnN3ZXIge1xyXG4gICAgY29sb3I6ICM2YTZhNmE7XHJcbn1cclxuXHJcbi5lbXBsb3llZV92NSB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgIFxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZW1wbG95ZWUtY29udGVudHtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbn1cclxuXHJcbi50ZWFtTWVtYmVyTmFtZXtcclxuICAgIGZvbnQtc2l6ZTogMS4xMmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udGVhbU1lbWJlclJvbGV7XHJcbiAgICBmb250LXNpemU6IC44NzVlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxuICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5uZXR3b3Jrc3tcclxuICAgIG1hcmdpbi10b3A6IDFweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxudWwge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG4gIFxyXG51bCBsaTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICfinJMnO1xyXG59XHJcblxyXG4uc2hvd09ubHlMaW5le1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDAwMDtcclxufSAgICBcclxuXHJcbi5jYW1wYWluQ2F0ZWdvcnl7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/project/components/campaign-detail/campaign-detail.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/project/components/campaign-detail/campaign-detail.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CampaignDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignDetailComponent", function() { return CampaignDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/http.service */ "./src/app/core/services/http.service.ts");
/* harmony import */ var src_app_core_services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/cart.service */ "./src/app/core/services/cart.service.ts");
/* harmony import */ var src_app_user_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/user/auth.service */ "./src/app/user/auth.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");







let CampaignDetailComponent = class CampaignDetailComponent {
    constructor(router, sanitizer, route, http, cartService, authService) {
        this.router = router;
        this.sanitizer = sanitizer;
        this.route = route;
        this.http = http;
        this.cartService = cartService;
        this.authService = authService;
        this.count = 0;
        this.pageTitle = 'Product Detail';
        this.amountAlreadyInvested = 0;
        this.navLinks = [
            { label: "List of Active Campaigns", path: "campaignlist" },
            { label: "List of Funds", path: "welcome" }
        ];
        this.order = {
            item_id: 0,
            invest_type: 'I',
            user_id: this.authService.currentUser != null ? this.authService.currentUser.id : 25,
            item_name: '',
            amount: 0
        };
        this.amount = 0;
        this.daysLeft = 0;
    }
    ngOnInit() {
        //const resolvedData: ProductResolved =
        this.route.paramMap.subscribe(params => {
            const id = params.get('id');
            this.itemid = +id;
            console.log(id);
            this.getCampaignDetails(+id);
        });
    }
    getUserRole() {
        return this.authService.getRole();
    }
    getCampaignDetails(campaignid) {
        var url = "getMainCampaignDetailsOnCampaignId/" + campaignid;
        this.http.getRestData(url).subscribe(data => {
            if (data.status == 200) {
                let responseJson = JSON.parse((data.body));
                this.mainCampaignDetail = responseJson;
                this.amountAlreadyInvested = this.authService.amountInvestedInInvestment(campaignid, 'I');
                this.amount = this.getAmountFromCart(campaignid);
                this.percentageInvested = (100 * (this.mainCampaignDetail.campaignDetail.capitalRaisedIndividually +
                    this.mainCampaignDetail.campaignDetail.capitalRaisedInFunds) / this.mainCampaignDetail.campaignDetail.fund_required).toFixed(2);
                let myDate = new Date();
                let endDate = new Date(this.mainCampaignDetail.campaignDetail.end_date);
                let diffc = 0;
                diffc = endDate.getTime() - myDate.getTime();
                this.daysLeft = Math.round(Math.abs(diffc / (1000 * 60 * 60 * 24)));
                var tempurl = "https://www.youtube.com/embed/bNpx7gpSqbY";
                if (this.mainCampaignDetail.campaignMedias != null) {
                    this.mainCampaignDetail.campaignMedias.forEach(element => {
                        if (element.file_location.toString().includes("youtube")) {
                            tempurl = element.file_location.toString();
                        }
                    });
                }
                this.trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(tempurl);
                console.log(this.authService.getRole() + '--role');
                console.log(campaignid + '--campaign id');
                console.log(this.mainCampaignDetail);
            }
            else {
                console.log("error in get rest data");
                this.mainCampaignDetail = null;
            }
        }, error => {
            console.log("error in get rest data");
        });
    }
    getAmountFromCart(campaignId) {
        var amount = this.authService.amountInvestedInInvestment(campaignId, 'I');
        this.cartService.getCurrentCartOrders().forEach(element => {
            if ((element.item_id == campaignId)) {
                amount = element.amount;
            }
        });
        return amount;
    }
    isLoggedIn() {
        console.log('logging checking');
        return this.authService.isLoggedIn;
    }
    addToCart() {
        if (!this.authService.isLoggedIn) {
            this.router.navigate(['/login']);
        }
        console.log(this.amount);
        this.order.item_id = this.itemid;
        this.order.item_name = this.mainCampaignDetail.campaignDetail.name;
        this.order.invest_type = 'I';
        this.order.user_id = this.authService.currentUser.id;
        this.order.amount = this.amount;
        this.cartService.addToCart(this.order);
    }
};
CampaignDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_core_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
    { type: src_app_core_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"] },
    { type: src_app_user_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
CampaignDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-campaign-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./campaign-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/project/components/campaign-detail/campaign-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./campaign-detail.component.css */ "./src/app/project/components/campaign-detail/campaign-detail.component.css")).default]
    })
], CampaignDetailComponent);



/***/ }),

/***/ "./src/app/project/components/campaign-list/campaign-list.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/project/components/campaign-list/campaign-list.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".campaignCarousel-header {\r\n    margin: 0;\r\n}\r\n\r\n.t-h4--serif {\r\n    font-size: 3.5rem;\r\n    font-weight: 400;\r\n    letter-spacing: 0;\r\n    line-height: 1.3;\r\n    font-family: ff-more-web-pro,Georgia,\"Serif\";\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wcm9qZWN0L2NvbXBvbmVudHMvY2FtcGFpZ24tbGlzdC9jYW1wYWlnbi1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsNENBQTRDO0FBQ2hEIiwiZmlsZSI6ImFwcC9wcm9qZWN0L2NvbXBvbmVudHMvY2FtcGFpZ24tbGlzdC9jYW1wYWlnbi1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FtcGFpZ25DYXJvdXNlbC1oZWFkZXIge1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4udC1oNC0tc2VyaWYge1xyXG4gICAgZm9udC1zaXplOiAzLjVyZW07XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS4zO1xyXG4gICAgZm9udC1mYW1pbHk6IGZmLW1vcmUtd2ViLXBybyxHZW9yZ2lhLFwiU2VyaWZcIjtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/project/components/campaign-list/campaign-list.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/project/components/campaign-list/campaign-list.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CampaignListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignListComponent", function() { return CampaignListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/http.service */ "./src/app/core/services/http.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var src_app_core_services_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/cart.service */ "./src/app/core/services/cart.service.ts");
/* harmony import */ var src_app_user_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/user/auth.service */ "./src/app/user/auth.service.ts");







let CampaignListComponent = class CampaignListComponent {
    constructor(router, sanitizer, route, http, cartService, authService) {
        this.router = router;
        this.sanitizer = sanitizer;
        this.route = route;
        this.http = http;
        this.cartService = cartService;
        this.authService = authService;
        this.listSize = 0;
    }
    ngOnInit() {
        this.getAllCampaigns();
    }
    getAllCampaigns() {
        this.listSize = 0;
        var url = "getAllMainCampaignDetailsApprovedAndActive";
        this.http.getRestData(url).subscribe(data => {
            if (data.status == 200) {
                let responseJson = JSON.parse((data.body));
                this.mainCampaignDetails = responseJson;
                this.mainCampaignDetails.forEach(element => {
                    this.listSize++;
                });
                console.log(this.mainCampaignDetails);
            }
            else {
                console.log("error in get rest data");
                this.mainCampaignDetails = null;
            }
        }, error => {
            console.log("error in get rest data");
        });
    }
};
CampaignListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_core_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
    { type: src_app_core_services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"] },
    { type: src_app_user_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
];
CampaignListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-campaign-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./campaign-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/project/components/campaign-list/campaign-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./campaign-list.component.css */ "./src/app/project/components/campaign-list/campaign-list.component.css")).default]
    })
], CampaignListComponent);



/***/ }),

/***/ "./src/app/project/components/fund-compact/fund-compact.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/project/components/fund-compact/fund-compact.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\r\n    box-sizing: border-box;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: antialiased;\r\n}\r\n\r\na {\r\n  color: inherit;\r\n  text-decoration: inherit;\r\n}\r\n\r\na:-webkit-any-link {\r\n    color: -webkit-link;\r\n    cursor: pointer;\r\n}\r\n\r\n/* .homepageLayout {\r\n    padding-left: 2rem;\r\n    padding-right: 2rem;\r\n    max-width: 1280px;\r\n} */\r\n\r\n/*ECF - Purvi Jain Changes*/\r\n\r\n.homepageLayout {\r\n    padding-left: 0rem;\r\n    padding-right: 0rem;\r\n    max-width: 1280px;\r\n}\r\n\r\n.campaignCarousel {\r\n    overflow: hidden;\r\n    width: 100%;\r\n    margin: auto;\r\n}\r\n\r\n.campaignCarousel-header {\r\n    margin: 0;\r\n}\r\n\r\n.t-h4--serif {\r\n    font-size: 2.5rem;\r\n    font-weight: 400;\r\n    letter-spacing: 0;\r\n    line-height: 1.3;\r\n    font-family: ff-more-web-pro,Georgia,\"Serif\";\r\n}\r\n\r\n.campaignCarousel-carousel, .campaignCarousel-header{\r\n    display: flex;\r\n    align-items: baseline;\r\n}\r\n\r\n.campaignCarousel-header {\r\n    justify-content: space-between;\r\n}\r\n\r\n.campaignCarousel-carouselCard {\r\n    /* width: 275px; */\r\n    margin-top: 3.5rem;\r\n    /* margin-right: 2.5rem; */\r\n}\r\n\r\n.baseDiscoverableCard {\r\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n    transition: 0.3s;\r\n    width: 99%; /*Purvi Jain*/\r\n    border: 1px solid #ddd;\r\n    border-radius: 2px;\r\n    cursor: pointer;\r\n    transition: all .3s cubic-bezier(.16,.8,.45,1);\r\n    position: relative;\r\n    background-color: #fff;\r\n}\r\n\r\n.baseDiscoverableCard:hover {\r\n    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.432);\r\n  }\r\n\r\n.baseDiscoverableCard-content {\r\n    padding: 0 1rem 1rem;\r\n    text-align: left;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n}\r\n\r\n.baseDiscoverableCard-image {\r\n    width: 100%;\r\n    background-position: 50%;\r\n    background-size: cover;\r\n}\r\n\r\n.baseDiscoverableCard-header {\r\n    padding-top: .75rem;\r\n}\r\n\r\n.projectTypeHeader {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.projectTypeHeader-label.projectTypeHeader-label--campaign {\r\n    color: #088366;\r\n}\r\n\r\n.projectTypeHeader-label {\r\n    letter-spacing: 1px;\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.baseDiscoverableCard-contentTop{\r\n    display: flex;\r\n    margin-top: .75rem;\r\n}\r\n\r\n.baseDiscoverableCard-title{\r\n    font-weight: 600;\r\n    font-size: 2.25rem;\r\n}\r\n\r\n.baseDiscoverableCard-body {\r\n    font-size: 1.1rem;\r\n    line-height: 1.5;\r\n    color: #6a6a6a;\r\n    margin-top: .25rem;\r\n    margin-bottom: .25rem;\r\n}\r\n\r\n.baseDiscoverableCard-categoryLink {\r\n    letter-spacing: 1px;\r\n    color: #6a6a6a;\r\n}\r\n\r\n.fundingDiscoverableCard-raisedContainer {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.fundingDiscoverableCard-unitsRaisedNumber {\r\n    font-weight: 600;\r\n}\r\n\r\n.fundingDiscoverableCard-unitsRaisedText {\r\n    color: #6a6a6a;\r\n    font-size: .75rem;\r\n}\r\n\r\n.fundingDiscoverableCard-raisedPercentage{\r\n    color: #6a6a6a;\r\n    font-size: .90rem;\r\n}\r\n\r\n.campaignFundingBar.campaignFundingBar--compact {\r\n    height: 7px;\r\n}\r\n\r\n.campaignFundingBar{\r\n    position: relative;\r\n    height: 10px;\r\n    width: 100%;\r\n    border-radius: 5px;\r\n    background: #ddd;\r\n}\r\n\r\n.campaignFundingBar-progress.campaignFundingBar-progress--compact {\r\n    height: 7px;\r\n}\r\n\r\n.campaignFundingBar-progress {\r\n    position: absolute;\r\n    height: 10px;\r\n    background: #34ca96;\r\n    border-radius: 5px 0 0 5px;\r\n}\r\n\r\n.campaignFundingBar-progress.campaignFundingBar-progress--full {\r\n    border-radius: 5px;\r\n}\r\n\r\n.fundingDiscoverableCard-footerBottom {\r\n    margin-top: .5rem;\r\n    color: #6a6a6a;\r\n}\r\n\r\n.fundingDiscoverableCard-timeLeft {\r\n    margin-left: .25rem;\r\n}\r\n\r\n/*ECF - Purvi Jain Changes*/\r\n\r\n.col-lg-4 {\r\n    padding-left: -15px !important;\r\n    padding-right: -15x !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wcm9qZWN0L2NvbXBvbmVudHMvZnVuZC1jb21wYWN0L2Z1bmQtY29tcGFjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLG1DQUFtQztJQUNuQyxvQ0FBb0M7QUFDeEM7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsd0JBQXdCO0FBQzFCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBQ0E7Ozs7R0FJRzs7QUFDSCwyQkFBMkI7O0FBQzNCO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBR0E7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsNENBQTRDO0FBQ2hEOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDLGdCQUFnQjtJQUNoQixVQUFVLEVBQUUsYUFBYTtJQUN6QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZiw4Q0FBOEM7SUFDOUMsa0JBQWtCO0lBQ2xCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGlEQUFpRDtFQUNuRDs7QUFFRjtJQUNJLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQSwyQkFBMkI7O0FBQzNCO0lBQ0ksOEJBQThCO0lBQzlCLDhCQUE4QjtBQUNsQyIsImZpbGUiOiJhcHAvcHJvamVjdC9jb21wb25lbnRzL2Z1bmQtY29tcGFjdC9mdW5kLWNvbXBhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG59XHJcblxyXG5hIHtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XHJcbn1cclxuXHJcbmE6LXdlYmtpdC1hbnktbGluayB7XHJcbiAgICBjb2xvcjogLXdlYmtpdC1saW5rO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi8qIC5ob21lcGFnZUxheW91dCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xyXG4gICAgbWF4LXdpZHRoOiAxMjgwcHg7XHJcbn0gKi9cclxuLypFQ0YgLSBQdXJ2aSBKYWluIENoYW5nZXMqL1xyXG4uaG9tZXBhZ2VMYXlvdXQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcmVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogMHJlbTtcclxuICAgIG1heC13aWR0aDogMTI4MHB4O1xyXG59XHJcblxyXG4uY2FtcGFpZ25DYXJvdXNlbCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcblxyXG4uY2FtcGFpZ25DYXJvdXNlbC1oZWFkZXIge1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4udC1oNC0tc2VyaWYge1xyXG4gICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS4zO1xyXG4gICAgZm9udC1mYW1pbHk6IGZmLW1vcmUtd2ViLXBybyxHZW9yZ2lhLFwiU2VyaWZcIjtcclxufVxyXG5cclxuLmNhbXBhaWduQ2Fyb3VzZWwtY2Fyb3VzZWwsIC5jYW1wYWlnbkNhcm91c2VsLWhlYWRlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbn1cclxuXHJcbi5jYW1wYWlnbkNhcm91c2VsLWhlYWRlciB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5jYW1wYWlnbkNhcm91c2VsLWNhcm91c2VsQ2FyZCB7XHJcbiAgICAvKiB3aWR0aDogMjc1cHg7ICovXHJcbiAgICBtYXJnaW4tdG9wOiAzLjVyZW07XHJcbiAgICAvKiBtYXJnaW4tcmlnaHQ6IDIuNXJlbTsgKi9cclxufVxyXG5cclxuLmJhc2VEaXNjb3ZlcmFibGVDYXJkIHtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKTtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICB3aWR0aDogOTklOyAvKlB1cnZpIEphaW4qL1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuM3MgY3ViaWMtYmV6aWVyKC4xNiwuOCwuNDUsMSk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uYmFzZURpc2NvdmVyYWJsZUNhcmQ6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNDMyKTtcclxuICB9XHJcblxyXG4uYmFzZURpc2NvdmVyYWJsZUNhcmQtY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAwIDFyZW0gMXJlbTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmJhc2VEaXNjb3ZlcmFibGVDYXJkLWltYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmJhc2VEaXNjb3ZlcmFibGVDYXJkLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nLXRvcDogLjc1cmVtO1xyXG59XHJcblxyXG4ucHJvamVjdFR5cGVIZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLnByb2plY3RUeXBlSGVhZGVyLWxhYmVsLnByb2plY3RUeXBlSGVhZGVyLWxhYmVsLS1jYW1wYWlnbiB7XHJcbiAgICBjb2xvcjogIzA4ODM2NjtcclxufVxyXG5cclxuLnByb2plY3RUeXBlSGVhZGVyLWxhYmVsIHtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5cclxuLmJhc2VEaXNjb3ZlcmFibGVDYXJkLWNvbnRlbnRUb3B7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLXRvcDogLjc1cmVtO1xyXG59XHJcblxyXG4uYmFzZURpc2NvdmVyYWJsZUNhcmQtdGl0bGV7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAyLjI1cmVtO1xyXG59XHJcblxyXG4uYmFzZURpc2NvdmVyYWJsZUNhcmQtYm9keSB7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBjb2xvcjogIzZhNmE2YTtcclxuICAgIG1hcmdpbi10b3A6IC4yNXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IC4yNXJlbTtcclxufVxyXG5cclxuLmJhc2VEaXNjb3ZlcmFibGVDYXJkLWNhdGVnb3J5TGluayB7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgY29sb3I6ICM2YTZhNmE7XHJcbn1cclxuXHJcbi5mdW5kaW5nRGlzY292ZXJhYmxlQ2FyZC1yYWlzZWRDb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmZ1bmRpbmdEaXNjb3ZlcmFibGVDYXJkLXVuaXRzUmFpc2VkTnVtYmVyIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5mdW5kaW5nRGlzY292ZXJhYmxlQ2FyZC11bml0c1JhaXNlZFRleHQge1xyXG4gICAgY29sb3I6ICM2YTZhNmE7XHJcbiAgICBmb250LXNpemU6IC43NXJlbTtcclxufVxyXG5cclxuLmZ1bmRpbmdEaXNjb3ZlcmFibGVDYXJkLXJhaXNlZFBlcmNlbnRhZ2V7XHJcbiAgICBjb2xvcjogIzZhNmE2YTtcclxuICAgIGZvbnQtc2l6ZTogLjkwcmVtO1xyXG59XHJcblxyXG4uY2FtcGFpZ25GdW5kaW5nQmFyLmNhbXBhaWduRnVuZGluZ0Jhci0tY29tcGFjdCB7XHJcbiAgICBoZWlnaHQ6IDdweDtcclxufVxyXG5cclxuLmNhbXBhaWduRnVuZGluZ0JhcntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2RkZDtcclxufVxyXG5cclxuLmNhbXBhaWduRnVuZGluZ0Jhci1wcm9ncmVzcy5jYW1wYWlnbkZ1bmRpbmdCYXItcHJvZ3Jlc3MtLWNvbXBhY3Qge1xyXG4gICAgaGVpZ2h0OiA3cHg7XHJcbn1cclxuXHJcbi5jYW1wYWlnbkZ1bmRpbmdCYXItcHJvZ3Jlc3Mge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzM0Y2E5NjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCAwIDAgNXB4O1xyXG59XHJcblxyXG4uY2FtcGFpZ25GdW5kaW5nQmFyLXByb2dyZXNzLmNhbXBhaWduRnVuZGluZ0Jhci1wcm9ncmVzcy0tZnVsbCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5mdW5kaW5nRGlzY292ZXJhYmxlQ2FyZC1mb290ZXJCb3R0b20ge1xyXG4gICAgbWFyZ2luLXRvcDogLjVyZW07XHJcbiAgICBjb2xvcjogIzZhNmE2YTtcclxufVxyXG5cclxuLmZ1bmRpbmdEaXNjb3ZlcmFibGVDYXJkLXRpbWVMZWZ0IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAuMjVyZW07XHJcbn1cclxuXHJcbi8qRUNGIC0gUHVydmkgSmFpbiBDaGFuZ2VzKi9cclxuLmNvbC1sZy00IHtcclxuICAgIHBhZGRpbmctbGVmdDogLTE1cHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IC0xNXggIWltcG9ydGFudDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/project/components/fund-compact/fund-compact.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/project/components/fund-compact/fund-compact.component.ts ***!
  \***************************************************************************/
/*! exports provided: FundCompactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FundCompactComponent", function() { return FundCompactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/http.service */ "./src/app/core/services/http.service.ts");
/* harmony import */ var src_app_user_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/user/auth.service */ "./src/app/user/auth.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var src_app_core_services_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/cart.service */ "./src/app/core/services/cart.service.ts");







let FundCompactComponent = class FundCompactComponent {
    constructor(router, sanitizer, route, http, cartService, authService) {
        this.router = router;
        this.sanitizer = sanitizer;
        this.route = route;
        this.http = http;
        this.cartService = cartService;
        this.authService = authService;
        this.amountAlreadyInvested = 0;
        this.userRole = 25;
        this.daysLeft = 0;
        this.tempurl = "";
    }
    ngOnInit() {
        this.userRole = this.authService.getRole();
        this.tempurl = "https://images.pexels.com/photos/2933265/pexels-photo-2933265.jpeg?cs=srgb&dl=action-adult-bike-2933265.jpg&fm=jpg";
        if (this.fundDetail.fundMedias != null) {
            this.fundDetail.fundMedias.forEach(element => {
                if (!element.file_location.toString().includes("youtube")) {
                    this.tempurl = element.file_location.toString();
                }
            });
        }
        if (this.userRole == 1) {
            this.amountAlreadyInvested = this.authService.amountInvestedInInvestment(this.fundDetail.id, 'F');
            //this.trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(tempurl);
            //console.log(this.trustedUrl.toString);
            console.log(this.fundDetail);
        }
        let myDate = new Date();
        let endDate = new Date(this.fundDetail.end_date);
        let diffc = 0;
        diffc = endDate.getTime() - myDate.getTime();
        this.daysLeft = Math.round(Math.abs(diffc / (1000 * 60 * 60 * 24)));
    }
};
FundCompactComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_core_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
    { type: src_app_core_services_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"] },
    { type: src_app_user_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FundCompactComponent.prototype, "fundDetail", void 0);
FundCompactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-fund-compact',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./fund-compact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/project/components/fund-compact/fund-compact.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./fund-compact.component.css */ "./src/app/project/components/fund-compact/fund-compact.component.css")).default]
    })
], FundCompactComponent);



/***/ }),

/***/ "./src/app/project/components/fund-detail/fund-detail.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/project/components/fund-detail/fund-detail.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\r\n    box-sizing: border-box;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: antialiased;\r\n    font-family: benton-sans,Helvetica,\"Sans-serif\";\r\n}\r\n\r\n\r\n.annual_report .numbers-block {\r\n    text-align: Center;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n    margin: 10px;\r\n    width: 225px;\r\n}\r\n\r\n\r\n.flexbox-row-center {\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    -webkit-flex-wrap: wrap;\r\n    justify-content: center;\r\n    -webkit-justify-content: center;\r\n}\r\n\r\n\r\n.report-icons{\r\n    width: 61px;\r\n    height: 73px\r\n}\r\n\r\n\r\n.column.is-narrow {\r\n    flex: none;\r\n}\r\n\r\n\r\n.column {\r\n    margin: 0;\r\n    padding: 0 !important;\r\n    display: block;\r\n}\r\n\r\n\r\n.campaignLayout-topContent .campaignLayout-topContent-right {\r\n    width: 390px;\r\n    margin-left: 1.5rem;\r\n}\r\n\r\n\r\ndiv {\r\n    display: block;\r\n}\r\n\r\n\r\n.basicsSection-statusLabel.widescreen{\r\n    text-transform: uppercase;\r\n    display: block;\r\n    font-weight: 600;\r\n}\r\n\r\n\r\n.fundingColor {\r\n    color: #088366;\r\n}\r\n\r\n\r\n.t-label--sm {\r\n    font-size: 1.3rem;\r\n}\r\n\r\n\r\n.t-label--sm {\r\n    font-weight: 600;\r\n    line-height: 1.5;\r\n    text-transform: uppercase;\r\n    letter-spacing: 1px;\r\n}\r\n\r\n\r\n.basicsSection-title.widescreen{\r\n    display: block;\r\n}\r\n\r\n\r\n.t-h4--sansSerif {\r\n    font-weight: 600;\r\n}\r\n\r\n\r\n.t-h4--sansSerif {\r\n    letter-spacing: 0;\r\n    line-height: 1.4;\r\n    font-size:2.5rem;\r\n}\r\n\r\n\r\n.basicsSection-title{\r\n    margin-top: 8px;\r\n}\r\n\r\n\r\n.basicsSection-tagline.widescreen {\r\n    display: block;\r\n    margin: .25rem 0 1rem;\r\n}\r\n\r\n\r\n.t-body--sansSerif--lg {\r\n    font-size: 1.5rem;\r\n    line-height: 1.5;\r\n    font-weight: 500;\r\n    letter-spacing: 0;\r\n}\r\n\r\n\r\n.basicsCampaignOwner {\r\n    padding: 0 0 .75rem;\r\n}\r\n\r\n\r\n.columns.is-gapless {\r\n    margin-left: 0;\r\n    margin-right: 0;\r\n    margin-top: 0;\r\n    display: flex;\r\n}\r\n\r\n\r\n.basicsCampaignOwner-icon.column.is-narrow {\r\n    margin: auto;\r\n}\r\n\r\n\r\n.column.is-narrow {\r\n    flex: none;\r\n}\r\n\r\n\r\n.basicsCampaignOwner-details {\r\n    margin-left: 8px;\r\n    margin-top:0px;\r\n}\r\n\r\n\r\n.basicsCampaignOwner-details-trust {\r\n    margin-top: 0;\r\n}\r\n\r\n\r\n.t-body--sansSerif{\r\n    font-size: .875rem;\r\n    line-height: 1.5;\r\n}\r\n\r\n\r\n.t-body--sansSerif{\r\n    font-weight: 500;\r\n    letter-spacing: 0;\r\n}\r\n\r\n\r\n.basicsCampaignOwner-details-city{\r\n    display: inline;\r\n    font-size: 1.5rem;\r\n}\r\n\r\n\r\na {\r\n  color: inherit;\r\n  text-decoration: inherit;\r\n}\r\n\r\n\r\na:-webkit-any-link {\r\n    color: -webkit-link;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.baseDiscoverableCard-categoryLink {\r\n    letter-spacing: 1px;\r\n    color: #6a6a6a;\r\n}\r\n\r\n\r\n.fundingDiscoverableCard-raisedContainer {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-bottom: .5rem;\r\n}\r\n\r\n\r\n.fundingDiscoverableCard-unitsRaisedNumber {\r\n    font-weight: 600;\r\n}\r\n\r\n\r\n.fundingDiscoverableCard-unitsRaisedText {\r\n    color: #6a6a6a;\r\n    font-size: 1.2rem;\r\n}\r\n\r\n\r\n.fundingDiscoverableCard-raisedPercentage{\r\n    color: #6a6a6a;\r\n    font-size: .90rem;\r\n}\r\n\r\n\r\n.campaignFundingBar.campaignFundingBar--compact {\r\n    height: 20px;\r\n}\r\n\r\n\r\n.campaignFundingBar{\r\n    position: relative;\r\n    height: 20px;\r\n    width: 100%;\r\n    border-radius: 5px;\r\n    background: #ddd;\r\n}\r\n\r\n\r\n.campaignFundingBar-progress.campaignFundingBar-progress--compact {\r\n    height: 20px;\r\n}\r\n\r\n\r\n.campaignFundingBar-progress {\r\n    position: absolute;\r\n    height: 20px;\r\n    background:#0091da;\r\n    border-radius: 5px 0 0 5px;\r\n}\r\n\r\n\r\n.campaignFundingBar-progress.campaignFundingBar-progress--full {\r\n    border-radius: 20px;\r\n}\r\n\r\n\r\n.fundingDiscoverableCard-footerBottom {\r\n    margin-top: .5rem;\r\n    color: #6a6a6a;\r\n}\r\n\r\n\r\n.fundingDiscoverableCard-timeLeft {\r\n    margin-left: .25rem;\r\n}\r\n\r\n\r\n.fund-bar{\r\n    margin-top: 1rem;\r\n}\r\n\r\n\r\n.routerContentSection-content {\r\n    margin-top: 2rem;\r\n}\r\n\r\n\r\n.faqSection-container {\r\n    padding-top: 8px;\r\n    padding-bottom: 24px;\r\n}\r\n\r\n\r\n.campaignFaq-container {\r\n    padding-top: 24px;\r\n}\r\n\r\n\r\n.t-weight--medium {\r\n    font-weight: 600;\r\n}\r\n\r\n\r\n.campaignFaq-question {\r\n    margin-bottom: 8px;\r\n}\r\n\r\n\r\n.campaignFaq-answer {\r\n    color: #6a6a6a;\r\n}\r\n\r\n\r\n.employee_v5 {\r\n    width: 200px;\r\n   \r\n    position: relative;\r\n    text-align: center;\r\n}\r\n\r\n\r\n.employee-content{\r\n    padding-top: 0px;\r\n}\r\n\r\n\r\n.teamMemberName{\r\n    font-size: 1.12em;\r\n    font-weight: bold;\r\n   \r\n    text-align: center;\r\n}\r\n\r\n\r\n.teamMemberRole{\r\n    font-size: .875em;\r\n    margin-bottom: 3px;\r\n    margin-top: 3px;\r\n    margin: 0;\r\n    padding: 0;\r\n    text-align: center;\r\n}\r\n\r\n\r\n.networks{\r\n    margin-top: 1px;\r\n    text-align: center;\r\n}\r\n\r\n\r\nul {\r\n    list-style: none;\r\n}\r\n\r\n\r\nul li:before {\r\n  content: '✓';\r\n}\r\n\r\n\r\n.showOnlyLine{\r\n    background: transparent;\r\n    border: none;\r\n    border-bottom: 1px solid #000000;\r\n}\r\n\r\n\r\n.campainCategory{\r\n    font-weight: bold;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wcm9qZWN0L2NvbXBvbmVudHMvZnVuZC1kZXRhaWwvZnVuZC1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixtQ0FBbUM7SUFDbkMsb0NBQW9DO0lBQ3BDLCtDQUErQztBQUNuRDs7O0FBR0E7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7O0FBQ0M7SUFLRyxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLCtCQUErQjtBQUNuQzs7O0FBQ0E7SUFDSSxXQUFXO0lBQ1g7QUFDSjs7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7OztBQUNBO0lBQ0ksU0FBUztJQUNULHFCQUFxQjtJQUNyQixjQUFjO0FBQ2xCOzs7QUFFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7OztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOzs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7O0FBR0E7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkI7OztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7OztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7OztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCOzs7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7O0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7OztBQUNBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixhQUFhO0lBQ2IsYUFBYTtBQUNqQjs7O0FBQ0E7SUFDSSxZQUFZO0FBQ2hCOzs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7OztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOzs7QUFFQTtFQUNFLGNBQWM7RUFDZCx3QkFBd0I7QUFDMUI7OztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7OztBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7OztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixvQkFBb0I7QUFDeEI7OztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7OztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7OztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiwwQkFBMEI7QUFDOUI7OztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOzs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7OztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCOzs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixvQkFBb0I7QUFDeEI7OztBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCOzs7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7OztBQUNBO0lBQ0ksY0FBYztBQUNsQjs7O0FBRUE7SUFDSSxZQUFZOztJQUVaLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7OztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7O0lBRWpCLGtCQUFrQjtBQUN0Qjs7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixTQUFTO0lBQ1QsVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7OztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixnQ0FBZ0M7QUFDcEM7OztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6ImFwcC9wcm9qZWN0L2NvbXBvbmVudHMvZnVuZC1kZXRhaWwvZnVuZC1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgZm9udC1mYW1pbHk6IGJlbnRvbi1zYW5zLEhlbHZldGljYSxcIlNhbnMtc2VyaWZcIjtcclxufVxyXG5cclxuXHJcbi5hbm51YWxfcmVwb3J0IC5udW1iZXJzLWJsb2NrIHtcclxuICAgIHRleHQtYWxpZ246IENlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICB3aWR0aDogMjI1cHg7XHJcbn1cclxuIC5mbGV4Ym94LXJvdy1jZW50ZXIge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAtd2Via2l0LWZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4ucmVwb3J0LWljb25ze1xyXG4gICAgd2lkdGg6IDYxcHg7XHJcbiAgICBoZWlnaHQ6IDczcHhcclxufVxyXG5cclxuLmNvbHVtbi5pcy1uYXJyb3cge1xyXG4gICAgZmxleDogbm9uZTtcclxufVxyXG4uY29sdW1uIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uY2FtcGFpZ25MYXlvdXQtdG9wQ29udGVudCAuY2FtcGFpZ25MYXlvdXQtdG9wQ29udGVudC1yaWdodCB7XHJcbiAgICB3aWR0aDogMzkwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMS41cmVtO1xyXG59XHJcblxyXG5kaXYge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5iYXNpY3NTZWN0aW9uLXN0YXR1c0xhYmVsLndpZGVzY3JlZW57XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uZnVuZGluZ0NvbG9yIHtcclxuICAgIGNvbG9yOiAjMDg4MzY2O1xyXG59XHJcblxyXG4udC1sYWJlbC0tc20ge1xyXG4gICAgZm9udC1zaXplOiAxLjNyZW07XHJcbn1cclxuXHJcblxyXG4udC1sYWJlbC0tc20ge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxufVxyXG5cclxuLmJhc2ljc1NlY3Rpb24tdGl0bGUud2lkZXNjcmVlbntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4udC1oNC0tc2Fuc1NlcmlmIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi50LWg0LS1zYW5zU2VyaWYge1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS40O1xyXG4gICAgZm9udC1zaXplOjIuNXJlbTtcclxufVxyXG5cclxuLmJhc2ljc1NlY3Rpb24tdGl0bGV7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbn1cclxuLmJhc2ljc1NlY3Rpb24tdGFnbGluZS53aWRlc2NyZWVuIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAuMjVyZW0gMCAxcmVtO1xyXG59XHJcbi50LWJvZHktLXNhbnNTZXJpZi0tbGcge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG59XHJcbi5iYXNpY3NDYW1wYWlnbk93bmVyIHtcclxuICAgIHBhZGRpbmc6IDAgMCAuNzVyZW07XHJcbn1cclxuLmNvbHVtbnMuaXMtZ2FwbGVzcyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5iYXNpY3NDYW1wYWlnbk93bmVyLWljb24uY29sdW1uLmlzLW5hcnJvdyB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5jb2x1bW4uaXMtbmFycm93IHtcclxuICAgIGZsZXg6IG5vbmU7XHJcbn1cclxuXHJcbi5iYXNpY3NDYW1wYWlnbk93bmVyLWRldGFpbHMge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgIG1hcmdpbi10b3A6MHB4O1xyXG59XHJcblxyXG4uYmFzaWNzQ2FtcGFpZ25Pd25lci1kZXRhaWxzLXRydXN0IHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuXHJcbi50LWJvZHktLXNhbnNTZXJpZntcclxuICAgIGZvbnQtc2l6ZTogLjg3NXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbn1cclxuXHJcbi50LWJvZHktLXNhbnNTZXJpZntcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcclxufVxyXG5cclxuLmJhc2ljc0NhbXBhaWduT3duZXItZGV0YWlscy1jaXR5e1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbmEge1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcclxufVxyXG5cclxuYTotd2Via2l0LWFueS1saW5rIHtcclxuICAgIGNvbG9yOiAtd2Via2l0LWxpbms7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmJhc2VEaXNjb3ZlcmFibGVDYXJkLWNhdGVnb3J5TGluayB7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgY29sb3I6ICM2YTZhNmE7XHJcbn1cclxuXHJcbi5mdW5kaW5nRGlzY292ZXJhYmxlQ2FyZC1yYWlzZWRDb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xyXG59XHJcblxyXG4uZnVuZGluZ0Rpc2NvdmVyYWJsZUNhcmQtdW5pdHNSYWlzZWROdW1iZXIge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmZ1bmRpbmdEaXNjb3ZlcmFibGVDYXJkLXVuaXRzUmFpc2VkVGV4dCB7XHJcbiAgICBjb2xvcjogIzZhNmE2YTtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG59XHJcblxyXG4uZnVuZGluZ0Rpc2NvdmVyYWJsZUNhcmQtcmFpc2VkUGVyY2VudGFnZXtcclxuICAgIGNvbG9yOiAjNmE2YTZhO1xyXG4gICAgZm9udC1zaXplOiAuOTByZW07XHJcbn1cclxuXHJcbi5jYW1wYWlnbkZ1bmRpbmdCYXIuY2FtcGFpZ25GdW5kaW5nQmFyLS1jb21wYWN0IHtcclxuICAgIGhlaWdodDogMjBweDtcclxufVxyXG5cclxuLmNhbXBhaWduRnVuZGluZ0JhcntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2RkZDtcclxufVxyXG5cclxuLmNhbXBhaWduRnVuZGluZ0Jhci1wcm9ncmVzcy5jYW1wYWlnbkZ1bmRpbmdCYXItcHJvZ3Jlc3MtLWNvbXBhY3Qge1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uY2FtcGFpZ25GdW5kaW5nQmFyLXByb2dyZXNzIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGJhY2tncm91bmQ6IzAwOTFkYTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCAwIDAgNXB4O1xyXG59XHJcblxyXG4uY2FtcGFpZ25GdW5kaW5nQmFyLXByb2dyZXNzLmNhbXBhaWduRnVuZGluZ0Jhci1wcm9ncmVzcy0tZnVsbCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4uZnVuZGluZ0Rpc2NvdmVyYWJsZUNhcmQtZm9vdGVyQm90dG9tIHtcclxuICAgIG1hcmdpbi10b3A6IC41cmVtO1xyXG4gICAgY29sb3I6ICM2YTZhNmE7XHJcbn1cclxuXHJcbi5mdW5kaW5nRGlzY292ZXJhYmxlQ2FyZC10aW1lTGVmdCB7XHJcbiAgICBtYXJnaW4tbGVmdDogLjI1cmVtO1xyXG59XHJcblxyXG4uZnVuZC1iYXJ7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcbi5yb3V0ZXJDb250ZW50U2VjdGlvbi1jb250ZW50IHtcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbn1cclxuLmZhcVNlY3Rpb24tY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjRweDtcclxufVxyXG4uY2FtcGFpZ25GYXEtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmctdG9wOiAyNHB4O1xyXG59XHJcbi50LXdlaWdodC0tbWVkaXVtIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5jYW1wYWlnbkZhcS1xdWVzdGlvbiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuLmNhbXBhaWduRmFxLWFuc3dlciB7XHJcbiAgICBjb2xvcjogIzZhNmE2YTtcclxufVxyXG5cclxuLmVtcGxveWVlX3Y1IHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5lbXBsb3llZS1jb250ZW50e1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxufVxyXG5cclxuLnRlYW1NZW1iZXJOYW1le1xyXG4gICAgZm9udC1zaXplOiAxLjEyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50ZWFtTWVtYmVyUm9sZXtcclxuICAgIGZvbnQtc2l6ZTogLjg3NWVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gICAgbWFyZ2luLXRvcDogM3B4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm5ldHdvcmtze1xyXG4gICAgbWFyZ2luLXRvcDogMXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG51bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbiAgXHJcbnVsIGxpOmJlZm9yZSB7XHJcbiAgY29udGVudDogJ+Kckyc7XHJcbn1cclxuXHJcbi5zaG93T25seUxpbmV7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwMDAwO1xyXG59ICAgIFxyXG5cclxuLmNhbXBhaW5DYXRlZ29yeXtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/project/components/fund-detail/fund-detail.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/project/components/fund-detail/fund-detail.component.ts ***!
  \*************************************************************************/
/*! exports provided: FundDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FundDetailComponent", function() { return FundDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/http.service */ "./src/app/core/services/http.service.ts");
/* harmony import */ var src_app_core_services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/cart.service */ "./src/app/core/services/cart.service.ts");
/* harmony import */ var src_app_user_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/user/auth.service */ "./src/app/user/auth.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");







let FundDetailComponent = class FundDetailComponent {
    constructor(router, sanitizer, route, http, cartService, authService) {
        this.router = router;
        this.sanitizer = sanitizer;
        this.route = route;
        this.http = http;
        this.cartService = cartService;
        this.authService = authService;
        this.pageTitle = 'Fund Detail';
        this.amountAlreadyInvested = 0;
        this.order = {
            item_id: 0,
            item_name: '',
            invest_type: 'F',
            user_id: this.authService.currentUser != null ? this.authService.currentUser.id : 25,
            amount: 0
        };
        this.amount = 0;
        this.numberOfCampaigns = 0;
        this.fundRequired = 0;
        this.daysLeft = 0;
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            const id = params.get('id');
            this.itemid = +id;
            console.log(id);
            this.getFundDetails(+id);
        });
    }
    getUserRole() {
        return this.authService.getRole();
    }
    getFundDetails(fundid) {
        var url = "getFundDetail/" + fundid;
        this.http.getRestData(url).subscribe(data => {
            if (data.status == 200) {
                console.log("after response..");
                console.log(this.fundDetail);
                let responseJson = JSON.parse((data.body));
                this.fundDetail = responseJson;
                console.log(this.fundDetail);
                this.amountAlreadyInvested = this.authService.amountInvestedInInvestment(fundid, 'F');
                this.amount = this.getAmountFromCart(fundid);
                this.numberOfCampaigns = this.fundDetail.fundCampaignsList.length;
                this.fundDetail.fundCampaignsList.forEach(element => {
                    this.fundRequired = this.fundRequired + element.campaignDetail.fund_required;
                });
                this.percentageInvested = (100 * (this.fundDetail.capitalRaisedInThisFund) / this.fundRequired).toFixed(2);
                let myDate = new Date();
                let endDate = new Date(this.fundDetail.end_date);
                let diffc = 0;
                diffc = endDate.getTime() - myDate.getTime();
                this.daysLeft = Math.round(Math.abs(diffc / (1000 * 60 * 60 * 24)));
                var tempurl = "https://www.youtube.com/embed/bNpx7gpSqbY";
                if (this.fundDetail.fundMedias != null) {
                    this.fundDetail.fundMedias.forEach(element => {
                        if (element.file_location.toString().includes("youtube")) {
                            tempurl = element.file_location.toString();
                        }
                    });
                }
                this.trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(tempurl);
                console.log(fundid + '--fund id');
                console.log(this.fundDetail);
            }
            else {
                console.log("error in get rest data");
                this.fundDetail = null;
            }
        }, error => {
            console.log("error in get rest data");
        });
    }
    getAmountFromCart(fundid) {
        var amount = this.authService.amountInvestedInInvestment(fundid, 'F');
        ;
        this.cartService.getCurrentCartOrders().forEach(element => {
            if ((element.item_id == fundid)) {
                amount = element.amount;
            }
        });
        return amount;
    }
    isLoggedIn() {
        console.log('logging checking');
        return this.authService.isLoggedIn;
    }
    addToCart() {
        if (!this.authService.isLoggedIn) {
            this.router.navigate(['/login']);
        }
        console.log(this.amount);
        this.order.item_id = this.itemid;
        this.order.item_name = this.fundDetail.fund_name;
        this.order.invest_type = 'F';
        this.order.user_id = this.authService.currentUser.id;
        this.order.amount = this.amount;
        this.cartService.addToCart(this.order);
    }
};
FundDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_core_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
    { type: src_app_core_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"] },
    { type: src_app_user_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
FundDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-fund-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./fund-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/project/components/fund-detail/fund-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./fund-detail.component.css */ "./src/app/project/components/fund-detail/fund-detail.component.css")).default]
    })
], FundDetailComponent);



/***/ }),

/***/ "./src/app/project/components/fund-list/fund-list.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/project/components/fund-list/fund-list.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".campaignCarousel-header {\r\n    margin: 0;\r\n}\r\n\r\n.t-h4--serif {\r\n    font-size: 3.5rem;\r\n    font-weight: 400;\r\n    letter-spacing: 0;\r\n    line-height: 1.3;\r\n    font-family: ff-more-web-pro,Georgia,\"Serif\";\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wcm9qZWN0L2NvbXBvbmVudHMvZnVuZC1saXN0L2Z1bmQtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLDRDQUE0QztBQUNoRCIsImZpbGUiOiJhcHAvcHJvamVjdC9jb21wb25lbnRzL2Z1bmQtbGlzdC9mdW5kLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYW1wYWlnbkNhcm91c2VsLWhlYWRlciB7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi50LWg0LS1zZXJpZiB7XHJcbiAgICBmb250LXNpemU6IDMuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbiAgICBmb250LWZhbWlseTogZmYtbW9yZS13ZWItcHJvLEdlb3JnaWEsXCJTZXJpZlwiO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/project/components/fund-list/fund-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/project/components/fund-list/fund-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: FundListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FundListComponent", function() { return FundListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/http.service */ "./src/app/core/services/http.service.ts");




let FundListComponent = class FundListComponent {
    constructor(route, http) {
        this.route = route;
        this.http = http;
        this.listSize = 0;
    }
    ngOnInit() {
        this.getAllActiveFunds();
    }
    getAllActiveFunds() {
        this.listSize = 0;
        var url = "getAllFundListActive";
        this.http.getRestData(url).subscribe(data => {
            if (data.status == 200) {
                let responseJson = JSON.parse((data.body));
                this.fundList = responseJson;
                this.fundList.forEach(element => {
                    this.listSize++;
                });
                console.log(this.fundList);
            }
            else {
                console.log("error in get rest data");
                this.fundList = null;
            }
        }, error => {
            console.log("error in get rest data");
        });
    }
};
FundListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_core_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }
];
FundListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-fund-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./fund-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/project/components/fund-list/fund-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./fund-list.component.css */ "./src/app/project/components/fund-list/fund-list.component.css")).default]
    })
], FundListComponent);



/***/ }),

/***/ "./src/app/project/components/fund-raiser-home/fund-raiser-home.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/project/components/fund-raiser-home/fund-raiser-home.component.css ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvcHJvamVjdC9jb21wb25lbnRzL2Z1bmQtcmFpc2VyLWhvbWUvZnVuZC1yYWlzZXItaG9tZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/project/components/fund-raiser-home/fund-raiser-home.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/project/components/fund-raiser-home/fund-raiser-home.component.ts ***!
  \***********************************************************************************/
/*! exports provided: FundRaiserHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FundRaiserHomeComponent", function() { return FundRaiserHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FundRaiserHomeComponent = class FundRaiserHomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
FundRaiserHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-fund-raiser-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./fund-raiser-home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/project/components/fund-raiser-home/fund-raiser-home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./fund-raiser-home.component.css */ "./src/app/project/components/fund-raiser-home/fund-raiser-home.component.css")).default]
    })
], FundRaiserHomeComponent);



/***/ }),

/***/ "./src/app/project/components/my-campaignlist/my-campaignlist.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/project/components/my-campaignlist/my-campaignlist.component.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvcHJvamVjdC9jb21wb25lbnRzL215LWNhbXBhaWdubGlzdC9teS1jYW1wYWlnbmxpc3QuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/project/components/my-campaignlist/my-campaignlist.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/project/components/my-campaignlist/my-campaignlist.component.ts ***!
  \*********************************************************************************/
/*! exports provided: MyCampaignlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyCampaignlistComponent", function() { return MyCampaignlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/http.service */ "./src/app/core/services/http.service.ts");
/* harmony import */ var src_app_user_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/user/auth.service */ "./src/app/user/auth.service.ts");





let MyCampaignlistComponent = class MyCampaignlistComponent {
    constructor(route, http, authService) {
        this.route = route;
        this.http = http;
        this.authService = authService;
        this.listSize = 0;
    }
    ngOnInit() {
        //const resolvedData: ProductResolved =
        this.route.paramMap.subscribe(params => {
            const id = params.get('id');
            console.log(id);
            this.getAllCampaigns(2);
        });
    }
    getAllCampaigns(campaignid) {
        this.listSize = 0;
        var url = "getAllMainCampaignDetailsOnFundRaiserIdApprovedAndActive/" + this.authService.currentUser.id;
        this.http.getRestData(url).subscribe(data => {
            if (data.status == 200) {
                let responseJson = JSON.parse((data.body));
                this.mainCampaignDetails = responseJson;
                this.mainCampaignDetails.forEach(element => {
                    this.listSize++;
                });
                console.log(this.mainCampaignDetails);
            }
            else {
                console.log("error in get rest data");
                this.mainCampaignDetails = null;
            }
        }, error => {
            console.log("error in get rest data");
        });
    }
};
MyCampaignlistComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_core_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
    { type: src_app_user_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
MyCampaignlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-campaignlist',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./my-campaignlist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/project/components/my-campaignlist/my-campaignlist.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./my-campaignlist.component.css */ "./src/app/project/components/my-campaignlist/my-campaignlist.component.css")).default]
    })
], MyCampaignlistComponent);



/***/ }),

/***/ "./src/app/project/components/my-campaigns/my-campaigns.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/project/components/my-campaigns/my-campaigns.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvcHJvamVjdC9jb21wb25lbnRzL215LWNhbXBhaWducy9teS1jYW1wYWlnbnMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/project/components/my-campaigns/my-campaigns.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/project/components/my-campaigns/my-campaigns.component.ts ***!
  \***************************************************************************/
/*! exports provided: MyCampaignsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyCampaignsComponent", function() { return MyCampaignsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MyCampaignsComponent = class MyCampaignsComponent {
    constructor() { }
    ngOnInit() {
    }
};
MyCampaignsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-campaigns',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./my-campaigns.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/project/components/my-campaigns/my-campaigns.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./my-campaigns.component.css */ "./src/app/project/components/my-campaigns/my-campaigns.component.css")).default]
    })
], MyCampaignsComponent);



/***/ }),

/***/ "./src/app/project/project.module.ts":
/*!*******************************************!*\
  !*** ./src/app/project/project.module.ts ***!
  \*******************************************/
/*! exports provided: ProjectModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectModule", function() { return ProjectModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _components_campaign_detail_campaign_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/campaign-detail/campaign-detail.component */ "./src/app/project/components/campaign-detail/campaign-detail.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_campaign_list_campaign_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/campaign-list/campaign-list.component */ "./src/app/project/components/campaign-list/campaign-list.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _core_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/shared/shared.module */ "./src/app/core/shared/shared.module.ts");
/* harmony import */ var _components_fund_detail_fund_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/fund-detail/fund-detail.component */ "./src/app/project/components/fund-detail/fund-detail.component.ts");
/* harmony import */ var _components_fund_list_fund_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/fund-list/fund-list.component */ "./src/app/project/components/fund-list/fund-list.component.ts");
/* harmony import */ var _components_campaign_compact_campaign_compact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/campaign-compact/campaign-compact.component */ "./src/app/project/components/campaign-compact/campaign-compact.component.ts");
/* harmony import */ var _components_fund_compact_fund_compact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/fund-compact/fund-compact.component */ "./src/app/project/components/fund-compact/fund-compact.component.ts");
/* harmony import */ var _components_my_campaigns_my_campaigns_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/my-campaigns/my-campaigns.component */ "./src/app/project/components/my-campaigns/my-campaigns.component.ts");
/* harmony import */ var _components_my_campaignlist_my_campaignlist_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/my-campaignlist/my-campaignlist.component */ "./src/app/project/components/my-campaignlist/my-campaignlist.component.ts");
/* harmony import */ var _components_fund_raiser_home_fund_raiser_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/fund-raiser-home/fund-raiser-home.component */ "./src/app/project/components/fund-raiser-home/fund-raiser-home.component.ts");
/* harmony import */ var _components_buyback_list_buyback_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/buyback-list/buyback-list.component */ "./src/app/project/components/buyback-list/buyback-list.component.ts");
/* harmony import */ var _components_buyback_detail_buyback_detail_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/buyback-detail/buyback-detail.component */ "./src/app/project/components/buyback-detail/buyback-detail.component.ts");
/* harmony import */ var _components_buyback_compact_buyback_compact_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/buyback-compact/buyback-compact.component */ "./src/app/project/components/buyback-compact/buyback-compact.component.ts");


















let ProjectModule = class ProjectModule {
};
ProjectModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_campaign_detail_campaign_detail_component__WEBPACK_IMPORTED_MODULE_3__["CampaignDetailComponent"], _components_campaign_list_campaign_list_component__WEBPACK_IMPORTED_MODULE_5__["CampaignListComponent"], _components_fund_detail_fund_detail_component__WEBPACK_IMPORTED_MODULE_8__["FundDetailComponent"], _components_fund_list_fund_list_component__WEBPACK_IMPORTED_MODULE_9__["FundListComponent"], _components_campaign_compact_campaign_compact_component__WEBPACK_IMPORTED_MODULE_10__["CampaignCompactComponent"], _components_fund_compact_fund_compact_component__WEBPACK_IMPORTED_MODULE_11__["FundCompactComponent"], _components_my_campaigns_my_campaigns_component__WEBPACK_IMPORTED_MODULE_12__["MyCampaignsComponent"], _components_my_campaignlist_my_campaignlist_component__WEBPACK_IMPORTED_MODULE_13__["MyCampaignlistComponent"], _components_fund_raiser_home_fund_raiser_home_component__WEBPACK_IMPORTED_MODULE_14__["FundRaiserHomeComponent"], _components_buyback_list_buyback_list_component__WEBPACK_IMPORTED_MODULE_15__["BuybackListComponent"], _components_buyback_detail_buyback_detail_component__WEBPACK_IMPORTED_MODULE_16__["BuybackDetailComponent"], _components_buyback_compact_buyback_compact_component__WEBPACK_IMPORTED_MODULE_17__["BuybackCompactComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _core_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                {
                    path: 'campaignlist',
                    component: _components_campaign_list_campaign_list_component__WEBPACK_IMPORTED_MODULE_5__["CampaignListComponent"]
                },
                {
                    path: 'campaignlist/:id',
                    component: _components_campaign_detail_campaign_detail_component__WEBPACK_IMPORTED_MODULE_3__["CampaignDetailComponent"]
                },
                {
                    path: 'fundlist',
                    component: _components_fund_list_fund_list_component__WEBPACK_IMPORTED_MODULE_9__["FundListComponent"]
                },
                {
                    path: 'fundlist/:id',
                    component: _components_fund_detail_fund_detail_component__WEBPACK_IMPORTED_MODULE_8__["FundDetailComponent"]
                },
                {
                    path: 'buybacklist',
                    component: _components_buyback_list_buyback_list_component__WEBPACK_IMPORTED_MODULE_15__["BuybackListComponent"]
                },
                {
                    path: 'buybacklist/:id',
                    component: _components_buyback_detail_buyback_detail_component__WEBPACK_IMPORTED_MODULE_16__["BuybackDetailComponent"]
                }
            ]),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
        ],
        exports: [_components_campaign_detail_campaign_detail_component__WEBPACK_IMPORTED_MODULE_3__["CampaignDetailComponent"], _components_campaign_list_campaign_list_component__WEBPACK_IMPORTED_MODULE_5__["CampaignListComponent"], _components_fund_detail_fund_detail_component__WEBPACK_IMPORTED_MODULE_8__["FundDetailComponent"], _components_fund_list_fund_list_component__WEBPACK_IMPORTED_MODULE_9__["FundListComponent"], _components_buyback_detail_buyback_detail_component__WEBPACK_IMPORTED_MODULE_16__["BuybackDetailComponent"], _components_buyback_list_buyback_list_component__WEBPACK_IMPORTED_MODULE_15__["BuybackListComponent"]]
    })
], ProjectModule);



/***/ }),

/***/ "./src/app/user/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/user/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/http.service */ "./src/app/core/services/http.service.ts");



let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
    }
    get isLoggedIn() {
        return !!this.currentUser;
    }
    setCurrentUser(user) {
        this.currentUser = user;
    }
    getCurrentUser() {
        return this.currentUser;
    }
    login(userName, password) {
        console.log("auth service hit");
        if (true) {
            var body = {
                "email": userName,
                "password": password
            };
            var url = "getUser";
            return this.http.postRestData(url, body);
        }
        // call login service.
        //check username
        // this.currentUser = {
        //   "id": 2,
        //   "email": "kumar.avinash@principal.com",
        //   "name": "Avinash Kuamr Real",
        //   "social_connect": "sdfsdcsdsd,sdvsdvsdv,sdvsdvsdv",
        //   "description": "25 din mai paisa double",
        //   "role": 1,
        //   "company_name": "PaisaDouble.com",
        //   "password": "avinashkumarreal",
        //   "annual_income": 0,
        //   "other_startup_investments": 0,
        //   "company_category": null,
        //   "userInvestOnCampaignDetails": [
        //     {
        //       "campaign_id": 2,
        //       "amount": 500,
        //       "is_active": true,
        //       "start_date": "2018-01-01",
        //       "end_date": "2020-01-01"
        //     },
        //     {
        //       "campaign_id": 3,
        //       "amount": 500,
        //       "is_active": true,
        //       "start_date": "2018-01-01",
        //       "end_date": "2019-12-12"
        //     }
        //   ],
        //   "userInvestOnFundDetails": [
        //     {
        //       "fund_id": 1,
        //       "amount": 500,
        //       "is_active": true,
        //       "start_date": "2018-01-01",
        //       "end_date": "2019-12-12"
        //     },
        //     {
        //       "fund_id": 2,
        //       "amount": 400,
        //       "is_active": true,
        //       "start_date": "2018-05-09",
        //       "end_date": "2020-01-01"
        //     }
        //   ]
        // };
    }
    updateUserInformation() {
        this.login(this.currentUser.email, this.currentUser.password).subscribe(userResponse => {
            let user = JSON.parse((userResponse.body));
            if (userResponse.status == 200) {
                console.log('login succesful');
                this.setCurrentUser(user);
                if (this.currentUser.role == 1) {
                    // Navigate to the investor home page after log in as investor.
                    console.log('user role 1 - investor in as investor');
                }
                else if (this.currentUser.role == 2) {
                    //Navigate to the fund raiser home page after log in as Raiser.
                    console.log('user role 2- fund raiser  in as Raiser ');
                }
                else if (this.currentUser.role == 0) {
                    // Navigate to the fund manager home page after log in as F.m.
                    console.log('user role 0 - fund manager in as F.m.');
                }
            }
            else if (userResponse.status == 500) {
                console.log('login not succesfull');
            }
        }, error => {
            console.log('errors in log in -error message :- ' + error);
        });
    }
    logout() {
        this.currentUser = null;
    }
    getRole() {
        return this.currentUser != null ? this.currentUser.role : 25;
    }
    isInvestmentMadeByUser(investmentId, investmentType) {
        if (investmentType == 'I') {
            var campaignInvestedByuser = false;
            this.currentUser.userInvestOnCampaignDetails.forEach(element => {
                if (investmentId == element.campaign_id) {
                    campaignInvestedByuser = true;
                }
            });
            return campaignInvestedByuser;
        }
        else if (investmentType == 'F') {
            var fundInvestedByuser = false;
            this.currentUser.userInvestOnFundDetails.forEach(element => {
                if (investmentId == element.fund_id) {
                    fundInvestedByuser = true;
                }
            });
            return fundInvestedByuser;
        }
        else {
            return false;
        }
    }
    amountInvestedInInvestment(investmentId, investmentType) {
        var amount = 0;
        if (this.currentUser != null) {
            if (this.isInvestmentMadeByUser(investmentId, investmentType)) {
                if (investmentType == 'I') {
                    this.currentUser.userInvestOnCampaignDetails.forEach(element => {
                        if (investmentId == element.campaign_id) {
                            amount = element.amount;
                        }
                    });
                }
                else if (investmentType == 'F') {
                    this.currentUser.userInvestOnFundDetails.forEach(element => {
                        if (investmentId == element.fund_id) {
                            amount = element.amount;
                        }
                    });
                }
                else {
                    amount = 0;
                }
            }
            ;
        }
        return amount;
    }
};
AuthService.ctorParameters = () => [
    { type: _core_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/user/components/cart/cart.component.css":
/*!*********************************************************!*\
  !*** ./src/app/user/components/cart/cart.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* The container */\r\n.container {\r\n    display: block;\r\n    position: relative;\r\n    padding-left: 35px;\r\n    margin-bottom: 12px;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n  }\r\n/* Hide the browser's default checkbox */\r\n.container input {\r\n    position: absolute;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n    height: 0;\r\n    width: 0;\r\n  }\r\n/* Create a custom checkbox */\r\n.checkmark {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 25px;\r\n    width: 25px;\r\n    background-color: #eee;\r\n  }\r\n/* On mouse-over, add a grey background color */\r\n.container:hover input ~ .checkmark {\r\n    background-color: #ccc;\r\n  }\r\n/* When the checkbox is checked, add a blue background */\r\n.container input:checked ~ .checkmark {\r\n    background-color: #2196F3;\r\n  }\r\n/* Create the checkmark/indicator (hidden when not checked) */\r\n.checkmark:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    display: none;\r\n  }\r\n/* Show the checkmark when checked */\r\n.container input:checked ~ .checkmark:after {\r\n    display: block;\r\n  }\r\n/* Style the checkmark/indicator */\r\n.container .checkmark:after {\r\n    left: 9px;\r\n    top: 5px;\r\n    width: 5px;\r\n    height: 10px;\r\n    border: solid white;\r\n    border-width: 0 3px 3px 0;\r\n    transform: rotate(45deg);\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC91c2VyL2NvbXBvbmVudHMvY2FydC9jYXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0JBQWtCO0FBQ2xCO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsaUJBQWlCO0VBQ25CO0FBRUEsd0NBQXdDO0FBQ3hDO0lBQ0Usa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixlQUFlO0lBQ2YsU0FBUztJQUNULFFBQVE7RUFDVjtBQUVBLDZCQUE2QjtBQUM3QjtJQUNFLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFlBQVk7SUFDWixXQUFXO0lBQ1gsc0JBQXNCO0VBQ3hCO0FBRUEsK0NBQStDO0FBQy9DO0lBQ0Usc0JBQXNCO0VBQ3hCO0FBRUEsd0RBQXdEO0FBQ3hEO0lBQ0UseUJBQXlCO0VBQzNCO0FBRUEsNkRBQTZEO0FBQzdEO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixhQUFhO0VBQ2Y7QUFFQSxvQ0FBb0M7QUFDcEM7SUFDRSxjQUFjO0VBQ2hCO0FBRUEsa0NBQWtDO0FBQ2xDO0lBQ0UsU0FBUztJQUNULFFBQVE7SUFDUixVQUFVO0lBQ1YsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFHekIsd0JBQXdCO0VBQzFCIiwiZmlsZSI6ImFwcC91c2VyL2NvbXBvbmVudHMvY2FydC9jYXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBUaGUgY29udGFpbmVyICovXHJcbi5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDM1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLyogSGlkZSB0aGUgYnJvd3NlcidzIGRlZmF1bHQgY2hlY2tib3ggKi9cclxuICAuY29udGFpbmVyIGlucHV0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICB3aWR0aDogMDtcclxuICB9XHJcbiAgXHJcbiAgLyogQ3JlYXRlIGEgY3VzdG9tIGNoZWNrYm94ICovXHJcbiAgLmNoZWNrbWFyayB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gIH1cclxuICBcclxuICAvKiBPbiBtb3VzZS1vdmVyLCBhZGQgYSBncmV5IGJhY2tncm91bmQgY29sb3IgKi9cclxuICAuY29udGFpbmVyOmhvdmVyIGlucHV0IH4gLmNoZWNrbWFyayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gIH1cclxuICBcclxuICAvKiBXaGVuIHRoZSBjaGVja2JveCBpcyBjaGVja2VkLCBhZGQgYSBibHVlIGJhY2tncm91bmQgKi9cclxuICAuY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIENyZWF0ZSB0aGUgY2hlY2ttYXJrL2luZGljYXRvciAoaGlkZGVuIHdoZW4gbm90IGNoZWNrZWQpICovXHJcbiAgLmNoZWNrbWFyazphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLyogU2hvdyB0aGUgY2hlY2ttYXJrIHdoZW4gY2hlY2tlZCAqL1xyXG4gIC5jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcms6YWZ0ZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFN0eWxlIHRoZSBjaGVja21hcmsvaW5kaWNhdG9yICovXHJcbiAgLmNvbnRhaW5lciAuY2hlY2ttYXJrOmFmdGVyIHtcclxuICAgIGxlZnQ6IDlweDtcclxuICAgIHRvcDogNXB4O1xyXG4gICAgd2lkdGg6IDVweDtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIGJvcmRlcjogc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/user/components/cart/cart.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user/components/cart/cart.component.ts ***!
  \********************************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/cart.service */ "./src/app/core/services/cart.service.ts");
/* harmony import */ var src_app_core_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/http.service */ "./src/app/core/services/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../auth.service */ "./src/app/user/auth.service.ts");






let CartComponent = class CartComponent {
    constructor(authService, router, cartService, http) {
        this.authService = authService;
        this.router = router;
        this.cartService = cartService;
        this.http = http;
        this.conditionsAccepted = false;
    }
    ngOnInit() {
        this.currentOrders = this.cartService.currentOrders;
        this.currentSellOrders = this.cartService.currentSellOrders;
    }
    removeItem(order) {
        this.cartService.removeFromCart(order);
        this.currentOrders = this.cartService.currentOrders;
    }
    acceptConditions() {
        this.conditionsAccepted = true;
    }
    checkOut() {
        if (this.currentOrders != null && this.currentOrders.length > 0) {
            this.http.postRestData("insertOrUpdateOrder", this.currentOrders).subscribe(userResponse => {
                let user = JSON.parse((userResponse.body));
                if (userResponse.status == 200) {
                    console.log('order successful');
                    this.cartService.clearCart();
                    this.currentOrders = this.cartService.getCurrentCartOrders();
                    if (this.currentSellOrders != null && this.currentSellOrders.length > 0) {
                        this.checkOutSell();
                    }
                    else {
                        this.updateUseAndrouteToHome();
                    }
                }
                else if (userResponse.status == 500) {
                    console.log('login not succesfull');
                }
            }, error => {
                console.log('errors in log in -error message :- ' + error);
            });
        }
        else {
            if (this.currentSellOrders != null && this.currentSellOrders.length > 0) {
                this.checkOutSell();
            }
        }
    }
    updateUseAndrouteToHome() {
        this.authService.updateUserInformation();
        this.router.navigate(['/home']);
    }
    currentInvestmentAmountForOrder(investment_type, id) {
        var amount = 0;
        this.authService.currentUser.userInvestOnCampaignDetails.forEach(element => {
            if (id == element.campaign_id && investment_type == 'I') {
                amount = element.amount;
            }
        });
        this.authService.currentUser.userInvestOnFundDetails.forEach(element => {
            if (id == element.fund_id && investment_type == 'F') {
                amount = element.amount;
            }
        });
        return amount;
    }
    removeSellItem(sellOrder) {
        this.cartService.removeFromSellCart(sellOrder);
        this.currentSellOrders = this.cartService.currentSellOrders;
    }
    checkOutSell() {
        var orders = [];
        this.currentSellOrders.forEach(element => {
            var order = {
                item_id: element.item_id,
                invest_type: 'I',
                user_id: element.user_id,
                item_name: element.item_name,
                amount: element.remainingAmount
            };
            orders.push(order);
        });
        this.http.postRestData("updateOrder", orders).subscribe(userResponse => {
            let user = JSON.parse((userResponse.body));
            if (userResponse.status == 200) {
                console.log('order successful');
                this.cartService.clearSellCart();
                this.currentSellOrders = this.cartService.getCurrentSellCartOrders();
                this.updateUseAndrouteToHome();
            }
            else if (userResponse.status == 500) {
                console.log('login not succesfull');
            }
        }, error => {
            console.log('errors in log in -error message :- ' + error);
        });
    }
};
CartComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_core_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] },
    { type: src_app_core_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }
];
CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cart',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/components/cart/cart.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cart.component.css */ "./src/app/user/components/cart/cart.component.css")).default]
    })
], CartComponent);



/***/ }),

/***/ "./src/app/user/components/sell/sell.component.css":
/*!*********************************************************!*\
  !*** ./src/app/user/components/sell/sell.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvdXNlci9jb21wb25lbnRzL3NlbGwvc2VsbC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/user/components/sell/sell.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user/components/sell/sell.component.ts ***!
  \********************************************************/
/*! exports provided: SellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellComponent", function() { return SellComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SellComponent = class SellComponent {
    constructor() { }
    ngOnInit() {
    }
};
SellComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sell',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sell.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/components/sell/sell.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sell.component.css */ "./src/app/user/components/sell/sell.component.css")).default]
    })
], SellComponent);



/***/ }),

/***/ "./src/app/user/components/user-investments/user-investments.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/user/components/user-investments/user-investments.component.css ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvdXNlci9jb21wb25lbnRzL3VzZXItaW52ZXN0bWVudHMvdXNlci1pbnZlc3RtZW50cy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/user/components/user-investments/user-investments.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/user/components/user-investments/user-investments.component.ts ***!
  \********************************************************************************/
/*! exports provided: UserInvestmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInvestmentsComponent", function() { return UserInvestmentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth.service */ "./src/app/user/auth.service.ts");



let UserInvestmentsComponent = class UserInvestmentsComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
    }
};
UserInvestmentsComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
UserInvestmentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-investments',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-investments.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/components/user-investments/user-investments.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-investments.component.css */ "./src/app/user/components/user-investments/user-investments.component.css")).default]
    })
], UserInvestmentsComponent);



/***/ }),

/***/ "./src/app/user/components/userhome/userhome.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/user/components/userhome/userhome.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvdXNlci9jb21wb25lbnRzL3VzZXJob21lL3VzZXJob21lLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/user/components/userhome/userhome.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/user/components/userhome/userhome.component.ts ***!
  \****************************************************************/
/*! exports provided: UserhomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserhomeComponent", function() { return UserhomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserhomeComponent = class UserhomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
UserhomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-userhome',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./userhome.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/components/userhome/userhome.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./userhome.component.css */ "./src/app/user/components/userhome/userhome.component.css")).default]
    })
], UserhomeComponent);



/***/ }),

/***/ "./src/app/user/login.component.ts":
/*!*****************************************!*\
  !*** ./src/app/user/login.component.ts ***!
  \*****************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/user/auth.service.ts");




let LoginComponent = class LoginComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.pageTitle = 'Log In';
    }
    login(loginForm) {
        console.log("login hit");
        if (loginForm && loginForm.valid) {
            var userName = loginForm.form.value.userName;
            var password = loginForm.form.value.password;
            password = 'a';
            this.authService.login(userName, password).subscribe(userResponse => {
                let user = JSON.parse((userResponse.body));
                if (userResponse.status == 200) {
                    console.log('login succesful');
                    this.authService.setCurrentUser(user);
                    if (this.authService.currentUser.role == 1) {
                        // Navigate to the investor home page after log in as investor.
                        console.log('user role 1 - investor home page after log in as investor');
                        this.router.navigate(['/home']);
                    }
                    else if (this.authService.currentUser.role == 2) {
                        //Navigate to the fund raiser home page after log in as Raiser.
                        console.log('user role 2- fund raiser home page after log in as Raiser ');
                        this.router.navigate(['/fundRaiserHome']);
                    }
                    else if (this.authService.currentUser.role == 0) {
                        // Navigate to the fund manager home page after log in as F.m.
                        console.log('user role 0 - fund manager home page after log in as F.m.');
                        this.router.navigate(['/login']);
                    }
                }
                else if (userResponse.status == 500) {
                    console.log('login not succesfull');
                }
            }, error => {
                console.log('errors in log in -error message :- ' + error);
            });
        }
        else {
            this.errorMessage = 'Please enter a user name and password.';
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/login.component.html")).default
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "./src/app/user/login.component.ts");
/* harmony import */ var _core_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/shared/shared.module */ "./src/app/core/shared/shared.module.ts");
/* harmony import */ var _components_userhome_userhome_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/userhome/userhome.component */ "./src/app/user/components/userhome/userhome.component.ts");
/* harmony import */ var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/cart/cart.component */ "./src/app/user/components/cart/cart.component.ts");
/* harmony import */ var _components_user_investments_user_investments_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/user-investments/user-investments.component */ "./src/app/user/components/user-investments/user-investments.component.ts");
/* harmony import */ var _project_project_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../project/project.module */ "./src/app/project/project.module.ts");
/* harmony import */ var _project_components_fund_raiser_home_fund_raiser_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../project/components/fund-raiser-home/fund-raiser-home.component */ "./src/app/project/components/fund-raiser-home/fund-raiser-home.component.ts");
/* harmony import */ var _components_sell_sell_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/sell/sell.component */ "./src/app/user/components/sell/sell.component.ts");











let UserModule = class UserModule {
};
UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _core_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _project_project_module__WEBPACK_IMPORTED_MODULE_8__["ProjectModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                { path: 'login', component: _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
                { path: 'home', component: _components_userhome_userhome_component__WEBPACK_IMPORTED_MODULE_5__["UserhomeComponent"] },
                { path: 'cart', component: _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_6__["CartComponent"] },
                { path: 'myinvestments', component: _components_user_investments_user_investments_component__WEBPACK_IMPORTED_MODULE_7__["UserInvestmentsComponent"] },
                { path: 'fundRaiserHome', component: _project_components_fund_raiser_home_fund_raiser_home_component__WEBPACK_IMPORTED_MODULE_9__["FundRaiserHomeComponent"] }
            ])
        ],
        declarations: [
            _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
            _components_userhome_userhome_component__WEBPACK_IMPORTED_MODULE_5__["UserhomeComponent"],
            _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_6__["CartComponent"],
            _components_user_investments_user_investments_component__WEBPACK_IMPORTED_MODULE_7__["UserInvestmentsComponent"],
            _components_sell_sell_component__WEBPACK_IMPORTED_MODULE_10__["SellComponent"]
        ]
    })
], UserModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Avinash\Code\codejam_team5_front\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map