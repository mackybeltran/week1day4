function findWaldo(arr, found) {

    arr.forEach(function (name, index){
        if (name === "Waldo") {
            found(index);}
            //console.log(arr)
        })


 // for (var i = 0; i < arr.length; i++) {
 //   if (arr[i] === "Waldo") {
 //     found(i);   // execute callback
 //   }
 // }
}

function actionWhenFound(arr) {
 console.log("Found him at " + arr);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);