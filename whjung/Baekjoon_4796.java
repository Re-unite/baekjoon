import java.util.Scanner;

public class Baekjoon_4796 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        boolean isCheck = true;
        int execCount = 1;

        while(isCheck) {
            int useDay = sc.nextInt();
            int continueDay = sc.nextInt();
            int vacation = sc.nextInt();
            if(useDay == 0) {
                return;
            }
            int result = useCampingDay(useDay, continueDay, vacation);
            System.out.println("Case " + (execCount++) + ": " + result);
        }
    }

    public static int useCampingDay(int useDay, int continueDay, int vacation) {
        int useDiv = vacation / continueDay;
        int remains = vacation % continueDay;
        int remainsUse = remains > useDay ? useDay : remains;

        int result = useDiv * useDay + remainsUse;

        return result;
    }
}
