// synchronous = Executes line by line consecutively in a sequential manneer
//               Code that waits for an operation to OfflineAudioCompletionEvent.



// Asynchronous = Allows multiple operations to be performed concurrently without waiting 
//                Doesn't block the execution flow and allows the program to continue
//                (I/O operationns, network requests, fetching data)
//                Handle with: useCallback, Promises, Async/Await



function func1(callback){
    setTimeout(() =>{console.log("Task 1"); callback()}, 3000)

}
function func2(){
    console.log('Task 2')
    console.log('Task 3')
    console.log('Task 4')
    
}
func1(func2)