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
console.log('Promise(true)');