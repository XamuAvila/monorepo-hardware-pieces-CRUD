/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./.env":
/*!**************!*\
  !*** ./.env ***!
  \**************/
/***/ (() => {


POSTGRES_HOST="localhost"
POSTGRES_USER="root"
POSTGRES_PASSWORD="root"
POSTGRES_DB="iniciador_database"
POSTGRES_PORT="5432"
POSTGRES_SYNC="true"




/***/ }),

/***/ "./apps/hardware-pieces/src/app.controller.ts":
/*!****************************************************!*\
  !*** ./apps/hardware-pieces/src/app.controller.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const app_service_1 = __webpack_require__(/*! ./app.service */ "./apps/hardware-pieces/src/app.service.ts");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);
exports.AppController = AppController;


/***/ }),

/***/ "./apps/hardware-pieces/src/app.module.ts":
/*!************************************************!*\
  !*** ./apps/hardware-pieces/src/app.module.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const database_module_1 = __webpack_require__(/*! ./database/database.module */ "./apps/hardware-pieces/src/database/database.module.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const app_controller_1 = __webpack_require__(/*! ./app.controller */ "./apps/hardware-pieces/src/app.controller.ts");
const app_service_1 = __webpack_require__(/*! ./app.service */ "./apps/hardware-pieces/src/app.service.ts");
const pieces_module_1 = __webpack_require__(/*! ./pieces/pieces.module */ "./apps/hardware-pieces/src/pieces/pieces.module.ts");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [pieces_module_1.PiecesModule, database_module_1.DatabaseModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, database_module_1.DatabaseModule],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./apps/hardware-pieces/src/app.service.ts":
/*!*************************************************!*\
  !*** ./apps/hardware-pieces/src/app.service.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let AppService = class AppService {
    getHello() {
        return 'Hello World!';
    }
};
AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;


/***/ }),

/***/ "./apps/hardware-pieces/src/database/database.module.ts":
/*!**************************************************************!*\
  !*** ./apps/hardware-pieces/src/database/database.module.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatabaseModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const database_providers_1 = __webpack_require__(/*! ./database.providers */ "./apps/hardware-pieces/src/database/database.providers.ts");
let DatabaseModule = class DatabaseModule {
};
DatabaseModule = __decorate([
    (0, common_1.Module)({
        providers: [...database_providers_1.databaseProviders],
        exports: [...database_providers_1.databaseProviders],
    })
], DatabaseModule);
exports.DatabaseModule = DatabaseModule;


/***/ }),

/***/ "./apps/hardware-pieces/src/database/database.providers.ts":
/*!*****************************************************************!*\
  !*** ./apps/hardware-pieces/src/database/database.providers.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.databaseProviders = void 0;
const piece_entity_1 = __webpack_require__(/*! ./entities/piece.entity */ "./apps/hardware-pieces/src/database/entities/piece.entity.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const dotenv = __webpack_require__(/*! dotenv */ "dotenv");
dotenv.config({
    path: /*require.resolve*/(/*! ../../../../.env */ "./.env")
});
exports.databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new typeorm_1.DataSource({
                type: 'postgres',
                host: process.env.POSTGRES_HOST,
                port: parseInt(process.env.POSTGRES_PORT),
                username: process.env.POSTGRES_USER,
                password: `${process.env.POSTGRES_PASSWORD}`,
                database: process.env.POSTGRES_DB,
                entities: [piece_entity_1.Piece],
                synchronize: process.env.POSTGRES_SYNC == "true",
            });
            return dataSource.initialize();
        },
    },
];


/***/ }),

/***/ "./apps/hardware-pieces/src/database/entities/piece.entity.ts":
/*!********************************************************************!*\
  !*** ./apps/hardware-pieces/src/database/entities/piece.entity.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Piece = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let Piece = class Piece {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Piece.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Piece.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'numeric', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Piece.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Piece.prototype, "quantityStock", void 0);
Piece = __decorate([
    (0, typeorm_1.Entity)({ name: "pieces" })
], Piece);
exports.Piece = Piece;


/***/ }),

/***/ "./apps/hardware-pieces/src/pieces/dto/create-piece-request.dto.ts":
/*!*************************************************************************!*\
  !*** ./apps/hardware-pieces/src/pieces/dto/create-piece-request.dto.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreatePieceRequestDto = void 0;
class CreatePieceRequestDto {
}
exports.CreatePieceRequestDto = CreatePieceRequestDto;


/***/ }),

