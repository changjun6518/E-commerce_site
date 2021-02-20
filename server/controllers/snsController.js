import passport from "passport";
import db from "../db";

export const kakaoLogin = passport.authenticate("kakao");

export const kakaoLoginCallback = async (_, __, profile, cb) => {
  const {
    _json: { id }
  } = profile;
  const {
    properties: { nickname: name }
  } = profile._json;
  const {
    kakao_account: { email }
  } = profile._json;
  try {
    db.query(`SELECT * from USER where kkoEmail = '${email}';`,
    function (err, user) {
      if (!(user.length == 0)) {
        db.query(`UPDATE USER SET kkoID = ${id} where kkoEmail = '${email}';`,
          function (err, user) {
            return cb(null, user);
          }
        );
      } else {
        if (email){
          db.query(`INSERT INTO USER (kkoID, kkoEmail, name) VALUES('${id}', '${email}', '${name}');`, 
          function (err, newUser) {
            return cb(null, newUser);
          });
        } else {
          db.query(`INSERT INTO USER (kkoID, name) VALUES('${id}', '${name}');`, 
          function (err, newUser) {
            return cb(null, newUser);
          });
        };
      };
    }
    );
  } catch (error) {
    console.log("kakaoLoginCallback");
    console.log(error);
    return cb(error);
  }
};

export const postKakaoLogin = (req, res) => {
  return res.json({
    success: true,
  });
};


export const naverLogin = passport.authenticate("naver");

export const naverLoginCallback = async (_, __, profile, cb) => {
  const {
    _json: { id, email, nickname : name }
  } = profile;
  try {
    db.query(`SELECT * from USER where nvrEmail = '${email}';`,
    function (err, user) {
      if (!(user.length == 0)) {
        db.query(`UPDATE USER SET nvrID = ${id} where nvrEmail = '${email}';`,
          function (err, user) {
            return cb(null, user);
          }
        );
      } else {
        if (email){
          db.query(`INSERT INTO USER (nvrID, nvrEmail, name) VALUES('${id}', '${email}', '${name}');`, 
          function (err, newUser) {
            return cb(null, newUser);
          });
        } else {
          db.query(`INSERT INTO USER (nvrID, name) VALUES('${id}', '${name}');`, 
          function (err, newUser) {
            return cb(null, newUser);
          });
        };
      };
    }
    );
  } catch (error) {
    console.log("naverLoginCallback");
    console.log(error);
    return cb(error);
  }
};

export const postNaverLogin = (req, res) => {
  return res.json({
    success: true,
  });
};


export const googleLogin = passport.authenticate("google", { scope: ['profile'] });

export const googleLoginCallback = async (_, __, profile, cb) => {
  const {
    _json: { sub : id,displayName : name }
  } = profile;
  try {
    db.query(`SELECT * from USER where gglID = '${id}';`,
    function (err, user) {
      if (!(user.length == 0)) {
        return cb(null, user);
      } else {
        db.query(`INSERT INTO USER (gglID, name) VALUES('${id}', '${name}');`, 
          function (err, newUser) {
            return cb(null, newUser);
          });
      };
    }
    );
  } catch (error) {
    console.log("googleLoginCallback");
    console.log(error);
    return cb(error);
  }
};

export const postGoogleLogin = (req, res) => {
  return res.json({
    success: true,
  });
};