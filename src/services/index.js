import { readCode, writeCode } from "../models/index.js";
import { generateHash } from "../utils/index.js";

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