/***/ "./apps/hardware-pieces/src/pieces/piece.provider.ts":
/*!***********************************************************!*\
  !*** ./apps/hardware-pieces/src/pieces/piece.provider.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.pieceProviders = void 0;
const piece_entity_1 = __webpack_require__(/*! ./../database/entities/piece.entity */ "./apps/hardware-pieces/src/database/entities/piece.entity.ts");
exports.pieceProviders = [
    {
        provide: 'PIECE_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(piece_entity_1.Piece),
        inject: ['DATA_SOURCE'],
    },
];


/***/ }),

/***/ "./apps/hardware-pieces/src/pieces/pieces.controller.ts":
/*!**************************************************************!*\
  !*** ./apps/hardware-pieces/src/pieces/pieces.controller.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PiecesController = void 0;
const create_piece_request_dto_1 = __webpack_require__(/*! ./dto/create-piece-request.dto */ "./apps/hardware-pieces/src/pieces/dto/create-piece-request.dto.ts");
const pieces_service_1 = __webpack_require__(/*! ./pieces.service */ "./apps/hardware-pieces/src/pieces/pieces.service.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let PiecesController = class PiecesController {
    constructor(piecesService) {
        this.piecesService = piecesService;
    }
    getPieces() {
        return this.piecesService.findAll();
    }
    createPiece(piece) {
        return this.piecesService.createPiece(piece);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], PiecesController.prototype, "getPieces", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_piece_request_dto_1.CreatePieceRequestDto !== "undefined" && create_piece_request_dto_1.CreatePieceRequestDto) === "function" ? _b : Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], PiecesController.prototype, "createPiece", null);
PiecesController = __decorate([
    (0, common_1.Controller)('pieces'),
    __param(0, (0, common_1.Inject)(pieces_service_1.PiecesService)),
    __metadata("design:paramtypes", [typeof (_d = typeof pieces_service_1.PiecesService !== "undefined" && pieces_service_1.PiecesService) === "function" ? _d : Object])
], PiecesController);
exports.PiecesController = PiecesController;


/***/ }),

/***/ "./apps/hardware-pieces/src/pieces/pieces.module.ts":
/*!**********************************************************!*\
  !*** ./apps/hardware-pieces/src/pieces/pieces.module.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PiecesModule = void 0;
const piece_provider_1 = __webpack_require__(/*! ./piece.provider */ "./apps/hardware-pieces/src/pieces/piece.provider.ts");
const database_module_1 = __webpack_require__(/*! ./../database/database.module */ "./apps/hardware-pieces/src/database/database.module.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const pieces_service_1 = __webpack_require__(/*! ./pieces.service */ "./apps/hardware-pieces/src/pieces/pieces.service.ts");
const pieces_controller_1 = __webpack_require__(/*! ./pieces.controller */ "./apps/hardware-pieces/src/pieces/pieces.controller.ts");
let PiecesModule = class PiecesModule {
};
PiecesModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        providers: [
            pieces_service_1.PiecesService,
            ...piece_provider_1.pieceProviders
        ],
        controllers: [pieces_controller_1.PiecesController]
    })
], PiecesModule);
exports.PiecesModule = PiecesModule;


/***/ }),

/***/ "./apps/hardware-pieces/src/pieces/pieces.service.ts":
/*!***********************************************************!*\
  !*** ./apps/hardware-pieces/src/pieces/pieces.service.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PiecesService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let PiecesService = class PiecesService {
    constructor(pieceRepository) {
        this.pieceRepository = pieceRepository;
    }
    async findAll() {
        return this.pieceRepository.find();
    }
    async createPiece(piece) {
        return this.pieceRepository.save(piece);
    }
};
PiecesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('PIECE_REPOSITORY')),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _a : Object])
], PiecesService);
exports.PiecesService = PiecesService;


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("@nestjs/core");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("dotenv");

/***/ }),

/***/ "typeorm":
/*!**************************!*\
  !*** external "typeorm" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("typeorm");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;
/*!******************************************!*\
  !*** ./apps/hardware-pieces/src/main.ts ***!
  \******************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const app_module_1 = __webpack_require__(/*! ./app.module */ "./apps/hardware-pieces/src/app.module.ts");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(3000);
}
bootstrap();

})();

/******/ })()
;