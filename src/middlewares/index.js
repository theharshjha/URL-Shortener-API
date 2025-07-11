import validator from 'validator'
import { fetchCode } from '../services/index.js';

export function validURL(req, res, next) {
    try {
        const url = req.body.url;
        if (!validator.isURL(url)) {
            throw new Error("URL NOT FOUND/INVALID");
        }
        req._data = { url };
    } catch (err) {
        return next(err);

    }
    next();
}


export async function checkCode(req, res, next) {
    try {
        const code = req.params.code;
        if (!code) {
            throw new Error("NO CODE PROVIDED");
        }
        const data = await fetchCode(code);
        if (!data) {
            throw new Error("INVALID CODE");
        }
        req._data = data;
    } catch (err) {
        return next(err);
    }
    next();
}
