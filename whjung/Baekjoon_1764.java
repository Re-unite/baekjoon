import java.util.*;

public class Baekjoon_1764 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String[] size = sc.nextLine().split(" ");
        int unheardSize = Integer.parseInt(size[0]);
        int unpublishedSize = Integer.parseInt(size[1]);
        Set<String> unheardSet = new HashSet<>();
        TreeSet<String> results = new TreeSet<>();
        for(int i=0; i<unheardSize; i++) {
            String name = sc.nextLine();
            unheardSet.add(name);
        }

        for(int i=0; i<unpublishedSize; i++)  {
            String name = sc.nextLine();
            if(unheardSet.contains(name)) {
                results.add(name);
            }
        }

        int resultSize = results.size();
        System.out.println(resultSize);

        for(int i=0; i< resultSize; i++) {
            System.out.println(results.pollFirst());
        }
    }
}
