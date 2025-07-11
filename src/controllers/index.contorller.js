import { generateCode } from "../services/index.service.js";

export async function shortenUrl(req, res) {
    const data = await generateCode(req._data.url);
    res.status(200);
    res.json({ shortUrl: data.code });
    res.end();
}

export function redirect(req, res) {
    res.redirect(302, req._data.url);
}