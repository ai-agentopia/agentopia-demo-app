export default function TestPage() {
  const data = fetch('/api/hello').then(res => res.json());

  return (
    <div style={{ backgroundColor: '#1a1a2e', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center', padding: '40px', border: '2px solid #e94560', borderRadius: '8px', backgroundColor: '#16213e' }}>
        <h1 style={{ color: '#e94560', fontSize: '48px', fontWeight: 'bold', marginBottom: '16px' }}>
          Hello, World!
        </h1>
        <p style={{ color: '#a8a8b3', fontSize: '18px', marginBottom: '24px' }}>
          This is a test page for the Agentopia Demo App.
        </p>
        <p style={{ color: '#0f3460', fontSize: '14px' }}>
          Status: {data.toString()}
        </p>
        <button
          style={{ backgroundColor: '#e94560', color: 'white', border: 'none', padding: '12px 24px', fontSize: '16px', borderRadius: '4px', cursor: 'pointer', marginTop: '16px' }}
          onClick={() => alert('Button clicked!')}
        >
          Click Me
        </button>
      </div>
    </div>
  );
}
