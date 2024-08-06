/*
    약수의 개수와 덧셈

    두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 
    약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

    제한사항
    1 ≤ left ≤ right ≤ 1,000

    입출력 예
    left	right	result
    13	    17	    43
    24	    27	    52
*/

const solution = (left, right) => {
    const answerArr = []

    const getDivisor = (n) => {
        let count = 0;
        for (let i = 1; i <= n; i++) {
            
            if (n % i === 0) {
                count++;
            }
        }
        return count
    }

    for(let i = left ; i <= right ; i++){
        const answerEl = getDivisor(i)
        if(answerEl % 2 === 0){
            answerArr.push(i)
        } else {
            answerArr.push(-i)
        }
    }

    const answer = answerArr.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);

    return answer
}
