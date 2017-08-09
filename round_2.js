/**
 * Created by cyz on 2017/8/9.
 */

'use strict';
main(10)
function main(N){
    let new_arr = [];
    new_arr.push(0);
    new_arr.push(1);
    for(let i =2;i<N;i++){
        let new_num = new_arr[i-1]+new_arr[i-2]
        new_arr.push(new_num)
        console.log(new_num)
    }
    let request_n = N-1
    console.log('斐波纳契数列中第'+N+'个数为：'+new_arr[request_n])

}