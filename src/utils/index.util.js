import crypto from 'crypto';

let nonce = 0;
const RANDOMNESS = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

export function generateHash(url) {
    const message = `${url}:${RANDOMNESS}:${nonce++}`;
    const hash = crypto.createHash('sha256').update(message).digest();
    const code = hash.toString('base64').replace(/[^a-zA-Z0-9]/g, '').slice(0, 8);
    return code;
}
export function ErrorHandler(err, req, res, next) {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "error";
    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
    });
}