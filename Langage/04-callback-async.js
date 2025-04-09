setTimeout(() => console.log('A'), 500);
setTimeout(() => console.log('B'), 0);
setTimeout(() => console.log('C'), 1000);
setTimeout(() => console.log('D'), 500);

console.log('E');

// call stack
// ^
// |
// |
// |                       [log]
// |[sT][sT][sT][sT][log]⟳ [taskB]⟳                 [taskA][taskD]⟳         [taskC]
// +----0ms----------------7ms----------------------500ms-----------------------> time
//                   E     B                         A      D                C

// File d'attente (0ms): taskB
// File d'attente (7ms):
// File d'attente (500ms): taskA - taskD
// File d'attente (501ms): taskD
// File d'attente (502ms):
// File d'attente (1000ms): taskC
// File d'attente (1001ms):

// Event Loop (côté C++)
// do {
//    // check if the call stack is empty
//    if (callStack.isEmpty()) {
//       // check the message queue
//       if (messageQueue.hasMessages()) {
//          // move the first message to the call stack
//          callStack.push(messageQueue.getFirstMessage());
//       }
// }
// while (queue.length > 0) {

// Youtube JSConf Asia 2018 - The Event Loop - Jake Archibald
// https://www.youtube.com/watch?v=cCOL7MC4Pl0
