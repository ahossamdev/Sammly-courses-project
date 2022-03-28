const AdminBro = require("admin-bro");
const AdminBroExpress = require("admin-bro-expressjs");
const AdminBroMongoose = require("admin-bro-mongoose");
AdminBro.registerAdapter(AdminBroMongoose);
const mongoose = require("mongoose");

const locale = {
  translations: {
    labels: {
      loginWelcome: "Welcome to Sammly ",
      navigation: "Sammly",
    },
    messages: {
      loginWelcome: "Are you admin? login",
      welcomeOnBoard_title: "Welcome to sammly admin dashboard!",
      welcomeOnBoard_subtitle: "",
      invalidCredentials: "Invalid email or password !",
      needMoreSolutions_title: "",
      needMoreSolutions_subtitle: "",
    },
    adminVersion: "Admin: Ahmed Hossam",
  },
};

const adminBro = new AdminBro({
  databases: [mongoose],
  rootPath: "/admin",
  locale,
  branding: {
    companyName: "Sammly",
    softwareBrothers: false,
    logo: "../uploads/logo.jpeg",
  },
});
const ADMIN = {
  email: process.env.ADMIN_EMAIL,
  password: process.env.ADMIN_PASSWORD,
};

const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
  authenticate: async (email, password) => {
    if (email == ADMIN.email && password == ADMIN.password) {
      return ADMIN;
    } else {
      return null;
    }
  },
  cookieName: process.env.ADMIN_COOKIE_NAME || "admin-bro",
  cookiePassword: process.env.ADMIN_COOKIE_PASSWORD || "somepassword",
});
module.exports = router;
