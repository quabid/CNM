const ftpUrlPattern = /^(ftp:\/\/).*/;
const httpPattern = /^(http:\/\/).*/;
const httpsUrlPattern = /^(https:\/\/).*/;

exports.hasFtpProtocol = (url) => ftpUrlPattern.test(url);
exports.hasHttpProtocol = (url) => httpPattern.test(url);
exports.hasHttpsProtocol = (url) => httpsUrlPattern.test(url);
exports.addProtocol = (proto = "http://", url) => `${proto}${url}`;
