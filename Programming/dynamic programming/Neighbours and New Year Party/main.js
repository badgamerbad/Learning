let input = 
`3
2
-1 -1 
10
1 7 8 -5 -4 3 2 -2 3 88
5
1 0 2 0 3
4
-3 0 0 100
5
-1 7 8 -5 4 
4
3 2 1 -1 
4
11 12 -2 -1 
4
4 5 4 3 
4
5 10 4 -1 
3
3 2 0`

let input_stdin_array = input.split("\n");

let testCases = input_stdin_array[0];

for(let i = 0; i < testCases; ++i) {
    let houses = input_stdin_array[i * 2 + 1];
    let ticketArray = input_stdin_array[i * 2 + 2].split(" ");

    let longestSumSubsequence = [];
    for(let j = 0; j < houses; ++j) {
        longestSumSubsequence.push({});
    }

    // recursively get longestSumSubsequence list
    getListSubsequence(0, ticketArray, houses, longestSumSubsequence);

    // find max sum out of longestSumSubsequence
    let maxSum = longestSumSubsequence[0].sum;
    let index = 0;
    for(let j = 0; j < houses; ++j) {
        if( maxSum < longestSumSubsequence[j].sum ) {
            maxSum = longestSumSubsequence[j].sum;
            index = j;
        }
        if( maxSum == longestSumSubsequence[j].sum ) {
            let current = parseInt( longestSumSubsequence[index].maxList[ longestSumSubsequence[index].maxList.length - 1 ] );
            let accumulator = parseInt( longestSumSubsequence[j].maxList[ longestSumSubsequence[j].maxList.length - 1 ] );
            if( current < accumulator ) {
                maxSum = longestSumSubsequence[j].sum;
                index = j;
            }
        }
    }

    let output = "";
    // set the derived longest sum subsequence
    longestSumSubsequence = longestSumSubsequence[index].maxList;
    output = "";
    for( let j = longestSumSubsequence.length - 1; j >= 0; --j ) {
        output += longestSumSubsequence[j] == "0" ? "" : longestSumSubsequence[j];
    }

    console.log(output);
}

function getListSubsequence(current, array, length, longestSumSubsequence) {
    if(current == length - 2 || current == length - 1) {
        longestSumSubsequence[current].sum =  parseInt( array[current] );
        longestSumSubsequence[current].maxList = [];
        longestSumSubsequence[current].maxList.push(array[current]);
    }
    else {
        for( let i = current; i < length; ++i ) {
            for( let j = i + 2; j < length; ++j ) {
                if( !longestSumSubsequence[j].sum ) {
                    getListSubsequence( j, array, length, longestSumSubsequence );
                }
                let sum = parseInt( array[i] ) + parseInt( longestSumSubsequence[j].sum )
                if ( !longestSumSubsequence[i].sum || longestSumSubsequence[i].sum < sum ) {
                    longestSumSubsequence[i].sum = sum;
                    if(longestSumSubsequence[i].sum < parseInt( array[i] )) {
                        longestSumSubsequence[i].sum = parseInt( array[i] );
                        longestSumSubsequence[i].maxList = [ array[i] ];
                    }
                    else if(longestSumSubsequence[i].sum < parseInt( array[j] ) ) {
                        longestSumSubsequence[i].sum = parseInt( array[j] );
                        longestSumSubsequence[i].maxList = [ array[j] ]; 
                    }
                    else if(longestSumSubsequence[i].sum < longestSumSubsequence[j].sum ) {
                        longestSumSubsequence[i].sum = parseInt( longestSumSubsequence[j].sum );
                        longestSumSubsequence[i].maxList = longestSumSubsequence[j].maxList;
                    }
                    else {
                        longestSumSubsequence[i].maxList = [ array[i], ...longestSumSubsequence[j].maxList ];
                    }
                }
                else if( longestSumSubsequence[i].sum == sum ) {
                    let currentLast = parseInt( longestSumSubsequence[i].maxList[ longestSumSubsequence[i].maxList.length - 1 ] );

                    let maxList = [ array[i] , ...longestSumSubsequence[j].maxList ];
                    let accumulatorLast = parseInt( maxList[ maxList.length - 1 ] );

                    if( currentLast < accumulatorLast ) {
                        longestSumSubsequence[i].sum = sum;
                        longestSumSubsequence[i].maxList = maxList;
                    }
                }
            }
        }
    }
}





        