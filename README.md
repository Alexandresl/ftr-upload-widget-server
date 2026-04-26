# Upload Widget Server

## Comandos utilizados e Dependências instaladas

- `pnpm init` - Criar o Package.json
  - `pnpm 10.33.0`
- `pnpm i typescript @types/node tsx -D` - Instalação do TypeScript
  - `@types/node 25.6.0`
  - `tsx 4.21.0`
  - `typescript 6.0.3`
- `pnpm i @biomejs/biome -D` - Formatar o código e verificar erros e avisos
  - `@biomejs/biome 2.4.13`
- `pnpm i fastify` - é a parte que cria o servidor e responde quando alguém pede dados ou manda um arquivo.
  - `fastify 5.8.5`
- `pnpm i @fastify/cors` - serve para deixar o servidor falar com páginas de outros sites com segurança. Sem essa regra, o navegador pode bloquear pedidos estranhos.
  - `@fastify/cors 11.2.0`
- `pnpm i zod` - verifica se os dados estão no formato correto. Por exemplo: "Nos dados recebidos temos idade? O seu conteúdo é um número?". Casos as regras não sejam validadas os dados não serão aceitos.
  - `zod 4.3.6`
- `pnpm i fastify-type-provider-zod` - fastity-type-provider-zod: - responsável por comunicar o fastity com o zod. Assim, quando alguém manda um pedido, o servidor já checa automaticamente se os dados estão certos.
  - `fastify-type-provider-zod 6.1.0`
- `pnpm tsc --init` - Criar o tsconfig.json
- `pnpm biome init` - Cria o arquivo de configuração do biome