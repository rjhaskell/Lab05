# Lab05
DUE: 12:00 AM 3/8/2017
TURN IN
Repository with working Promise Individual Task Attempt
Partial Credit if you cannot solve the problem only if you add a readme documenting what you did to try to solve the problem
ASSIGNMENT
Complete the Individual Task outlined in the Promise Lesson for Full Stack .NET Course
The following function named getProducts() returns a promise. If the promise succeeds then display the list of products in the console window. Otherwise, display the failure reason. You should be able to complete this task with a single line of code:
    // this method returns products in 1 and 1/2 seconds
    function getProducts() {
        return new Promise((resolve, reject) => {
            window.setTimeout(
                function () {
                    if (Math.random() >= 0.5) {
                        resolve([
                            'Tesla',
                            'Apples',
                            'Oranges',
                            'Macbook Pro'
                        ]);
                    } else {
                        reject('Network error!');
                    }
                }, 1500
            );
        })
    }
