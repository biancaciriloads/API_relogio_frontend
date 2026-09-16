'use client';

import { useEffect, useState } from 'react';

const API_URL =
  process.env.NEXT_PUBLIC_API_RELOGIO_URL ||
  'https://api-relogio.onrender.com/data-hora';

export default function Clock() {
  const [dateTime, setDateTime] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  async function loadDateTime() {
    setLoading(true);
    setError('');

    try {
      const response = await fetch(API_URL, { cache: 'no-store' });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      setDateTime(await response.json());
    } catch {
      setError('Não foi possível consultar a API.');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadDateTime();
    const interval = window.setInterval(loadDateTime, 30000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <main className="page">
      <section className="panel" aria-labelledby="page-title">
        <p className="label">Horário do servidor</p>
        <h1 id="page-title">Relógio da API</h1>

        {loading && !dateTime && <p className="status">Consultando o servidor...</p>}

        {error && <p className="error" role="alert">{error}</p>}

        {dateTime && (
          <>
            <dl className="clock-grid">
              <div>
                <dt>Data</dt>
                <dd>{dateTime.data}</dd>
              </div>
              <div>
                <dt>Hora</dt>
                <dd>{dateTime.hora}</dd>
              </div>
              <div>
                <dt>Fuso horário</dt>
                <dd>{dateTime.fusoHorario}</dd>
              </div>
              <div>
                <dt>Registro</dt>
                <dd>{dateTime.dataHora}</dd>
              </div>
            </dl>

            <button className="button" type="button" onClick={loadDateTime} disabled={loading}>
              {loading ? 'Atualizando...' : 'Atualizar horário'}
            </button>
          </>
        )}

        <p className="source">
          Fonte: <code>{API_URL}</code>
        </p>
      </section>
    </main>
  );
}
