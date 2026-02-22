function FindProxyForURL(url, host) {
    if (isResolvable("192.168.21.24")) {
        return "PROXY 192.168.21.24:8888";
    }
    return "DIRECT";
}