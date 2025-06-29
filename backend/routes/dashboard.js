"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../middleware/auth");
const router = (0, express_1.Router)();
// Admin-only route
router.get('/admin', auth_1.verifyToken, (0, auth_1.allowRoles)('admin'), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json({ message: `Hello Admin!`, user: req.user });
    }
    catch (error) {
        next(error);
    }
}));
// Doctor-only route
router.get('/doctor', auth_1.verifyToken, (0, auth_1.allowRoles)('doctor'), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json({ message: `Hello Doctor!`, user: req.user });
    }
    catch (error) {
        next(error);
    }
}));
// Nurse-only route
router.get('/nurse', auth_1.verifyToken, (0, auth_1.allowRoles)('nurse'), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json({ message: `Hello Nurse!`, user: req.user });
    }
    catch (error) {
        next(error);
    }
}));
exports.default = router;
