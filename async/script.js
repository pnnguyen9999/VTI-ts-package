// function a(callback) {
//     callback('hello from a')
// }
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
};
function checkEmail() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            var emailExist = false;
            if (emailExist) {
                reject('This email is exists !!');
            }
            else {
                resolve('This email is available !');
            }
        }, 1000);
    });
}
function checkUsername() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            var usernameExist = false;
            if (usernameExist) {
                reject('This username is exists !!');
            }
            else {
                resolve('This username is available !');
            }
        }, 1000);
    });
}
function createAccount() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            var success = true;
            if (success) {
                var account = {
                    id: 1,
                    username: 'nguyen an',
                    email: 'an.nguyen@gmail.com',
                };
                resolve(account);
            }
            else {
                reject('Create account failed !');
            }
        });
    });
}
// USING PROMISE
// checkEmail().then((emailResult) => {
//     console.log(emailResult)
//     return checkUsername()
// }).then((usernameResult) => {
//     console.log(usernameResult)
//     return createAccount()
// }).then((accountResult) => {
//     console.log(accountResult)
// }).catch((error) => {
//     console.log(error)
// })
// USING ASYNC
function processAccount() {
    return __awaiter(this, void 0, void 0, function () {
        var emailResult, usernameResult, accountResult, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    return [4 /*yield*/, checkEmail()];
                case 1:
                    emailResult = _a.sent();
                    console.log(emailResult);
                    return [4 /*yield*/, checkUsername()];
                case 2:
                    usernameResult = _a.sent();
                    console.log(usernameResult);
                    return [4 /*yield*/, createAccount()];
                case 3:
                    accountResult = _a.sent();
                    console.log(accountResult);
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    console.log(error_1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
processAccount();
// USING CALLBACK
// function checkEmail(callback: ICheckEmailCallback) {
//     setTimeout(() => {
//         const emailExist: boolean = false;
//         if (emailExist) {
//             callback({
//                 emailError: 'This Email is Exists !!',
//                 emailResult: null
//             })
//         } else {
//             callback({
//                 emailError: null,
//                 emailResult: 'Email is available'
//             })
//         }
//     },1000)
// }
// function checkUsername(callback: ICheckUsernameCallback) {
//     setTimeout(() => {
//         const usernameExist: boolean = false
//         if (usernameExist) {
//             callback({
//                 usernameError: 'This username is exists !',
//                 usernameResult: null
//             })
//         } else {
//             callback({
//                 usernameError: null,
//                 usernameResult: 'This username is availble'
//             })
//         }
//     }, 1000)
// }
// function createAccount(callback: ICreateAccountCallback) {
//     setTimeout(() => {
//         const success: boolean = true;
//         if (success) {
//             const account: IAccount = {
//                 id: 1,
//                 username: 'nguyen an',
//                 email: 'an.nguyen@gmail.com',
//             }
//             callback({
//                 createAccountError: null,
//                 createAccountSuccess: account
//             })
//         } else {
//             callback({
//                 createAccountError: 'Create account failed ',
//                 createAccountSuccess: null
//             })
//         }
//     },1000)
// }
// checkEmail((callback) => {
//     if (callback.emailError) {
//         console.log(callback.emailError)
//     } else {
//         console.log(callback.emailResult)
//         checkUsername((callback) => {
//             if (callback.usernameError) {
//                 console.log(callback.usernameError)
//             } else {
//                 console.log(callback.usernameResult)
//                 createAccount((callback) => {
//                     if (callback.createAccountError) {
//                         console.log(callback.createAccountError)
//                     } else {
//                         console.log(callback.createAccountSuccess)
//                     }
//                 })
//             }
//         })
//     }
// })
