===============================================
OpenWest 2014 - Djangular
===============================================

RESTful APIs with Django and AngularJS

AngularJS Project Setup
-----------------------
1. Clone front-end project
```
    git clone https://github.com/rooeydaniel/openwest-angular-frontend.git
```

2. Run Node's internal server
```
    node server/server.js
```

3. Open up front-end in your browser - http://localhost:8000/public/index.html

AngularJS - Single Page Application (SPA)
-----------------------------------------
1. Create our partials directory under public - this will hold various templates
2. Create the template that will hold our dashboard content - call it dashboard.tpl.html
```
    <div class="container">
        <div class="starter-template">
            <h2 class="dashboard">Overdue Tasks</h2>

            <table class="table table-striped">
                <thead>
                    <tr>
                        <th class="priority">Priority</th>
                        <th class="taskname">Task Name</th>
                        <th class="duedate">Due Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="priority">1</td>
                        <td class="taskname">Test Task Name</td>
                        <td class="duedate">May 6</td>
                    </tr>
                    <tr>
                        <td class="priority">1</td>
                        <td class="taskname">Test Task Name</td>
                        <td class="duedate">May 6</td>
                    </tr>
                    <tr>
                        <td class="priority">2</td>
                        <td class="taskname">Test Task Name</td>
                        <td class="duedate">May 6</td>
                    </tr>
                </tbody>
            </table>

            <h2 class="dashboard">Tasks Due Today</h2>

            <table class="table table-striped">
                <thead>
                    <tr>
                        <th class="priority">Priority</th>
                        <th class="taskname">Task Name</th>
                        <th class="duedate">Due Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="priority">1</td>
                        <td class="taskname">Test Task Name</td>
                        <td class="duedate">May 9</td>
                    </tr>
                    <tr>
                        <td class="priority">1</td>
                        <td class="taskname">Test Task Name</td>
                        <td class="duedate">May 9</td>
                    </tr>
                    <tr>
                        <td class="priority">2</td>
                        <td class="taskname">Test Task Name</td>
                        <td class="duedate">May 9</td>
                    </tr>
                </tbody>
            </table>

            <h2 class="dashboard">Tasks Due Tomorrow</h2>

            <table class="table table-striped">
                <thead>
                    <tr>
                        <th class="priority">Priority</th>
                        <th class="taskname">Task Name</th>
                        <th class="duedate">Due Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="priority">1</td>
                        <td class="taskname">Test Task Name</td>
                        <td class="duedate">May 10</td>
                    </tr>
                    <tr>
                        <td class="priority">1</td>
                        <td class="taskname">Test Task Name</td>
                        <td class="duedate">May 10</td>
                    </tr>
                    <tr>
                        <td class="priority">2</td>
                        <td class="taskname">Test Task Name</td>
                        <td class="duedate">May 10</td>
                    </tr>
                </tbody>
            </table>

            <hr/>

            <div style="text-align: left;">
                <pre>
                    Current scope variables:

                </pre>
            </div>

            <hr/>

            <footer>
                <div class="container">
                    <p class="text-muted credit">
                        Copyright &copy; Daniel Stephenson 2014 &middot;
                    </p>
                </div>
            </footer>
        </div>
    </div>
```

3. Add ng-app directive in html tag in index.html
```
    ng-app="TaskApp"
```

4. Add ng-view directive in place of content div in index.html
```
    <div ng-view></div>
```

5. Add angular dependencies via a CDN
```
    <script src="//code.angularjs.org/1.2.9/angular.js"></script>
    <script src="//code.angularjs.org/1.2.9/angular-route.js"></script>
```

6. Create a js folder under public and put your app.js file in there.  This will be used to initialize the app declared in step 3
```
    'use strict';

    var taskApp = angular.module('TaskApp', []);
```

7. Add this js file to index.html as a dependency
```
    <script src="js/app.js"></script>
```

8. Set up the route that will serve up your dashboard file
```
    'use strict';

    var taskApp = angular.module('TaskApp', ['ngRoute'])
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider
                .when('/dashboard', {
                    templateUrl: 'partials/dashboard.tpl.html',
                    controller: 'DashboardController',
                    title: 'Dashboard'
                })
                .otherwise({
                    redirectTo: '/dashboard'
                });
        }]);
```

9. Create a controllers.js file under the js folder and then create the Dashboard Controller we declared in the previous step.
```
    'use strict';

    angular.module('TaskApp.controllers', [])
        .controller('DashboardController', ['$scope', function($scope) {
            // empty for now
        }]);
```

