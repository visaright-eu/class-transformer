"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toBoolean = void 0;
function toBoolean(value) {
    if (value === undefined || value === null) {
        return false;
    }
    if (typeof value === 'boolean') {
        return value;
    }
    if (typeof value === 'number') {
        return value > 0;
    }
    if (typeof value === 'string') {
        value = value.toLowerCase();
        switch (value) {
            case 'true':
            case 'yes':
            case 'on':
            case '1':
                return true;
            case 'false':
            case 'no':
            case 'off':
            case '0':
                return false;
            default:
                return false;
        }
    }
    return false;
}
exports.toBoolean = toBoolean;
//# sourceMappingURL=to-boolean.util.js.map