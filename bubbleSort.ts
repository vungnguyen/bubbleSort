export class BubbleSort{
    static list: number[] =[2,3,2,5,6,1,-2,3,4,12];
    public static bubbleSort(list: number[]): void {
        let needNextPass: boolean = true;
        for (let i = 1 ; i < list.length && needNextPass ; i++){
            needNextPass = false;
            for (let j = 0; j < list.length - i; j++) {
                if (list[j] > list[j+1]){
                    let temp = list[j];
                    list[j] = list[ j+1];
                    list[j+1] = temp;
                    needNextPass = true;
                }
            }
        }
    }
}