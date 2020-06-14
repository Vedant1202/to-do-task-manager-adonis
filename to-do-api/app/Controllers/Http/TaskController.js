const Task = use('App/Models/Task');

class TaskController {
    async fetch({ request, response }) {
        const userId = request.input('id');
        // eslint-disable-next-line prettier/prettier
        const tasks = await Task.query().where('addedBy', userId).orderBy('id', 'desc').fetch();

        return response.json({ tasks });
    }

    async add({ request, response }) {
        const taskInfo = request.only(['title', 'description', 'tags', 'dueDate', 'addedBy', 'status']);

        const task = new Task();
        task.title = taskInfo.title;
        task.description = taskInfo.description;
        task.tags = taskInfo.tags.join(', ');
        task.dueDate = taskInfo.dueDate;
        task.addedBy = taskInfo.addedBy;
        task.status = taskInfo.status;

        await task.save();

        return response.status(201).json(task);
    }

    async update({ request, response }) {
        const taskInfo = request.only(['title', 'description', 'tags', 'dueDate', 'addedBy', 'status']);

        const task = await Task.find(request.input('id'));
        task.title = taskInfo.title;
        task.description = taskInfo.description;
        task.tags = taskInfo.tags;
        task.dueDate = taskInfo.dueDate;
        task.addedBy = taskInfo.addedBy;
        task.status = taskInfo.status;

        await task.save();

        return response.status(200).json(task);
    }

    async delete({ request, response }) {
        const task = await Task.find(request.input('id'));
        if (!task) {
            return response.status(404).json(null);
        }
        await task.delete();

        return response.status(204).json(null);
    }
}

module.exports = TaskController;
