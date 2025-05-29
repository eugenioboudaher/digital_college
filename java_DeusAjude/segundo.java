package java_DeusAjude;
import java.util.Scanner;;

public class segundo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Digite o primeiro nuemro");
        int numero1 = scanner.nextInt();

        System.out.println("Digite o segundo nuemro");
        int numero2 = scanner.nextInt();

        int soma = numero1 + numero2;

        System.out.println(soma);

        scanner.close();
    }
}
