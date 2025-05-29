package java_DeusAjude;
import java.util.Scanner;
public class HelloWorld {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Digite o primeiro núemro");
        int numero1 = scanner.nextInt();
        
        System.out.println("Digite o segindo núemro");
        int numero2 = scanner.nextInt();

        int soma = numero1 + numero2;

        System.out.println(soma);

        scanner.close();
        
}
}
