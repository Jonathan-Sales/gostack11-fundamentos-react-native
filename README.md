## Desafio 02: Conceitos do Node.js

## **🚀 Sobre o desafio**

Essa é uma aplicação para armazenar repositórios do seu portfólio, que irá permitir a criação, listagem, atualização e remoção dos repositórios, e além disso permitir que os repositórios possam receber "likes".

### **Instalação**

```
    /* Clonar o repositório */
    git clone https://github.com/Jonathan-Sales/gostack11-fundamentos-react-native.git

    /* Instalar as dependências */
    yarn

    /* Iniciar o json-server */
    yarn json-server server.json -p 3333

    /* Iniciar o app */
    yarn android

    OU

    yarn ios
```

- Para rodar os testes, execute o comando abaixo:

```
    yarn test
```

### **Funcionalidades do APP**

- **`Listar os produtos da fake API`**: A página `Dashboard` exibe uma listagem através de uma tabela, com o campo `title`, `image_url` e `price`.

- **`Adicionar itens ao carrinho`**: Na página `Dashboard` é possível adicionar produtos ao carrinho. Caso o produto já esteja adicionado, a aplicação apenas aumenta a quantidade do produto.

- **`Exibir itens do carrinho`**: Na página `Cart` mostra todos os itens do carrinho, junto com a quantidade, valor único, valor subtotal dos itens e total de todos os itens.

- **`Aumentar quantidade de itens do carrinho`**: Na página `Cart` o usuário pode aumentar a quantidade de itens do mesmo produto.

- **`Diminuir quantidade de itens do carrinho`**: Na página `Cart` o usuário pode diminuir a quantidade de itens do mesmo produto e caso a quantidade seja zero, o produto é removido do carrinho.

- **`Exibir valor total dos itens no carrinho`**: Tanto na página `Dashboard`, tanto na página `Cart` é exibido o valor total de todos os itens que estão no seu carrinho.

## **📝 Licença**

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](https://github.com/Jonathan-Sales/gostack11-fundamentos-react-native/LICENSE.md) para mais detalhes.