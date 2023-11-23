const logMiddleware = (store) => (next) => (action) => {
    console.log('Action: ', action);
}

export default logMiddleware;