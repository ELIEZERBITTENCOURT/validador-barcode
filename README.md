# validator-barcode
API para validar informações de um boleto quando dado uma linha digitável.
## Instalação
npm install validator-barcode --save

Após importe o módulo no arquivo onde deseja utilizar com o código:

import { dadosBoleto, validarBoleto } from 'validator-barcode'

## Validando o boleto

Nesta função é verificado se houve qualquer alteração no código ou linha digitável do boleto, evitando erros e fraudes (verificando se foi alterado os últimos dígitos do boleto que representam o valor).

const boletofunc = require('boletos-desc-br')

boletofunc.validarBoleto('836200000005 667800481000 180975657313 001589636081') // retorna true
boletofunc.validarBoleto('536200000005 667800481000 180975657313 001589636081') // retorna false

## Obtendo Dados do boleto

Nesta função é retornado diversos dados do boleto a partir do código de barras ou linha digitável. PS: Os boleto de arrecadações (como água, luz, prefeitura etc) não são possíveis detectar o vencimento, portanto é retornado o tipo do boleto.

const boletofunc = require('boletos-desc-br')

boletofunc.dadosBoleto('836200000005 667800481000 180975657313 001589636081') // boleto válido
boletofunc.dadosBoleto('536200000005 667800481000 180975657313 001589636081') // boleto inválido

### Retorno

{ sucesso: true,
  codigoInput: '836200000005667800481000180975657313001589636081',
  mensagem: 'Boleto válido',
  tipoCodigoInput: 'LINHA_DIGITAVEL',
  tipoBoleto: 'CONVENIO_ENERGIA_ELETRICA_E_GAS',
  codigoBarras: '83620000000667800481001809756573100158963608',
  linhaDigitavel: '836200000005667800481000180975657313001589636081',
  vencimento: 'CONVENIO_ENERGIA_ELETRICA_E_GAS',
  valor: 66.78 }
  
{ sucesso: false,
  codigoInput: '536200000005667800481000180975657313001589636081',
  mensagem:
   'A validação do dígito verificador falhou. Tem certeza que inseriu a numeração correta?' }