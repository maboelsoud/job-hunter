

function authorizedRoute(originalMethod: any) {
    return function replacementMethod(this: any, ...args: any[]) {
        return originalMethod.apply(this, args);
    }
}