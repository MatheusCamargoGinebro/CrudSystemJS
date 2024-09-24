const connection = require('./connection');

const getAll = async () => {
    const [tasks] = await connection.execute('SELECT * FROM task');
    return tasks;
};

module.exports = {
    getAll
};