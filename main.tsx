import React, { Component, StrictMode, type ErrorInfo, type ReactNode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

class AppErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean; message: string }> {
  state = { hasError: false, message: '' }

  static getDerivedStateFromError(error: unknown) {
    return {
      hasError: true,
      message: error instanceof Error ? error.message : 'Error inesperado al iniciar la aplicación.',
    }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('[Jóvenes en Misión SMP] Error al renderizar:', error, info.componentStack)
  }

  render() {
    if (this.state.hasError) {
      return (
        <main style={{ minHeight: '100dvh', display: 'grid', placeItems: 'center', padding: 24, background: '#F1F3F1', color: '#303632', fontFamily: 'system-ui, sans-serif' }}>
          <section style={{ width: 'min(100%, 560px)', padding: 28, borderRadius: 20, background: '#fff', border: '1px solid #dce4de', boxShadow: '0 12px 36px rgba(22,56,45,.08)' }}>
            <div style={{ color: '#214C3B', fontWeight: 800, letterSpacing: '.08em', fontSize: 12 }}>JÓVENES EN MISIÓN SMP</div>
            <h1 style={{ fontSize: 25, lineHeight: 1.2, margin: '12px 0', color: '#303632' }}>No se pudo iniciar la aplicación</h1>
            <p style={{ lineHeight: 1.65, color: '#59635d' }}>Se produjo un error al cargar esta pantalla. Recarga la página. Si el problema continúa, comparte este mensaje con la coordinación técnica.</p>
            <pre style={{ whiteSpace: 'pre-wrap', overflowWrap: 'anywhere', padding: 12, borderRadius: 10, background: '#F1F3F1', fontSize: 12 }}>{this.state.message}</pre>
            <button onClick={() => window.location.reload()} style={{ minHeight: 44, padding: '10px 16px', border: 0, borderRadius: 10, color: '#fff', background: '#214C3B', fontWeight: 700, cursor: 'pointer' }}>Recargar aplicación</button>
          </section>
        </main>
      )
    }
    return this.props.children
  }
}

const rootElement = document.getElementById('root')
if (!rootElement) {
  throw new Error('No se encontró el elemento #root en index.html')
}

createRoot(rootElement).render(
  <StrictMode>
    <AppErrorBoundary>
      <App />
    </AppErrorBoundary>
  </StrictMode>,
)
