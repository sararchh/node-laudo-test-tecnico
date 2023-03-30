import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { jwtSignProps } from "@/types/jwtTypes";
import { jwtDecode } from "@/utils/jwt";

import { unauthorizedError } from "@/errors";

export async function authenticateToken(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    const authHeader = req.header("Authorization");
    if (!authHeader) return generateUnauthorizedResponse(res);

    const token = authHeader.split(" ")[1];
    if (!token) return generateUnauthorizedResponse(res);

    try {
        const { userId } = jwtDecode(token) as jwtSignProps;

        req.userId = userId;

        return next();
    } catch (err) {
        return generateUnauthorizedResponse(res);
    }
}

function generateUnauthorizedResponse(res: Response) {
    res.status(httpStatus.UNAUTHORIZED).send(unauthorizedError());
}

export type AuthenticatedRequest = Request & jwtSignProps;

