const data = [
    {
        question:'How many passes does an insertion sort algorithm consist of?',
        answeres:[
            {option:'N', isCorrect:false},
            {option:'N-1', isCorrect:true},
            {option:'N+1', isCorrect:false},
            {option:'N-squre', isCorrect:false},
        ]
    },
    {
        question:' Which of the following algorithm implementations is similar to that of an insertion sort?',
        answeres:[
            {option:'Binary heap', isCorrect:true},
            {option:'Quick sort', isCorrect:false},
            {option:'Merge sort', isCorrect:false},
            {option:'Radix sort', isCorrect:false},
        ]
    },

    {
        question:' What is the average case running time of an insertion sort algorithm?',
        answeres:[
            {option:'O(N)', isCorrect:false},
            {option:'O(N log N)', isCorrect:false},
            {option:'O(log N)', isCorrect:false},
            {option:'O(N-squre)', isCorrect:true},
        ]
    },
    {
        question:' Any algorithm that sorts by exchanging adjacent elements require O(N2) on average.',
        answeres:[
            {option:'True', isCorrect:true},
            {option:'False', isCorrect:false},
        ]
    },
    {
        question:'What is the average number of inversions in an array of N distinct numbers?',
        answeres:[
            {option:'N(N-1)/4', isCorrect:true},
            {option:'N(N+1)/2', isCorrect:false},
            {option:'N(N-1)/2', isCorrect:false},
            {option:'N(N-1)/3', isCorrect:false},
        ]
    },
    {
        question:'What is the running time of an insertion sort algorithm if the input is pre-sorted?',
        answeres:[
            {option:'O(N SQURE)', isCorrect:false},
            {option:'O(N log N)', isCorrect:false},
            {option:'O(N)', isCorrect:true},
            {option:'O(M log N)', isCorrect:false},
        ]
    },
    {
        question:'What will be the number of passes to sort the elements using insertion sort? 14, 12,16, 6, 3, 10',
        answeres:[
            {option:'6', isCorrect:false},
            {option:'5', isCorrect:true},
            {option:'7', isCorrect:false},
            {option:'1', isCorrect:false},
        ]
    },
    {
        question:'For the following question, how will the array elements look like after second pass?34, 8, 64, 51, 32, 21',
        answeres:[
            {option:'8, 21, 32, 34, 51, 64', isCorrect:false},
            {option:'8, 32, 34, 51, 64, 21', isCorrect:false},
            {option:'8, 34, 51, 64, 32, 21', isCorrect:false},
            {option:'8, 34, 64, 51, 32, 21', isCorrect:true},
        ]
    },
    {
        question:'Which of the following real time examples is based on insertion sort?',
        answeres:[
            {option:'arranging a pack of playing cards', isCorrect:true},
            {option:'database scenarios', isCorrect:false},
            {option:'arranging books ', isCorrect:false},
            {option:'real-time systems', isCorrect:false},
        ]
    },
    {
        question:'In C, what are the basic loops required to perform an insertion sort?',
        answeres:[
            {option:'do-while', isCorrect:false},
            {option:'if else', isCorrect:false},
            {option:'for and while ', isCorrect:true},
            {option:'for and if', isCorrect:false},
        ]
    },
    {
        question:'Binary search can be used in an insertion sort algorithm to reduce the number of comparisons.',
        answeres:[
            {option:'True', isCorrect:true},
            {option:'False', isCorrect:false},
        ]
    },
    {
        question:'Which of the following options contain the correct feature of an insertion sort algorithm?',
        answeres:[
            {option:'anit-adaptive', isCorrect:false},
            {option:'dependable', isCorrect:false},
            {option:'stable, not in-place ', isCorrect:false},
            {option:'stable, adaptive', isCorrect:true},
        ]
    },
    {
        question:'Which of the following sorting algorithms is the fastest for sorting small arrays?',
        answeres:[
            {option:'Quick sort', isCorrect:false},
            {option:'Insertion sort', isCorrect:true},
            {option:'Shell sort', isCorrect:false},
            {option:'Heap sort', isCorrect:false},
        ]
    },
    {
        question:'For the best case input, the running time of an insertion sort algorithm is?',
        answeres:[
            {option:'Linear', isCorrect:true},
            {option:'Binary', isCorrect:false},
            {option:'Quadratic', isCorrect:false},
            {option:'Depends on the input', isCorrect:false},
        ]
    },
    {
        question:'Which of the following examples represent the worst case input for an insertion sort?',
        answeres:[
            {option:'array in sorted order', isCorrect:false},
            {option:'array sorted in reverse order', isCorrect:true},
            {option:'normal unsorted array', isCorrect:false},
            {option:'large array', isCorrect:false},
        ]
    },
    {
        question:'Stable marriage problem is an example of?',
        answeres:[
            {option:'Branch and bound algorithm', isCorrect:false},
            {option:'Backtracking algorithm', isCorrect:true},
            {option:'Greedy algorithm', isCorrect:false},
            {option:' Divide and conquer algorithm', isCorrect:false}
        ]
    },
    {
        question:'Which of the following algorithms does Stable marriage problem uses?',
        answeres:[
            {option:'Gale-Shapley algorithm', isCorrect:true},
            {option:'Dijkstra’s algorithm', isCorrect:false},
            {option:'Ford-Fulkerson algorithm', isCorrect:false},
            {option:'Prim’s algorithm', isCorrect:false}
        ]
    },
    {
        question:'An optimal solution satisfying men’s preferences is said to be?',
        answeres:[
            {option:'Man optimal', isCorrect:true},
            {option:'Woman optimal', isCorrect:false},
            {option:'Pair optimal', isCorrect:false},
            {option:'Best optimal', isCorrect:false}
        ]
    },
    // {
    //     question:'',
    //     answeres:[
    //         {option:'', isCorrect:false},
    //         {option:'', isCorrect:false},
    //         {option:'', isCorrect:false},
    //         {option:'', isCorrect:false}
    //     ]
    // },

]


const suffle = data.sort((item) => Math.random()-0.5);
export default suffle ;