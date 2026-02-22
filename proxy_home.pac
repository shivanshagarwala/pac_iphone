function FindProxyForURL(url, host) {
    if (shExpMatch(host, "*.blinkit.dev") || shExpMatch(host, "*.grofers.com"))
        return "PROXY 192.168.21.24:8888";
    return "DIRECT";
}
