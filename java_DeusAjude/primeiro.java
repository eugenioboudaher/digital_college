package java_DeusAjude;
import java.util.Scanner;;

public class primeiro {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Digite seu nome");
        String nome = scanner.nextLine();
        System.out.println("Hello " + nome);

        scanner.close();
    }
}
