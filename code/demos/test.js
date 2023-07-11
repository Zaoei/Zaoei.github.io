window.LS = {
    getItem: (key) => {
        const value = document.cookie.match(`/${encodeURIComponent(key)}=[^;]+;/`);
        if (!value) {
            return null;
        }
        return decodeURIComponent(value[1]);
    },
    setItem: (key, value) => {
        if (!key) return;
        const date = new Date();
        date.setFullYear(date.getFullYear + 999);
        document.cookie =
            encodeURIComponent(key) +
            `=${encodeURIComponent(value)};expires=${date.toDateString()}`;
        Ls.length = document.cookie.match(/=/g).length;
    },
    key: (index) => {
        const cookies = document.cookie;
        const find = cookies.split(';').find((_, cIndex) => index === cIndex);
        return find ? decodeURIComponent(find.split('=')[0].replace(/\s*/g, '')) : null;
    },
    removeItem: (key) => {
        const cookie = document.cookie;
        if (!cookie.match(`/${key}/`)) return;
        const date = new Date();
        date.setFullYear(date.getFullYear() - 1);
        document.cookie = key + `=;expires=${date.toDateString()}`;
        Ls.length = document.cookie.match(/=/g).length;
    },
    clear: () => {
        const cookies = document.cookie;
        cookies.split(';').forEach((cookie) => {
            this.removeItem(cookie.split('=')[0]);
        });
    },
    length: 0
};
