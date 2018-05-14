/*Print Pyramid structure. Input Variable : Number of rows*/

/* Algo -

A> Two key point is that I am printing n number of lines with a for loop and I am printing a "Right angled trapezium" shape with * and single-space

Note the right-angled-Trapezium's right hand will be inclined towards right so with each iteration of the for loop there will be an extra character (i.e. extra space on the right)

Check the code, by replacing single-space with a #

A> KEY POINT - For each row, I am printing columns of values - first column prints ony "single space" and the second column prints "* + single space "

B> The column-1's printing output goes on decreasing - Handle it by having the condition col2 < totalRows - thisRow

C> - and column-2's printing output goes on increasing - Handle it by doing col2 <= thisRow

D> For first line, i.e. for first loop >> print col-1's output 5 times and col-2's output 1 time.

E> For second line - i.e. for second loop >> print col-1's output 4 times and col-2's output 2 times.

F> For third line - i.e. for third loop >> print col-1's output 3 times and col-2's output 3 times.

*/

function pyramid (totalRows) {

    let line = '';

    for (let row = 0; row < totalRows; row++ ) {

        // loop for first column-1 where I will print
        for (let col1 = 0; col1 < totalRows - row; col1++) {
            line += " "
        }

        // loop for second column-2 where I will print "* + single space "
        for (let col2 = 0; col2 <= row; col2++) {
            line += "* ";
        }
        console.log(line);
        line = '';
    }

}

pyramid(5);