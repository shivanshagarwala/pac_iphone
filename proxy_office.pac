function FindProxyForURL(url, host) {
    if ((shExpMatch(host, "*.blinkit.dev") || shExpMatch(host, "*.grofers.com"))) {
        return "PROXY cdefswq.local:8888";
    }
    return "DIRECT";
}
