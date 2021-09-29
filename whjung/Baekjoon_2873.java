import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;
import java.util.TreeSet;

public class Baekjoon_2873 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String[] size = sc.nextLine().split(" ");
        int R = Integer.parseInt(size[0]);
        int C = Integer.parseInt(size[1]);
        int[][] site = new int[C][R];

        for(int i=0; i<C; i++) {
            for(int j=0; j<R; j++) {
                site[i][j] = sc.nextInt();
            }
        }



    }

    public void getCheck() {

    }
}
