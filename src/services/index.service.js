import { readCode, writeCode } from "../models/index.model.js";
import { generateHash } from "../utils/index.util.js";

export function generateCode(url) {
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = "http://" + url;
        console.log(url);
    }
    const code = generateHash(url);
    return writeCode(url, code);
}


export function fetchCode(code) {
    return readCode(code);
}