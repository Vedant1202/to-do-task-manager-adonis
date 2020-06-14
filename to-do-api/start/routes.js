/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.get('/', () => {
    return { greeting: 'Hello world in JSON' };
});

Route.group(() => {
    Route.post('tasks/add', 'TaskController.add').middleware('auth:jwt');
    Route.get('tasks/fetch', 'TaskController.fetch').middleware('auth:jwt');
    Route.put('tasks/update', 'TaskController.update').middleware('auth:jwt');
    Route.delete('tasks/delete', 'TaskController.delete').middleware('auth:jwt');
    Route.post('auth/register', 'AuthController.register');
    Route.post('auth/login', 'AuthController.login');
}).prefix('api');
