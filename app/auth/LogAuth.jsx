var React = require('react');

module.exports = {
    login(user, pass, cb) {
        cb = arguments[arguments.length - 1]
        if (localStorage.token) {
            if (cb) cb(true)
            this.onChange(true)
            return
        }
        pretendRequest(user, pass, (res) => {
            if (res.authenticated) {
                localStorage.token = res.token
                if (cb) cb(true)
                this.onChange(true)
            } else {
                if (cb) cb(false)
                this.onChange(false)
            }
        })
    },

    getToken() {
        return localStorage.token
    },

    logout(cb) {
        delete localStorage.token
        if (cb) cb()
        this.onChange(false)
    },

    loggedIn() {
        return !!localStorage.token
    },

    onChange() {}
}

function pretendRequest(user, pass, cb) {
    setTimeout(() => {
        var initial = LoginStore.getItems();

        initial.forEach(function (userN) {
            if (userN.userName == user) {
                if (userN.password == pass)
                    cb({
                        authenticated: true,
                        token: userN.role
                    })
            }
            else
                cb({authenticated: false})
        }, this);

    }, 0)

}