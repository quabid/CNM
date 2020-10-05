const ftpUrlPattern = /^(ftp:\/\/).*/;
const httpUrlPattern = /^(http:\/\/).*/;
const httpsUrlPattern = /^(https:\/\/).*/;

exports.hasFtpProtocol = url => ftpUrlPattern.test(url);
exports.hasHttpProtocol = url => httpUrlPattern.test(url);
exports.hasHttpsProtocol = url => httpsUrlPattern.test(url);
exports.addProtocol = (proto, url) => `${proto}${url}`.trim();
exports.addFtpProtocol = url => {
  if (!ftpUrlPattern.test(url)) {
    return `ftp://${url}`;
  } else {
    return url;
  }
};
exports.addHttpProtocol = (proto, url) => {
  if (!httpUrlPattern.test(url)) {
    return `http://${url}`;
  } else {
    return url;
  }
};
exports.addHttpsProtocol = (proto, url) => {
  if (!httpsUrlPattern.test(url)) {
    return `https://${url}`;
  } else {
    return url;
  }
};
