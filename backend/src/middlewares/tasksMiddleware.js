const validateBody = (request, response, next) => {
    const { body } = request;

    if(body.title === undefined) {
        return response.status(400).json({ message: 'O campo \'title\' é obrigatório' });
    }
    
    if(body.title === '') {
        return response.status(400).json({ message: 'O campo \'title\' não pode ser vazio' });
    } 
    
    if (body.title === null) {
        return response.status(400).json({ message: 'O campo \'title\' não pode ser nulo' });
    }

    if (body.status === undefined) {
        return response.status(400).json({ message: 'O campo \'status\' é obrigatório' });
    }

    if (body.status === '') {
        return response.status(400).json({ message: 'O campo \'status\' não pode ser vazio' });
    }

    if (body.status === null) {
        return response.status(400).json({ message: 'O campo \'status\' não pode ser nulo' });
    }

    if (body.created_at === undefined) {
        return response.status(400).json({ message: 'O campo \'created_at\' é obrigatório' });
    }

    if (body.created_at === '') {
        return response.status(400).json({ message: 'O campo \'created_at\' não pode ser vazio' });
    }

    if (body.created_at === null) {
        return response.status(400).json({ message: 'O campo \'created_at\' não pode ser nulo' });
    }

    next();
}

module.exports = {
    validateBody,
}