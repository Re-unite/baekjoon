import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;
import java.util.TreeSet;

public class Baekjoon_1343 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String problem = sc.nextLine();
        char temp = 'X';
        int cnt = 0;
        String result = "-1";
        StringBuffer sbTemp = new StringBuffer();
        StringBuffer sb = new StringBuffer();
        Boolean isResult = true;

        for(int i=0; i<problem.length(); i++) {
            char curChar = problem.charAt(i);

            if(problem.charAt(i) == 'X') {
                sbTemp.append("A");
            }

            if(problem.charAt(i) != temp) {
                if(curChar == '.') {
                    if(cnt % 2 == 1) {
                        isResult = false;
                        break;
                    } else {
                        if(cnt % 4 != 0) {
                            sbTemp.replace(cnt-2, cnt, "B");
                        }
                    }

                    sb.append(sbTemp);
                }
            }

            cnt++;
        }

        if(isResult) {
            System.out.println("-1");
        } else {
            System.out.println(result);
        }
    }
}
