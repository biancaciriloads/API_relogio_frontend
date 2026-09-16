import './globals.css';

export const metadata = {
  title: 'Relógio da API',
  description: 'Consulta de data e hora do servidor'
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