10. Add the controllers app dependency to your TaskApp
11. Add the dependency to your index.html file
12. Open up your Web page and it should look similar to original page

Retrieve Tasks
--------------
1. Create a button on the dashboard labeled Continue to tasks
```
    <h2 class="dashboard">
        Overdue Tasks
        <button class="btn btn-primary pull-right" ng-click="viewTasks()">Continue to tasks</button>
    </h2>
```

2. Create corresponding viewTasks function in DashboardController
```
    $scope.viewTasks = function() {
        $location.path('/tasks');
    }

    * Note, this will require adding the $location service to your controller
```

3. Create the /tasks route in app.js
```
    .when('/tasks', {
        templateUrl: 'partials/tasks.tpl.html',
        controller: 'TasksController',
        title: 'Tasks'
    })
```

4. Add corresponding TasksController to controllers.js
```
    .controller('TasksController', ['$scope', function($scope) {
        // empty for now
    }]);
```

5. Create the tasks.tpl.html file with the following content in partials
```
<div class="container">
    <div class="starter-template">
        <h2 class="sub-header">Current Tasks</h2>

        <div class="table-responsive" ng-show="tasksLoaded">
            <table class="table table-striped table-hover table-condensed">
                <thead>
                    <tr>
                        <th style="width: 10%">Due Date</th>
                        <th style="width: 20%">Name</th>
                        <th style="width: 40%">Description</th>
                        <th style="width: 30%">&nbsp;</th>
                    </tr>
                </thead>
                <tbody ng-show="tasks.length">
                    <tr ng-repeat="task in tasks">
                        <td><span ng-bind="task.due_date | date: 'longDate'"></span></td>
                        <td><span ng-bind="task.name"></span></td>
                        <td><span ng-bind="task.description"></span></td>
                        <td>&nbsp;</td>
                    </tr>
                </tbody>
                <tbody ng-hide="tasks.length">
                    <tr>
                        <td colspan="4">There are currently no tasks</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="row" ng-hide="tasksLoaded">
            <div style="padding-bottom: 60px;"></div>

            <div class="progress progress-striped active">
                <div class="progress-bar" style="width: 100%;"></div>
            </div>
        </div>
    </div>
</div>
```

6. Pull the tasks from the Django backend so they are loaded into the tasks.tpl.html file
```
    $scope.tasks = {};

    $scope.tasksLoaded = false;
    Restangular.one('tasks').getList()
        .then(function(tasks) {
            console.log('Tasks loaded...');
            $scope.tasks = tasks;

            $scope.tasksLoaded = true;
        });
```

7. Add restangular to app.js
```
    'use strict';

    var taskApp = angular.module('TaskApp', ['ngRoute', 'restangular', 'TaskApp.controllers'])
        .config(['$routeProvider', 'RestangularProvider', function($routeProvider, RestangularProvider) {
            $routeProvider
                .when('/dashboard', {
                    templateUrl: 'partials/dashboard.tpl.html',
                    controller: 'DashboardController',
                    title: 'Dashboard'
                })
                .when('/tasks', {
                    templateUrl: 'partials/tasks.tpl.html',
                    controller: 'TasksController',
                    title: 'Tasks'
                })
                .otherwise({
                    redirectTo: '/dashboard'
                });
        }]);
```

8. Set Restangular Base URL in config entry
```
    RestangularProvider.setBaseUrl('http://localhost:8001');
```

9. Add Restangular and Underscore dependencies to index.html
```
    <script src="//cdnjs.cloudflare.com/ajax/libs/restangular/1.4.0/restangular.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore.js"></script>
```

10. Checking your Web app now, you should see a progress bar that seems to stick.  If you look at your Chrome
Developer tools, you'll see that we have an error similar to this:
```
    XMLHttpRequest cannot load http://localhost:8001/tasks. No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:8000' is therefore not allowed access.
```

11. Set up Django to handle requests coming from the Angular domain (http://localhost:8000) - first in settings.py,
we need to add the CORS middleware
```
    'corsheaders.middleware.CorsMiddleware',
```

12. Next, in local_settings, we need to set up a couple CORS tuples to handle origin and headers
```
    CORS_ORIGIN_ALLOW_ALL = True
    CORS_ALLOW_HEADERS = (
        'X-REQUESTED-WITH',
        'CONTENT-TYPE',
        'ACCEPT',
        'ORIGIN',
    )
```

13. Lastly, we need to install the django CORS library and place it in our base.txt file
```
    django-cors-headers==0.12
```

14. Now run your Web app and the progress will appear for a second, then your task list