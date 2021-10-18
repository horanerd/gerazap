<?php
ob_start();

define("CONF_DB_HOST", "localhost");
define("CONF_DB_USER", "root");
define("CONF_DB_PASS", "");
define("CONF_DB_NAME", "frases");

require __DIR__ . "/vendor/autoload.php";

use Source\Models\Frases;

?>

<html>

<head>
    <title> Gerador de whatsapp </title>
    <link rel="stylesheet" href="css/boot.css">
    <script type="text/javascript" src="js/jquery.js"></script>
    <script type="text/javascript" src="js/script.js"></script>
</head>




<body>
    <section class="conteiner">
        <div class="content">

            <h1 class="sectiontitle"> Gere seu link do whatsapp</h1>
            <form method="post" enctype="multipart/form-data" action="">
                <input type="text" class="tel" placeholder="(99)9999-9999" name="telefone">
                <input type="text" placeholder="Texto" name="texto">
                <input type="submit" value="enviar" class="btn btn-green" name="enviar"">
        </form>


        <div class=" box box-forthree">
                <h2> Seu link é </h2>
                <p class="link"> </p>
        </div>
        </div>
    </section>


</body>

</html>

<?php
ob_end_flush();
?>