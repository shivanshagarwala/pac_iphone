function FindProxyForURL(url, host) {
    if (shExpMatch(host, "*.blinkit.dev") || shExpMatch(host, "*.grofers.com")) {
        return "PROXY 127.0.0.1:8888; PROXY cdefswq.local:8888; DIRECT";
    }
    return "DIRECT";
}
