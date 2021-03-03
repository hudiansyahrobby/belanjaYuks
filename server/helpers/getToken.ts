const jwt = require('jsonwebtoken');

type Payload = {
    id: number | undefined;
};

const getToken = (payload: Payload, tokenSecret: string | undefined, tokenLife: string | undefined): string => {
    return jwt.sign(payload, tokenSecret, {
        expiresIn: tokenLife,
    });
};

export default getToken;
