import { validationResult } from "express-validator";

// Express validator function
export const checkFields = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        });
    };

    next();
};