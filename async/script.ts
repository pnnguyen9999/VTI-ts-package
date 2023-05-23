// function a(callback) {
//     callback('hello from a')
// }


// function b(callback) {
//     callback('hello from b')
// }

// function c(callback) {
//     callback('hello from c')
// }

// a((result) => {
//     console.log(result)
//     b((result) => {
//         console.log(result)
//         c((result) => {
//             console.log(result)
//         })
//     })
// })

// function test() {
//     console.log(1);
//     setTimeout(() => {
//         console.log(2);
//     }, 1000)
//     console.log(3);
// }

// function test(callback) {
//     console.log(1);
//     setTimeout(() => {
//         console.log(2);
//         callback();
//     }, 1000)
// }

// test(() => {
//     console.log(3)
// });

// var promise = new Promise((resolve, reject) => {
//     // resolve('Tra tien thanh cong')
//     reject('Bung tien')
// })

// promise.then(
//     (success) => {
//         console.log(success)
//     },
//     (error) => {

//     }
// ).catch((error) => {
//     console.log(error)
// })

// function test() {
//     console.log(1)
//     setTimeout(() => {
//         console.log(2)
//     },1000)
//     console.log(3)
// }

// test();

// function test(): Promise<void> {
//     return new Promise((resolve) => {
//         console.log(1);
//         setTimeout(() => {
//             console.log(2);
//             resolve()
//         })
//     })
// }

// test().then(() => {
//     console.log(3)
// })


interface ICheckEmailCallback {
    ({emailError, emailResult}:{emailError: string | null, emailResult: string | null}) : void;
}

interface ICheckUsernameCallback {
    ({usernameError, usernameResult}:{usernameError: string | null, usernameResult: string | null}) : void;
}

interface ICreateAccountCallback {
    ({createAccountError, createAccountSuccess}:{createAccountError: string | null, createAccountSuccess: IAccount | null}) : void;
}
   
interface IAccount {
    id: number,
    username: string,
    email: string
}

function checkEmail(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const emailExist: boolean = false;
            if (emailExist) {
                reject('This email is exists !!')
            } else {
                resolve('This email is available !')
            }
        },1000)
    })
}

function checkUsername(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const usernameExist:boolean = false;
            if (usernameExist) {
                reject('This username is exists !!');
            } else {
                resolve('This username is available !')
            }
        }, 1000)
    })
}

function createAccount(): Promise<IAccount> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success: boolean = true;
            if (success) {
                const account: IAccount = {
                    id: 1,
                    username: 'nguyen an',
                    email: 'an.nguyen@gmail.com',
                }
                resolve(account)
            } else {
                reject('Create account failed !')
            }
        })
    })
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
async function processAccount() {
    try {
        const emailResult = await checkEmail();
        console.log(emailResult);

        const usernameResult = await checkUsername();
        console.log(usernameResult);

        const accountResult = await createAccount();
        console.log(accountResult);
    } catch (error) {
        console.log(error)
    }
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