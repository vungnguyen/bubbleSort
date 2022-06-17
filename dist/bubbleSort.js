"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BubbleSort = void 0;
class BubbleSort {
    static bubbleSort(list) {
        let needNextPass = true;
        for (let i = 1; i < list.length && needNextPass; i++) {
            needNextPass = false;
            for (let j = 0; j < list.length - i; j++) {
                if (list[j] > list[j + 1]) {
                    let temp = list[j];
                    list[j] = list[j + 1];
                    list[j + 1] = temp;
                    needNextPass = true;
                }
            }
        }
    }
}
exports.BubbleSort = BubbleSort;
BubbleSort.list = [2, 3, 2, 5, 6, 1, -2, 3, 4, 12];
