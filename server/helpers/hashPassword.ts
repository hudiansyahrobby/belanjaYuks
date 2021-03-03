import bcrypt from "bcryptjs";

const hashPassword = (password: string): Promise<string> =>
  bcrypt.hash(password, 10).then((hash) => {
    return hash;
  });

export default hashPassword;
