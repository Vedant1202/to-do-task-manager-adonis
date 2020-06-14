'use strict';
const User = use('App/Models/User');

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash');

class AuthController {
    async register({ request, auth, response }) {
        const name = request.input('name');
        const email = request.input('email');
        // const password = await Hash.make(request.input("password"))
        const password = await Hash.make(request.input('password'));

        let user = {};
        user.name = name;
        user.email = email;
        user.password = password;

        user = await User.create(user);

        const respUserData = {
            name: user.name,
            email: user.email,
            userId: user.id,
        };

        let accessToken = await auth.generate(user);
        return response.json({ user: respUserData, access_token: accessToken });
    }

    async login({ request, auth, response }) {
        const email = request.input('email');
        const password = request.input('password');
        try {
            if (email.length > 0 && password.length > 0) {
                let user = await User.findBy('email', email);

                if (await Hash.verify(password, user.password)) {
                    const respUserData = {
                        name: user.name,
                        email: user.email,
                        userId: user.id,
                    };

                    let accessToken = await auth.generate(user);
                    return response.json({ user: respUserData, access_token: accessToken });

                } else {
                    return response.status(401).message({ message: 'Wrong credentials' });
                }
            }
        } catch (e) {
            return response.status(401).json({ message: 'Wrong or unregistered credentials' });
        }
    }
}

module.exports = AuthController;
