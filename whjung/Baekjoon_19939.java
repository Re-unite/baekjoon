import java.util.Scanner;

public class Baekjoon_19939 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int ball = sc.nextInt();
        int basket = sc.nextInt();
        int result = -1;
        int plusAll = basket * (basket+1) / 2;

        if(ball >= plusAll) {
            if((ball-plusAll) % basket == 0) {
                result = basket - 1;
            } else {
                result = basket;
            }
        }

        System.out.println(result);
    }
}
