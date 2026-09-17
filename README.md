# Frontend Relógio

Frontend desenvolvido com Next.js para consumir a API de data e hora.

## Instalação

```bash
npm install
```

## Execução em desenvolvimento

```bash
npm run dev
```

Acesse `http://localhost:3000`.

## Build de produção

```bash
npm run build
npm start
```

## Variáveis de ambiente

- `NEXT_PUBLIC_API_RELOGIO_URL`: URL da API de data e hora.

Quando a variável não está configurada, o frontend utiliza:

```text
https://api-relogio.onrender.com/data-hora
```

## Funcionalidades

- Consulta a API ao carregar a página.
- Exibe data, hora, fuso horário e registro ISO.
- Atualiza os dados a cada 30 segundos.
- Permite atualizar os dados manualmente.
- Apresenta mensagem de erro quando a API não responde.
