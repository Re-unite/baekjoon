import java.util.*;

public class greedy_16120 {
    final static String PPAP = "PPAP";
    final static char A = 'A';
    final static char P = 'P';

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();
        Queue<Character> queue = new LinkedList<>();
        for(int i=0; i<str.length()-1; i++) {
            if(str.charAt(i) == P) {
                queue.add(P);
            } else {
                if(queue.size() > 2 && i < str.length()-1 && str.charAt(i+1) == P) {
                    queue.poll();
                    queue.poll();
                } else {
                    System.out.println("NP");
                    return;
                }
            }
        }
        System.out.println(queue.size() == 1 ? PPAP : "NP");
    }
}