import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Baekjoon_2847 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int size = sc.nextInt();
        int result = 0;
        int temp = 0;
        List<Integer> levels = new ArrayList<Integer>();

        for(int i=0; i<size; i++) {
            levels.add(sc.nextInt());
        }

        temp = levels.get(size-1);

        for(int i=size-1; i>0; i--) {
            int comparison = temp - levels.get(i-1);
            if(comparison <= 0) {
                result += Math.abs(comparison-1);
                temp = levels.get(i-1) + (comparison-1);
            } else {
                temp = levels.get(i-1);
            }
        }

        System.out.println(result);
    }
}
