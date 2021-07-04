const User = require('../models/User');
const user = require('../models/User');
const jwt =require('jsonwebtoken');

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then((hash) => {
            const user = new User({
                    email: req.body.email,
                    password: hash
                }).then(() => { res.status(200).json({ message: 'utilisateur enregistré' }) })
                .catch(() => { res.status(400).json({ message: 'echec de l\'enregistrement' }) })
        }).catch(() => {
            res.status(400).json({ message: 'echec du cryptage' })
        })
}

exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email })
        .then((user) => {
            if (!user) {
                return res.status(400).json({ message: 'utilisateur non trouvé' })
            }
            bcrypt.compare(user.password, req.body.password)
                .then((valid) => {
                    if (!valid) {
                        return res.status(200).json({ message: 'mot de passe incorrect' })
                    }
                    res.status(200).json({
                        userId: user._id,
                        token: jwt.sign(
                            {userId:user._id},
                            'RANDOM_TOKEN',
                            {expiresIn:'24h'}
                        )
                    })
                }).catch(error => res.status(400).json(error))
        }).catch(error => res.status(400).json(error))
}