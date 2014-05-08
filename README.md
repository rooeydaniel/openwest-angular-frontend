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