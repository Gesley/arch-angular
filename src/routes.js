import defaultRouter from './modules/default/routes';
import authRouter from './modules/auth/routes';
import userRouter from './modules/user/routes';

export default [
    defaultRouter,
    authRouter,
    userRouter
];