import Vue from 'vue'

export function host(url) {
    const host = url.replace(/^http?:\/\//, '').replace(/\/.*$/, '');
    const parts = host.split('.').slice(-3);
    if(parts[0] === 'www') parts.shift;
    return parts.join('.');
}
Vue.filter('host', host);

export function timeAgo(time) {
    const between = Data.now() / 1000 - Number(time);
    if(between <3600) {
        return pluralize(~~(between / 60), ' minute');
    } else if(between < 86400) {
        return pluralize(~~(between / 3600), ' hour');
    } else {
        return pluralize(~~(between / 86400), ' day');
    }
}
Vue.filter('timeAgo', timeAgo);

function pluralize(time, label) {
    if(time === 1) {
        return time + label;
    }
    return time + label + 's';
}