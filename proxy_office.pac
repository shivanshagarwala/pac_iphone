function FindProxyForURL(url, host) {
    if ((shExpMatch(host, "*.blinkit.dev") || shExpMatch(host, "*.grofers.com")) 
        && isResolvable("10.100.7.163")) {
        return "PROXY 10.100.7.163:8888";
    }
    return "DIRECT";
}
