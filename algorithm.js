// There is a road consisting of N segments, numbered from 0 to N-1, represented by a string S.

// Segment S[K] of the road may contain a pothole, denoted by a single uppercase “x” character, or may be a good segment without any potholes, denoted by a single dot,”.”.

// For example, string”.X. .X” means that there are two potholes in total in the road: one is located in segment S[1] and one in segment S[4].

// All other segments are good. The road fixing machine can patch over three consecutive segments at once with asphalt and repair all the potholes located within each of these segments. Good or already repaired segments remain good after patching them. Your task is to compute the minimum number of patches required to repair all the potholes in the road.

// Write a function: def solution(s) that, given a string S of length N, returns the minimum number of patches required to repair all the potholes.

// Examples:  

// Given S=”.X..x”, your function should return 2. The road fixing machine could patch, for example, segments 0-2 and 2-4. 

// Given S = “x.xxxxx.x”, your function should return 3. The road fixing machine could patch, for example, segments 0-2, 3-5 and 6-8. 

// Given S = “xx.xxx”, your function should return 2. The road fixing machine could patch, for example, segments 0-2 and 3-5. 

// Given S = “xXxx”, your function should return 2.  The road fixing machine could patch, for example, segments 0-2 and 1-3.

// write an efficient algorithm for the following assumptions:
//   N is an integer within the range [3..100,000];
//   string S consists only of the chartacters "." and/or "X"

function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    
  let potHoles = 0;
  for (let i = 0; i < S.length; i++)
    if (S.charAt(i) == 'X') {
      potHoles++;
      i += 2;
    }
  return potHoles;
  }

  let S = ".X..X"
  console.log(solution(S))