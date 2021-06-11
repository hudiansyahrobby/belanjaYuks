export default interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    refreshToken: string;
    resetToken: string;
    role: string;
}
