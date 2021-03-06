const USERS = "/api/users";
const PRODUCTS = "/api/products";
// Admin

const ADMIN = "/admin";

// USER

const REGISTER = "/register";
const AUTH = "/auth";
const LOGIN = "/login";
const LOGOUT = "/logout";
const CHECKEMAIL = "/checkEmail";
const USER_DETAIL = "/detail";
const EDIT_USER = "/edit";

// PRODUCTS with HOME

const HOME = "/";
const LOAD_PRODUCT = "/load";
const UPLOAD_PRODUCT = "/upload";
const EDIT_PRODUCT = "/edit";
const SEARCH_PRODUCT = "/search";
const DETAIL_PRODUCT = "/detail";
const DELETE_PRODUCT = "/delete";

// API
const API = "/api";

// Kakao

const KAKAO = "/oauth/kakao";
const KAKAO_CALLBACK = "/auth/kakao/callback";
const NAVER = "/oauth/naver";
const NAVER_CALLBACK = "/auth/naver/callback";
const GOOGLE = "/oauth/google";
const GOOGLE_CALLBACK = "/auth/google/callback";


const routes = {
  
  home: HOME,
  
  //ADMIN
  
  admin: ADMIN,

  // USER

  users: USERS,
  register: REGISTER,
  auth: AUTH,
  login: LOGIN,
  checkEmail: CHECKEMAIL,
  logout: LOGOUT,
  editUser: EDIT_USER,
  userDetail: USER_DETAIL,

  // PRODUCTS

  products: PRODUCTS,
  loadProduct: LOAD_PRODUCT,
  searchProduct: SEARCH_PRODUCT,
  uploadProduct: UPLOAD_PRODUCT,
  editProduct: EDIT_PRODUCT,
  detailProduct: DETAIL_PRODUCT,
  deleteProduct: DELETE_PRODUCT,

  api: API,

  //SNS_LOGINS
  kakao: KAKAO,
  kakaoCallback: KAKAO_CALLBACK,
  naver: NAVER,
  naverCallback: NAVER_CALLBACK,
  google: GOOGLE,
  googleCallback: GOOGLE_CALLBACK,

};

export default routes;