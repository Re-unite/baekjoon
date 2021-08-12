import java.util.*;

public class Baekjoon_10816 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int size = sc.nextInt();
        Map<Integer, Integer> result = new HashMap();
        StringBuilder sb = new StringBuilder();
        for(int i=0; i<size; i++) {
            int number = sc.nextInt();
            result.put(number, result.getOrDefault(number, 0) + 1);
        }
        int checkSize = sc.nextInt();
        for(int i=0; i<checkSize; i++) {
            int number = sc.nextInt();
            sb.append(result.getOrDefault(number, 0) + " ");
        }
        System.out.println(sb.toString());
    }
}
