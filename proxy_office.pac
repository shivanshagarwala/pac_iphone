function FindProxyForURL(url, host) {
    if (isResolvable("10.100.14.130")) {
        return "PROXY 10.100.14.130:8888";
    }
    return "DIRECT";
}
