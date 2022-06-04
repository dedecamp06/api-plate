export const Error = (Error?: any) => {
    return {
        status: 500,
        message: "Server Error!",
        Error
    }
}

export const Forbidden = (Error: any) => {
    return {
        status: 403,
        message: Error
    }
}

export const BadRequest = {
    status: 400,
    message: "Request has wrong format."
}

export const Unauthorized = {
    status: 401,
    message: "Authentication credentials not valid."
}
