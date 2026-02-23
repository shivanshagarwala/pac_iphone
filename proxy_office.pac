function FindProxyForURL(url, host) {
    if ((shExpMatch(host, "*.blinkit.dev") || shExpMatch(host, "*.grofers.com")) 
        && isResolvable("10.100.17.242")) {
        return "PROXY 10.100.17.242:8888";
    }
    return "DIRECT";
}
