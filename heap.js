function heapSort(arr) {
  //1. 전체 트리 구조를 최대 힙 구조로 바꾼다
  for (let i = 1; i < arr.length; i++) {
    let c = i;
    do {
      let root = Math.floor((c - 1) / 2);
      console.log("root : " + root);
      if (arr[root] < arr[c]) {
        //자식 노드가 부모 노드보다 크면
        [arr[root], arr[c]] = [arr[c], arr[root]]; //swap
        console.log("heapify : " + arr);
      }
      c = root; //자식이 부모로 이동
    } while (c >= 0);
  }
  //2. 크기를 줄여가며 반복적으로 힙을 구성한다
  for (let i = arr.length - 1; i >= 0; i--) {
    //루트 노드와 가장 마지막 노드를 swap
    [arr[0], arr[i]] = [arr[i], arr[0]];
    console.log("swap : " + arr);
    let root = 0;
    let c = 1;
    do {
      c = Math.floor(2 * root + 1); //c는 루트의 자식
      //자식 중에 더 큰 값을 찾는다.
      if (arr[c] < arr[c + 1] && c < i - 1) {
        //c가 범위를 벗어나지 않도록 방지
        c++; //오른쪽 값이 더 크면 c를 오른쪽으로 이동(왼쪽 오른쪽 중 더 큰 값이 c가 되도록 함)
      }
      //루트보다 자식이 크면 교환
      if (arr[root] < arr[c] && c < i) {
        [arr[root], arr[c]] = [arr[c], arr[root]];
        console.log(arr);
      }
      root = c; //c를 루트로 이동시킨다.
    } while (c < i);
  }
  return arr;
}

console.log(heapSort([1, 18, 397, 5123, 321, 2135, 534]));
