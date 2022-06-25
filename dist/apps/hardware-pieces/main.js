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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let AppController = class AppController {
};
AppController = __decorate([
    (0, common_1.Controller)()
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
const database_module_1 = __webpack_require__(/*! ./../../../libs/database/src/database.module */ "./libs/database/src/database.module.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const app_controller_1 = __webpack_require__(/*! ./app.controller */ "./apps/hardware-pieces/src/app.controller.ts");
const pieces_module_1 = __webpack_require__(/*! ./pieces/pieces.module */ "./apps/hardware-pieces/src/pieces/pieces.module.ts");
const user_module_1 = __webpack_require__(/*! ./user/user.module */ "./apps/hardware-pieces/src/user/user.module.ts");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [pieces_module_1.PiecesModule, user_module_1.UserModule, database_module_1.DatabaseModule],
        controllers: [app_controller_1.AppController],
        providers: [database_module_1.DatabaseModule],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./apps/hardware-pieces/src/pieces/dto/create-piece-request.dto.ts":
/*!*************************************************************************!*\
  !*** ./apps/hardware-pieces/src/pieces/dto/create-piece-request.dto.ts ***!
  \*************************************************************************/
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
exports.CreateUpdatePieceRequestDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class CreateUpdatePieceRequestDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateUpdatePieceRequestDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreateUpdatePieceRequestDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreateUpdatePieceRequestDto.prototype, "quantityStock", void 0);
exports.CreateUpdatePieceRequestDto = CreateUpdatePieceRequestDto;


/***/ }),

/***/ "./apps/hardware-pieces/src/pieces/piece.provider.ts":
/*!***********************************************************!*\
  !*** ./apps/hardware-pieces/src/pieces/piece.provider.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.pieceProviders = void 0;
const piece_entity_1 = __webpack_require__(/*! @app/database/entities/piece.entity */ "./libs/database/src/entities/piece.entity.ts");
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
var _a, _b, _c, _d, _e, _f, _g;
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
    updatePiece(pieceId, piece) {
        return this.piecesService.updatePiece(pieceId, piece);
    }
    deletePiece(id) {
        return this.piecesService.deletePiece(id);
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
    __metadata("design:paramtypes", [typeof (_b = typeof create_piece_request_dto_1.CreateUpdatePieceRequestDto !== "undefined" && create_piece_request_dto_1.CreateUpdatePieceRequestDto) === "function" ? _b : Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], PiecesController.prototype, "createPiece", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_d = typeof create_piece_request_dto_1.CreateUpdatePieceRequestDto !== "undefined" && create_piece_request_dto_1.CreateUpdatePieceRequestDto) === "function" ? _d : Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], PiecesController.prototype, "updatePiece", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], PiecesController.prototype, "deletePiece", null);
PiecesController = __decorate([
    (0, common_1.Controller)('pieces'),
    __param(0, (0, common_1.Inject)(pieces_service_1.PiecesService)),
    __metadata("design:paramtypes", [typeof (_g = typeof pieces_service_1.PiecesService !== "undefined" && pieces_service_1.PiecesService) === "function" ? _g : Object])
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
const database_module_1 = __webpack_require__(/*! ./../../../../libs/database/src/database.module */ "./libs/database/src/database.module.ts");
const piece_provider_1 = __webpack_require__(/*! ./piece.provider */ "./apps/hardware-pieces/src/pieces/piece.provider.ts");
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
    async updatePiece(id, piece) {
        await this.pieceRepository.update(id, Object.assign({}, piece));
        return await this.pieceRepository.findOne({ where: { id: id } });
    }
    async deletePiece(id) {
        await this.pieceRepository.delete(id);
    }
};
PiecesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('PIECE_REPOSITORY')),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _a : Object])
], PiecesService);
exports.PiecesService = PiecesService;


/***/ }),

/***/ "./apps/hardware-pieces/src/user/dto/create-user.request.dto.ts":
/*!**********************************************************************!*\
  !*** ./apps/hardware-pieces/src/user/dto/create-user.request.dto.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateUpdateUserRequestDto = void 0;
class CreateUpdateUserRequestDto {
}
exports.CreateUpdateUserRequestDto = CreateUpdateUserRequestDto;


/***/ }),

/***/ "./apps/hardware-pieces/src/user/user.controller.ts":
/*!**********************************************************!*\
  !*** ./apps/hardware-pieces/src/user/user.controller.ts ***!
  \**********************************************************/
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
exports.UserController = void 0;
const user_service_1 = __webpack_require__(/*! ./user.service */ "./apps/hardware-pieces/src/user/user.service.ts");
const create_user_request_dto_1 = __webpack_require__(/*! ./dto/create-user.request.dto */ "./apps/hardware-pieces/src/user/dto/create-user.request.dto.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    createUser(user) {
        return this.userService.create(user);
    }
    getUser(email) {
        return this.userService.findOne(email);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof create_user_request_dto_1.CreateUpdateUserRequestDto !== "undefined" && create_user_request_dto_1.CreateUpdateUserRequestDto) === "function" ? _a : Object]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], UserController.prototype, "createUser", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], UserController.prototype, "getUser", null);
