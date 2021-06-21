# validator-barcode
API para validar informações de um boleto quando dado uma linha digitável.
## Instalação
npm install validator-barcode --save

Após importe o módulo no arquivo onde deseja utilizar com o código:

import { dadosBoleto, validarBoleto } from 'validator-barcode'

## Validando o boleto

Nesta função é verificado se houve qualquer alteração no código ou linha digitável do boleto, evitando erros e fraudes (verificando se foi alterado os últimos dígitos do boleto que representam o valor).

const boletofunc = require('./src/index')

let boletocodigo = "123482938102381039810293810938093819023810982309182301238109238109328091"// retorna false <br/>
let boletocodigo = "10499898100000214032006561000100040099726390"//retorna true <br/>
### Retorno

false<br/>
{<br/>
  sucesso: false,<br/>
  codigoInput: '123482938102381039810293810938093819023810982309182301238109238109328091',<br/>
  mensagem: 'O código inserido possui 72 dígitos. Por favor insira uma numeração válida.'<br/>
}
  
true<br/>
{<br/>
  sucesso: true,<br/>
  codigoInput: '10499898100000214032006561000100040099726390',<br/>
  mensagem: 'Boleto válido',<br/>
  tipoCodigoInput: 'CODIGO_DE_BARRAS',<br/>
  tipoBoleto: 'BANCO',<br/>
  codigoBarras: '10499898100000214032006561000100040099726390',<br/>
  linhaDigitavel: '10492006506100010004200997263900989810000021403',<br/>
  vencimento: '10/5/2022',<br/>
  valor: 214.03<br/>
}