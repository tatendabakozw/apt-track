import express from 'express';
const router = express();
import { body } from 'express-validator';
import { randomUUID } from 'crypto';
import { User } from '../../models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// register user
// post request
// /api/auth/register
router.post(
  '/register',
  body('email').isEmail(),
  body('password').isLength({ min: 6 }),
  async (req, res, next) => {
    try {
      const {
        email,
        agreed,
        role,
        method,
        username,
        googleAuthId,
        photoURL,
        phoneNumber,
      } = req.body;
      let { password } = req.body;

      // create password for google users
      if (method === 'google') {
        password = randomUUID();
      }

      // get user from database
      const user = await User.findOne({ email: email });

      //validate forms
      if (!agreed) {
        return res
          .status(401)
          .send({ message: 'Your have to agree to our terms and conditions' });
      }

      if (user) {
        return res.status(500).send({ message: 'Account already exists' });
      }

      //create new user object
      const newUser = new User({
        role: 'passenger',
        email: email,
        password: bcrypt.hashSync(password, 12),
        terms_agreed: agreed,
        authMethod: method,
        username: username,
        googleAuthId: googleAuthId,
        photoURL: photoURL,
        phoneNumber: phoneNumber,
      });

      //save in database
      const _user = await newUser.save();
      let token;
      if (method === 'google') {
        token = await jwt.sign(
          {
            email: _user.email,
            _id: _user._id,
            role: _user.role,
            emailVerified: _user.emailApproved,
            username: _user.username,
            photoURL: _user.photoURL,
          },
          process.env.JWT_SECRET
        );
        if (token) {
          const user = {
            email: _user.email,
            _id: _user._id,
            role: _user.role,
            emailVerified: _user.emailApproved,
            username: _user.username,
            photoURL: _user.photoURL,
            token: token,
          };
          return res.status(200).send({ ...user, message: 'Account Created' });
        } else {
          return res
            .status(422)
            .send({ message: 'Failed to login, Try again!' });
        }
      }

      // if user registered using email and password
      return res.status(200).send({ message: 'Account Created' });
    } catch (error) {
      next(error);
    }
  }
);

// login user
router.post('/login', async (req, res, next) => {
  try {
    // fields from request
    const { email, password, googleAuthId } = req.body;

    const _user = await User.findOne({ email: email });

    if(!email){
      return res.status(400).send({message: 'Please provide email'})
    }

    // user not found
    if (!_user) {
      return res.status(404).send({ message: 'Account does not exist!' });
    }
    if (!_user.emailApproved) {
      return res.status(403).send({ message: 'Verify your email address' });
    }
    if (_user.authMethod === 'google' && googleAuthId === '') {
      return res.status(400).send({ message: 'Login Using Google' });
    }

    if (_user.authMethod === 'google') {
      // decrypt password value from database
      if (_user.googleAuthId === googleAuthId) {
        const token = await jwt.sign(
          {
            email: _user.email,
            _id: _user._id,
            role: _user.role,
            emailVerified: _user.emailApproved,
            username: _user.username,
            photoURL: _user.photoURL,
          },
          process.env.JWT_SECRET
        );
        if (token) {
          const user = {
            email: _user.email,
            _id: _user._id,
            role: _user.role,
            emailVerified: _user.emailApproved,
            username: _user.username,
            photoURL: _user.photoURL,
            token: token,
          };

          return res.send({ ...user, message: 'logged in sucessfully' });
        } else {
          return res
            .status(422)
            .send({ message: 'Failed to login, Try Again' });
        }
      } else {
        return res.status(403).send({ message: 'Login using Google' });
      }
    }

    // decrypt password value from database
    const password_correct = await bcrypt.compare(password, _user.password);
    if (password_correct) {
      const token = await jwt.sign(
        {
          email: _user.email,
          _id: _user._id,
          role: _user.role,
          emailVerified: _user.emailApproved,
          username: _user.username,
          photoURL: _user.photoURL,
        },
        process.env.JWT_SECRET
      );
      if (token) {
        const user = {
          email: _user.email,
          _id: _user._id,
          role: _user.role,
          emailVerified: _user.emailApproved,
          username: _user.username,
          photoURL: _user.photoURL,
          token: token,
        };

        return res.send({ user, message: 'logged in sucessfully' });
      } else {
        return res
          .status(422)
          .send({ message: 'Failed to login, Wrong details!' });
      }
    } else {
      return res.status(400).send({ message: 'Wrong login details' });
    }
  } catch (error) {
    next(error);
  }
});

export default router;
