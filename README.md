# BusCarro

Aplicação React para busca de carros por nome, modelo, localidade e preço.

## Como rodar o projeto

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Execute o comando:

   ```bash
   npm run dev
   ```

3. Acesse o localhost:

   http://localhost:5173

## Deploy no Vercel

Link: https://busca-carro.vercel.app/

## Decisões técnicas

O projeto foi desenvolvido utilizando React em conjunto com o Vite, uma ferramenta eficiente para aplicações web. A escolha se deu principalmente pela rapidez na inicialização e pela simplicidade na configuração. Vale destacar que o Vite também facilita a integração com diversas bibliotecas — entre elas, o TailwindCSS, que foi utilizado para a estilização da aplicação. Por fim, foi utilizado o Vercel para hospedar o projeto.

## Experiência do usuário

Em relação à experiência do usuário, o projeto foi pensado com foco em simplicidade e clareza. A aplicação inicia com uma mensagem explicando do que se trata o app e o que o usuário deve fazer. Em seguida, são apresentados quatro campos de preenchimento, cada um acompanhado de um exemplo para guiar o preenchimento correto.

Abaixo dos campos, há um botão de busca, que só pode ser acionado após o preenchimento completo. Caso o usuário tente buscar sem preencher todos os campos, uma mensagem de aviso é exibida informando que ainda faltam informações.

Vale destacar que o buscador é flexível, reconhece termos digitados sem acentos, com letras maiúsculas ou minúsculas, e até ignora hifens.

Após clicar em “Buscar”, e com os dados devidamente preenchidos, a aplicação exibe os resultados com a foto do carro, nome, modelo, localidade e preço. Caso não haja um carro disponível no valor informado, o sistema sugere modelos semelhantes com preços acima. Se não houver um carro específico na localidade desejada, ele também exibe opções semelhantes em outras regiões.

## Plano de Negócios

1. Se você fosse lançar esse buscador no mercado, qual seria seu modelo de negócios?

- Parcerias

  - Infraestrutura do app (ex: AWS)

  - Concessionárias

- Atividades

  - Desenvolvimento do app e manutenção

  - Atualizações constantes em relação as informações do carro

- Recursos

  - Bibliotecas open source

  - API que retorna as informações onde está os carros

  - Computadores

  - Banco de dados

- Estrutura de Custo

  - Desenvolvimento e manutenção do app

  - Hospedagem do app

  - Armazenamento dos dados

- Proposta de Valor

  - Deixar uma experiência mais agradável e menos frustante na hora de encontrar o carro desejado

  - Diminuir o tempo de econtrar o carro

  - Facilitar a experiência na busca

- Relacionamento com o Cliente

  - Feedback da performance do app

  - Notificações personalizados quando há um carro desejado

- Canais

  - Pelo app

  - Redes Sociais

- Segmento de Cliente

  - Pessoas que não querem perder muito tempo procurando um carro

- Fonte de Receita

  - Anúncios no app

  - Assinatura

  - Doações

2. Como você atrairia seus primeiros usuários? (Estratégia de aquisição, canais, etc)

   Para atrair os primeiros usuários de forma rápida e com baixo custo, eu focaria em divulgação em grupos segmentados de redes sociais, como Facebook e WhatsApp. A estratégia envolveria publicações em comunidades relacionadas a startups, mobilidade urbana e compra e venda de veículos, especialmente grupos onde há pessoas procurando ou anunciando carros.

3. Qual seria sua estimativa de CAC (Custo de Aquisição de Cliente)?

   CAC Mensal:

   Equipe de Marketing: R$ 15.000,00

   Equipe de Vendas: R$ 15.000,00

   Google Ads: R$ 480,00

   Instagram Ads: R$ 150,00

   Clientes adquiridos: 70

   CAC mensal: R$ 437,57

4. Qual seria sua proposta de LTV (Lifetime Value) e como você maximizaria isso?
   Assinatura mensal: R$ 5,00

   Tempo de permanência: 14 meses

   LTV: R$ 70,00

   Maximizar:
   Focaria na retenção dos usuários oferecendo uma experiência confiável e personalizada, com notificações sobre novos anúncios de carros compatíveis com suas preferências. Também exploraria benefícios para usuários que anunciam, contribuem com informações sobre veículos ou indicarem o app.

   Para os assinantes, firmaria parcerias com concessionárias para oferecer descontos exclusivos. Além disso, usuários que colocarem seus carros à venda receberiam cashback e teriam seus anúncios em destaque.

5. Que tipo de monetização você considera viável para essa aplicação?

   - Anúncios na versão grátis
   - Assinatura
   - Parcerias com as concessionárias, pois anunciamos a loja na localização
   - Ter uma taxa no anúncio quando um usuário divulga o seu carro a venda

6. Há alguma estratégia de retenção de usuários que você aplicaria?

   Uma das estratégias de retenção seria oferecer uma experiência confiável e personalizada, com notificações sobre novos anúncios compatíveis com as preferências do usuário, enviadas por e-mail ou WhatsApp. Além disso, recursos como histórico de busca e filtros avançados ajudariam a manter o engajamento constante.

   Também exploraria benefícios para usuários mais ativos, especialmente aqueles que vendem com frequência. Outra frente seria incentivar a veracidade das informações com usuários que confirmam ou complementam dados de anúncios poderiam receber pontos de reputação. Ao atingir determinadas pontuações, esses usuários poderiam ganhar descontos em alguma compra usando o app.
