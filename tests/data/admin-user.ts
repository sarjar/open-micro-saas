import { authConfig } from "@/config";

export const adminUser = {
  email: "admin@my-saas.com",
  name: "Admin",
  plainPassword: "admin",
  appUrl: authConfig.adminUserCallbackUrl,
  loginUrl: authConfig.loginUrl,
  storageSessionPath: "./tests/data/admin-user.session.json",
};
