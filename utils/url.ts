const httpProtocol = /^(?:f|ht)tps?\:\/\//;
export function prependProtocol(url: string, isHttps = true) {
	if (!httpProtocol.test(url)) {
		url = `http${isHttps ? "s" : ""}://` + url;
	}
	return url;
}
