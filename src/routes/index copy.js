var generalRoutes = require("./general");
var masterRoutes = require("./master");
var productionRoutes = require("./production");
var inventoryRoutes = require("./inventory");
var publicRoutes = require("./public");
var purchasingRoutes = require("./purchasing");
var reportRoutes = require("./report");
var authRoutes = require("./auth");
var salesRoutes = require("./sales");
var garmentPurchasingRoutes = require("./garment-purchasing");
var garmentMasterPlanRoutes = require("./garment-master-plan");
var migrationLog = require("./migration-log");
var garmentMasterPlanRoutes = require("./garment-master-plan");
var customsReportRoutes = require("./customs-report");
let expeditionRoutes = require('./expedition');
let merchandiserRoutes = require('./merchandiser');
let accountingRoutes = require('./accounting');
let garmentProductionRoutes = require("./garment-production");
let packingSKUInventory = require("./packing-sku-inventory");
let customs = require("./customs");
let garmentShippingRoutes= require("./garment-shipping");
let garmentSubconRoutes= require("./garment-subcon");
let garmentFinance = require('./garment-finance');

export default [].concat(publicRoutes, generalRoutes, masterRoutes, productionRoutes, purchasingRoutes, salesRoutes, inventoryRoutes, garmentPurchasingRoutes, garmentMasterPlanRoutes, garmentFinance,  customsReportRoutes, authRoutes, expeditionRoutes, merchandiserRoutes, migrationLog, reportRoutes, accountingRoutes, garmentProductionRoutes, garmentShippingRoutes,garmentSubconRoutes, packingSKUInventory, customs);



