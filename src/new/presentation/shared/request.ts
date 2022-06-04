export const Success = (Param?: any) => {
  return {
    status: 200,
    message: "Server completed the request as expected!",
    object: Param
  }
}

export const Created = (Created?: any) => {
  return {
    status: 201,
    message: `Server created in request!`,
    Created
  }
}

export const Accepted = () => {
  return {
    status: 202,
    message: "The request was received, but it has no authorization!"
  }
}


export const NoCotent = () => {
  return {
    status: 204,
    message: "Request received but no body!"
  }
}