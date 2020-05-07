import passport from 'passport';
import bcrypt from 'bcryptjs';
import { Strategy as LocalStrategy } from 'passport-local';
import { ObjectId } from 'mongodb';

passport.serializeUser((user: any, done) => {
  done(null, user._id.toString());
});

// passport#160
passport.deserializeUser((req: any, id: string, done: any) => {
  req.db
    .collection('users')
    .findOne(new ObjectId(id))
    .then((user: any) => done(null, user));
});

passport.use(
  new LocalStrategy(
    { usernameField: 'email', passReqToCallback: true },
    async (req: any, email, password, done) => {
      if (!req.db) {
        done(null, false);
      }

      const user = await req.db.collection('users').findOne({ email });
      if (user && (await bcrypt.compare(password, user.password))) {
        done(null, user);
      } else {
        done(null, false);
      }
    },
  ),
);

export default passport;