UserController = __decorate([
    (0, common_1.Controller)('user'),
    __param(0, (0, common_1.Inject)(user_service_1.UserService)),
    __metadata("design:paramtypes", [typeof (_d = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _d : Object])
], UserController);
exports.UserController = UserController;


/***/ }),

/***/ "./apps/hardware-pieces/src/user/user.module.ts":
/*!******************************************************!*\
  !*** ./apps/hardware-pieces/src/user/user.module.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserModule = void 0;
const user_provider_1 = __webpack_require__(/*! ./user.provider */ "./apps/hardware-pieces/src/user/user.provider.ts");
const database_module_1 = __webpack_require__(/*! ./../../../../libs/database/src/database.module */ "./libs/database/src/database.module.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const user_service_1 = __webpack_require__(/*! ./user.service */ "./apps/hardware-pieces/src/user/user.service.ts");
const user_controller_1 = __webpack_require__(/*! ./user.controller */ "./apps/hardware-pieces/src/user/user.controller.ts");
let UserModule = class UserModule {
};
UserModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        providers: [
            user_service_1.UserService,
            ...user_provider_1.userProviders
        ],
        controllers: [user_controller_1.UserController]
    })
], UserModule);
exports.UserModule = UserModule;


/***/ }),

/***/ "./apps/hardware-pieces/src/user/user.provider.ts":
/*!********************************************************!*\
  !*** ./apps/hardware-pieces/src/user/user.provider.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.userProviders = void 0;
const user_entity_1 = __webpack_require__(/*! @app/database/entities/user.entity */ "./libs/database/src/entities/user.entity.ts");
exports.userProviders = [
    {
        provide: 'USER_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(user_entity_1.User),
        inject: ['DATA_SOURCE'],
    },
];


/***/ }),

/***/ "./apps/hardware-pieces/src/user/user.service.ts":
/*!*******************************************************!*\
  !*** ./apps/hardware-pieces/src/user/user.service.ts ***!
  \*******************************************************/
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
exports.UserService = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async findOne(email) {
        return this.userRepository.findOne({ where: { login: email } });
    }
    async create(user) {
        return this.userRepository.save(user);
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('USER_REPOSITORY')),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _a : Object])
], UserService);
exports.UserService = UserService;


/***/ }),

/***/ "./libs/database/src/database.module.ts":
/*!**********************************************!*\
  !*** ./libs/database/src/database.module.ts ***!
  \**********************************************/
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
const database_providers_1 = __webpack_require__(/*! ./database.providers */ "./libs/database/src/database.providers.ts");
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

/***/ "./libs/database/src/database.providers.ts":
/*!*************************************************!*\
  !*** ./libs/database/src/database.providers.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.databaseProviders = void 0;
const user_entity_1 = __webpack_require__(/*! ./entities/user.entity */ "./libs/database/src/entities/user.entity.ts");
const piece_entity_1 = __webpack_require__(/*! ./entities/piece.entity */ "./libs/database/src/entities/piece.entity.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const dotenv = __webpack_require__(/*! dotenv */ "dotenv");
dotenv.config({
    path: /*require.resolve*/(/*! ../../../.env */ "./.env")
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
                entities: [piece_entity_1.Piece, user_entity_1.User],
                synchronize: process.env.POSTGRES_SYNC == "true",
            });
            return dataSource.initialize();
        },
    },
];


/***/ }),

/***/ "./libs/database/src/entities/piece.entity.ts":
/*!****************************************************!*\
  !*** ./libs/database/src/entities/piece.entity.ts ***!
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Piece = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let Piece = class Piece {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
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

/***/ "./libs/database/src/entities/user.entity.ts":
/*!***************************************************!*\
  !*** ./libs/database/src/entities/user.entity.ts ***!
  \***************************************************/
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
exports.User = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let User = class User {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "login", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
User = __decorate([
    (0, typeorm_1.Entity)({ name: "users" })
], User);
exports.User = User;


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

/***/ "@nestjs/swagger":
/*!**********************************!*\
  !*** external "@nestjs/swagger" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@nestjs/swagger");

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
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const app_module_1 = __webpack_require__(/*! ./app.module */ "./apps/hardware-pieces/src/app.module.ts");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Cats example')
        .setDescription('The cats API description')
        .setVersion('1.0')
        .addTag('cats')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(3000);
}
bootstrap();

})();

/******/ })()
;