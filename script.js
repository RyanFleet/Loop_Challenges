// Print odds
for (var i=1; i<=20; i++){
    if(i % 2 != 0){
        console.log(i);
    }
}

// Decreasing by 3 starting at 100
for (var i=100; i>=1; i-=3){
    console.log(i);
}

// Print the sequence
for (var i=4; i>=-4; i-=1.5){
    console.log(i);
}

// Sigma
sum = 0
for (var i=1; i<=100; i++) {
    sum = sum + i;
}
console.log(sum);

// Factorial
product = 1
for (var i=1; i<=12; i++) {
    product = product * i;
}
console.log(product);