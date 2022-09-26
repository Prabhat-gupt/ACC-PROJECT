
const handlerror=(error)=>{
    let errors = {};

    if(error.message.includes('user validation failed')){
        Object.values(error.errors).forEach(({properties})=> {
            errors[properties.path] = properties.message;
        })
    }
    return errors;
}

module.exports = handlerror;