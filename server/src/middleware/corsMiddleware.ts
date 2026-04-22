import cors from 'cors';
import { Request, Response, NextFunction } from 'express';

const ALLOWED_ORIGINS = [
    'http://localhost:3000',
    'http://localhost:5173',
    'https://job-hunter-448218.web.app/',
];

// function Log(target: any, propertyKey?: string, descriptor?: PropertyDescriptor) {
//     const originalMethod = descriptor.value;
  
//     descriptor.value = function (...args: any[]) {
//       console.log(`Calling ${propertyKey}`);
//       const result = originalMethod.apply(this, args);
//       console.log(`Method ${propertyKey} returned ${result}`);
//       return result;
//     };
  
//     return descriptor;
//   }

// function loggedMethod(originalMethod: any, _context: any) {

//     return function replacementMethod(this: any, ...args: any[]) {
//         console.log(`Method ${originalMethod.name} called with arguments ${args}`);
//         return originalMethod.apply(this, args);
//     }
// };
  
//   class MyClass {
//     // @Log 
//     @loggedMethod
//     myMethod() {
//       return "Hello from myMethod";
//     }
//   }

// @loggedMethod
const corsOptionsDelegate = (req: Request, callback: any) => {
    let corsOptions;
    const origin = req.header('Origin') || '';
    if (ALLOWED_ORIGINS.includes(origin)) {
        corsOptions = { origin: true } // reflect (disable) the custom origin
    } else {
        corsOptions = { origin: false } //disable the custom origin
    }
    callback(null, corsOptions) // callback expects two parameters: error and options
}

const corsMiddleware = cors(corsOptionsDelegate);

export default corsMiddleware;
