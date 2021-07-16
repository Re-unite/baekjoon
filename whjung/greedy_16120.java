import java.util.*;

public class greedy_5545 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int typeCount = sc.nextInt();
        int doughPrice= sc.nextInt();
        int toppingPrice = sc.nextInt();
        int doughCalorie = sc.nextInt();
        List<Integer> toppingCalories = new ArrayList<>();

        for(int i=0; i< typeCount; i++) {
            toppingCalories.add(sc.nextInt());
        }

        Collections.sort(toppingCalories, Collections.reverseOrder());
        System.out.println(bestCalorie(doughPrice, toppingPrice, doughCalorie, toppingCalories));
    }

    public static int bestCalorie(int doughPrice, int toppingPrice, int doughCalorie, List<Integer> toppingCalories) {
        int totalCalorie = doughCalorie;
        int price = 0;
        int bestPizzaCalorie = doughCalorie/doughPrice;
        for(int i=0; i<toppingCalories.size(); i++) {
            totalCalorie += toppingCalories.get(i);
            price = doughPrice + ( toppingPrice* (i+1) );
            if(bestPizzaCalorie > totalCalorie/price) break;
            bestPizzaCalorie = totalCalorie/price;
        }
        return bestPizzaCalorie;
    }
}