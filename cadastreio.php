<?php 
    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        if (isset($_POST['cadastre']) && isset($_POST['email'])) {

            $nome = htmlspecialchars($_POST['nome']);
            $email = htmlspecialchars($_POST['email']);

            echo "<h1>Dados Recebidos</h1>";
            echo "<p>Nome:" .$nome. "</p>";
            echo "<p>E-mail:" .$email. "</p>";
        }
    }
?> 