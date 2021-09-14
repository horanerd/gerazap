<?php

namespace Source\Models;

use Source\Core\Model;

/**
 * Control | Class User Active Record Pattern
 *
 * @author Guilherme de sousa <guilherme@horaned.com.br>
 * @package Source\Models
 */
class Frases extends Model
{
    /**
     * User constructor.
     */
    public function __construct()
    {
        parent::__construct("frases", ["id"], ["frase"]);
    }
}
