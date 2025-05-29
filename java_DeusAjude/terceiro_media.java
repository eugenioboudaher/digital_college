package java_DeusAjude;
import java.util.Scanner;

public class terceiro_media {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
            
        System.out.println("Digite a primeira nota");
        double nota1 = sc.nextDouble();

        System.out.println("Digite a primeira nota");
        double nota2 = sc.nextDouble();

        System.out.println("Digite a primeira nota");
        double nota3 = sc.nextDouble();

        System.out.println("Digite a primeira nota");
        double nota4 = sc.nextDouble();

        double media = (nota1 + nota2 + nota3 + nota4) / 4;

        String resultado = String.format("A média é %.2f", media);

        System.out.println(resultado);


        
    }
}
