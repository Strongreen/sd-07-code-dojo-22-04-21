const getAllTasks = (req, res) => {
    const tasks = ['Fazer 123', 'Fazer 321', 'Teste Task'];

    return res.json(tasks);
}

module.exports = getAllTasks;